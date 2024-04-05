<template>
  <div>
    <UContainer v-if="stateLoad" class=" text-center h-[70vh] flex justify-center items-center">
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
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Attendance</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="guest in listGuest" :key="guest.id">
                  <td class="font-normal leading-normal text-sm">{{ pageNumber++ }}</td>
                  <td class="font-normal leading-normal text-sm">{{ guest.name }}</td>
                  <td class="font-normal leading-normal text-sm">{{ guest.no_phone }}</td>
                  <td class="font-normal leading-normal text-sm">
                    <UBadge v-if="guest.attendance == 'attended'" color="green" variant="soft" size="lg"
                      class="bg-green-100 text-[10px] font-bold text-md">
                      {{ guest.attendance }}
                    </UBadge>
                    <UBadge v-else-if="guest.attendance == 'absent'" color="red" variant="soft" size="lg"
                      class="bg-red-100 text-[10px] font-bold text-md">
                      {{ guest.attendance }}
                    </UBadge>
                    <UBadge v-else-if="guest.attendance == 'unconfirmed'" color="orange" variant="soft" size="lg"
                      class="bg-orange-100 text-[10px] font-bold text-md">
                      {{ guest.attendance }}
                    </UBadge>
                  </td>
                  <td class="font-normal leading-normal text-sm">
                    <div class=" items-center">
                      <UTooltip text="Edit" :popper="{ offsetDistance: 16 }">
                        <UButton variant="ghost" color="yellow" :ui="{
      rounded: 'rounded-md',
    }" @click="
      router.push({ path: '/SettingProject/GuestList/form', query: { id: route.query.id, guest_id: guest.id } })
      ">
                          <template #trailing>
                            <Icon name="ic:baseline-edit" class=" text-2xl text-[#faa662] " />
                          </template>
                        </UButton>
                      </UTooltip>
                      <UTooltip text="Delete" :popper="{ offsetDistance: 16 }">
                        <UButton variant="ghost" color="red" :ui="{
      rounded: 'rounded-md',
    }" @click="openModalDelete(guest.id)">
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

const toast = useToast()
const listGuest = ref()
const stateLoad = ref(true)
const pageNumber = ref(1)
const isOpen = ref(false)
const config = ref()
const router = useRouter()
const route = useRoute()

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

async function confirmDelete() {
  await usePostData(`/guest/delete/${state.idItems}`)
  state.isOpenDelete = false
  stateLoad.value = true
  await useGetData(`/guest/getById/${route.query.id}`).then((res) => {
    listGuest.value = res.data
  })
  pageNumber.value = 1
  stateLoad.value = false
}

onMounted(async () => {
  const activePage = useActivePage()
  activePage.page = 'Dashboard'
  activePage.create = true
  activePage.child = ' / Guest List'
  activePage.formCreate = `/SettingProject/GuestList/form?id=${route.query.id}`

  definePageMeta({
    layout: 'editor',
    middleware: 'auth',
  })

  await useGetData(`/guest/getById/${route.query.id}`).then((res) => {
    listGuest.value = res.data
  })
  stateLoad.value = false
})
</script>
<style>
@import 'datatables.net-dt';
@import 'datatables.net-responsive-dt';
@import url("~/assets/css/table.css");
</style>
