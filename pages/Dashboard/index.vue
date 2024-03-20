<template>
  <UContainer v-if="stateLoad" class=" text-center h-[80vh] flex justify-center items-center">
    <span class="loading loading-spinner text-[#49479F] loading-lg"></span>
  </UContainer>
  <div v-else>
    <div class="z-20 grid grid-cols-1 gap-8 md:grid-cols-4">
      <div v-for="projects_data in project" :key="projects_data.id"
        class="card card-compact w-full h-full bg-base-100 shadow-xl">

        <figure class="h-52 absolute">
          <div class="ItemPreviewIframe-module_root-EQCRj" data-loaded="true">
            <div data-picture="true">
              <picture>
                <source type="image/webp"
                  srcset="https://www.its.ac.id/tmesin/wp-content/uploads/sites/22/2022/07/no-image.png">
                <img src="https://www.its.ac.id/tmesin/wp-content/uploads/sites/22/2022/07/no-image.png"
                  class="ItemPreviewImage-module_root-0gttw" loading="lazy">
              </picture>
            </div><iframe
              sandbox="allow-forms allow-modals allow-pointer-lock allow-same-origin allow-scripts allow-presentation"
              frameborder="0" loading="lazy" scrolling="no"
              :src="'http://localhost:3000/Builder/Preview?id=' + projects_data.id" tabindex="-1"
              title="Tailwind alpine component - Modal Sidebar"></iframe>
          </div>
        </figure>
        <NuxtLink :to="`Builder?id=${projects_data.id}`">
          <div class=" h-52 relative rounded-t-xl bgcolor items-center">
            <div class="iconCenter cursor-pointer ">
              <div class="flex flex-row transition duration-500 hover:scale-125">
                <Icon name="ic:outline-search" class=" text-3xl mr-2 text-[#49479F] " />
                <div class=" font-bold text-lg font-inter ">Preview</div>
              </div>
            </div>
          </div>
        </NuxtLink>
        <div class="card-body">
          <h2 class="card-title">{{ projects_data.project_name }}</h2>
          <p class="-mt-1">Last updated {{ converter(projects_data.updated_at) }}</p>
          <div class="card-actions justify-end flex mt-2">
            <NuxtLink :to="`Builder?id=${projects_data.id}`"
              class="btn bg-[#F8D075] btn-sm rounded-xl hover:bg-[#c5a24f]">
              <span class="i-heroicons-eye flex-shrink-0 w-5 h-5 relative text-[#705a27] "></span>
            </NuxtLink>
            <button class="btn bg-[#49479F] text-gray-100 btn-sm rounded-xl hover:bg-[#252463]">
              <span class="i-heroicons-cog-6-tooth flex-shrink-0 w-5 h-5 relative text-gray-100 "></span>
              Setting
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useActivePage } from '@/store/index'
import {
  usePostData
} from '~/composables/useFetchData'

definePageMeta({
  layout: 'editor',
  middleware: 'auth',
  transition: '/Dashboard/Preview',
})

const project = ref()
const stateLoad = ref(true)

function converter(params) {
  const utcTime = new Date(params);
  let day = utcTime.getDate();
  let month = utcTime.getMonth() + 1; // Add 1 because getMonth() returns 0-11
  let year = utcTime.getFullYear();
  let hours = utcTime.getHours();
  let minutes = utcTime.getMinutes();
  let seconds = utcTime.getSeconds();

  return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
}

onMounted(async () => {
  const activePage = useActivePage()
  activePage.page = 'Dashboard'

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
  transform: scale(.5);
  transform-origin: top left;
  opacity: 0;
  transition: opacity .4s linear .1s;
}

.ContentGridFancy_root-sYT5P[data-has-prev=false] {
  --minor-offset: calc(-55px - 1.5rem);
}

.ItemPreviewIframe-module_root-EQCRj {
  padding-top: -15.25%;
  position: relative;
}

.ContentGridFancy_root-sYT5P[data-has-prev=false] {
  --minor-offset: calc(-55px - 1.5rem);
}

.ContentGridFancy_fancyGridPage-xdsEK {
  grid-area: 1 / 1;
  padding: 0 1.5rem;
  --position-offset: 0%;
  transform: translateX(var(--position-offset));
  --offset: calc(var(--position-offset, 0%) + var(--minor-offset, 0%));
  transform: translateX(var(--offset));
  transition: transform .3s cubic-bezier(.7, 0, .3, 1), opacity .4s linear;
  animation: ContentGridFancy_page-fade-in-cJhjD .3s linear .2s backwards;
}

.PageLayout-module_root-rNerP {
  display: grid;
  width: 100%;
  min-height: 80vh;
  grid-template:
    "sidebar header" minmax(0, var(--header-row-height)) "sidebar main" minmax(auto, 1fr) "sidebar footer" minmax(0, auto)/var(--sidebar-column-width) minmax(0, 1fr);
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
