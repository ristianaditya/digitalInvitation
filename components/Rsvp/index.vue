<template>
  <UContainer
    v-if="pageLoad"
    class="flex h-[40vh] items-center justify-center text-center"
  >
    <span class="loading loading-spinner loading-lg text-[#49479F]"></span>
  </UContainer>
  <div v-else>
    <Form
      :initial-values="dataRsvp"
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
      <div class="!mb-6 !space-y-6 !py-5">
        <BaseInputModal
          name="name"
          type="text"
          label="Name"
          icon="i-heroicons-user"
          desc="enter the guest's name."
        />
        <BaseInputModalSelect
          name="attendance"
          label="Attendance"
          desc="input the gender of the event owner."
          placeholder="Select Attendance"
          :listdata="status"
        />
        <BaseInputModalTextArea
          name="greeting"
          label="Wishes"
          desc="enter the wishes text."
        />
      </div>
    </Form>
    <div class="sm:flex sm:flex-row-reverse">
      <UButton
        class="w-28 justify-center bg-[#49479F] text-white hover:bg-[#2b2a61]"
        variant="solid"
        @click="handleSubmit"
      >
        Save Changes
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
  const pageLoad = ref(true)
  const toast = useToast()
  const dataRsvp = reactive({
    name: '',
    attendance: '',
    link: '',
    greeting: '',
  })
  const status = ['attended', 'absent']
  const emit = defineEmits(['close', 'confirm'])

  const props = defineProps({
    idModal: {
      type: String,
      default: '',
    },
    link: {
      type: String,
      default: '',
    },
  })
  const schema = yup.object({
    name: yup.string().required().min(3).max(26),
    attendance: yup.string().required(),
    greeting: yup.string().required().min(3).max(126),
  })

  async function onSubmit(values) {
    const param = {
      invite_link: dataRsvp.link,
      attendance: values.attendance,
      name: values.name,
      greeting: values.greeting,
    }
    try {
      await usePostData(`/rsvp/create`, param).then((res) => {
        if (res.status == 201) {
          toast.add({
            icon: 'i-heroicons-check-circle',
            title: 'RSVP successfully sent',
            color: 'green',
            timeout: 3000,
          })
          emit('confirm')
        } else {
          toast.add({
            icon: 'i-heroicons-exclamation-triangle',
            title: 'unregistered guest name',
            color: 'orange',
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
  }

  function closedModal() {
    emit('close')
  }

  const handleSubmit = async () => {
    submitForm.value?.click()
  }
  onMounted(async () => {
    dataRsvp.name = props.idModal
    dataRsvp.link = props.link
    pageLoad.value = false
  })
</script>
