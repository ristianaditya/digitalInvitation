<template>
  <UContainer v-if="stateLoad" class=" text-center h-[80vh] flex justify-center items-center">
    <span class="loading loading-spinner text-[#49479F] loading-lg"></span>
  </UContainer>
  <UContainer v-else class=" mt-12 max-w-4xl font-inter">
    <Form @submit="onSubmit" :initial-values="dataUser" :validation-schema="schema">
      <div class="divide-y divide-gray-200 dark:divide-gray-800 space-y-6 *:pt-6 mb-6">
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-start gap-4">
            <div>
              <p class="text-gray-900 dark:text-white font-semibold">Profile</p>
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">This information will be displayed publicly so be
                careful what you share.</p>
            </div>
          </div>
          <div class="flex flex-wrap items-center gap-1.5">
            <button type="submit"
              class="linear rounded-[12px] bg-[#49479F] px-4 py-3 text-sm font-medium text-white transition duration-200 hover:bg-brand-800 active:bg-brand-700  inline-flex justify-center items-center">
              <span v-show="stateLoading" class="loading loading-spinner mr-2"></span>
              Save Changes</button>
          </div>
        </div>
        <BaseInputAdmin name="name" type="text" label="Name" icon="i-heroicons-user"
          desc="Will appear on receipts, invoices, and other communication." />
        <BaseInputAdmin name="email" type="email" label="Email" icon="i-heroicons-envelope"
          desc="Used to sign in, for email receipts and product updates." />
        <BaseInputAdmin name="username" type="text" label="Username" icon="i-heroicons-user-circle"
          desc="Your unique username for logging in and your profile URL." />
        <UFormGroup name="picture" label="Avatar" class="grid grid-cols-2 gap-2" help="JPG, GIF or PNG. 1MB Max."
          :ui="{ container: 'flex flex-wrap items-center gap-3', help: 'mt-0' }">
          <UAvatar :src="dataUser.picture" alt="picture" size="lg" />

          <UButton label="Choose" color="white" size="md" @click="onFileClick" />

          <UInput ref="fileRef" type="file" class="hidden" accept=".jpg, .jpeg, .png, .gif" @change="onFileChange" />
        </UFormGroup>
        <BaseInputAdmin name="no_phone" type="text" label="Number Phone" icon="i-heroicons-phone"
          desc="Your unique username for logging in and your profile URL." />
        <BaseInputSelect name="gender" label="Gender" desc="Your unique username for logging in and your profile
              URL." placeholder="Select Gender" :listdata="people" />
        <BaseInputTextarea name="address" label="Address" desc="Brief description for your profile. URLs are
              hyperlinked." />
        <div class="grid grid-cols-2 gap-2">
          <div class="">
            <div class="flex content-center items-center justify-between text-sm"><label for="password_new"
                class="block font-medium text-gray-700 dark:text-gray-200">Password</label></div>
            <p class="text-gray-500 dark:text-gray-400 text-sm">Confirm your current password before setting a new one.
            </p>
          </div>
          <div class="">
            <div class="relative">
              <input id="password" name="password" type="password" v-model="dataUser.old_password"
                placeholder="Current password"
                class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-md px-3 py-2 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-[#49479F] dark:focus:ring-[#49479F]">
            </div>
            <div class="relative mt-2">
              <input id="password_new" name="password" type="password" v-model="dataUser.password"
                placeholder="New password"
                class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-md px-3 py-2 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-[#49479F] dark:focus:ring-[#49479F]">
            </div>
          </div>
        </div>
      </div>
    </form>
  </UContainer>
  <UNotifications />
</template>

<script setup>
import { Form } from 'vee-validate';
import * as yup from 'yup';
import {
  useGetSession,
  usePostData,
  useUploadPhoto
} from '~/composables/useFetchData'

definePageMeta({
  layout: 'cms',
  middleware: 'auth'
})
const toast = useToast()
const people = ['male', 'female']
const stateLoad = ref(true)
const stateImage = ref(false)
const stateLoading = ref(false)
const idUser = ref('')
const fileRef = ref()
const dataUser = reactive({
  name: '',
  email: '',
  username: '',
  no_phone: '',
  gender: '',
  address: '',
  picture: '',
  file: '',
  old_password: '',
  password: '',
})

const schema = yup.object({
  username: yup.string().required().min(3).max(16),
  name: yup.string().required().min(3).max(16),
  email: yup.string().required().email(),
  address: yup.string().required().min(3).max(64),
  no_phone: yup.number().required("number phone is a required field")
});

function onFileChange(e) {
  const input = e.target

  if (!input.files?.length) {
    return
  }

  dataUser.picture = URL.createObjectURL(input.files[0])
  dataUser.file = input.files[0]

  stateImage.value = true
}

function onFileClick() {
  fileRef.value?.input.click()
}

async function onSubmit(values) {
  stateLoading.value = true

  const formData = new FormData();
  formData.append("file", dataUser.file);

  try {
    if (!!dataUser.old_password) {
      const dataPassword = {
        old_password: dataUser.old_password,
        password: dataUser.password,
      }
      await usePostData(`/api/updatePassword/${idUser.value}`, dataPassword).then((res) => {
        if (res.status == 200) {
          toast.add({
            icon: 'i-heroicons-check-circle',
            title: 'Password successfully updated',
            color: 'green',
            timeout: 3000,
          })
        } else {
          toast.add({
            icon: 'i-heroicons-exclamation-triangle',
            title: 'Password failed to update',
            color: 'orange',
            timeout: 3000,
          })
        }
      })
    }

    if (stateImage.value) {
      await useUploadPhoto(`/api/uploadPhoto/${idUser.value}`, formData).then((res) => {
        if (res.status == 200) {
          stateImage.value = false
        } else {
          toast.add({
            icon: 'i-heroicons-exclamation-triangle',
            title: 'avatars failed to update',
            color: 'orange',
            timeout: 3000,
          })
        }
      })
    }

    await usePostData(`/api/updateUser/${idUser.value}`, values).then((res) => {
      if (res.status == 422) {
        const jsonError = res._data.username || res._data.email || res._data.no_phone;
        toast.add({
          icon: 'i-heroicons-exclamation-triangle',
          title: jsonError[0],
          color: 'orange',
          timeout: 3000,
        })
      } else if (res.status == 200) {
        toast.add({
          icon: 'i-heroicons-check-circle',
          title: 'account successfully updated',
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
  await useGetSession('/api/getSession').then((res) => {
    idUser.value = res.data.id
    dataUser.name = res.data.name,
      dataUser.username = res.data.username,
      dataUser.email = res.data.email,
      dataUser.no_phone = res.data.no_phone,
      dataUser.address = res.data.address,
      dataUser.picture = res.data.picture,
      dataUser.gender = (res.data.gender == "male") ? people[0] : (res.data.gender == "female") ? people[1] : ''
  })
  stateLoad.value = false
})
</script>

<style>
.focus\:ring-primary-500:focus {
  @apply focus:ring-[#49479F] dark:focus:ring-[#49479F]
}

span>img {
  object-fit: cover;
}
</style>
