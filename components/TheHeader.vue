<template>
  <div
    class="header z-10 bg-transparent absolute top-0 inset-x-0 navbar bg-base-100  max-w-[1630px] md:px-14 mx-auto md:py-8 font-inter font-bold">
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
          <svg class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" />
          </svg>
        </div>
        <ul tabindex="0" class="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
          <li>
            <NuxtLink :to="{ path: '/', hash: '#home' }">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="{ path: '/', hash: '#feature' }">Feature</NuxtLink>
          </li>
          <li><a>Gallery</a></li>
          <li><a>Pricing</a></li>
          <li><a>Login</a></li>
        </ul>
      </div>
      <a class="text-xl">
        <img src="/logos/pink_logo.svg" alt="Invitations Plus Logo" width="150" height="30" />
      </a>
    </div>
    <div class="navbar-end">
      <div class="navbar-center hidden lg:flex">
        <ul
          class="style-none menu menu-horizontal px-1 text-lg flex gap-3 flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white">
          <li>
            <NuxtLink :to="{ path: '/', hash: '#home' }" class="link-active style-none">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="{ path: '/', hash: '#feature' }" class="link-nav style-none">Feature</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="{ path: '/', hash: '#thema' }" class="link-nav style-none">Gallery</NuxtLink>
          </li>
        </ul>
      </div>
      <div class="hidden lg:ml-8 lg:flex lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8">
        <div v-if="statusUser === 'authenticated'">
          <div class="dropdown dropdown-hover">
            <div tabindex="0" role="button">
              <div class=" w-8 h-8 p-[1px] rounded-full ring-2 ring-[#D2C6FA] avatar online placeholder">
                <div class="bg-neutral text-neutral-content rounded-full w-16">
                  <UAvatar :alt="dataUser.name" :src="dataUser.picture" size="sm" />
                </div>
              </div>
            </div>
            <div tabindex="0" class="dropdown-content z-[1] menu bg-base-100 bg-transparent">
              <div
                class="z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600">
                <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div class=" text-[#49479F] truncate">{{ dataUser.name }}</div>
                  <div class="font-medium truncate">{{ dataUser.email }}</div>
                </div>
                <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="avatarButton">
                  <li>
                    <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:text-white">Dashboard</a>
                  </li>
                  <li>
                    <NuxtLink to="/settings" class="block px-4 py-2 hover:bg-gray-100 dark:hover:text-white">Settings
                    </NuxtLink>
                  </li>
                </ul>
                <div class="py-1">
                  <a @click="openModal"
                    class="block px-4 py-2 text-sm text-[#FAA6B0] hover:bg-gray-100 dark:text-gray-200 dark:hover:text-white cursor-pointer">Sign
                    out</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <NuxtLink v-else to="/login" class=" w-15 text-lg">Sign in</NuxtLink>


        <NuxtLink :to="{ path: '/', hash: '#pricing' }"
          class="inline-flex justify-center rounded-lg text-sm font-semibold -my-2.5 ml-8" href="/all-access">
          <span
            class="inline-flex items-center justify-center w-full px-4 py-3 text-base font-bold leading-6 text-slate-900 bg-[#F8D075] border border-transparent rounded-full md:w-auto hover:bg-[#facc62] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fdd26d] font-inter ">
            Get all-access
            <Icon name="ep:arrow-right-bold" class="ml-2" />
          </span>
        </NuxtLink>
      </div>
    </div>
  </div>
  <BaseModals :open-modal="isOpen" @close="isOpen = false" @confirm="handleSignOut()" />
</template>

<script setup>
import {
  useGetSession,
} from '~/composables/useFetchData'

import { useComplateRegis } from '@/store/index'

const { signOut, status } = useAuth()

const statusUser = status.value
const dataUser = reactive({
  name: '',
  email: '',
  picture: '',
})
const isOpen = ref(false)

const complateRegis = useComplateRegis()

function openModal() {
  isOpen.value = true
}

async function handleSignOut() {
  await signOut();
}

if (statusUser === 'authenticated') {
  useGetSession('/api/getSession').then((res) => {
    dataUser.name = res.data.username
    dataUser.email = res.data.email
    dataUser.picture = res.data.picture

    if (!!res.data.username && !!res.data.email && !!res.data.name && !!res.data.no_phone && !!res.data.gender && !!res.data.address) {
      complateRegis.completion = true
    } else {
      complateRegis.completion = false
    }
  })
}
</script>

<style scoped>
.header {
  transform: translateY(0);
  transition: transform 300ms linear;
}

.header.is-hidden {
  transform: translateY(-100%);
}

.style-none {
  background-color: transparent !important;
}

.link-nav {
  @apply block py-2 px-3 text-gray-900 rounded hover:bg-transparent active:text-[#49479F] bg-transparent md:border-0 md:hover:text-[#49479F] md:p-0
}

.link-active {
  @apply block py-2 px-3 text-white bg-[#49479F] rounded active:text-[#49479F] hover:bg-transparent bg-transparent md:text-[#49479F] md:p-0
}
</style>
