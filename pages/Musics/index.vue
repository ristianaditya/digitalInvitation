<template>
  <div>
    <UContainer v-if="stateLoad" class=" text-center h-[80vh] flex justify-center items-center">
      <span class="loading loading-spinner text-[#49479F] loading-lg"></span>
    </UContainer>
    <div v-else>
      <div class="w-full max-w-full">
        <div
          class="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-soft-xl rounded-2xl bg-clip-border">
          <div class="table-responsive">
            <DataTable class="display table table-flush text-slate-500 content-table">
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
                  <td class="font-normal leading-normal text-sm">{{ pageNumber++ }}</td>
                  <td class="font-normal leading-normal text-sm">{{ musics.music_name }}</td>
                  <td class="font-normal leading-normal text-sm">{{ musics.singer }}</td>
                  <td class="font-normal leading-normal text-sm">
                    <div class=" items-center">
                      <UTooltip text="Music" :popper="{ offsetDistance: 16 }">
                        <UButton variant="ghost" color="blue" :ui="{
      rounded: 'rounded-md',
    }" @click="openMusic(musics.music)">
                          <template #trailing>
                            <Icon name="material-symbols:music-cast" class=" text-2xl text-[#FAA6B0] " />
                          </template>
                        </UButton>
                      </UTooltip>
                      <UTooltip text="Edit" :popper="{ offsetDistance: 16 }">
                        <UButton variant="ghost" color="yellow" :ui="{
      rounded: 'rounded-md',
    }" @click="
      router.push({ path: 'musics/form', query: { id: musics.id } })
      ">
                          <template #trailing>
                            <Icon name="ic:baseline-edit" class=" text-2xl text-[#faa662] " />
                          </template>
                        </UButton>
                      </UTooltip>
                      <UTooltip text="Delete" :popper="{ offsetDistance: 16 }">
                        <UButton variant="ghost" color="red" :ui="{
      rounded: 'rounded-md',
    }" @click="openModalDelete(musics.id)">
                          <template #trailing>
                            <Icon name="ic:baseline-delete-forever" class=" text-2xl text-[#fa6262] " />
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
    <BaseModal :open-modal="state.isOpenDelete" title-modal="Confirm to delete"
      desc-modal="Are you sure you want to delete your data ? " icon-modal="i-heroicons-exclamation-triangle"
      text-confirm="Delete" type-modal="danger" @close="state.isOpenDelete = false" @confirm="confirmDelete()" />
    <UNotifications />
  </div>
</template>
<script setup>
import { useActivePage } from '@/store/index'
import DataTable from 'datatables.net-vue3'
import DataTablesCore from 'datatables.net'

import {
  useGetData
} from '~/composables/useFetchData'

const listMusics = ref()
const stateLoad = ref(true)
const pageNumber = ref(1)
const isOpen = ref(false)
const srcMusic = ref()
const config = ref()
const router = useRouter()

const state = reactive({
  isOpenDelete: false,
  idItems: '',
})

DataTable.use(DataTablesCore)

definePageMeta({
  layout: 'editor',
  middleware: 'auth',
})

function openModalDelete(id) {
  state.idItems = id
  state.isOpenDelete = true
}

async function openMusic(params) {
  srcMusic.value = params
  config.value = defineMusicfyPlayer({
    audio: {
      provider: "URL",
      src: params
    },
    image: {
      src: "https://dimatis.yizack.com/images/reminiscences.jpg",
      alt: "Dimatis - Reminiscences"
    },
    size: {
      width: "100%"
    },
  })
  isOpen.value = true
}

async function confirmDelete() {
  await usePostData(`/musics/delete/${state.idItems}`)
  state.isOpenDelete = false
  stateLoad.value = true
  await useGetData('/musics/getMusics').then((res) => {
    if (res.status == 200) {
      listMusics.value = res.musics
    }
  })
  pageNumber.value = 1
  stateLoad.value = false
}

onMounted(async () => {
  const activePage = useActivePage()
  activePage.page = 'Musics'
  activePage.child = ''
  activePage.create = true
  activePage.formCreate = '/musics/form'

  await useGetData('/musics/getMusics').then((res) => {
    listMusics.value = res.musics
    if (res.status == 200) {
    }
  })
  stateLoad.value = false
})
</script>
<style>
@import 'datatables.net-dt';
@import 'datatables.net-responsive-dt';
@import url("~/assets/css/table.css");
</style>
