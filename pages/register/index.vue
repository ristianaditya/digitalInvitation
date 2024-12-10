<template>
  <div class="bg-[#F4F0FD] font-[sans-serif] text-[#333]">
    <div
      class="fle-col flex min-h-screen items-center justify-center px-4 py-6"
    >
      <div class="grid w-full max-w-6xl items-center gap-10 md:grid-cols-2">
        <div class="ml-auto mr-auto max-md:text-center max-[500px]:w-80">
          <div
            class="col-start-1 row-start-1 mb-6 mt-12 h-7 animate-fade-up leading-7 animate-delay-1000 animate-normal animate-ease-linear"
            aria-hidden="true"
          >
            <a
              href="#_"
              class="pointer-events-none mx-auto mb-3 inline-block -skew-y-1 transform rounded-full bg-[#D2C6FA] px-4 py-2 font-inter text-sm font-bold text-[#2C1854] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
            >
              Welcome to Invite Plus
            </a>
          </div>
          <h1
            class="h1 col-start-1 row-start-2 mb-2 mt-2 max-w-[36rem] text-4xl font-extrabold leading-8 tracking-tight text-slate-900 sm:text-[3.7rem] xl:max-w-[50.5rem]"
          >
            Join and Feel
            <span class="text-[#faa6b0]">Ease</span>
          </h1>
          <p
            class="col-start-1 row-start-3 mt-4 max-w-lg font-inter text-lg font-medium leading-8"
          >
            Start your event with beautifully crafted digital invitations,
            combining elegance and user-friendliness. It's the perfect beginning
            for a memorable gathering!
          </p>
          <p class="mt-10 text-sm">
            Do you have an account ?
            <NuxtLink
              to="/login"
              class="group relative ml-2 inline-block text-xs"
            >
              <span
                class="inline-flex w-full items-center justify-center rounded-full border border-transparent bg-[#F8D075] px-4 py-1 font-inter text-xs font-bold leading-6 text-slate-900 hover:bg-[#fdd26d] focus:outline-none focus:ring-2 focus:ring-[#fdd26d] focus:ring-offset-2 md:w-auto"
              >
                Login
                <Icon name="ep:arrow-right-bold" class="ml-2" />
              </span>
            </NuxtLink>
          </p>
        </div>
        <span class="relative inline-block text-[#49479F]">
          <svg
            viewBox="0 0 52 24"
            fill="currentColor"
            class="text-blue-gray-100 absolute left-0 top-0 z-0 -mt-8 hidden w-32 sm:block lg:-mt-5 lg:w-32"
          >
            <defs>
              <pattern
                id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                x="0"
                y="0"
                width=".135"
                height=".30"
              >
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect
              fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
              width="52"
              height="24"
            ></rect>
          </svg>
          <div
            class="relative w-full max-w-md space-y-6 rounded-3xl bg-white p-12 font-inter shadow-[5px_5px_0px_0px_rgb(210,198,250)] max-md:mx-auto max-[500px]:w-[21rem] max-[500px]:p-8 md:ml-auto md:mr-auto"
          >
            <div class="relative flex flex-col text-black">
              <h4
                class="text-blue-gray-900 block text-3xl leading-snug tracking-normal antialiased"
              >
                <b>Register</b>
              </h4>
              <p
                class="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-900 antialiased"
              >
                Create an account first to enjoy the invite+ service.
              </p>
              <div v-if="alertState.show">
                <div
                  class="-mb-4 mt-2 rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-gray-800 dark:text-red-400"
                  role="alert"
                >
                  <span class="font-bold">{{ alertState.message[0] }}</span>
                </div>
              </div>
              <form
                class="mb-2 mt-8 max-w-screen-lg"
                @submit.prevent="onSubmit"
              >
                <div class="mb-1 flex flex-col gap-6">
                  <BaseInput
                    name="username"
                    type="text"
                    label="Username"
                    placeholder="username"
                    icon="carbon:user-filled"
                  />
                  <BaseInput
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="name@mail.com"
                    icon="ic:round-email"
                  />
                  <BaseInput
                    name="password"
                    type="password"
                    label="Password"
                    placeholder="*************"
                    icon="mdi:password"
                  />
                  <BaseInput
                    name="password_confirmation"
                    type="password"
                    label="Confirm Password"
                    placeholder="*************"
                    icon="mdi:password"
                  />
                </div>
                <button
                  class="btn btn-ghost mt-16 inline-flex w-full select-none items-center justify-center rounded-lg bg-[#49479F] px-6 py-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:bg-[#39387c] hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="submit"
                >
                  <div
                    v-if="alertState.loading"
                    class="align-center -mt-1 flex items-center"
                  >
                    <span class="loading loading-spinner mr-2"></span>
                    Register
                  </div>
                  <div v-else>Register</div>
                </button>
              </form>
            </div>
          </div>
        </span>
      </div>
    </div>
  </div>
  <UNotifications />
</template>

<script setup>
  import { useForm } from 'vee-validate'
  import * as yup from 'yup'
  import { usePostRegis } from '~/composables/useFetchData'

  definePageMeta({
    layout: false,
    auth: {
      unauthenticatedOnly: true,
      navigateAuthenticatedTo: '/',
    },
  })

  const alertState = reactive({
    show: false,
    message: '',
    loading: false,
  })
  const toast = useToast()

  const { handleSubmit } = useForm({
    validationSchema: yup.object({
      username: yup.string().required().min(3).max(16),
      email: yup.string().required().email(),
      password: yup.string().required().min(8),
      password_confirmation: yup
        .string()
        .required('password confirmation is a required field')
        .min(6, 'password confirmation must be at least 6 characters')
        .oneOf([yup.ref('password')], 'Passwords must match'),
    }),
  })

  const onSubmit = handleSubmit(async (values) => {
    alertState.loading = true

    try {
      await usePostRegis('/register', values).then((res) => {
        if (res.status == 422) {
          alertState.show = true
          alertState.message = res._data.username || res._data.email
        } else {
          alertState.show = false
          toast.add({
            icon: 'i-heroicons-check-circle',
            title: 'account successfully created',
            color: 'green',
            timeout: 2000,
          })
          navigateTo(`/verify?email=${values.email}`)
        }
      })
    } catch (error) {
      toast.add({
        icon: 'i-heroicons-exclamation-triangle',
        title: 'error api service',
        color: 'orange',
        timeout: 2000,
      })
    }
    alertState.loading = false
  })
</script>

<style>
  .h1 {
    font-weight: 800;
    line-height: 1;
  }
</style>
