<template>
  <div class="flex justify-between">
    <div
      tabindex="0"
      role="button"
      class="mr-4 text-slate-800 lg:hidden"
      @click="isOpen = true"
    >
      <svg
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h8m-8 6h16"
        />
      </svg>
    </div>
    <p class="-mt-2 mb-7 text-[22px] font-[600] text-slate-800">
      {{ activePage.page }}{{ activePage.child }}
    </p>
    <button
      v-show="activePage.create"
      class="btn btn-sm -mt-[6px] ml-3 bg-[#F8D075] text-slate-800 hover:bg-[#ccaa5a] disabled:cursor-not-allowed"
      @click="openModal()"
      :disabled="!sessionData.enabled"
    >
      <Icon name="material-symbols:add" class="mr-1 text-xl" />
      Add Project
    </button>
    <div
      v-if="sessionData.role === 'admin'"
      v-show="activePage.export"
      class="btn btn-sm -mt-[6px] ml-3"
      @click="openModal()"
    >
      <Icon name="vscode-icons:file-type-excel" class="text-2xl" /> Export
    </div>
  </div>
  <USlideover v-model="isOpen">
    <div class="flex-1 p-4">
      <UButton
        color="gray"
        variant="ghost"
        size="sm"
        icon="i-heroicons-x-mark-20-solid"
        class="absolute end-5 top-5 z-10 flex sm:hidden"
        square
        padded
        @click="isOpen = false"
      />
      <Placeholder class="h-screen" />
      <div
        class="relative h-screen flex-shrink-0 flex-col items-stretch border-b border-gray-200 lg:flex lg:w-[250px] lg:border-b-0 lg:border-r"
      >
        <div
          class="flex h-[4rem] min-w-0 flex-shrink-0 items-center gap-x-4 border-b !border-transparent border-gray-200 px-4"
        >
          <div
            class="flex min-w-0 flex-1 items-center justify-between gap-x-1.5"
          >
            <div class="flex min-w-0 flex-1 items-stretch gap-1.5">
              <div class="relative inline-flex w-full text-left rtl:text-right">
                <div
                  aria-haspopup="menu"
                  aria-expanded="false"
                  class="inline-flex w-full"
                  role="button"
                >
                  <button
                    type="button"
                    class="focus-visible:ring-primary-500 inline-flex w-full flex-shrink-0 items-center gap-x-1.5 rounded-md px-2.5 py-3 text-sm font-medium text-gray-700 hover:bg-[#fbf9ff] hover:text-[#49479F] focus:outline-none focus-visible:outline-0 focus-visible:ring-2 focus-visible:ring-inset disabled:cursor-not-allowed disabled:opacity-75"
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
                <div
                  v-for="navigation in NAVIGATION_MENU"
                  :key="navigation.label"
                >
                  <li tag="li" class="!overflow-visible">
                    <div default-open="true" as="div">
                      <div as="template">
                        <div class="flex">
                          <NuxtLink
                            :to="navigation.link"
                            class="focus-visible:before:ring-primary-500 group relative flex w-full items-center gap-1.5 rounded-md px-2.5 py-3 text-sm font-medium text-slate-600 before:absolute before:inset-px before:rounded-md focus:outline-none focus-visible:outline-none focus-visible:before:ring-2 focus-visible:before:ring-inset disabled:cursor-not-allowed disabled:opacity-75"
                            :class="
                              navigation.label == activePage.page
                                ? 'text-[#49479F] before:bg-[#F4F0FD]'
                                : 'hover:text-[#49479F] hover:before:bg-[#fbf9ff] '
                            "
                            draggable="false"
                          >
                            <Icon
                              :name="navigation.icon"
                              class="relative h-5 w-5 flex-shrink-0"
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
                  class="flex w-full border-t border-solid border-gray-200"
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
                    class="focus-visible:before:ring-primary-500 group relative flex w-full items-center gap-1.5 rounded-md px-2.5 py-3 text-sm font-medium text-gray-500 before:absolute before:inset-px before:rounded-md before:bg-[#49479F] hover:before:bg-[#393963] focus:outline-none focus-visible:outline-none focus-visible:before:ring-2 focus-visible:before:ring-inset disabled:cursor-not-allowed disabled:opacity-75"
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
            class="absolute inset-x-0 mx-auto h-full w-px transition duration-200 group-hover:bg-gray-300"
          ></div>
        </div>
      </div>
    </div>
  </USlideover>
</template>

<script setup>
  import { NAVIGATION_MENU } from '~/common/constant/navigation'
  import { useActivePage, useSessionData } from '@/store/index'

  const { signOut, status } = useAuth()

  const statusUser = status.value
  const dataUser = reactive({
    name: '',
    email: '',
    picture: '',
    role: 'user',
  })

  const sessionData = useSessionData()
  const activePage = useActivePage()
  const isOpen = ref(false)
  const emit = defineEmits(['open'])
  function openModal() {
    emit('open')
  }

  if (statusUser === 'authenticated') {
    await useGetSession('/user/getSession').then((res) => {
      dataUser.name = res.data.username
      dataUser.email = res.data.email
      dataUser.picture = res.data.picture
      dataUser.role = res.data.role
      sessionData.subscribe = res.data.latest_transaction?.subscribe
      sessionData.enabled = res.data.enabled
      sessionData.subscribe_status = res.data.latest_transaction?.status
      if (
        !!res.data.username &&
        !!res.data.email &&
        !!res.data.name &&
        !!res.data.no_phone &&
        !!res.data.gender &&
        !!res.data.address
      ) {
        sessionData.id = res.data.id
        sessionData.name = res.data.name
        sessionData.email = res.data.email
        sessionData.phone = res.data.no_phone
      }
    })
  }
</script>
