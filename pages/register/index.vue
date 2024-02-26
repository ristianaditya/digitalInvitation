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
            Login for Account
            <span class="text-[#faa6b0]">Access</span>
          </h1>
          <p class=" col-start-1 row-start-3 mt-4 max-w-lg font-medium text-lg leading-8 font-inter">Immerse yourself in a
            hassle-free login journey with our intuitively designed login
            form. Effortlessly access your account.</p>
          <p class="text-sm mt-10">Don't have an account
            <a href="https://api.whatsapp.com/send?phone=6282129140149&text=Hello saya pengguna baru apakah kamu bisa menjelaskan tentang invitePlus ?"
              target="_blank" class="relative inline-block text-xs group ml-2">
              <span
                class="inline-flex items-center justify-center w-full px-4 py-1 text-xs font-bold leading-6 text-slate-900 bg-[#F8D075] border border-transparent rounded-full md:w-auto hover:bg-[#fdd26d] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fdd26d] font-inter ">
                Register
                <Icon name="ep:arrow-right-bold" class="ml-2" />
              </span>
            </a>
          </p>
        </div>
        <div
          class="space-y-6 bg-white p-12 rounded-3xl max-w-md md:ml-auto max-md:mx-auto w-full shadow-[5px_5px_0px_0px_rgb(210,198,250)]">
          <div class="relative flex flex-col text-gray-700 ">
            <h4
              class="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
              Sign In
            </h4>
            <p class="block mt-1 font-sans text-base antialiased font-normal leading-relaxed text-gray-700">
              Nice to meet you! Enter your account to Sign In.
            </p>
            <form class="max-w-screen-lg mt-8 mb-2">
              <div class="flex flex-col gap-6 mb-1">
                <h6
                  class="block w-full -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                  Email
                </h6>
                <div class="relative h-11 w-full min-w-[200px]">
                  <input type="text" placeholder="name@gmail.com" class="input input-bordered w-full" />
                </div>
                <h6
                  class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                  Password
                </h6>
                <div class="relative h-11 w-full min-w-[200px]">
                  <input type="text" placeholder="*************" class="input input-bordered w-full" />
                </div>
                <h6
                  class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                  Password
                </h6>
                <div class="relative h-11 w-full min-w-[200px]">
                  <input type="text" placeholder="*************" class="input input-bordered w-full" />
                </div>
                <h6
                  class="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
                  Password
                </h6>
                <div class="relative h-11 w-full min-w-[200px]">
                  <input type="text" placeholder="*************" class="input input-bordered w-full" />
                </div>
              </div>
              <div class=" inline-flex items-center">
                <label class="relative -ml-2.5 flex cursor-pointer items-center rounded-full p-3" htmlFor="remember">
                  <input type="checkbox"
                    class="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-gray-900 checked:bg-gray-900 checked:before:bg-gray-900 hover:before:opacity-10"
                    id="remember" />
                  <span
                    class="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                      stroke="currentColor" stroke-width="1">
                      <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </span>
                </label>
                <label class="mt-px font-light text-gray-700 cursor-pointer select-none" htmlFor="remember">
                  <p class="flex items-center font-sans text-sm antialiased font-normal leading-normal text-gray-700">
                    I agree the
                    <a href="#" class="font-medium transition-colors hover:text-gray-900">
                      &nbsp;Terms and Conditions
                    </a>
                  </p>
                </label>
              </div>
              <button
                class="mt-8 block w-full select-none rounded-lg bg-[#49479F] py-4 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button">
                sign in
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
definePageMeta({
  layout: false,
})
</script>
<style>
.h1 {
  font-weight: 800;
  line-height: 1;
}
</style>
