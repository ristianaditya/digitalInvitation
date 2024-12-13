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
            class="h1 col-start-1 row-start-2 mb-2 mt-2 max-w-[36rem] text-4xl font-extrabold leading-8 tracking-tight text-slate-900 sm:text-[3.7rem] xl:max-w-[50.5rem]"
          >
            OTP Verification
          </h1>
          <p
            class="col-start-1 row-start-3 mt-4 max-w-lg font-inter text-lg font-medium leading-8"
          >
            Please enter the OTP sent to your email to complete your
            registration.
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
                <b>Verify OTP</b>
              </h4>
              <p
                class="mt-1 block font-sans text-base font-normal leading-relaxed text-gray-900 antialiased"
              >
                Enter the OTP sent to your email to complete your registration.
              </p>
              <div v-if="alertState.show">
                <div
                  class="-mb-4 mt-2 rounded-lg bg-red-50 p-4 text-sm text-red-800 dark:bg-gray-800 dark:text-red-400"
                  role="alert"
                >
                  <span class="font-bold">{{ alertState.message }}</span>
                  <div v-if="alertState.nextAttempt" class="mt-1">
                    You Can Try Again in {{ formatNextAttempt(alertState.nextAttempt) }}
                  </div>
                </div>
              </div>
              <form
                @submit.prevent="onSubmit"
                class="mb-2 mt-8 max-w-screen-lg"
              >
                <div class="mb-6 flex justify-center space-x-2">
                  <!-- OTP input boxes -->
                  <div
                    v-for="(digit, index) in otpDigits"
                    :key="index"
                    class="relative"
                  >
                    <input
                      v-model="otpDigits[index]"
                      @input="onOtpInput($event, index)"
                      @keydown="onOtpKeydown($event, index)"
                      @paste="onOtpPaste($event)"
                      type="text"
                      class="h-12 w-12 rounded-md border border-gray-300 text-center text-2xl font-bold"
                      maxlength="1"
                      :autofocus="index === 0"
                    />
                  </div>
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
                    Verifying OTP...
                  </div>
                  <div v-else>Verify OTP</div>
                </button>
              </form>

              <!-- Resend OTP Button with Countdown -->
              <div v-if="countdown <= 0">
                <button
                  class="btn mt-4 w-full text-sm text-[#49479F] bg-white border border-[#49479F] rounded-lg py-2"
                  @click="resendOtp"
                  :disabled="alertState.loadingresend"
                >
                  
                  <div v-if="alertState.loadingresend" class="align-center -mt-1 flex items-center">
                    <span class="loading loading-spinner mr-2"></span>
                    Resend OTP...
                  </div>
                  <div v-else>Resend OTP</div>
                </button>
              </div>
              
              <div v-else>
                <span class="text-sm text-gray-500">
                  You can resend OTP in {{ countdown }} seconds.
                </span>
              </div>
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
  import { usePostOTPVerification } from '~/composables/useFetchData'
  const route = useRoute()
  const email = route.query.email
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
    loadingresend: false,
    nextAttempt: null,
  })

  const toast = useToast()

  const { handleSubmit } = useForm({
    validationSchema: yup.object({}),
  })

  // Array to store each OTP digit
  const otpDigits = ref(Array(6).fill(''))
  const countdown = ref(0)
  const countdownInterval = ref(null)
  const resendAttempts = ref(0)
  const maxRetries = 3  // Max resend attempts

  const startCountdown = () => {
    countdown.value = 10 // Set the countdown to 60 seconds
    countdownInterval.value = setInterval(() => {
      if (countdown.value > 0) {
        countdown.value -= 1
      } else {
        clearInterval(countdownInterval.value)
      }
    }, 1000)
  }
  const formatNextAttempt = (dateString) => {
    const nextAttemptDate = new Date(dateString)
    const now = new Date()
    const diffInSeconds = Math.floor((nextAttemptDate - now) / 1000)
    
    if (diffInSeconds <= 0) return 'now'
    
    const hours = Math.floor(diffInSeconds / 3600)
    const minutes = Math.floor((diffInSeconds % 3600) / 60)
    
    if (hours > 0) {
      return `${hours} hour${hours > 1 ? 's' : ''} and ${minutes} minute${minutes !== 1 ? 's' : ''}`
    }
    return `${minutes} minute${minutes !== 1 ? 's' : ''}`
  }
  const resendOtp = async () => {
    alertState.loadingresend = true
    alertState.show = false
    try {
      await useResendOTP('/send-otp', { email }).then((res) => {
        
        if (res.status === 200) {
          toast.add({
            icon: 'i-heroicons-check-circle',
            title: 'OTP Resent Successfully',
            color: 'green',
            timeout: 2000,
          })
          startCountdown()
        } else {
          alertState.show = true
          alertState.message = res._data.message
          alertState.nextAttempt = res._data.next_attempt
        }
      })
    } catch (error) {
      toast.add({
        icon: 'i-heroicons-x-circle',
        title: 'Failed to resend OTP',
        color: 'red',
        timeout: 2000,
      })
    } finally {
      alertState.loadingresend = false
    }
  }
  const onOtpInput = (event, index) => {
    const value = event.target.value
    if (value && index < otpDigits.value.length - 1) {
      // Automatically move to the next input field
      const nextInput = document.querySelectorAll('input')[index + 1]
      if (nextInput) nextInput.focus()
    }
  }

  const onOtpPaste = (event) => {
    const paste = event.clipboardData.getData('Text')
    if (paste.length === 6 && /^\d{6}$/.test(paste)) {
      otpDigits.value = paste.split('')
    }
    event.preventDefault() // Prevent the default paste behavior
  }

  const onOtpKeydown = (event, index) => {
    if (event.key === 'Backspace' && otpDigits.value[index] === '') {
      // Focus on the previous input field if Backspace is pressed on an empty field
      if (index > 0) {
        const prevInput = document.querySelectorAll('input')[index - 1]
        if (prevInput) prevInput.focus()
      }
    }
  }



  const onSubmit = handleSubmit(async () => {
    alertState.loading = true

    const otp = otpDigits.value.join('') // Join OTP digits into a single string

    try {
      await usePostOTPVerification('/verify-otp', { otp, email }).then(
        (res) => {
          if (res.status === 200) {
            alertState.show = false
            toast.add({
              icon: 'i-heroicons-check-circle',
              title: 'OTP Verified Successfully',
              color: 'green',
              timeout: 2000,
            })
            navigateTo('/login') // Redirect to login page or another page
          } else {
            alertState.show = true
            alertState.message = 'Invalid OTP. Please try again.'
          }
        },
      )
    } catch (error) {
      alertState.show = true
      alertState.message = 'Something went wrong. Please try again later.'
    } finally {
      alertState.loading = false
    }
  onMounted(() => {
    startCountdown()
  })

  onUnmounted(() => {
    if (countdownInterval.value) {
      clearInterval(countdownInterval.value)
    }
  })
  })
</script>

<style>
  .h1 {
    font-weight: 800;
    line-height: 1;
  }
</style>
