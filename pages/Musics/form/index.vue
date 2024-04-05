<template>
  <UContainer v-if="pageLoad" class=" text-center h-[80vh] flex justify-center items-center">
    <span class="loading loading-spinner text-[#49479F] loading-lg"></span>
  </UContainer>
  <div v-else>
    <Form @submit="onSubmit" :initial-values="dataMusic" :validation-schema="schema">
      <div class="divide-y divide-gray-200 dark:divide-gray-800 space-y-6 *:pt-6 first:*:pt-2 mb-6">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-start gap-4">
            <div>
              <p class="text-gray-900 dark:text-white font-semibold">Musics</p>
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
        <BaseInputAdmin name="music_name" type="text" label="Music Name" icon="i-heroicons-musical-note"
          desc="used for music title list." />
        <BaseInputAdmin name="singer" type="text" label="Singer" icon="i-heroicons-user-circle"
          desc="used for music list singer." />
        <UFormGroup name="music" label="Music" class="grid grid-cols-2 gap-2"
          :ui="{ container: 'flex flex-wrap items-center gap-3', help: 'mt-0' }">
          <UButton label="Choose" color="white" size="md" @click="onFileClick" />
          <UInput ref="fileRef" type="file" class="hidden" accept=".mp3" @change="onFileChange" />
          <p class="truncate max-w-80">{{ titleMusic || 'No file chosen...' }}</p>
        </UFormGroup>
      </div>
    </Form>
    <UNotifications />
  </div>
</template>
<script setup>
import { useActivePage } from '@/store/index'
import { Form } from 'vee-validate'
import * as yup from 'yup'

definePageMeta({
  layout: 'editor',
  middleware: 'auth',
})

const router = useRouter()
const route = useRoute()
const toast = useToast()
const fileRef = ref()
const pageLoad = ref(true)
const stateLoading = ref(false)
const titleMusic = ref()
const stateMusic = ref()
const dataMusic = reactive({
  music_name: '',
  singer: '',
  music: ''
})

const schema = yup.object({
  music_name: yup.string().required().min(3).max(322),
  singer: yup.string().required().min(3).max(32)
});

function onFileChange(e) {
  const input = e[0]
  if (!e.length) {
    return
  }
  titleMusic.value = input.name
  dataMusic.music = input
  stateMusic.value = true
}

function onFileClick() {
  fileRef.value?.input.click()
}

async function onSubmit(values) {
  stateLoading.value = true
  const formData = new FormData();
  formData.append("music", dataMusic.music)
  formData.append("singer", values.singer)
  formData.append("music_name", values.music_name)

  try {
    if (!!!route.query.id) {
      if (stateMusic.value) {
        if (!!dataMusic.music) {
          await useFormUpload(`/musics/createMusics`, formData).then((res) => {
            if (res.status == 200) {
              stateMusic.value = false
              toast.add({
                icon: 'i-heroicons-check-circle',
                title: 'music successfully updated',
                color: 'green',
                timeout: 3000,
              })
              router.push('/musics')
            }
          })
        } else {
          toast.add({
            icon: 'i-heroicons-exclamation-triangle',
            title: 'music cannot be empty',
            color: 'orange',
            timeout: 3000,
          })
        }
      } else {
        toast.add({
          icon: 'i-heroicons-exclamation-triangle',
          title: 'music cannot be empty',
          color: 'orange',
          timeout: 3000,
        })
      }
    } else {
      await useFormUpload(`/musics/update/${route.query.id}`, formData).then((res) => {
        if (res.status == 200) {
          stateMusic.value = false
          toast.add({
            icon: 'i-heroicons-check-circle',
            title: 'music successfully updated',
            color: 'green',
            timeout: 3000,
          })
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
  activePage.page = 'Musics'
  activePage.create = false
  activePage.child = !!!route.query.id ? ' / create' : ' / update'
  if (!!route.query.id) {
    await usePostData(`/musics/getById/${route.query.id}`).then((res) => {
      if (res.status == 200) {
        dataMusic.music_name = res._data.musics.music_name
        dataMusic.singer = res._data.musics.singer
        titleMusic.value = res._data.musics.music
      }
    })
  }
  pageLoad.value = false
})
</script>
