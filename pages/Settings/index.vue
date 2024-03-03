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
        <div class="grid grid-cols-2 gap-2">
          <div class="">
            <div class="flex content-center items-center justify-between text-sm"><label for="aUkbh3TvCg_691"
                class="block font-medium text-gray-700 dark:text-gray-200">Avatar</label></div>
          </div>
          <div class="mt-1 relative flex flex-wrap items-center gap-3"><span
              class="relative inline-flex items-center justify-center flex-shrink-0 bg-gray-100 dark:bg-gray-800 rounded-full h-12 w-12 text-lg"><span
                class="font-medium leading-none text-gray-500 dark:text-gray-400 truncate">BC</span></span><button
              type="button"
              class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-2 px-3 py-2 shadow-sm ring-1 ring-inset ring-gray-300 dark:ring-gray-700 text-gray-900 dark:text-white bg-white hover:bg-gray-50 disabled:bg-white dark:bg-gray-900 dark:hover:bg-gray-800/50 dark:disabled:bg-gray-900 focus-visible:ring-2 focus-visible:ring-[#49479F] dark:focus-visible:ring-[#49479F] inline-flex items-center"><span
                class="">Choose</span></button>
            <div class="relative hidden"><input id="aUkbh3TvCg_691" name="avatar" type="file"
                class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 file:cursor-pointer file:rounded-l-md file:absolute file:left-0 file:inset-y-0 file:font-medium file:m-0 file:border-0 file:ring-1 file:ring-gray-300 dark:file:ring-gray-700 file:text-gray-900 dark:file:text-white file:bg-gray-50 hover:file:bg-gray-100 dark:file:bg-gray-800 dark:hover:file:bg-gray-700/50 ps-[96px] text-sm px-2.5 py-1.5 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-[#49479F] dark:focus:ring-[#49479F]"
                accept=".jpg, .jpeg, .png, .gif"></div>
            <p class="text-gray-500 dark:text-gray-400 mt-0 text-sm">JPG, GIF or PNG. 1MB Max.</p>
          </div>
        </div>
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
              <input id="password" name="password" type="password" placeholder="Current password"
                class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-md px-3 py-2 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-[#49479F] dark:focus:ring-[#49479F]">
            </div>
            <div class="relative mt-2">
              <input id="password_new" name="password" type="password" placeholder="New password"
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
  usePostData
} from '~/composables/useFetchData'

definePageMeta({
  layout: 'cms',
  middleware: 'auth'
})
const toast = useToast()
const people = ['male', 'female']
const stateLoad = ref(true)
const stateLoading = ref(false)
const idUser = ref('')
const dataUser = reactive({
  name: '',
  email: '',
  username: '',
  no_phone: '',
  gender: '',
  address: ''
})

const schema = yup.object({
  username: yup.string().required().min(3).max(16),
  name: yup.string().required().min(3).max(16),
  email: yup.string().required().email(),
  address: yup.string().required().min(3).max(64),
  no_phone: yup.number().required("number phone is a required field")
});

async function onSubmit(values) {
  stateLoading.value = true
  try {
    await usePostData(`/api/updateUser/${idUser.value}`, values).then((res) => {
      if (res.status == 422) {
        toast.add({
          icon: 'i-heroicons-exclamation-triangle',
          title: res._data.username[0] || res._data.email[0] || res._data.no_phone[0],
          color: 'orange',
          timeout: 2400,
        })
      } else if (res.status == 200) {
        toast.add({
          icon: 'i-heroicons-check-circle',
          title: 'account successfully updated',
          color: 'green',
          timeout: 2400,
        })
      }
    })

  } catch (error) {
    toast.add({
      icon: 'i-heroicons-exclamation-triangle',
      title: 'error api service',
      color: 'orange',
      timeout: 2400,
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
      dataUser.gender = (res.data.gender == "male") ? people[0] : (res.data.gender == "female") ? people[1] : ''
  })
  stateLoad.value = false
})
</script>

<style>
.focus\:ring-primary-500:focus {
  @apply focus:ring-[#49479F] dark:focus:ring-[#49479F]
}
</style>
