<template>
  <BaseHeaderNavigation @open="isOpen = true" />
  <UContainer
    v-if="stateLoad"
    class="flex h-[70vh] items-center justify-center text-center"
  >
    <span class="loading loading-spinner loading-lg text-[#49479F]"></span>
  </UContainer>
  <div v-else>
    <Dashboard v-if="sessionData.role === 'admin'" />
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
        @confirm="confirmSaveProject()"
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
  <BaseModalsOptionsProject
    :open-modal="isOpen"
    @close="isOpen = false"
    @confirm="handleConfirmation"
  />
  <UNotifications />
</template>
<script setup>
  import { useActivePage, useSessionData } from '@/store/index'
  import { usePostData } from '~/composables/useFetchData'

  definePageMeta({
    layout: 'editor-default',
    middleware: 'auth',
  })

  const isOpen = ref(false)
  const sessionData = useSessionData()
  const project = ref()
  const stateLoad = ref(true)
  const router = useRouter()
  const state = reactive({
    isOpenForm: false,
    idProjectModal: '',
    isOpenDelete: false,
    idItems: '',
  })

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

  function handleConfirmation(value) {
    if (value == 'custom') {
      router.push(`/Builder?id=${makeid(25)}`)
    } else if (value == 'template') {
      router.push(`/Thema`)
      isOpen.value = false
    }
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
  async function confirmSaveProject() {
    state.isOpenForm = false
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
    const sessionData = useSessionData()
    activePage.page = 'Dashboard'
    if (sessionData.role === 'admin') {
      activePage.create = false
    } else {
      activePage.create = true
    }
    activePage.child = ''
    activePage.formCreate = `/Builder?id=${makeid(25)}`
    activePage.export = false

    await usePostData('/project/getByUserId').then((res) => {
      if (res.status == 200) {
        project.value = res._data.projects
      }
    })
    stateLoad.value = false
  })
</script>
<style>
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
