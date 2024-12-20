<template>
  <UContainer
    v-if="pageLoad"
    class="flex h-[70vh] items-center justify-center text-center"
  >
    <span class="loading loading-spinner loading-lg text-[#49479F]"></span>
  </UContainer>
  <div v-else>
    <Form
      :initial-values="dataMusic"
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
      <div class="mb-6 mt-8 space-y-4">
        <BaseInputModalLink
          name="invitelink"
          type="text"
          label="Invite Link"
          desc="this link will be the invitation url."
        />
        <BaseInputModal
          name="eventName"
          type="text"
          label="Event Desc "
          icon="i-heroicons-cake"
          desc="desc of the invitation event to be held."
        />
        <BaseInputModalSelectGet
          name="musics"
          type="text"
          label="Musics"
          desc="choose music for invitations."
        />
        <BaseInputModalDate
          class="mb-5"
          name="inviteDate"
          type="text"
          label="Invite Date"
          desc="input your invitation date."
        />
        <div class="collapse collapse-plus mt-8 bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div class="collapse-title text-lg font-bold">
            This event is for (1)
          </div>
          <div class="collapse-content">
            <BaseInputModal
              name="personFirst"
              type="text"
              label="Name "
              icon="i-heroicons-user"
              desc="this name will be used on the invitation cover"
            />
            <BaseInputModalSelect
              name="genderFirst"
              label="Gender"
              desc="input the gender of the event owner."
              placeholder="Select Gender"
              :listdata="people"
            />
          </div>
        </div>
        <div class="collapse collapse-plus bg-base-200">
          <input type="radio" name="my-accordion-3" />
          <div class="collapse-title text-lg font-bold">
            This event is for (2)
          </div>
          <div class="collapse-content">
            <BaseInputModal
              name="personSecond"
              type="text"
              label="Name "
              icon="i-heroicons-user"
              desc="this name will be used on the invitation cover"
            />
            <BaseInputModalSelect
              name="genderSecond"
              label="Gender"
              desc="input the gender of the event owner."
              placeholder="Select Gender"
              :listdata="people"
            />
          </div>
        </div>
        <BaseInputModalToggle
          name="status"
          label="Publish Invitation "
          desc="publish the invitation for your friends to see."
          :disabled="sessionData.subscribe_status !== 'success'"
        />
      </div>
    </Form>
    <div class="mt-10 sm:flex sm:flex-row-reverse">
      <button
        class="linear active:bg-brand-700 inline-flex items-center justify-center rounded-[8px] bg-[#49479F] px-4 py-3 text-sm font-medium text-white transition duration-200 hover:bg-[#2b2a61]"
        @click="handleSubmit"
      >
        <div v-if="stateLoading">
          <span class="loading loading-spinner mr-2 h-3 w-3"></span>
          Saving..
        </div>
        <div v-else>Save Changes</div>
      </button>
      <button
        class="linear active:bg-brand-700 mr-3 inline-flex items-center justify-center rounded-[8px] bg-blue-50 px-4 py-3 text-sm font-medium text-blue-500 transition duration-200 hover:bg-blue-100"
        @click="closedModal"
      >
        <div>Cancel</div>
      </button>
    </div>
  </div>
</template>
<script setup>
  import { Form } from 'vee-validate'
  import { useSessionData } from '@/store/index'
  import * as yup from 'yup'

  const props = defineProps({
    idProject: {
      type: String,
      default: '',
    },
  })
  const sessionData = useSessionData()
  const submitForm = ref()
  const pageLoad = ref(true)
  const stateLoading = ref(false)
  const people = ['male', 'female']
  const toast = useToast()
  const dataMusic = reactive({
    invitelink: '',
    musics: '',
    inviteDate: '',
    eventName: '',
    personFirst: '',
    genderFirst: '',
    personSecond: '',
    genderSecond: '',
    status: false,
    projectId: '',
  })
  const emit = defineEmits(['close', 'confirm'])
  const schema = yup.object({
    invitelink: yup.string().required().min(3).max(16),
    eventName: yup.string().required().min(3).max(32),
    musics: yup.object().required(),
    inviteDate: yup.string().required(),
    personFirst: yup.string().required().min(3).max(16),
    genderFirst: yup.string().required(),
  })

  async function onSubmit(values) {
    stateLoading.value = true
    const params = {
      invite_link: values.invitelink,
      invite_name: values.eventName,
      status: values.status,
      invite_date: values.inviteDate,
      music_id: values.musics.id,
      project_id: props.idProject,
      personFirst: values.personFirst,
      genderFirst: values.genderFirst,
      personSecond: values.personSecond,
      genderSecond: values.genderSecond,
    }
    try {
      await usePostData(`/invitations/create`, params).then((res) => {
        if (res.status == 422) {
          const jsonError = res._data.invite_link
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
    emit('confirm')
  }

  const handleSubmit = async () => {
    submitForm.value?.click()
  }

  function closedModal() {
    emit('close')
  }

  onMounted(async () => {
    await usePostData(`/invitations/getByProject/${props.idProject}`).then(
      (res) => {
        if (res.status == 200) {
          const data = res._data.data[0]
          dataMusic.invitelink = data.invite_link
          dataMusic.eventName = data.invite_name
          dataMusic.musics = {
            id: data.music.id,
            label: data.music.music_name,
            music: data.music.music,
          }
          dataMusic.status = data.status == 'publish' ? true : false
          dataMusic.inviteDate = data.invite_date
          dataMusic.personFirst = data.familydata.personFirst
          dataMusic.genderFirst = data.familydata.genderFirst
          dataMusic.personSecond = data.familydata.personSecond
          dataMusic.genderSecond = data.familydata.genderSecond
          dataMusic.projectId = data.project_id
        }
      },
    )
    pageLoad.value = false
  })
</script>
<style>
  div[id^='headlessui-combobox-button'] > button {
    @apply form-input relative block w-full rounded-md border-0 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#49479F] disabled:cursor-not-allowed disabled:opacity-75;
  }
</style>
