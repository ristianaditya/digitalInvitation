<template>
  <div
    class="header navbar inset-x-0 top-0 z-10 mx-auto max-w-[1630px] font-inter font-bold md:px-14 md:py-8"
  >
    <div class="navbar-start">
      <div class="dropdown">
        <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
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
        <ul
          tabindex="0"
          class="menu dropdown-content menu-sm z-[1] mt-3 w-52 rounded-box bg-slate-50 p-2 text-slate-700 shadow"
        >
          <li>
            <NuxtLink :to="{ path: '/', hash: '#home' }">Home</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="{ path: '/', hash: '#feature' }">Feature</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="{ path: '/', hash: '#thema' }">Gallery</NuxtLink>
          </li>
          <li>
            <NuxtLink :to="{ path: '/', hash: '#pricing' }">Pricing</NuxtLink>
          </li>
          <div v-if="statusUser === 'authenticated'">
            <li>
              <NuxtLink
                :to="{
                  path:
                    !!!sessionData.subscribe && dataUser.role != 'admin'
                      ? '/'
                      : dataUser.role == 'admin'
                        ? '/Dashboard/Admin'
                        : 'Dashboard',
                }"
                >Dashboard</NuxtLink
              >
            </li>
            <li>
              <NuxtLink :to="{ path: '/Settings' }">Setting</NuxtLink>
            </li>
            <li>
              <NuxtLink @click="openModal">Logout</NuxtLink>
            </li>
          </div>
          <li v-else><NuxtLink :to="{ path: '/Login' }">Login</NuxtLink></li>
        </ul>
      </div>
      <NuxtLink to="/" class="text-xl">
        <img
          src="/logos/pink_logo.svg"
          alt="Invitations Plus Logo"
          width="150"
          height="30"
        />
      </NuxtLink>
    </div>
    <div class="navbar-end">
      <div
        v-if="statusUser === 'authenticated'"
        class="mr-5 mt-1 flex lg:hidden"
      >
        <NuxtLink to="/settings">
          <div tabindex="0" role="button">
            <div
              class="avatar placeholder online h-8 w-8 rounded-full p-[1px] ring-2 ring-[#D2C6FA]"
            >
              <div class="w-16 rounded-full bg-neutral text-neutral-content">
                <UAvatar
                  v-if="!!dataUser.name || !!dataUser.picture"
                  :alt="dataUser.name"
                  :src="dataUser.picture"
                  size="sm"
                />
                <div
                  v-else
                  class="skeleton h-16 w-16 shrink-0 rounded-full"
                ></div>
              </div>
            </div>
          </div>
        </NuxtLink>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul
          class="style-none menu menu-horizontal mt-4 flex flex-col gap-3 rounded-lg border border-gray-100 bg-gray-50 p-4 px-1 text-lg md:mt-0 md:flex-row md:space-x-8 md:border-0 md:bg-white md:p-0 rtl:space-x-reverse"
        >
          <li>
            <NuxtLink
              :to="{ path: '/', hash: '#home' }"
              class="link-active style-none"
              >Home</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              :to="{ path: '/', hash: '#feature' }"
              class="link-nav style-none"
              >Feature</NuxtLink
            >
          </li>
          <li>
            <NuxtLink
              :to="{ path: '/', hash: '#thema' }"
              class="link-nav style-none"
              >Gallery</NuxtLink
            >
          </li>
        </ul>
      </div>
      <div
        class="hidden lg:ml-8 lg:flex lg:items-center lg:border-l lg:border-slate-900/15 lg:pl-8"
      >
        <div v-if="statusUser === 'authenticated'">
          <div class="dropdown dropdown-hover">
            <div tabindex="0" role="button">
              <div
                class="avatar placeholder online h-8 w-8 rounded-full p-[1px] ring-2 ring-[#D2C6FA]"
              >
                <div class="w-16 rounded-full bg-neutral text-neutral-content">
                  <UAvatar
                    v-if="!!dataUser.name || !!dataUser.picture"
                    :alt="dataUser.name"
                    :src="dataUser.picture"
                    size="sm"
                  />
                  <div
                    v-else
                    class="skeleton h-16 w-16 shrink-0 rounded-full"
                  ></div>
                </div>
              </div>
            </div>
            <div
              tabindex="0"
              class="menu dropdown-content z-[1] bg-base-100 bg-transparent"
            >
              <div
                class="z-10 w-44 divide-y divide-gray-100 rounded-lg bg-white shadow dark:divide-gray-600 dark:bg-gray-700"
              >
                <div class="px-4 py-3 text-sm text-gray-900 dark:text-white">
                  <div v-if="!!dataUser.name" class="truncate text-[#49479F]">
                    {{ dataUser.name }}
                  </div>
                  <div v-else class="skeleton mb-2 h-4 w-20"></div>
                  <div v-if="!!dataUser.email" class="truncate font-medium">
                    {{ dataUser.email }}
                  </div>
                  <div v-else class="skeleton h-4 w-28"></div>
                </div>
                <ul
                  class="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="avatarButton"
                >
                  <li>
                    <NuxtLink
                      :to="{
                        path:
                          !!!sessionData.subscribe && dataUser.role != 'admin'
                            ? '/'
                            : dataUser.role == 'admin'
                              ? '/Dashboard/Admin'
                              : 'Dashboard',
                      }"
                      class="block px-4 py-2 hover:bg-gray-100"
                      >Dashboard</NuxtLink
                    >
                  </li>
                  <li>
                    <NuxtLink
                      to="/settings"
                      class="block px-4 py-2 hover:bg-gray-100"
                      >Settings
                    </NuxtLink>
                  </li>
                </ul>
                <div class="py-1">
                  <a
                    class="block cursor-pointer px-4 py-2 text-sm text-[#FAA6B0] hover:bg-gray-100"
                    @click="openModal"
                    >Sign out</a
                  >
                </div>
              </div>
            </div>
          </div>
        </div>

        <NuxtLink v-else to="/login" class="w-15 text-lg">Sign in</NuxtLink>

        <div v-if="!!sessionData.subscribe">
          <div
            class="-my-2.5 ml-8 inline-flex justify-center rounded-lg text-sm font-semibold"
            href="/all-access"
          >
            <span
              v-if="sessionData.subscribe == 'DigitalDreamscape'"
              class="inline-flex w-full items-center justify-center rounded-full border border-transparent bg-[#D2C6FA] px-4 py-2 font-inter text-base font-bold leading-6 text-[#49479F] hover:bg-[#ccbdfd] focus:outline-none focus:ring-2 focus:ring-[#ccbdfd] focus:ring-offset-2 md:w-auto"
            >
              DreamScape
              <img
                src="/tier/tier3.png"
                alt=""
                class="ml-1 h-7 w-7 rounded-3xl"
              />
            </span>
            <span
              v-else-if="sessionData.subscribe == 'SparkleSend'"
              class="inline-flex w-full items-center justify-center rounded-full border border-transparent bg-[#F8D075] px-4 py-2 font-inter text-base font-bold leading-6 text-[#4e3f1b] hover:bg-[#facc62] focus:outline-none focus:ring-2 focus:ring-[#fdd26d] focus:ring-offset-2 md:w-auto"
            >
              {{ sessionData.subscribe }}
              <img
                src="/tier/tier2.png"
                alt=""
                class="ml-1 h-7 w-7 rounded-3xl"
              />
            </span>
            <span
              v-else-if="sessionData.subscribe == 'DigitalDazzle'"
              class="inline-flex w-full items-center justify-center rounded-full border border-transparent bg-[#e0e0e0] px-4 py-2 font-inter text-base font-bold leading-6 text-[#161616] hover:bg-[#cecece] focus:outline-none focus:ring-2 focus:ring-[#d6d6d6] focus:ring-offset-2 md:w-auto"
            >
              {{ sessionData.subscribe }}
              <img
                src="/tier/free.png"
                alt=""
                class="ml-1 h-7 w-7 rounded-3xl"
              />
            </span>
          </div>
        </div>
        <div v-else>
          <NuxtLink
            :to="{ path: '/', hash: '#pricing' }"
            class="-my-2.5 ml-8 inline-flex justify-center rounded-lg text-sm font-semibold"
            href="/all-access"
          >
            <span
              class="inline-flex w-full items-center justify-center rounded-full border border-transparent bg-[#F8D075] px-4 py-3 font-inter text-base font-bold leading-6 text-slate-900 hover:bg-[#facc62] focus:outline-none focus:ring-2 focus:ring-[#fdd26d] focus:ring-offset-2 md:w-auto"
            >
              Get all-access
              <Icon name="ep:arrow-right-bold" class="ml-2" />
            </span>
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
  <BaseModals
    :open-modal="isOpen"
    @close="isOpen = false"
    @confirm="handleSignOut()"
  />
</template>

<script setup>
  import { useGetSession } from '~/composables/useFetchData'

  import { useSessionData } from '@/store/index'

  const { signOut, status, getSession } = useAuth()

  const config = useRuntimeConfig()
  const sessionData = useSessionData()
  const session = await getSession()
  const statusUser = status.value
  const dataUser = reactive({
    name: '',
    email: '',
    picture: '',
    subscribe: '',
  })

  const isOpen = ref(false)

  function openModal() {
    isOpen.value = true
  }

  async function handleSignOut() {
    const { error } = await signOut({ redirect: false })
    if (error) {
    } else {
      return navigateTo(config.public.baseURL, { external: true })
    }
    await signOut()
  }

  if (statusUser === 'authenticated') {
    useGetSession('/user/getSession', session.accessToken).then((res) => {
      dataUser.name = res.data.username
      dataUser.email = res.data.email
      dataUser.picture = res.data.picture
      sessionData.subscribe = res.data.latest_transaction?.subscribe
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
    @apply block rounded bg-transparent px-3 py-2 text-gray-900 hover:bg-transparent active:text-[#49479F] md:border-0 md:p-0 md:hover:text-[#49479F];
  }

  .link-active {
    @apply block rounded bg-[#49479F] bg-transparent px-3 py-2 text-white hover:bg-transparent active:text-[#49479F] md:p-0 md:text-[#49479F];
  }

  .menu li > *:not(ul, .menu-title, details, .btn):active,
  .menu li > *:not(ul, .menu-title, details, .btn).active,
  .menu li > details > summary:active {
    border-radius: 0px !important;
    background-color: oklch(0.45 0.14 280.25);
  }

  .hover\:bg-gray-100:hover {
    border-radius: 0px !important;
  }
</style>
