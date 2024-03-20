<template>
  <div class=" overflow-hidden max-h-[100vh]">
    <header class=" min-h-[64px] flex w-full items-center bg-[#F4F0FD] px-3 shadow-md sticky">
      <div :padded="false" @click="handleBack" class=" cursor-pointer">
        <Icon name="ep:arrow-left-bold" class="justify-self-end text-xl mr-3 text-[#49479F] hover:text-[#282753]"
          filled />
      </div>
      <a class="text-xl">
        <img src="/logos/pink_logo.svg" alt="Invitations Plus Logo" width="110" height="30" />
      </a>
      <div class="ml-2 grow flex">
        <nav class="flex flex-wrap items-center">
          <div class="inline-block">
            <div class="text-[16px] font-inter text-[#171717] mr-4 text-md font-bold">
            </div>
          </div>
        </nav>
      </div>
      <input type="text" v-model="project"
        class=" w-28 text-sm mr-4 bg-transparent focus:outline-none font-inter font-semibold text-[#2b2a61]"
        value="Project Untitled" placeholder="Masukkan teks">
      <UButton icon="i-heroicons-folder-arrow-down" @click="save()" size="lg"
        class="justify-self-end bg-[#F8D075] text-[#705a27] hover:bg-[#2b2a61] mr-2 rounded-2xl"
        :class="!!saveInvitation ? '' : 'btn-disabled'" color="blue" variant="solid" />
      <UButton icon="i-heroicons-folder-arrow-down" @click="save()" size="lg"
        :label="!!saveInvitation ? 'Save Changes' : 'Saved'"
        class="justify-self-end bg-[#49479F] hover:bg-[#2b2a61] mr-2 rounded-xl"
        :class="!!saveInvitation ? '' : 'btn-disabled'" color="blue" variant="solid" />
    </header>
    <div id="gjs">
    </div>
    <UNotifications />
  </div>
</template>
<script setup>
import grapesjs from 'grapesjs'
import webpage from 'grapesjs-preset-webpage';
import form from 'grapesjs-plugin-forms';
import block from 'grapesjs-blocks-basic';
import countdown from 'grapesjs-component-countdown';
import pexport from 'grapesjs-plugin-export';
import custom from 'grapesjs-custom-code';
import touch from 'grapesjs-touch';
import tooltip from 'grapesjs-tooltip';
import postcss from 'grapesjs-parser-postcss';
import editor from 'grapesjs-tui-image-editor';
import typed from 'grapesjs-typed';
import tabs from 'grapesjs-tabs';
import bg from 'grapesjs-style-bg';
import tailwind from 'grapesjs-tailwind';
import uppy from 'grapesjs-uppy';
import 'grapesjs/dist/css/grapes.min.css'
import 'grapesjs/dist/grapes.min.js'

import {
  usePostData
} from '~/composables/useFetchData'

definePageMeta({
  layout: false,
  middleware: 'auth'
})

const toast = useToast()
const route = useRoute()
const grape = ref()
const saveInvitation = ref()
const project = ref('Project Untitled')

const router = useRouter()
const handleBack = () => {
  router.go(-1)
}

onMounted(() => {
  const route = useRoute()

  const data = grapesjs.init({
    container: '#gjs',
    height: '95vh',
    width: '100%',
    fromElement: true,
    showOffsets: true,
    readonly: true,
    selectorManager: { componentFirst: true },
    plugins: [webpage, form, block, countdown, pexport, custom, touch, tooltip, postcss, editor, typed, bg, tabs, tailwind, uppy],
    storageManager: {
      id: 'gjs-asdasd',
      type: 'remote',
      autosave: true,
      contentTypeJson: true,
      storeComponents: true,
      storeStyles: true,
      storeHtml: true,
      storeCss: true,
    },
    deviceManager: {
      devices:
        [
          {
            id: 'desktop',
            name: 'Desktop',
            width: '',
          },
          {
            id: 'tablet',
            name: 'Tablet',
            width: '768px',
            widthMedia: '992px',
          },
          {
            id: 'mobilePortrait',
            name: 'Mobile portrait',
            width: '320px',
            widthMedia: '575px',
          },
        ]
    },
    pluginsOpts: {
      'grapesjs-preset-webpage': {
        blocksBasicOpts: {
          blocks: ['column1', 'column2', 'column3', 'column3-7', 'text', 'link', 'image', 'video'],
          flexGrid: 1,
        },
        blocks: ['link-block', 'quote', 'text-basic'],
      },
    },
    styleManager: { clearProperties: 1 },
    assetManager: {
      assets: [
        {
          type: 'image',
          width: 100,
          height: 100,
          name: 'gambar 1',
          src: 'https://placehold.co/600x400.png'
        },
        {
          type: 'image',
          width: 100,
          height: 100,
          name: 'gambar2',
          src: 'https://placehold.co/1800x900.png'
        }
      ]
    }
  })
  data.Storage.add('remote', {
    async load() {
      const dataEditor = await usePostData(`/project/getById/${route.query.id}`)
      project.value = dataEditor._data.project.project_name
      return JSON.parse(dataEditor._data.project.editor)
    },

    async store(data) {
      saveInvitation.value = JSON.stringify(data)
    },
  });

  grape.value = data

})

async function save() {
  const param = {
    id: route.query.id,
    editor: saveInvitation.value,
    html: JSON.stringify(grape.value.getHtml()),
    css: JSON.stringify(grape.value.getCss()),
    project_name: project.value,
  }
  return await usePostData('/project/storeOrUpdate', param).then((res) => {
    if (res.status == 200) {
      toast.add({
        icon: 'i-heroicons-check-circle',
        title: 'successfully saved',
        color: 'green',
        timeout: 3000,
      })
      grape.value = data
    } else {
      toast.add({
        icon: 'i-heroicons-exclamation-triangle',
        title: 'failed to save',
        color: 'orange',
        timeout: 3000,
      })
    }
  })
}

</script>
<style>
.gjs-one-bg {
  background-color: #494949 !important;
}

.gjs-two-color {
  color: #ffffff !important;
}

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
