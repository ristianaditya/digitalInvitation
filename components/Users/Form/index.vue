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
          :initial-values="dataUsers"
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
            name="name"
            type="text"
            label="Name"
            icon="i-heroicons-user"
            desc="Enter your full name. This will appear on receipts, invoices, and other official communications."
          />
          <BaseInputModal
            name="email"
            type="email"
            label="Email"
            icon="i-heroicons-envelope"
            desc="Provide your email address. We'll use this for account login, sending receipts, and sharing product updates."
          />
          <BaseInputModal
            name="username"
            type="text"
            label="Username"
            icon="i-heroicons-user-circle"
            desc="Your unique username for logging in and your profile URL."
          />
          <BaseInputModal
            name="no_phone"
            type="text"
            label="Number Phone"
            icon="i-heroicons-phone"
            desc="Add your contact number for account security and communication purposes."
          />
          <BaseInputModalSelect
            name="gender"
            label="Gender"
            desc="Share your gender identity if you're comfortable. This helps us personalize your experience."
            placeholder="Select Gender"
            :listdata="people"
          />
          <BaseInputModalSelect
            name="role"
            label="Role"
            desc="Share role account"
            placeholder="Select Role"
            :listdata="role"
          />
          <UFormGroup
            name="picture"
            label="Avatar"
            class="grid"
            :ui="{
              container: 'flex flex-wrap items-center gap-3 ',
              help: 'mt-0',
            }"
          >
            <template #label>
              <h3 class="text-md font-bold text-gray-800">Upload Avatar</h3>
              <p class="mb-1 text-sm text-gray-600">
                This form is used to upload avatar
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
              accept="jpg, .jpeg, .png, .gif"
              @change="onFileChange"
            />
            <p class="max-w-72 truncate">
              {{ titleAvatar || 'No file chosen...' }}
            </p>
          </UFormGroup>
          <BaseInputModalTextArea
            name="address"
            label="Address"
            desc="Brief description for your profile. URLs are
              hyperlinked."
            class="mt-5"
          />
          <BaseInputModal
            name="password"
            type="password"
            label="New Password"
            icon="i-heroicons-lock-closed"
            desc="Enter password for account security"
          />
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
  const titleAvatar = ref()
  const statePicture = ref()
  const people = ['male', 'female']
  const role = ['admin', 'user']

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

  const dataUsers = reactive({
    name: '',
    email: '',
    username: '',
    no_phone: '',
    gender: '',
    address: '',
    role: '',
    picture: '',
    file: '',
    password: '',
    latest_transaction: '',
    expired: '',
  })

  const schema = yup.object({
    username: yup.string().required().min(3).max(16),
    name: yup.string().required().min(3).max(16),
    email: yup.string().required().email(),
    address: yup.string().required().min(3).max(64),
    no_phone: yup.number().required('number phone is a required field'),
  })

  function onFileChange(e) {
    const input = e[0]
    if (!e.length) {
      return
    }
    titleAvatar.value = input.name
    dataUsers.picture = URL.createObjectURL(input)
    dataUsers.file = input
    statePicture.value = true
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
    formData.append('file', dataUsers.file)
    formData.append('name', values.name)
    formData.append('email', values.email)
    formData.append('username', values.username)
    formData.append('no_phone', values.no_phone)
    formData.append('gender', values.gender)
    formData.append('role', values.role)
    formData.append('address', values.address)
    formData.append('password', values.password)

    try {
      if (!!props.idModal) {
        await useFormUpload(
          `/user/updateAdmin/${props.idModal}`,
          formData,
        ).then((res) => {
          if (res.status == 422) {
            const jsonError =
              res._data.username || res._data.email || res._data.no_phone
            toast.add({
              icon: 'i-heroicons-exclamation-triangle',
              title: jsonError[0],
              color: 'orange',
              timeout: 3000,
            })
          } else if (res.status == 201) {
            toast.add({
              icon: 'i-heroicons-check-circle',
              title: 'account successfully updated',
              color: 'green',
              timeout: 3000,
            })
            emit('confirm')
          }
        })
      } else {
        await useFormUpload(`/user/create`, formData).then((res) => {
          if (res.status == 422) {
            const jsonError =
              res._data.username || res._data.email || res._data.no_phone
            toast.add({
              icon: 'i-heroicons-exclamation-triangle',
              title: jsonError[0],
              color: 'orange',
              timeout: 3000,
            })
          } else if (res.status == 201) {
            toast.add({
              icon: 'i-heroicons-check-circle',
              title: 'account successfully created',
              color: 'green',
              timeout: 3000,
            })
            emit('confirm')
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
    if (!!props.idModal) {
      await usePostData(`/user/showUser/${props.idModal}`).then((res) => {
        if (res.status == 200) {
          ;(dataUsers.name = res._data.data.name),
            (dataUsers.username = res._data.data.username),
            (dataUsers.email = res._data.data.email),
            (dataUsers.no_phone = res._data.data.no_phone),
            (dataUsers.address = res._data.data.address),
            (dataUsers.picture = res._data.data.picture),
            (dataUsers.gender =
              res._data.data.gender == 'male'
                ? people[0]
                : res._data.data.gender == 'female'
                  ? people[1]
                  : ''),
            (dataUsers.role =
              res._data.data.role == 'admin'
                ? role[0]
                : res._data.data.role == 'user'
                  ? role[1]
                  : ''),
            (titleAvatar.value = res._data.data.picture)
        }
      })
    }
    pageLoad.value = false
  })
</script>
