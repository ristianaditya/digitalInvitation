<template>
  <div
    class="flex-col items-stretch relative w-full border-b lg:border-b-0 lg:border-r border-gray-200 dark:border-gray-800 lg:w-[250px] flex-shrink-0 hidden lg:flex">
    <div
      class="h-[4rem] flex-shrink-0 flex items-center border-b border-gray-200 dark:border-gray-800 px-4 gap-x-4 min-w-0 !border-transparent">
      <div class="flex items-center justify-between flex-1 gap-x-1.5 min-w-0">
        <div class="flex items-stretch gap-1.5 min-w-0 flex-1">
          <button type="button"
            class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-[#49479F] dark:hover:text-white hover:bg-[#fbf9ff] dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center lg:hidden"
            aria-label="Open sidebar">
            <span class="i-heroicons-bars-3-20-solid flex-shrink-0 h-5 w-5" aria-hidden="true"></span>
          </button>
          <div class="relative inline-flex text-left rtl:text-right w-full">
            <div aria-haspopup="menu" aria-expanded="false" class="inline-flex w-full" role="button">
              <button type="button"
                class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 px-2.5 py-3 text-gray-700 dark:text-gray-200 hover:text-[#49479F] dark:hover:text-white hover:bg-[#fbf9ff] dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center w-full">
                <img src="/logos/pink_logo.svg" alt="Invitations Plus Logo" width="115" height="10" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="flex flex-col w-full flex-1 relative overflow-hidden">
      <div class="flex-grow flex flex-col min-h-0 gap-y-2 py-2">
        <div class="flex-1 px-4 flex flex-col gap-y-2 overflow-y-auto">
          <ul class="relative !min-h-[auto] !min-w-[auto]">
            <div v-for="navigation in  NAVIGATION_MENU " :key="navigation.label">
              <li tag="li" class="!overflow-visible">
                <div default-open="true" as="div">
                  <div as="template">
                    <div class="flex">
                      <NuxtLink :to="navigation.link"
                        class="group relative flex items-center gap-1.5 px-2.5 py-3 w-full rounded-md font-medium text-sm focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75  dark:text-white dark:before:bg-gray-800 "
                        :class="navigation.label == activePage.page ? 'before:bg-[#F4F0FD] text-[#49479F]' : 'hover:before:bg-[#fbf9ff] hover:text-[#49479F] '"
                        draggable="false">
                        <Icon :name="navigation.icon" class="flex-shrink-0 w-5 h-5 relative dark:text-white"
                          :class="navigation.label == activePage.page ? 'text-[#49479F]' : ''" />
                        <span class="text-sm truncate relative"><span class="sr-only"> Current page: </span>
                          {{ navigation.label }}</span>
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </ul>
          <div class="flex-1"></div>
          <div class="flex items-center align-center text-center w-full flex-row sticky bottom-0">
            <div class="flex border-gray-200 dark:border-gray-800 w-full border-t border-solid"></div>
          </div>
        </div>
        <div class="flex items-center justify-between gap-x-1.5 flex-shrink-0 px-4">
          <div class="relative inline-flex text-left rtl:text-right w-full">
            <div id="headlessui-menu-button-EW59Id7hGU:2" aria-haspopup="menu" aria-expanded="false"
              class="inline-flex w-full" role="button">
              <NuxtLink to="/"
                class="group relative flex items-center gap-1.5 px-2.5 py-3 w-full rounded-md font-medium text-sm focus:outline-none focus-visible:outline-none dark:focus-visible:outline-none focus-visible:before:ring-inset focus-visible:before:ring-2 focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 before:absolute before:inset-px before:rounded-md disabled:cursor-not-allowed disabled:opacity-75 text-gray-500 dark:text-gray-400 dark:hover:text-white before:bg-[#49479F] hover:before:bg-[#393963]"
                draggable="false" href="/settings/members">
                <span class="i-heroicons-arrow-uturn-left flex-shrink-0 w-5 h-5 relative text-gray-100 "></span>
                <span class="text-sm truncate relative text-gray-100"> Back Home</span>
              </NuxtLink>
            </div>

          </div>
        </div>
      </div>
    </div>
    <div
      class="hidden md:block bg-transparent select-none absolute z-50 group w-[9px] h-full inset-y-0 -right-[5px] cursor-col-resize">
      <div
        class="group-hover:bg-gray-300 dark:group-hover:bg-gray-700 transition duration-200 absolute w-px h-full inset-x-0 mx-auto">
      </div>
    </div>
  </div>
</template>
<script setup>
import { NAVIGATION_MENU } from '~/common/constant/navigation'
import { useActivePage } from '@/store/index'
const activePage = useActivePage()
</script>
