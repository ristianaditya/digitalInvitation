<template>
  <div class="font-[sans-serif] bg-[#F4F0FD] text-[#333]">
    <div class="min-h-screen flex fle-col items-center justify-center py-6 px-4">
      <div class="grid md:grid-cols-2 items-center gap-10 max-w-6xl w-full">
        <div class="max-md:text-center">
          <div
            class="mt-12 mb-6 animate-fade-up animate-delay-1000 animate-ease-linear animate-normal col-start-1 row-start-1 h-7 leading-7 "
            aria-hidden="true">
            <a href="#_"
              class="inline-block px-4 py-2 mb-3 mx-auto text-sm text-[#2C1854] bg-[#D2C6FA] rounded-full pointer-events-none shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transform -skew-y-1 font-inter font-bold">
              Welcome to Invite Plus
            </a>
          </div>
          <h1
            class=" h1 col-start-1 row-start-2 mt-2 max-w-[36rem] text-4xl tracking-tight text-slate-900 sm:text-[3.7rem] xl:max-w-[50.5rem] font-extrabold mb-2 leading-8">
            Join and Feel
            <span class="text-[#faa6b0]">Ease</span>
          </h1>
          <p class=" col-start-1 row-start-3 mt-4 max-w-lg font-medium text-lg leading-8 font-inter">Start your event
            with
            beautifully crafted
            digital invitations, combining elegance and user-friendliness. It's the perfect beginning for a memorable
            gathering!</p>
          <p class="text-sm mt-10">Do you have an account ?
            <NuxtLink to="/register" class="relative inline-block text-xs group ml-2">
              <span
                class="inline-flex items-center justify-center w-full px-4 py-1 text-xs font-bold leading-6 text-slate-900 bg-[#F8D075] border border-transparent rounded-full md:w-auto hover:bg-[#fdd26d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fdd26d] font-inter ">
                Register
                <Icon name="ep:arrow-right-bold" class="ml-2" />
              </span>
            </NuxtLink>
          </p>
        </div>
        <span class="relative inline-block text-[#49479F]">
          <svg viewBox="0 0 52 24" fill="currentColor"
            class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 text-blue-gray-100 lg:w-32 lg:-mt-5 sm:block ">
            <defs>
              <pattern id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69" x="0" y="0" width=".135" height=".30">
                <circle cx="1" cy="1" r=".7"></circle>
              </pattern>
            </defs>
            <rect fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)" width="52" height="24"></rect>
          </svg>
          <div
            class="relative space-y-6 bg-white p-12 rounded-3xl max-w-md md:ml-auto max-md:mx-auto w-full shadow-[5px_5px_0px_0px_rgb(210,198,250)] font-inter">
            <div class="relative flex flex-col text-black ">
              <h4 class="block text-3xl antialiased leading-snug tracking-normal text-blue-gray-900">
                <b>Sign in</b>
              </h4>
              <p class="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-900">
                Enter E-Mail / WhatsApp with the password that has been registered in invite+
              </p>
              <div v-if="pageError">
                <div class="p-4 mt-2 -mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
                  role="alert">
                  <span class="font-bold">Your email or password is incorrect !</span>
                </div>
              </div>
              <form class="max-w-screen-lg mt-8 mb-2" @submit.prevent="onSubmit">
                <div class="flex flex-col gap-6 mb-1">
                  <BaseInput name="email" type="email" label="Email" placeholder="name@mail.com"
                    icon="ic:round-email" />
                  <BaseInput name="password" type="password" label="Password" placeholder="*************"
                    icon="mdi:password" />
                </div>
                <button
                  class="mt-16 w-full select-none rounded-lg bg-[#49479F] py-4 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none inline-flex justify-center items-center"
                  type="submit">
                  <span v-show="login.status" class="loading loading-spinner mr-2"></span>
                  login
                </button>

              </form>
            </div>
          </div>
        </span>

      </div>
    </div>
    <UNotifications />
  </div>
</template>

<script setup>
import { useForm } from 'vee-validate';
import * as yup from 'yup';

definePageMeta({
  layout: false,
  auth: {
    unauthenticatedOnly: true,
  }
})

const { signIn } = useAuth()
const login = reactive({
  email: '',
  password: '',
  status: false
})
const pageError = ref(false)

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const isError = urlParams.get('validation');

pageError.value = isError

const { handleSubmit } = useForm({
  validationSchema: yup.object({
    email: yup.string().required().email(),
    password: yup.string().required().min(6),
  }),
});

const onSubmit = handleSubmit(async values => {
  try {
    login.status = true
    await signIn("credentials", values, { callbackUrl: '/' })
  } catch (error) {
    console.log('message', error);
  }
});

</script>

<style>
.h1 {
  font-weight: 800;
  line-height: 1;
}
</style>
