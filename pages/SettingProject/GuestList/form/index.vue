<template>
  <UContainer v-if="pageLoad" class=" text-center h-[80vh] flex justify-center items-center">
    <span class="loading loading-spinner text-[#49479F] loading-lg"></span>
  </UContainer>
  <div v-else>
    <Form @submit="onSubmit" :initial-values="dataGuest" :validation-schema="schema">
      <div class="divide-y divide-gray-200 dark:divide-gray-800 space-y-6 *:pt-6 first:*:pt-2 mb-6">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-start gap-4">
            <div>
              <p class="text-gray-900 dark:text-white font-semibold">Geust</p>
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
        <BaseInputAdmin name="name" type="text" label="Name" icon="i-heroicons-musical-note"
          desc="used for music title list." />
        <BaseInputAdmin name="no_phone" type="number" label="No Phone" icon="i-heroicons-user-circle"
          desc="used for music list singer." />
      </div>
    </Form>
    <UNotifications />
  </div>
</template>
<script setup>
import { useActivePage } from '@/store/index'
import { Form } from 'vee-validate'
import * as yup from 'yup'

const router = useRouter()
const route = useRoute()
const stateLoading = ref(false)
const pageLoad = ref(true)
const invitation = ref()
const toast = useToast()
const dataGuest = reactive({
  name: '',
  no_phone: '',
})

const schema = yup.object({
  name: yup.string().required().min(3).max(26),
  no_phone: yup.number().required("number phone is a required field")
});

async function onSubmit(values) {
  stateLoading.value = true
  const param = {
    invitation_id: invitation.value,
    name: values.name,
    no_phone: values.no_phone,
  }
  try {
    if (!!!route.query.guest_id) {
      await usePostData(`/guest/create`, param).then((res) => {
        if (res.status == 200) {
          toast.add({
            icon: 'i-heroicons-check-circle',
            title: 'Guest successfully created',
            color: 'green',
            timeout: 3000,
          })
          router.push(`/SettingProject/GuestList?id=${route.query.id}`)
        }
      })
    } else {
      await usePostData(`/guest/update/${route.query.guest_id}`, param).then((res) => {
        if (res.status == 200) {
          toast.add({
            icon: 'i-heroicons-check-circle',
            title: 'Guest successfully updated',
            color: 'green',
            timeout: 3000,
          })
          router.push(`/SettingProject/GuestList?id=${route.query.id}`)
        }
      })
    }
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
  activePage.child = ' / Guest List / Form'
  activePage.formCreate = `/SettingProject/GuestList/form?id=${route.query.id}`

  definePageMeta({
    layout: 'editor',
    middleware: 'auth',
  })

  await usePostData(`/invitations/getByProject/${route.query.id}`).then((res) => {
    if (res.status == 200) {
      const data = res._data.data[0]
      invitation.value = data.id
    }
  })

  if (!!route.query.guest_id) {
    await useGetData(`/guest/getByIdGuest/${route.query.guest_id}`).then((res) => {
      dataGuest.name = res.data.name
      dataGuest.no_phone = res.data.no_phone
    })
  }

  pageLoad.value = false
})
</script>
