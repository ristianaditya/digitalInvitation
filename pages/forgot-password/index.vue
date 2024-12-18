<template>
  <div class="bg-[#F4F0FD] font-[sans-serif] text-[#333]">
    <div
      class="flex min-h-screen flex-col items-center justify-center px-4 py-6"
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
            class="h1 mb-2 mt-2 max-w-[36rem] text-4xl font-extrabold leading-8 tracking-tight text-slate-900 sm:text-[3.7rem] xl:max-w-[50.5rem]"
          >
            Forgot Password
          </h1>
          <p class="mt-4 max-w-lg font-inter text-lg font-medium leading-8">
            Please enter your email to receive a password reset link.
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
                <b>Reset Password</b>
              </h4>
              <p
                class="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-900 antialiased"
              >
                Enter your email address to receive a password reset link.
              </p>
              <form
                @submit.prevent="onSubmit"
                class="mb-2 mt-8 max-w-screen-lg"
              >
                <div class="mb-6">
                  <input
                    v-model="email"
                    type="email"
                    placeholder="Enter your email"
                    class="h-12 w-full rounded-md border border-gray-300 text-center text-xl"
                    required
                  />
                </div>
                <button
                  class="btn btn-ghost mt-5 inline-flex w-full select-none items-center justify-center rounded-lg bg-[#49479F] px-6 py-4 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:bg-[#39387c] hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="submit"
                  :disabled="alertState.loading"
                >
                  <div
                    v-if="alertState.loading"
                    class="align-center -mt-1 flex items-center"
                  >
                    <span class="loading loading-spinner mr-2"></span>
                    Sending...
                  </div>
                  <div v-else>Send Reset Link</div>
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
  import { ref, reactive } from 'vue'
  import { usePostSendResetLink } from '~/composables/useFetchData'

  const email = ref('')

  definePageMeta({
    layout: false,
    auth: {
      unauthenticatedOnly: true,
    },
  })

  const alertState = reactive({
    show: false,
    message: '',
    loading: false,
  })

  const toast = useToast()

  const onSubmit = async () => {
    alertState.loading = true
    try {
      // Call your API to send the reset link
      const res = await usePostSendResetLink(email.value.toLowerCase())
      if (res.status === 200) {
        toast.add({
          icon: 'i-heroicons-check-circle',
          title: 'Reset link sent successfully',
          color: 'green',
          timeout: 2000,
        })
      } else {
        alertState.show = true
        alertState.message = res.data.message
      }
    } catch (error) {
      alertState.show = true
      alertState.message = 'Something went wrong. Please try again later.'
    } finally {
      alertState.loading = false
    }
  }

  const sendResetLink = async (email) => {
    // Implement your API call here
    return { status: 200 } // Mock response
  }
</script>

<style>
  .h1 {
    font-weight: 800;
    line-height: 1;
  }
</style>
