<template>
  <div>
    <UContainer
      v-if="stateLoad"
      class="flex h-[80vh] items-center justify-center text-center"
    >
      <span class="loading loading-spinner loading-lg text-[#49479F]"></span>
    </UContainer>
    <div v-else>
      <div class="fixed bottom-4 left-0 right-0 z-50 m-auto w-fit px-2">
        <div
          class="relative flex justify-between overflow-hidden rounded-2xl bg-white px-2 shadow sm:px-6"
        >
          <nav
            class="scrollactive-nav flex min-w-min items-center justify-between sm:gap-6"
          >
            <a
              href="#home"
              class="scrollactive-item is-active grid h-16 w-12 grid-cols-1 grid-rows-1 pt-1 sm:h-16 sm:w-16"
              ><span class="sr-only">Beranda</span>
              <div
                class="col-[1/1] row-[1/1] flex h-14 flex-col items-center justify-center space-y-1 sm:w-16"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  width="24px"
                  height="24px"
                  class="h-6 w-6 flex-shrink-0 text-green-700"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  ></path>
                </svg>
                <div class="text-[0.60rem] text-green-700 sm:text-xs">
                  Beranda
                </div>
              </div></a
            ><a
              href="#profile"
              class="scrollactive-item grid h-16 w-12 grid-cols-1 grid-rows-1 pt-1 sm:h-16 sm:w-16"
              ><span class="sr-only">Profil</span>
              <div
                class="col-[1/1] row-[1/1] flex h-14 flex-col items-center justify-center space-y-1 sm:w-16"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  width="24px"
                  height="24px"
                  class="h-6 w-6 flex-shrink-0 text-green-700"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                  ></path>
                </svg>
                <div class="text-[0.60rem] text-green-700 sm:text-xs">
                  Profil
                </div>
              </div></a
            ><a
              href="#agenda"
              class="scrollactive-item grid h-16 w-12 grid-cols-1 grid-rows-1 pt-1 sm:h-16 sm:w-16"
              ><span class="sr-only">Acara</span>
              <div
                class="col-[1/1] row-[1/1] flex h-14 flex-col items-center justify-center space-y-1 sm:w-16"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  width="24px"
                  height="24px"
                  class="h-6 w-6 flex-shrink-0 text-green-700"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <div class="text-[0.60rem] text-green-700 sm:text-xs">
                  Acara
                </div>
              </div></a
            ><a
              href="#gallery"
              class="scrollactive-item grid h-16 w-12 grid-cols-1 grid-rows-1 pt-1 sm:h-16 sm:w-16"
              ><span class="sr-only">Galeri</span>
              <div
                class="col-[1/1] row-[1/1] flex h-14 flex-col items-center justify-center space-y-1 sm:w-16"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  width="24px"
                  height="24px"
                  class="h-6 w-6 flex-shrink-0 text-green-700"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                  ></path>
                </svg>
                <div class="text-[0.60rem] text-green-700 sm:text-xs">
                  Galeri
                </div>
              </div></a
            ><a
              href="#story"
              class="scrollactive-item grid h-16 w-12 grid-cols-1 grid-rows-1 pt-1 sm:h-16 sm:w-16"
              ><span class="sr-only">Cerita</span>
              <div
                class="col-[1/1] row-[1/1] flex h-14 flex-col items-center justify-center space-y-1 sm:w-16"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  width="24px"
                  height="24px"
                  class="h-6 w-6 flex-shrink-0 text-green-700"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                  ></path>
                </svg>
                <div class="text-[0.60rem] text-green-700 sm:text-xs">
                  Cerita
                </div>
              </div></a
            ><a
              href="#gift"
              class="scrollactive-item grid h-16 w-12 grid-cols-1 grid-rows-1 pt-1 sm:h-16 sm:w-16"
              ><span class="sr-only">Hadiah</span>
              <div
                class="col-[1/1] row-[1/1] flex h-14 flex-col items-center justify-center space-y-1 sm:w-16"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  width="24px"
                  height="24px"
                  class="h-6 w-6 flex-shrink-0 text-green-700"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
                  ></path>
                </svg>
                <div class="text-[0.60rem] text-green-700 sm:text-xs">
                  Hadiah
                </div>
              </div></a
            ><a
              href="#guestbook"
              class="scrollactive-item grid h-16 w-12 grid-cols-1 grid-rows-1 pt-1 sm:h-16 sm:w-16"
              ><span class="sr-only">Ucapan</span>
              <div
                class="col-[1/1] row-[1/1] flex h-14 flex-col items-center justify-center space-y-1 sm:w-16"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                  width="24px"
                  height="24px"
                  class="h-6 w-6 flex-shrink-0 text-green-700"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                  ></path>
                </svg>
                <div class="text-[0.60rem] text-green-700 sm:text-xs">
                  Ucapan
                </div>
              </div></a
            >
          </nav>
        </div>
      </div>
      <div v-html="iniHtml"></div>
    </div>
    <div ref="container"></div>
  </div>
</template>
<script setup>
  import { usePostData } from '~/composables/useFetchData'
  definePageMeta({
    layout: false,
    middleware: 'auth',
  })
  useHead({
    script: [{ src: 'https://cdn.tailwindcss.com', body: true }],
  })
  const route = useRoute()
  const stateLoad = ref(true)
  const project = reactive({
    html: '',
    css: '',
  })
  const iniHtml = computed(() => {
    return project.html
  })
  onMounted(async () => {
    await usePostData(`/invitations/getInvitation/${route.params.id}`).then(
      (res) => {
        project.html = JSON.parse(res._data.data[0].project.html)
        project.css = JSON.parse(res._data.data[0].project.css)
      },
    )
    const style = document.createElement('style')
    style.innerHTML = project.css
    document.head.appendChild(style)

    stateLoad.value = false
  })
</script>
