<template>
  <UContainer v-if="pageLoad" class=" text-center h-[70vh] flex justify-center items-center">
    <span class="loading loading-spinner text-[#49479F] loading-lg"></span>
  </UContainer>
  <div v-else>
    <Form @submit="onSubmit" :initial-values="dataMusic" :validation-schema="schema">
      <div class="divide-y divide-gray-200 dark:divide-gray-800 space-y-6 *:pt-6 first:*:pt-2 mb-6">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-start gap-4">
            <div>
              <p class="text-gray-900 dark:text-white font-semibold">Setting Project</p>
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">This form is used to add or update the music
                list.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap items-center gap-1.5">
            <button type="submit"
              class="linear rounded-[12px] bg-[#49479F] px-4 py-3 text-sm font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700  inline-flex justify-center items-center">
              <span v-show="stateLoading" class="loading loading-spinner mr-2"></span>
              Save Changes</button>
          </div>
        </div>
        <BaseInputLink name="invitelink" type="text" label="Invite Link" desc="used for music list singer." />
        <BaseInputSelectGet name="musics" type="text" label="Musics" desc="used for music list singer." />
        <BaseInputDate name="inviteDate" type="text" label="Invite Date" desc="used for music list singer." />
      </div>
    </Form>
    <UNotifications />
  </div>
</template>
<script setup>
import { useActivePage } from '@/store/index'
import { Form } from 'vee-validate';
import * as yup from 'yup';

definePageMeta({
  layout: 'editor',
  middleware: 'auth',
})

const pageLoad = ref(true)
const route = useRoute()
const stateLoading = ref(false)
const toast = useToast()
const dataMusic = reactive({
  invitelink: '',
  musics: '',
  inviteDate: '',
})

const schema = yup.object({
  invitelink: yup.string().required().min(3).max(16),
  musics: yup.object().required(),
  inviteDate: yup.string().required(),
});

async function onSubmit(values) {
  stateLoading.value = true
  const params = {
    invite_link: values.invitelink,
    invite_date: values.inviteDate,
    music_id: values.musics.id,
    project_id: route.query.id
  }
  try {
    await usePostData(`/invitations/create`, params).then((res) => {
      if (res.status == 422) {
        const jsonError = res._data.invite_link;
        toast.add({
          icon: 'i-heroicons-exclamation-triangle',
          title: jsonError[0],
          color: 'orange',
          timeout: 3000,
        })
      } else if (res.status == 200) {
        toast.add({
          icon: 'i-heroicons-check-circle',
          title: 'invitation successfully created',
          color: 'green',
          timeout: 3000,
        })
      }
    })
  } catch (error) {
    toast.add({
      icon: 'i-heroicons-exclamation-triangle',
      title: 'error api service',
      color: 'orange',
      timeout: 3000,
    })
  }
  stateLoading.value = false
}

onMounted(async () => {
  const activePage = useActivePage()
  activePage.page = 'Dashboard'
  activePage.create = false
  activePage.child = ' / General'

  await usePostData(`/invitations/getByProject/${route.query.id}`).then((res) => {
    if (res.status == 200) {
      const data = res._data.data[0];
      dataMusic.invitelink = data.invite_link;
      dataMusic.musics = {
        id: data.music.id,
        label: data.music.music_name,
        music: data.music.music,
      };
      dataMusic.inviteDate = data.invite_date;
    }
  })
  pageLoad.value = false
});

</script>
<style>
div[id^=headlessui-combobox-button]>button {
  @apply relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 px-3 py-2 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-[#49479F] dark:focus:ring-[#49479F]
}
</style>
