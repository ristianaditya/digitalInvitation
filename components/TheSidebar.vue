<template>
  <div
    class="relative hidden w-full flex-shrink-0 flex-col items-stretch border-b border-gray-200 lg:flex lg:w-[250px] lg:border-b-0 lg:border-r dark:border-gray-800"
  >
    <div
      class="flex h-[4rem] min-w-0 flex-shrink-0 items-center gap-x-4 border-b !border-transparent border-gray-200 px-4 dark:border-gray-800"
    >
      <div class="flex min-w-0 flex-1 items-center justify-between gap-x-1.5">
        <div class="flex min-w-0 flex-1 items-stretch gap-1.5">
          <button
            type="button"
            class="focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex flex-shrink-0 items-center gap-x-1.5 rounded-md p-1.5 text-sm font-medium text-gray-700 hover:bg-[#fbf9ff] hover:text-[#49479F] focus:outline-none focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-inset disabled:cursor-not-allowed disabled:opacity-75 lg:hidden dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
            aria-label="Open sidebar"
          >
            <span
              class="i-heroicons-bars-3-20-solid h-5 w-5 flex-shrink-0"
              aria-hidden="true"
            ></span>
          </button>
          <div class="relative inline-flex w-full text-left rtl:text-right">
            <div
              aria-haspopup="menu"
              aria-expanded="false"
              class="inline-flex w-full"
              role="button"
            >
              <button
                type="button"
                class="focus-visible:ring-primary-500 dark:focus-visible:ring-primary-400 inline-flex w-full flex-shrink-0 items-center gap-x-1.5 rounded-md px-2.5 py-3 text-sm font-medium text-gray-700 hover:bg-[#fbf9ff] hover:text-[#49479F] focus:outline-none focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-inset disabled:cursor-not-allowed disabled:opacity-75 dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-white"
              >
                <img
                  src="/logos/pink_logo.svg"
                  alt="Invitations Plus Logo"
                  width="115"
                  height="10"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="relative flex w-full flex-1 flex-col overflow-hidden">
      <div class="flex min-h-0 flex-grow flex-col gap-y-2 py-2">
        <div class="flex flex-1 flex-col gap-y-2 overflow-y-auto px-4">
          <ul class="relative !min-h-[auto] !min-w-[auto]">
            <div v-for="navigation in NAVIGATION_MENU" :key="navigation.label">
              <li tag="li" class="!overflow-visible">
                <div default-open="true" as="div">
                  <div as="template">
                    <div class="flex">
                      <NuxtLink
                        :to="navigation.link"
                        class="focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 group relative flex w-full items-center gap-1.5 rounded-md px-2.5 py-3 text-sm font-medium before:absolute before:inset-px before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:ring-2 focus-visible:before:ring-inset disabled:cursor-not-allowed disabled:opacity-75 dark:text-white dark:before:bg-gray-800 dark:focus-visible:outline-none"
                        :class="
                          navigation.label == activePage.page
                            ? 'text-[#49479F] before:bg-[#F4F0FD]'
                            : 'hover:text-[#49479F] hover:before:bg-[#fbf9ff] '
                        "
                        draggable="false"
                      >
                        <Icon
                          :name="navigation.icon"
                          class="relative h-5 w-5 flex-shrink-0 dark:text-white"
                          :class="
                            navigation.label == activePage.page
                              ? 'text-[#49479F]'
                              : ''
                          "
                        />
                        <span class="relative truncate text-sm"
                          ><span class="sr-only"> Current page: </span>
                          {{ navigation.label }}</span
                        >
                      </NuxtLink>
                    </div>
                  </div>
                </div>
              </li>
            </div>
          </ul>
          <div class="flex-1"></div>
          <div
            class="align-center sticky bottom-0 flex w-full flex-row items-center text-center"
          >
            <div
              class="flex w-full border-t border-solid border-gray-200 dark:border-gray-800"
            ></div>
          </div>
        </div>
        <div
          class="flex flex-shrink-0 items-center justify-between gap-x-1.5 px-4"
        >
          <div class="relative inline-flex w-full text-left rtl:text-right">
            <div
              id="headlessui-menu-button-EW59Id7hGU:2"
              aria-haspopup="menu"
              aria-expanded="false"
              class="inline-flex w-full"
              role="button"
            >
              <NuxtLink
                to="/"
                class="focus-visible:before:ring-primary-500 dark:focus-visible:before:ring-primary-400 group relative flex w-full items-center gap-1.5 rounded-md px-2.5 py-3 text-sm font-medium text-gray-500 before:absolute before:inset-px before:rounded-md before:bg-[#49479F] hover:before:bg-[#393963] focus:outline-none focus-visible:outline-none focus-visible:before:ring-2 focus-visible:before:ring-inset disabled:cursor-not-allowed disabled:opacity-75 dark:text-gray-400 dark:hover:text-white dark:focus-visible:outline-none"
                draggable="false"
                href="/settings/members"
              >
                <span
                  class="i-heroicons-arrow-uturn-left relative h-5 w-5 flex-shrink-0 text-gray-100"
                ></span>
                <span class="relative truncate text-sm text-gray-100">
                  Back Home</span
                >
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
      class="group absolute inset-y-0 -right-[5px] z-50 hidden h-full w-[9px] cursor-col-resize select-none bg-transparent md:block"
    >
      <div
        class="absolute inset-x-0 mx-auto h-full w-px transition duration-200 group-hover:bg-gray-300 dark:group-hover:bg-gray-700"
      ></div>
    </div>
  </div>
</template>
<script setup>
  import { NAVIGATION_MENU } from '~/common/constant/navigation'
  import { useActivePage } from '@/store/index'
  const activePage = useActivePage()
</script>
