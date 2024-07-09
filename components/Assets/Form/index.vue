<template>
  <div>
    <UContainer
      v-if="pageLoad"
      class="flex h-[40vh] items-center justify-center text-center"
    >
      <span class="loading loading-spinner loading-lg text-[#49479F]"></span>
    </UContainer>
    <div v-else>
      <div class="flex flex-col items-center py-5">
        <Form
          class="w-full"
          :initial-values="dataAssets"
          :validation-schema="schema"
          @submit="onSubmit"
        >
          <button
            v-show="false"
            ref="submitForm"
            type="submit"
            class="linear hover:bg-brand-800 active:bg-brand-700 inline-flex items-center justify-center rounded-[12px] bg-[#49479F] px-4 py-3 text-sm font-medium text-white transition duration-200"
          >
            Save Changes
          </button>
          <BaseInputModal
            name="file_name"
            type="text"
            label="File Name"
            icon="i-heroicons-information-circle"
            desc="used for file name list."
          />
          <BaseInputModalSelect
            name="type"
            label="Type"
            desc="used for File type."
            placeholder="Select Type File"
            :listdata="type"
          />
          <UFormGroup
            name="file_path"
            label="File"
            class="grid"
            :ui="{
              container: 'flex flex-wrap items-center gap-3 ',
              help: 'mt-0',
            }"
          >
            <template #label>
              <h3 class="text-md font-bold text-gray-800">Upload File</h3>
              <p class="mb-1 text-sm text-gray-600">
                This form is used to upload file
              </p>
            </template>
            <UButton
              label="Choose"
              color="white"
              size="md"
              @click="onFileClick"
            />
            <UInput
              ref="fileRef"
              type="file"
              class="hidden"
              accept=".jpg, .jpeg, .png, .gif"
              @change="onFileChange"
            />
            <p class="max-w-72 truncate">
              {{ fileName || 'No file chosen...' }}
            </p>
          </UFormGroup>
        </Form>
      </div>
      <div class="mt-6 sm:flex sm:flex-row-reverse">
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
    </div>
  </div>
</template>
<script setup>
  import { Form } from 'vee-validate'
  import * as yup from 'yup'

  definePageMeta({
    layout: 'header-base',
    middleware: 'auth',
  })

  const submitForm = ref()
  const toast = useToast()
  const fileRef = ref()
  const pageLoad = ref(true)
  const stateLoading = ref(false)
  const fileName = ref()
  const stateAssets = ref()
  const dataAssets = reactive({
    file_name: '',
    type: '',
    file_path: '',
  })
  const type = ['image', 'video']

  const props = defineProps({
    idModal: {
      type: String,
      default: '',
    },
  })

  const emit = defineEmits(['close', 'confirm'])

  function closedModal() {
    emit('close')
  }

  const schema = yup.object({
    file_name: yup.string().required().min(3).max(322),
    type: yup.string().required().min(3).max(32),
  })

  function onFileChange(e) {
    const input = e[0]
    if (!e.length) {
      return
    }
    fileName.value = input.name
    dataAssets.file_path = input
    stateAssets.value = true
  }

  function onFileClick() {
    fileRef.value?.input.click()
  }

  const handleSubmit = async () => {
    submitForm.value?.click()
  }

  async function onSubmit(values) {
    stateLoading.value = true
    const formData = new FormData()
    formData.append('file', dataAssets.file_path)
    formData.append('type', values.type)
    formData.append('file_name', values.file_name)

    try {
      if (!!!props.idModal) {
        if (stateAssets.value) {
          if (!!dataAssets.file_path) {
            await useFormUpload(`/assets/createAssets`, formData).then(
              (res) => {
                if (res.status == 200) {
                  stateAssets.value = false
                  toast.add({
                    icon: 'i-heroicons-check-circle',
                    title: 'Assets successfully created',
                    color: 'green',
                    timeout: 3000,
                  })
                  emit('confirm')
                }
              },
            )
          } else {
            toast.add({
              icon: 'i-heroicons-exclamation-triangle',
              title: 'Assets cannot be empty',
              color: 'orange',
              timeout: 3000,
            })
          }
        } else {
          toast.add({
            icon: 'i-heroicons-exclamation-triangle',
            title: 'Assets cannot be empty',
            color: 'orange',
            timeout: 3000,
          })
        }
      } else {
        await useFormUpload(`/assets/update/${props.idModal}`, formData).then(
          (res) => {
            if (res.status == 200) {
              stateAssets.value = false
              toast.add({
                icon: 'i-heroicons-check-circle',
                title: 'Assets successfully updated',
                color: 'green',
                timeout: 3000,
              })
              emit('confirm')
            }
          },
        )
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
    if (!!props.idModal) {
      await usePostData(`/assets/getById/${props.idModal}`).then((res) => {
        if (res.status == 200) {
          dataAssets.file_name = res._data.assets.file_name
          ;(dataAssets.type =
            res._data.assets.type == 'image'
              ? type[0]
              : res._data.assets.type == 'video'
                ? type[1]
                : ''),
            (fileName.value = res._data.assets.file_path)
        }
      })
    }
    pageLoad.value = false
  })
</script>
