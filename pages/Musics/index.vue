<template>
  <div>
    <BaseHeaderNavigation @open="openModalForm()" />
    <div v-if="stateLoad">
      <div class="w-full max-w-full">
        <div
          class="shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 bg-white bg-clip-border"
        >
          <div class="table-responsive">
            <DataTable
              class="table-flush content-table table display text-slate-500"
            >
              <thead class="thead-light">
                <tr>
                  <th>No</th>
                  <th>Music</th>
                  <th>Singers</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody></tbody>
            </DataTable>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div class="w-full max-w-full">
        <div
          class="shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 bg-white bg-clip-border"
        >
          <div class="table-responsive">
            <DataTable
              class="table-flush content-table table display text-slate-500"
            >
              <thead class="thead-light">
                <tr>
                  <th>No</th>
                  <th>Music</th>
                  <th>Singers</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="musics in listMusics" :key="musics.id">
                  <td class="text-sm font-normal leading-normal">
                    {{ pageNumber++ }}
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    {{ musics.music_name }}
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    {{ musics.singer }}
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    <div class="items-center">
                      <UTooltip text="Music" :popper="{ offsetDistance: 16 }">
                        <UButton
                          variant="ghost"
                          color="blue"
                          :ui="{
                            rounded: 'rounded-md',
                          }"
                          @click="openMusic(musics.music)"
                        >
                          <template #trailing>
                            <Icon
                              name="material-symbols:music-cast"
                              class="text-2xl text-[#FAA6B0]"
                            />
                          </template>
                        </UButton>
                      </UTooltip>
                      <UTooltip text="Edit" :popper="{ offsetDistance: 16 }">
                        <UButton
                          variant="ghost"
                          color="yellow"
                          :ui="{
                            rounded: 'rounded-md',
                          }"
                          @click="openEditModalForm(musics.id)"
                        >
                          <template #trailing>
                            <Icon
                              name="ic:baseline-edit"
                              class="text-2xl text-[#faa662]"
                            />
                          </template>
                        </UButton>
                      </UTooltip>
                      <UTooltip text="Delete" :popper="{ offsetDistance: 16 }">
                        <UButton
                          variant="ghost"
                          color="red"
                          :ui="{
                            rounded: 'rounded-md',
                          }"
                          @click="openModalDelete(musics.id)"
                        >
                          <template #trailing>
                            <Icon
                              name="ic:baseline-delete-forever"
                              class="text-2xl text-[#fa6262]"
                            />
                          </template>
                        </UButton>
                      </UTooltip>
                    </div>
                  </td>
                </tr>
              </tbody>
            </DataTable>
          </div>
        </div>
      </div>
      <UModal v-model="isOpen" :overlay="false">
        <div>
          <MusicfyPlayer :config="config" />
        </div>
      </UModal>
    </div>
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
    <BaseModalForm
      :open-modal="state.isOpenForm"
      title-modal="Form Musics"
      desc-modal="This form is used to add and update the music list."
      @close="state.isOpenForm = false"
    >
      <template #body>
        <div>
          <MusicsForm
            :id-modal="state.idItems"
            @close="state.isOpenForm = false"
            @confirm="confirmSave()"
          />
        </div>
      </template>
    </BaseModalForm>
    <UNotifications />
  </div>
</template>
<script setup>
  import { useActivePage } from '@/store/index'
  import DataTable from 'datatables.net-vue3'
  import DataTablesCore from 'datatables.net'

  import { useGetData } from '~/composables/useFetchData'

  definePageMeta({
    layout: 'editor-default',
    middleware: 'auth',
  })

  const listMusics = ref()
  const stateLoad = ref(true)
  const pageNumber = ref(1)
  const isOpen = ref(false)
  const srcMusic = ref()
  const config = ref()

  const state = reactive({
    isOpenDelete: false,
    isOpenForm: false,
    idItems: '',
  })

  DataTable.use(DataTablesCore)

  function openModalDelete(id) {
    state.idItems = id
    state.isOpenDelete = true
  }

  function openEditModalForm(id) {
    state.idItems = id
    state.isOpenForm = true
  }

  function openModalForm() {
    state.idItems = ''
    state.isOpenForm = true
  }

  async function openMusic(params) {
    srcMusic.value = params
    config.value = defineMusicfyPlayer({
      audio: {
        provider: 'URL',
        src: params,
      },
      image: {
        src: 'https://dimatis.yizack.com/images/reminiscences.jpg',
        alt: 'Dimatis - Reminiscences',
      },
      size: {
        width: '100%',
      },
    })
    isOpen.value = true
  }

  async function confirmDelete() {
    await usePostData(`/musics/delete/${state.idItems}`)
    state.isOpenDelete = false
    stateLoad.value = true
    await useGetData('/musics/getMusics').then((res) => {
      listMusics.value = res.musics
    })
    pageNumber.value = 1
    stateLoad.value = false
  }

  async function confirmSave() {
    stateLoad.value = true
    state.isOpenForm = false
    await useGetData('/musics/getMusics').then((res) => {
      listMusics.value = res.musics
    })
    pageNumber.value = 1
    stateLoad.value = false
  }

  onMounted(async () => {
    const activePage = useActivePage()
    activePage.page = 'Musics'
    activePage.child = ''
    activePage.create = true
    activePage.export = false
    activePage.formCreate = '/musics/form'

    await useGetData('/musics/getMusics').then((res) => {
      listMusics.value = res.musics
    })
    stateLoad.value = false
  })
</script>
<style>
  @import 'datatables.net-dt';
  @import 'datatables.net-responsive-dt';
  @import url('~/assets/css/table.css');
</style>
