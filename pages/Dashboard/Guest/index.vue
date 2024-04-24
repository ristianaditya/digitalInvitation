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
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Attendance</th>
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
                  <th>Attendance</th>
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
                      <UTooltip text="QR Code" :popper="{ offsetDistance: 16 }">
                        <UButton
                          variant="ghost"
                          color="blue"
                          :ui="{
                            rounded: 'rounded-md',
                          }"
                          @click="
                            openQrModalForm(
                              guest.name,
                              guest.invitation.invite_link,
                            )
                          "
                        >
                          <template #trailing>
                            <Icon
                              name="majesticons:qr-code-line"
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
      :open-modal="state.isOpenQrForm"
      title-modal="QR Code"
      desc-modal="Guest's qr code to be scanned."
      @close="state.isOpenQrForm = false"
    >
      <template #body>
        <div class="w-full text-center">
          <img :src="qrcode" alt="QR Code" class="h-100 w-full" />
        </div>
      </template>
    </BaseModalForm>
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
    <UNotifications />
  </div>
</template>
<script setup>
  import { useActivePage } from '@/store/index'
  import DataTable from 'datatables.net-vue3'
  import DataTablesCore from 'datatables.net'
  import { useQRCode } from '@vueuse/integrations/useQRCode'

  import { useGetData } from '~/composables/useFetchData'

  const listGuest = ref()
  const stateLoad = ref(true)
  const pageNumber = ref(1)
  const isOpen = ref(false)
  const config = ref()
  const route = useRoute()
  const codeGuest = ref('')
  const qrcode = useQRCode(codeGuest)

  const state = reactive({
    isOpenDelete: false,
    idItems: '',
    isOpenForm: false,
    isOpenQrForm: false,
  })

  function openModalForm() {
    state.idItems = ''
    state.isOpenForm = true
  }

  function openEditModalForm(id) {
    state.idItems = id
    state.isOpenForm = true
  }

  function openQrModalForm(name, invite_link) {
    codeGuest.value = `${invite_link}/${name}`
    state.isOpenQrForm = true
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

    await useGetData(`/guest/getById/${route.query.id}`).then((res) => {
      listGuest.value = res.data
    })
    stateLoad.value = false
  })
</script>
<style>
  @import 'datatables.net-dt';
  @import 'datatables.net-responsive-dt';
  @import url('~/assets/css/table.css');
</style>
