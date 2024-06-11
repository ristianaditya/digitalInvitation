<template>
  <UContainer
    v-if="pageLoad"
    class="flex h-[40vh] items-center justify-center text-center"
  >
    <span class="loading loading-spinner loading-lg text-[#49479F]"></span>
  </UContainer>
  <div v-else>
    <Form
      :initial-values="dataInvitation"
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
      <div class="mb-6 space-y-6 py-5">
        <BaseInputModalTextArea
          name="clipboard"
          label="Clipboard"
          desc="enter the clipboard text."
        />
      </div>
    </Form>
    <UNotifications />
    <div class="sm:flex sm:flex-row-reverse">
      <UButton
        class="w-28 justify-center bg-[#49479F] text-white hover:bg-[#2b2a61]"
        variant="solid"
        @click="handleSubmit"
        >Save Changes
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
</template>
<script setup>
  import { Form } from 'vee-validate'
  import * as yup from 'yup'

  const submitForm = ref()
  const stateLoading = ref(false)
  const pageLoad = ref(true)
  const toast = useToast()
  const dataInvitation = reactive({
    clipboard: '',
    project_id: '',
  })
  const emit = defineEmits(['close', 'confirm'])

  const props = defineProps({
    idModal: {
      type: String,
      default: '',
    },
  })

  const schema = yup.object({
    clipboard: yup.string().required().min(3),
  })

  async function onSubmit(values) {
    stateLoading.value = true
    const param = {
      project_id: props.idModal,
      clipboard: values.clipboard,
    }
    try {
      await usePostData(`/invitations/editClipbord`, param).then((res) => {
        if (res.status == 200) {
          toast.add({
            icon: 'i-heroicons-check-circle',
            title: 'Clipboard successfully updated',
            color: 'green',
            timeout: 3000,
          })
          emit('confirm')
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

  function closedModal() {
    emit('close')
  }

  const handleSubmit = async () => {
    submitForm.value?.click()
  }

  onMounted(async () => {
    await usePostData(`/invitations/getByProject/${props.idModal}`).then(
      (res) => {
        if (res.status == 200) {
          dataInvitation.clipboard = res._data.data[0].clipboard
        }
      },
    )

    pageLoad.value = false
  })
</script>
<style>
  .focus\:ring-primary-500:focus {
    @apply focus:ring-[#49479F] dark:focus:ring-[#49479F];
  }
</style>
