<template>
  <BaseHeaderNavigation @open="router.push(`/Builder?id=${makeid(25)}`)" />
  <UContainer
    v-if="stateLoad"
    class="flex h-[80vh] items-center justify-center text-center"
  >
    <span class="loading loading-spinner loading-lg text-[#49479F]"></span>
  </UContainer>
  <div v-else>
    <div class="z-20 grid grid-cols-1 gap-8 md:grid-cols-4">
      <div
        v-for="projects_data in project"
        :key="projects_data.id"
        class="card card-compact h-full w-full bg-base-100 shadow-xl"
      >
        <figure class="absolute h-52">
          <div class="ItemPreviewIframe-module_root-EQCRj" data-loaded="true">
            <div data-picture="true">
              <picture>
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/5/59/Empty.png"
                  class="ItemPreviewImage-module_root-0gttw"
                  loading="lazy"
                />
              </picture>
            </div>
            <iframe
              sandbox="allow-forms allow-modals allow-pointer-lock allow-same-origin allow-scripts allow-presentation"
              frameborder="0"
              loading="lazy"
              scrolling="no"
              :src="
                'http://localhost:3000/Builder/Preview?id=' + projects_data.id
              "
              tabindex="-1"
              title="Tailwind alpine component - Modal Sidebar"
            ></iframe>
          </div>
        </figure>
        <NuxtLink
          :to="`${projects_data.invitation?.invite_link}?to=Guest` || 'kosong'"
          target="_blank"
        >
          <div class="bgcolor relative h-52 items-center rounded-t-xl">
            <div class="iconCenter cursor-pointer">
              <div
                class="flex flex-row transition duration-500 hover:scale-125"
              >
                <Icon
                  name="ic:outline-search"
                  class="mr-2 text-3xl text-[#49479F]"
                />
                <div class="font-inter text-lg font-bold">Preview</div>
              </div>
            </div>
          </div>
        </NuxtLink>
        <div class="card-body">
          <h2 class="card-title">
            {{ projects_data.project_name }}
            <UBadge
              v-if="projects_data.invitation?.status == 'publish'"
              color="red"
              variant="subtle"
              >LIVE</UBadge
            >
          </h2>
          <p class="-mt-1">
            Last updated {{ converter(projects_data.updated_at) }}
          </p>
          <div class="card-actions mt-2 flex justify-end">
            <NuxtLink
              :to="`Builder?id=${projects_data.id}`"
              class="btn btn-sm rounded-xl bg-[#F8D075] hover:bg-[#c5a24f]"
            >
              <span
                class="i-heroicons-pencil-square relative h-5 w-5 flex-shrink-0 text-[#705a27]"
              ></span>
            </NuxtLink>
            <Menu as="div">
              <div>
                <MenuButton
                  class="btn btn-sm inline-flex w-full justify-center rounded-xl bg-[#49479F] text-sm font-medium text-white hover:bg-[#252463] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
                >
                  Settings
                  <span
                    class="i-heroicons-cog-6-tooth relative h-5 w-5 flex-shrink-0 text-[#ffffff]"
                  ></span>
                </MenuButton>
              </div>

              <transition
                enter-active-class="transition duration-100 ease-out"
                enter-from-class="transform scale-95 opacity-0"
                enter-to-class="transform scale-100 opacity-100"
                leave-active-class="transition duration-75 ease-in"
                leave-from-class="transform scale-100 opacity-100"
                leave-to-class="transform scale-95 opacity-0"
              >
                <MenuItems
                  class="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black/5 focus:outline-none"
                >
                  <div class="px-1 py-1">
                    <MenuItem v-slot="{ active }">
                      <button
                        :class="[
                          active ? 'bg-[#f0f0f0] ' : '',
                          'group flex w-full items-center rounded-md px-2 py-2 text-sm text-black',
                        ]"
                        @click="modalSetting(projects_data.id)"
                      >
                        <span
                          class="i-heroicons-wrench-screwdriver relative mr-2 h-5 w-5 flex-shrink-0 text-[#49479F]"
                        ></span>
                        Settings
                      </button>
                    </MenuItem>
                    <MenuItem v-slot="{ active }">
                      <button
                        :class="[
                          active ? 'bg-[#f0f0f0] ' : '',
                          'group flex w-full items-center rounded-md px-2 py-2 text-sm text-black',
                        ]"
                        @click="
                          router.push(`/Dashboard/Guest?id=${projects_data.id}`)
                        "
                      >
                        <span
                          class="i-heroicons-user-group relative mr-2 h-5 w-5 flex-shrink-0 text-[#49479F]"
                        ></span>
                        Guests
                      </button>
                    </MenuItem>
                  </div>

                  <div class="px-1 py-1">
                    <MenuItem v-slot="{ active }">
                      <button
                        :class="[
                          active ? 'bg-[#fdd7d7] ' : 'text-gray-900',
                          'group flex w-full items-center rounded-md px-2 py-2 text-sm',
                        ]"
                        class="text-[#b83f3f]"
                        @click="openModalDelete(projects_data.id)"
                      >
                        <span
                          class="i-heroicons-trash relative mr-2 h-5 w-5 flex-shrink-0 text-[#b83f3f]"
                        ></span>
                        Delete
                      </button>
                    </MenuItem>
                  </div>
                </MenuItems>
              </transition>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  </div>
  <BaseModalForm
    :open-modal="state.isOpenForm"
    title-modal="Setting Project"
    desc-modal="This form is used to add and update the music list."
    @close="state.isOpenForm = false"
  >
    <template #body>
      <SettingProject
        :id-project="state.idProjectModal"
        @close="state.isOpenForm = false"
        @confirm="state.isOpenForm = false"
      />
    </template>
  </BaseModalForm>
  <BaseModal
    :open-modal="state.isOpenDelete"
    title-modal="Confirm to delete"
    desc-modal="Are you sure you want to delete your data ? "
    icon-modal="i-heroicons-exclamation-triangle"
    text-confirm="Delete"
    type-modal="danger"
    @close="state.isOpenDelete = false"
    @confirm="confirmDelete()"
  />
  <UNotifications />
</template>
<script setup>
  import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/vue'
  import { useActivePage } from '@/store/index'
  import { usePostData } from '~/composables/useFetchData'

  definePageMeta({
    layout: 'editor-default',
    middleware: 'auth',
  })

  const project = ref()
  const stateLoad = ref(true)
  const router = useRouter()
  const state = reactive({
    isOpenForm: false,
    idProjectModal: '',
    isOpenDelete: false,
    idItems: '',
  })

  function converter(params) {
    const utcTime = new Date(params)
    let day = utcTime.getDate()
    let month = utcTime.getMonth() + 1
    let year = utcTime.getFullYear()
    let hours = utcTime.getHours()
    let minutes = utcTime.getMinutes()
    let seconds = utcTime.getSeconds()

    return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`
  }

  function makeid(length) {
    let result = ''
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    let counter = 0
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
      counter += 1
    }
    return result
  }

  function modalSetting(id) {
    state.isOpenForm = true
    state.idProjectModal = id
  }

  function openModalDelete(id) {
    state.idItems = id
    state.isOpenDelete = true
  }

  async function confirmDelete() {
    await usePostData(`/project/destroy/${state.idItems}`)
    state.isOpenDelete = false
    stateLoad.value = true
    await usePostData('/project/getByUserId').then((res) => {
      if (res.status == 200) {
        project.value = res._data.projects
      }
    })
    stateLoad.value = false
  }

  onMounted(async () => {
    const activePage = useActivePage()
    activePage.page = 'Dashboard'
    activePage.create = true
    activePage.child = ''
    activePage.formCreate = `/Builder?id=${makeid(25)}`

    await usePostData('/project/getByUserId').then((res) => {
      if (res.status == 200) {
        project.value = res._data.projects
      }
    })
    stateLoad.value = false
  })
</script>
<style>
  .ItemPreviewIframe-module_root-EQCRj[data-loaded] iframe {
    opacity: 1;
  }

  .ItemPreviewIframe-module_root-EQCRj iframe {
    width: calc(200% + 5px);
    height: calc(200% + 5px);
    border: 0;
    position: absolute;
    top: -2px;
    left: -2px;
    transform: scale(0.5);
    transform-origin: top left;
    opacity: 0;
    transition: opacity 0.4s linear 0.1s;
  }

  .ContentGridFancy_root-sYT5P[data-has-prev='false'] {
    --minor-offset: calc(-55px - 1.5rem);
  }

  .ItemPreviewIframe-module_root-EQCRj {
    padding-top: -15.25%;
    position: relative;
  }

  .ContentGridFancy_root-sYT5P[data-has-prev='false'] {
    --minor-offset: calc(-55px - 1.5rem);
  }

  .ContentGridFancy_fancyGridPage-xdsEK {
    grid-area: 1 / 1;
    padding: 0 1.5rem;
    --position-offset: 0%;
    transform: translateX(var(--position-offset));
    --offset: calc(var(--position-offset, 0%) + var(--minor-offset, 0%));
    transform: translateX(var(--offset));
    transition:
      transform 0.3s cubic-bezier(0.7, 0, 0.3, 1),
      opacity 0.4s linear;
    animation: ContentGridFancy_page-fade-in-cJhjD 0.3s linear 0.2s backwards;
  }

  .PageLayout-module_root-rNerP {
    display: grid;
    width: 100%;
    min-height: 80vh;
    grid-template:
      'sidebar header' minmax(0, var(--header-row-height))
      'sidebar main' minmax(auto, 1fr)
      'sidebar footer' minmax(0, auto) / var(--sidebar-column-width) minmax(0, 1fr);
    --sidebar-column-width: auto;
    --header-row-height: calc(var(65px) + 9px);
  }

  .bgcolor {
    backdrop-filter: blur(1px);
    background: rgba(42, 42, 42, 0.22);
  }

  .iconCenter {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
</style>
