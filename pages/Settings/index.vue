<template>
  <UContainer
    v-if="pageLoad"
    class="flex h-[80vh] items-center justify-center text-center"
  >
    <span class="loading loading-spinner loading-lg text-[#49479F]"></span>
  </UContainer>
  <UContainer v-else class="mt-12 max-w-4xl font-inter">
    <Form
      :initial-values="dataUser"
      :validation-schema="schema"
      @submit="onSubmit"
    >
      <div
        class="mb-6 space-y-6 divide-y divide-gray-200 *:pt-6 dark:divide-gray-800"
      >
        <div class="flex flex-wrap items-center justify-between gap-4">
          <div class="flex items-start gap-4">
            <div>
              <p class="font-semibold text-gray-900 dark:text-white">Profile</p>
              <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                This information will be displayed publicly so be careful what
                you share.
              </p>
            </div>
          </div>
          <div class="flex flex-wrap items-center gap-1.5">
            <button
              type="submit"
              class="linear hover:bg-brand-800 active:bg-brand-700 inline-flex items-center justify-center rounded-[12px] bg-[#49479F] px-4 py-3 text-sm font-medium text-white transition duration-200"
            >
              <span
                v-show="stateLoading"
                class="loading loading-spinner mr-2"
              ></span>
              Save Changes
            </button>
          </div>
        </div>
        <BaseInputAdmin
          name="name"
          type="text"
          label="Name"
          icon="i-heroicons-user"
          desc="Will appear on receipts, invoices, and other communication."
        />
        <BaseInputAdmin
          name="email"
          type="email"
          label="Email"
          icon="i-heroicons-envelope"
          desc="Used to sign in, for email receipts and product updates."
        />
        <BaseInputAdmin
          name="username"
          type="text"
          label="Username"
          icon="i-heroicons-user-circle"
          desc="Your unique username for logging in and your profile URL."
        />
        <UFormGroup
          name="picture"
          label="Avatar"
          class="grid grid-cols-2 gap-2"
          help="JPG, GIF or PNG. 1MB Max."
          :ui="{ container: 'flex flex-wrap items-center gap-3', help: 'mt-0' }"
        >
          <UAvatar :src="dataUser.picture" alt="picture" size="lg" />

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
        </UFormGroup>
        <BaseInputAdmin
          name="no_phone"
          type="text"
          label="Number Phone"
          icon="i-heroicons-phone"
          desc="Your unique username for logging in and your profile URL."
        />
        <BaseInputSelect
          name="gender"
          label="Gender"
          desc="Your unique username for logging in and your profile
              URL."
          placeholder="Select Gender"
          :listdata="people"
        />
        <BaseInputTextarea
          name="address"
          label="Address"
          desc="Brief description for your profile. URLs are
              hyperlinked."
        />
        <div class="grid grid-cols-2 gap-2">
          <div class="">
            <div
              class="flex content-center items-center justify-between text-sm"
            >
              <label
                for="password_new"
                class="block font-medium text-gray-700 dark:text-gray-200"
                >Password</label
              >
            </div>
            <p class="text-sm text-gray-500 dark:text-gray-400">
              Confirm your current password before setting a new one.
            </p>
          </div>
          <div class="">
            <div class="relative">
              <input
                id="password"
                v-model="dataUser.old_password"
                name="password"
                type="password"
                placeholder="Current password"
                class="form-input text-md relative block w-full rounded-md border-0 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#49479F] disabled:cursor-not-allowed disabled:opacity-75 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500 dark:ring-gray-700 dark:focus:ring-[#49479F]"
              />
            </div>
            <div class="relative mt-2">
              <input
                id="password_new"
                v-model="dataUser.password"
                name="password"
                type="password"
                placeholder="New password"
                class="form-input text-md relative block w-full rounded-md border-0 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#49479F] disabled:cursor-not-allowed disabled:opacity-75 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500 dark:ring-gray-700 dark:focus:ring-[#49479F]"
              />
            </div>
          </div>
        </div>
        <div
          v-if="!!dataUser.latest_transaction?.subscribe"
          class="grid items-start gap-6 py-6 first:*:col-span-2 last:*:col-span-2 lg:grid-cols-3 lg:first:*:col-span-1"
        >
          <div
            class="flex flex-row flex-wrap justify-between gap-4 lg:flex-col"
          >
            <div class="flex items-start gap-4">
              <div>
                <p class="font-semibold text-gray-900 dark:text-white">
                  Subscription
                </p>
                <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">
                  This information will be displayed publicly so be careful what
                  you share.
                </p>
              </div>
            </div>
          </div>
          <div
            class="divide-y divide-gray-200 rounded-lg bg-white shadow ring-1 ring-gray-200 dark:divide-gray-800 dark:bg-gray-900 dark:ring-gray-800"
          >
            <div
              class="flex flex-col gap-4 divide-y divide-gray-200 px-6 py-4 dark:divide-gray-800"
            >
              <div
                class="flex items-center justify-between gap-2 pt-4 first:pt-0"
              >
                <div>
                  <div
                    class="flex content-center items-center justify-between text-sm"
                  >
                    <p
                      class="block font-bold text-[#49479F] dark:text-gray-200"
                    >
                      {{ dataUser.latest_transaction?.subscribe }}
                    </p>
                  </div>
                  <p class="text-sm text-gray-500 dark:text-gray-400">
                    Expired :
                    {{ dataUser.expired }}
                  </p>
                </div>
                <div class="relative mt-1 flex">
                  <img
                    v-if="
                      dataUser.latest_transaction?.subscribe ==
                      'DigitalDreamscape'
                    "
                    src="/tier/tier3.png"
                    alt=""
                    class="ml-1 h-10 w-10 rounded-3xl"
                  />
                  <img
                    v-else-if="
                      dataUser.latest_transaction?.subscribe == 'SparkleSend'
                    "
                    src="/tier/tier2.png"
                    alt=""
                    class="ml-1 h-10 w-10 rounded-3xl"
                  />
                  <img
                    v-else
                    src="/tier/free.png"
                    alt=""
                    class="ml-1 h-10 w-10 rounded-3xl"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form>
  </UContainer>
  <UNotifications />
</template>

<script setup>
  import { Form } from 'vee-validate'
  import * as yup from 'yup'
  import {
    useGetSession,
    usePostData,
    useFormUpload,
  } from '~/composables/useFetchData'

  definePageMeta({
    layout: 'cms',
    middleware: 'auth',
  })
  const toast = useToast()
  const people = ['male', 'female']
  const pageLoad = ref(true)
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

    dataUser.picture = URL.createObjectURL(input)
    dataUser.file = input

    stateImage.value = true
  }

  function onFileClick() {
    fileRef.value?.input.click()
  }

  async function onSubmit(values) {
    stateLoading.value = true

    const formData = new FormData()
    formData.append('file', dataUser.file)

    try {
      if (!!dataUser.old_password) {
        const dataPassword = {
          old_password: dataUser.old_password,
          password: dataUser.password,
        }
        await usePostData(
          `/user/updatePassword/${idUser.value}`,
          dataPassword,
        ).then((res) => {
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
        await useFormUpload(`/user/uploadPhoto/${idUser.value}`, formData).then(
          (res) => {
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
          },
        )
      }

      await usePostData(`/user/updateUser/${idUser.value}`, values).then(
        (res) => {
          if (res.status == 422) {
            const jsonError =
              res._data.username || res._data.email || res._data.no_phone
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
        },
      )
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
    const days = [
      'Minggu',
      'Senin',
      'Selasa',
      'Rabu',
      'Kamis',
      'Jumat',
      'Sabtu',
    ]
    const months = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ]
    await useGetSession('/user/getSession').then((res) => {
      idUser.value = res.data.id
      ;(dataUser.name = res.data.name),
        (dataUser.username = res.data.username),
        (dataUser.email = res.data.email),
        (dataUser.no_phone = res.data.no_phone),
        (dataUser.address = res.data.address),
        (dataUser.picture = res.data.picture),
        (dataUser.latest_transaction = res.data.latest_transaction),
        (dataUser.gender =
          res.data.gender == 'male'
            ? people[0]
            : res.data.gender == 'female'
              ? people[1]
              : '')
      const date = new Date(res.data.latest_transaction?.subscribe_expired)
      const dayName = days[date.getDay()]
      const day = date.getDate()
      const month = months[date.getMonth()]
      const year = date.getFullYear()

      dataUser.expired = dayName + ', ' + day + ' ' + month + ' ' + year
    })
    pageLoad.value = false
  })
</script>

<style>
  .focus\:ring-primary-500:focus {
    @apply focus:ring-[#49479F] dark:focus:ring-[#49479F];
  }

  span > img {
    object-fit: cover;
  }
</style>
