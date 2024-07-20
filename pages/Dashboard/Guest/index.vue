<template>
  <div>
    <BaseHeaderNavigation @open="openModalForm()" />
    <GuestListCount />
    <div class="mt-10 flex">
      <p class="-mt-2 mb-4 text-[22px] font-[600]">List Guest</p>
      <div
        class="btn btn-circle btn-sm -mt-[6px] ml-3 bg-[#F8D075] hover:bg-[#ccaa5a]"
        @click="openModalForm()"
      >
        <Icon name="material-symbols:add" class="text-2xl" />
      </div>
      <div
        class="btn btn-circle btn-sm -mt-[6px] ml-3 bg-[#D2C6FA] hover:bg-[#afa0e0]"
        @click="openModalImport()"
      >
        <Icon name="lets-icons:import-duotone-line" class="text-2xl" />
      </div>
      <div
        class="btn btn-sm -mt-[6px] ml-3 bg-[#FAA6B0] hover:bg-[#FAA6B0]"
        @click="openModalClipboard()"
      >
        Text Clipboard
      </div>
    </div>
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
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Scanned Attendance</th>
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
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Scanned Attendance</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="guest in listGuest" :key="guest.id">
                  <td class="text-sm font-normal leading-normal">
                    {{ pageNumber++ }}
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    {{ guest.name }}
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    {{ guest.no_phone }}
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    <UBadge
                      v-if="guest.attendance == 'attended'"
                      color="green"
                      variant="soft"
                      size="lg"
                      class="text-md bg-green-100 text-[10px] font-bold"
                    >
                      ATTENDED
                    </UBadge>
                    <UBadge
                      v-else-if="guest.attendance == 'absent'"
                      color="red"
                      variant="soft"
                      size="lg"
                      class="text-md bg-red-100 text-[10px] font-bold"
                    >
                      ABSENT
                    </UBadge>
                    <UBadge
                      v-else-if="guest.attendance == 'unconfirmed'"
                      color="orange"
                      variant="soft"
                      size="lg"
                      class="text-md bg-orange-100 text-[10px] font-bold"
                    >
                      UNCONFIRMED
                    </UBadge>
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    <div class="items-center">
                      <UTooltip
                        class="mr-1"
                        text="Copy Clipboard"
                        :popper="{ offsetDistance: 16 }"
                      >
                        <UButton
                          variant="ghost"
                          color="pink"
                          :ui="{
                            rounded: 'rounded-md',
                          }"
                          @click="
                            toast.add({
                              icon: 'i-heroicons-check-circle',
                              title: 'Text copied to clipboard',
                              color: 'green',
                              timeout: 1000,
                            }),
                              copy(
                                `${guest?.invitation?.clipboard}
${configRuntime.public.baseURL}/${guest?.invitation?.invite_link}?to=${guest?.name}`,
                              )
                          "
                        >
                          <template #trailing>
                            <Icon
                              name="lucide:clipboard-check"
                              class="text-2xl text-[#CD6996]"
                            />
                          </template>
                        </UButton>
                      </UTooltip>
                      <UTooltip
                        text="Send Message"
                        :popper="{ offsetDistance: 16 }"
                      >
                        <UButton
                          variant="ghost"
                          color="blue"
                          :ui="{
                            rounded: 'rounded-md',
                          }"
                          @click="
                            sendMessage(
                              guest?.no_phone,
                              guest?.invitation?.clipboard,
                              `${configRuntime.public.baseURL}/${guest?.invitation?.invite_link}?to=${guest?.name}`,
                            )
                          "
                        >
                          <template #trailing>
                            <Icon
                              name="ri:whatsapp-fill"
                              class="text-2xl text-[#413f8d]"
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
                          @click="openEditModalForm(guest.id)"
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
                          @click="openModalDelete(guest.id)"
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
    <GuestListRsvp />
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
      title-modal="Form List Guest"
      desc-modal="This form is used to add and update the guest list."
      @close="state.isOpenForm = false"
    >
      <template #body>
        <div>
          <GuestListForm
            :id-modal="state.idItems"
            @close="state.isOpenForm = false"
            @confirm="confirmSave()"
          />
        </div>
      </template>
    </BaseModalForm>
    <BaseModalForm
      :open-modal="state.isOpenImport"
      title-modal="Import Guest"
      desc-modal="Import Invited Guest Data List."
      :premium="sessionData.subscribe == 'DigitalDazzle' ? true : false"
      @close="state.isOpenImport = false"
    >
      <template #body>
        <div>
          <GuestListImportGuest
            :id-modal="route.query.id"
            :premium="sessionData.subscribe == 'DigitalDazzle' ? true : false"
            @close="state.isOpenImport = false"
            @confirm="confirmSaveImport()"
          />
        </div>
      </template>
    </BaseModalForm>
    <BaseModalForm
      :open-modal="state.isOpenClipboard"
      title-modal="Form Invitation Messages"
      desc-modal="Create a text clipboard for invitation messages."
      @close="state.isOpenClipboard = false"
    >
      <template #body>
        <div>
          <GuestListClipboard
            :id-modal="route.query.id"
            @close="state.isOpenClipboard = false"
            @confirm="confirmSaveClipboard()"
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
  import { useClipboard } from '@vueuse/core'
  import { useGetData } from '~/composables/useFetchData'
  import { useSessionData } from '@/store/index'

  const sessionData = useSessionData()
  const configRuntime = useRuntimeConfig()
  const toast = useToast()
  const { copy } = useClipboard()
  const listGuest = ref()
  const stateLoad = ref(true)
  const stateLoadRsvp = ref(true)
  const pageNumber = ref(1)
  const isOpen = ref(false)
  const config = ref()
  const route = useRoute()

  const state = reactive({
    isOpenDelete: false,
    idItems: '',
    isOpenForm: false,
    isOpenClipboard: false,
    isOpenImport: false,
  })

  function openModalForm() {
    state.idItems = ''
    state.isOpenForm = true
  }

  function openModalClipboard() {
    state.isOpenClipboard = true
  }

  function openModalImport() {
    state.isOpenImport = true
  }

  function openEditModalForm(id) {
    state.idItems = id
    state.isOpenForm = true
  }

  function sendMessage(no_phone, text, invite) {
    const link = `https://wa.me/${no_phone}?text=${text}, ${invite}`
    window.open(link)
  }

  DataTable.use(DataTablesCore)

  definePageMeta({
    layout: 'editor-default',
    middleware: 'auth',
  })

  function openModalDelete(id) {
    state.idItems = id
    state.isOpenDelete = true
  }

  async function confirmSave() {
    stateLoad.value = true
    state.isOpenForm = false
    pageNumber.value = 1
    await useGetData(`/guest/getById/${route.query.id}`).then((res) => {
      listGuest.value = res.data
    })
    stateLoad.value = false
  }

  async function confirmSaveImport() {
    stateLoad.value = true
    state.isOpenImport = false
    pageNumber.value = 1
    await useGetData(`/guest/getById/${route.query.id}`).then((res) => {
      listGuest.value = res.data
    })
    stateLoad.value = false
  }

  async function confirmSaveClipboard() {
    stateLoad.value = true
    state.isOpenClipboard = false
    pageNumber.value = 1
    await useGetData(`/guest/getById/${route.query.id}`).then((res) => {
      listGuest.value = res.data
    })
    stateLoad.value = false
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
    activePage.create = false
    activePage.child = ' / Guests Settings'
    activePage.formCreate = `/SettingProject/GuestList/form?id=${route.query.id}`
    activePage.export = false
    await useGetData(`/guest/getById/${route.query.id}`).then((res) => {
      listGuest.value = res.data
    })
    stateLoadRsvp.value = false
    stateLoad.value = false
  })
</script>
<style>
  @import 'datatables.net-dt';
  @import 'datatables.net-responsive-dt';
  @import url('~/assets/css/table.css');
</style>
