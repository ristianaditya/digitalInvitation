<template>
  <Form :initial-values="dataGuest" @submit="onSubmit">
    <button
      v-show="false"
      ref="submitForm"
      type="submit"
      class="linear hover:bg-brand-800 active:bg-brand-700 inline-flex items-center justify-center rounded-[12px] bg-[#49479F] px-4 py-3 text-sm font-medium text-white transition duration-200"
    >
      Save Changes
    </button>
    <div class="mb-6 space-y-6 py-5">
      <div>
        <h3 class="text-md font-bold text-gray-800">Template Excel</h3>
        <p class="mb-3 text-sm text-gray-600">
          This template is used for example import files
        </p>
        <div class="relative mb-5 mt-1">
          <div class="relative">
            <div class="btn btn-sm -mt-[6px] w-full" @click="downloadTemplate">
              <Icon name="vscode-icons:file-type-excel" class="text-2xl" />
              Template Excel
            </div>
          </div>
        </div>
      </div>
      <UFormGroup
        name="music"
        label="Music"
        class="grid"
        :ui="{
          container: 'flex flex-wrap items-center gap-3 ',
          help: 'mt-0',
        }"
      >
        <template #label>
          <h3 class="text-md font-bold text-gray-800">Import Guest</h3>
          <p class="mb-1 text-sm text-gray-600">
            This form is used to import guest
          </p>
        </template>

        <div
          class="flex h-32 w-full cursor-pointer appearance-none justify-center rounded-md border-2 border-dashed border-gray-300 bg-white px-4 transition hover:border-gray-400 focus:outline-none"
          @drop.prevent="handleDrop"
          @dragover.prevent
        >
          <span class="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
              />
            </svg>
            <span class="font-medium text-gray-600">
              Drop files to Attach, or
              <span class="text-blue-600 underline" @click="onFileClick"
                >browse</span
              >
            </span>
          </span>
          <input
            ref="fileRef"
            type="file"
            class="hidden"
            accept=".xls,.xlsx"
            @change="onFileChange"
          />
        </div>
        <p
          v-if="!!titleFile"
          class="flex w-full justify-between truncate rounded-lg bg-slate-100 p-3"
        >
          <span class="font-medium text-gray-600">
            {{ titleFile || 'No file chosen...' }}
          </span>
          <Icon name="vscode-icons:file-type-excel" class="ml-2 self-center" />
        </p>
        <p v-else class="mt-2 max-w-72 truncate">
          {{ titleFile || 'No file chosen...' }}
        </p>
      </UFormGroup>
    </div>
  </Form>
  <UNotifications />
  <div class="sm:flex sm:flex-row-reverse">
    <UButton
      class="w-28 justify-center bg-[#49479F] text-white hover:bg-[#2b2a61]"
      variant="solid"
      @click="handleSubmit"
    >
      <div v-if="stateLoading">
        <span class="loading loading-spinner mr-2 h-3 w-3"></span>
        Saving..
      </div>
      <div v-else>Save Changes</div>
    </UButton>
    <UButton
      color="blue"
      class="mr-3 w-20 justify-center"
      variant="soft"
      @click="closedModal"
    >
      Cancel
    </UButton>
  </div>
</template>
<script setup>
  import { Form } from 'vee-validate'

  const submitForm = ref()
  const fileRef = ref()
  const stateLoading = ref(false)
  const toast = useToast()
  const dataGuest = reactive({
    project_id: '',
    excel: '',
  })
  const titleFile = ref()
  const emit = defineEmits(['close', 'confirm'])

  const props = defineProps({
    idModal: {
      type: String,
      default: '',
    },
    premium: {
      type: Boolean,
      default: false,
    },
  })
  async function onSubmit() {
    stateLoading.value = true
    const formData = new FormData()
    formData.append('excel', dataGuest.excel)
    formData.append('project_id', props.idModal)
    try {
      if (!!!props.premium) {
        if (!!dataGuest.excel) {
          await useFormUpload(`/guest/import`, formData).then((res) => {
            console.log({ res })
            if (res.status == 200) {
              toast.add({
                icon: 'i-heroicons-check-circle',
                title: 'Guest successfully Imported',
                color: 'green',
                timeout: 3000,
              })
              emit('confirm')
            }
          })
        } else {
          toast.add({
            icon: 'i-heroicons-exclamation-triangle',
            title: 'No file uploaded',
            color: 'orange',
            timeout: 3000,
          })
        }
      } else {
        toast.add({
          icon: 'i-heroicons-exclamation-triangle',
          title: 'Upgrade subscription to premium',
          color: 'orange',
          timeout: 3000,
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

  const downloadTemplate = async () => {
    try {
      const response = await $fetch('/contohimport.xlsx', {
        responseType: 'blob',
      })
      const url = URL.createObjectURL(new Blob([response]))
      const link = document.createElement('a')
      link.href = url
      link.setAttribute('download', 'contohimport.xlsx')
      document.body.appendChild(link)
      link.click()
      link.remove()
    } catch (error) {
      console.error('Error downloading the template:', error)
    }
  }

  function onFileClick() {
    fileRef.value.click()
  }

  function onFileChange(event) {
    const file = event.target.files[0]
    if (file) {
      titleFile.value = file.name
      dataGuest.excel = file
    } else {
      titleFile.value = ''
    }
  }

  function handleDrop(event) {
    const file = event.dataTransfer.files[0]
    if (file) {
      titleFile.value = file.name
      fileRef.value.files = event.dataTransfer.files
      const changeEvent = new Event('change', { bubbles: true })
      fileRef.value.dispatchEvent(changeEvent)
    }
  }

  const handleSubmit = async () => {
    submitForm.value?.click()
  }

  function closedModal() {
    emit('close')
  }
</script>
<style>
  .focus\:ring-primary-500:focus {
    @apply focus:ring-[#49479F] dark:focus:ring-[#49479F];
  }
</style>
