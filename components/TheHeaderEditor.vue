<template>
  <div
    class="h-[4rem] flex-shrink-0 flex items-center border-b border-gray-200 dark:border-gray-800 px-4 gap-x-4 min-w-0">
    <div class="flex items-center justify-between flex-1 gap-x-1.5 min-w-0">
      <div class="flex items-stretch gap-1.5 min-w-0">
        <button type="button"
          class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center lg:hidden"
          aria-label="Open sidebar">
          <span class="i-heroicons-bars-3-20-solid flex-shrink-0 h-5 w-5" aria-hidden="true"></span>
        </button>
        <h1 class="flex items-center gap-1.5 font-semibold text-gray-900 dark:text-white min-w-0"><span
            class="truncate">{{ activePage.page }}</span></h1>
      </div>
      <div class="flex items-stretch flex-shrink-0 gap-1.5">
        <div class="relative inline-flex"><button type="button"
            class="focus:outline-none focus-visible:outline-0 disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium rounded-md text-sm gap-x-1.5 p-1.5 text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white hover:bg-gray-50 dark:hover:bg-gray-800 focus-visible:ring-inset focus-visible:ring-2 focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex items-center">
            <div class="relative inline-flex items-center justify-center flex-shrink-0"><span
                class="i-heroicons-bell w-5 h-5"></span><span
                class="absolute rounded-full ring-1 ring-white dark:ring-gray-900 flex items-center justify-center text-white dark:text-gray-900 font-medium whitespace-nowrap h-2 min-w-[0.5rem] text-[7px] p-0.5 top-0 right-0 bg-red-500 dark:bg-red-400"></span>
            </div>
          </button></div>
        <div data-headlessui-state="" class="relative inline-flex text-left rtl:text-right">
          <div disabled="false" id="headlessui-menu-button-EW59Id7hGU_29" aria-haspopup="menu" aria-expanded="false"
            data-headlessui-state="" class="inline-flex w-full" role="button"><button type="button"
              class="focus:outline-none disabled:cursor-not-allowed disabled:opacity-75 flex-shrink-0 font-medium text-sm gap-x-2 p-2 shadow-sm text-white dark:text-gray-900 bg-primary-500 hover:bg-primary-600 disabled:bg-primary-500 dark:bg-primary-400 dark:hover:bg-primary-500 dark:disabled:bg-primary-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-500 dark:focus-visible:outline-primary-400 inline-flex items-center ml-1.5 rounded-full"><span
                class="i-heroicons-plus flex-shrink-0 h-5 w-5" aria-hidden="true"></span></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useActivePage } from '@/store/index'

const activePage = useActivePage()
</script>
