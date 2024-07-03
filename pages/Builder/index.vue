<template>
  <div class="max-h-[100vh] overflow-hidden">
    <header
      class="sticky flex min-h-[64px] w-full items-center bg-[#F4F0FD] px-3 shadow-md"
    >
      <div :padded="false" class="cursor-pointer" @click="handleBack">
        <Icon
          name="ep:arrow-left-bold"
          class="mr-3 justify-self-end text-xl text-[#49479F] hover:text-[#282753]"
          filled
        />
      </div>
      <a class="text-xl">
        <img
          src="/logos/pink_logo.svg"
          alt="Invitations Plus Logo"
          width="110"
          height="30"
        />
      </a>
      <div class="ml-2 flex grow">
        <nav class="flex flex-wrap items-center">
          <div class="inline-block">
            <div
              class="text-md mr-4 font-inter text-[16px] font-bold text-[#171717]"
            ></div>
          </div>
        </nav>
      </div>
      <input
        v-model="project"
        type="text"
        class="mr-4 w-28 bg-transparent font-inter text-sm font-semibold text-[#2b2a61] focus:outline-none"
        value="Project Untitled"
        placeholder="Masukkan teks"
      />
      <UButton
        icon="i-heroicons-folder-arrow-down"
        size="lg"
        class="mr-2 justify-self-end rounded-2xl bg-[#F8D075] text-[#705a27] hover:bg-[#cca852]"
        color="blue"
        variant="solid"
        @click="handleClick()"
      />
      <UButton
        icon="i-heroicons-folder-arrow-down"
        size="lg"
        :label="!!saveInvitation ? 'Save Changes' : 'Saved'"
        class="mr-2 justify-self-end rounded-xl bg-[#49479F] hover:bg-[#2b2a61]"
        :class="!!saveInvitation ? '' : 'btn-disabled'"
        color="blue"
        variant="solid"
        @click="save()"
      />
    </header>
    <div id="gjs"></div>
    <UNotifications />
  </div>
</template>
<script setup>
  import grapesjs from 'grapesjs'
  import webpage from 'grapesjs-preset-webpage'
  import form from 'grapesjs-plugin-forms'
  import block from 'grapesjs-blocks-basic'
  import countdown from 'grapesjs-component-countdown'
  import pexport from 'grapesjs-plugin-export'
  import custom from 'grapesjs-custom-code'
  import touch from 'grapesjs-touch'
  import tooltip from 'grapesjs-tooltip'
  import postcss from 'grapesjs-parser-postcss'
  import editor from 'grapesjs-tui-image-editor'
  import typed from 'grapesjs-typed'
  import tabs from 'grapesjs-tabs'
  import bg from 'grapesjs-style-bg'
  import tailwind from 'grapesjs-tailwind'
  import uppy from 'grapesjs-uppy'
  import 'grapesjs/dist/css/grapes.min.css'
  import 'grapesjs/dist/grapes.min.js'

  import { usePostData } from '~/composables/useFetchData'

  definePageMeta({
    layout: false,
    middleware: 'auth',
  })
  useHead({
    script: [{ src: 'https://cdn.tailwindcss.com', body: true }],
    style: [
      {
        src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css',
        body: true,
      },
    ],
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
  const invitation = reactive({
    subs: '',
    role: 'user',
  })
  onMounted(async () => {
    const data = grapesjs.init({
      container: '#gjs',
      height: '95vh',
      width: '100%',
      fromElement: true,
      showOffsets: true,
      selectorManager: { componentFirst: true },
      plugins: [
        webpage,
        form,
        block,
        countdown,
        pexport,
        custom,
        touch,
        tooltip,
        postcss,
        editor,
        typed,
        bg,
        tabs,
        tailwind,
        uppy,
      ],
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
        devices: [
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
        ],
      },
      pluginsOpts: {
        'grapesjs-preset-webpage': {
          blocksBasicOpts: {
            blocks: [
              'column1',
              'column2',
              'column3',
              'column3-7',
              'text',
              'link',
              'image',
              'video',
            ],
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
            src: 'https://placehold.co/600x400.png',
          },
          {
            type: 'image',
            width: 100,
            height: 100,
            name: 'gambar2',
            src: 'https://placehold.co/1800x900.png',
          },
        ],
      },
    })
    data.Storage.add('remote', {
      async load() {
        const dataEditor = await usePostData(
          `/project/getById/${route.query.id}`,
        )
        project.value = dataEditor._data.project.project_name
        return JSON.parse(dataEditor._data.project.editor)
      },

      async store(data) {
        saveInvitation.value = JSON.stringify(data)
      },
    })
    grape.value = data

    await useGetSession('/user/getSession').then((res) => {
      invitation.subs = res.data.latest_transaction?.subscribe
      invitation.role = res.data.role
    })
    if (!!!invitation.subs && dataUser.role != 'admin') {
      router.push('/#pricing')
    }
  })
  function handleClick() {
    router.push(`/SettingProject?id=${route.query.id}`)
  }
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
    @apply block rounded bg-transparent px-3 py-2 text-gray-900 hover:bg-transparent active:text-[#49479F] md:border-0 md:p-0 md:hover:text-[#49479F];
  }

  .link-active {
    @apply block rounded bg-[#49479F] bg-transparent px-3 py-2 text-white hover:bg-transparent active:text-[#49479F] md:p-0 md:text-[#49479F];
  }
  .gjs-editor-cont {
    height: 95vh !important;
  }
</style>
