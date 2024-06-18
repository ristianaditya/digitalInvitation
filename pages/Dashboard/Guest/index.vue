<template>
  <div>
    <BaseHeaderNavigation @open="openModalForm()" />
    <div
      class="mb-7 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 xl:grid-cols-4"
    >
      <div
        class="group flex flex-col overflow-hidden rounded-2xl bg-pink-50 transition hover:bg-pink-100 active:bg-pink-50"
      >
        <div class="flex grow items-center justify-between p-6">
          <div>
            <dt class="text-2xl font-bold text-[#CD6996]">
              {{ listGuestStats?.total_guests || 0 }}
            </dt>
            <dd class="text-sm font-medium text-[#CD6996]">Guests</dd>
          </div>
          <Icon
            name="fluent:guest-12-filled"
            class="h-10 w-10 text-[#CD6996]"
          />
        </div>
      </div>

      <div
        class="group flex flex-col overflow-hidden rounded-2xl bg-sky-50 transition hover:bg-sky-100 active:bg-sky-50"
      >
        <div class="flex grow items-center justify-between p-6">
          <div>
            <dt class="text-2xl font-bold text-[#5AB5E1]">
              {{ listGuestStats?.total_attended || 0 }}
            </dt>
            <dd class="text-sm font-medium text-[#5AB5E1]">Guests</dd>
          </div>
          <Icon
            name="icon-park-twotone:folder-success"
            class="h-10 w-10 text-[#5AB5E1]"
          />
        </div>
      </div>

      <div
        class="group flex flex-col overflow-hidden rounded-2xl bg-purple-50 transition hover:bg-purple-100 active:bg-purple-50"
      >
        <div class="flex grow items-center justify-between p-6">
          <div>
            <dt class="text-2xl font-bold text-[#49479F]">
              {{ listGuestStats?.total_not_attended || 0 }}
            </dt>
            <dd class="text-sm font-medium text-[#49479F]">Absent</dd>
          </div>
          <Icon
            name="icon-park-twotone:folder-failed"
            class="h-10 w-10 text-[#49479F]"
          />
        </div>
      </div>

      <div
        class="group flex flex-col overflow-hidden rounded-2xl bg-orange-50 transition hover:bg-orange-100 active:bg-orange-50"
      >
        <div class="flex grow items-center justify-between p-6">
          <div>
            <dt class="text-2xl font-bold text-[#CB8954]">
              {{ listGuestStats?.total_greetings || 0 }}
            </dt>
            <dd class="text-sm font-medium text-[#CB8954]">
              Greetings & Prayers
            </dd>
          </div>
          <Icon
            name="game-icons:nothing-to-say"
            class="h-10 w-10 text-[#CB8954]"
          />
        </div>
      </div>
    </div>
    <div class="mt-10 flex">
      <p class="-mt-2 mb-4 text-[22px] font-[600]">List Guest</p>
      <div
        class="btn btn-circle btn-sm -mt-[6px] ml-3 bg-[#F8D075] hover:bg-[#ccaa5a]"
        @click="openModalForm()"
      >
        <Icon name="material-symbols:add" class="text-2xl" />
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
http://localhost:3000/${guest?.invitation?.invite_link}?to=${guest?.name}`,
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
                              `http://localhost:3000/${guest?.invitation?.invite_link}?to=${guest?.name}`,
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
    <div class="mt-10 flex">
      <p class="-mt-2 mb-4 text-[22px] font-[600]">List RSVP</p>
    </div>
    <div v-if="stateLoadRsvp" class="w-full max-w-full">
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
                <th>Greeting</th>
                <th>RSVP Attendance</th>
              </tr>
            </thead>
            <tbody></tbody>
          </DataTable>
        </div>
      </div>
    </div>
    <div v-else class="w-full max-w-full">
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
                <th>Greeting</th>
                <th>RSVP Attendance</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="rsvp in listRsvp" :key="rsvp.id">
                <td class="text-sm font-normal leading-normal">
                  {{ pageNumberRsvp++ }}
                </td>
                <td class="text-sm font-normal leading-normal">
                  {{ rsvp?.guest?.name }}
                </td>
                <td class="text-sm font-normal leading-normal">
                  {{ rsvp.greeting }}
                </td>
                <td class="text-sm font-normal leading-normal">
                  <UBadge
                    v-if="rsvp.attendance == 'attended'"
                    color="green"
                    variant="soft"
                    size="lg"
                    class="text-md bg-green-100 text-[10px] font-bold"
                  >
                    ATTENDED
                  </UBadge>
                  <UBadge
                    v-else-if="rsvp.attendance == 'absent'"
                    color="red"
                    variant="soft"
                    size="lg"
                    class="text-md bg-red-100 text-[10px] font-bold"
                  >
                    ABSENT
                  </UBadge>
                  <UBadge
                    v-else-if="rsvp.attendance == 'unconfirmed'"
                    color="orange"
                    variant="soft"
                    size="lg"
                    class="text-md bg-orange-100 text-[10px] font-bold"
                  >
                    UNCONFIRMED
                  </UBadge>
                </td>
              </tr>
            </tbody>
          </DataTable>
        </div>
      </div>
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
  import { useClipboard } from '@vueuse/core'
  import { useGetData } from '~/composables/useFetchData'
  const toast = useToast()
  const { copy } = useClipboard()
  const listGuest = ref()
  const listRsvp = ref()
  const listGuestStats = reactive({
    total_guests: '',
    total_attended: '',
    total_not_attended: '',
    total_greetings: '',
  })
  const stateLoad = ref(true)
  const stateLoadRsvp = ref(true)
  const pageNumber = ref(1)
  const pageNumberRsvp = ref(1)
  const isOpen = ref(false)
  const config = ref()
  const route = useRoute()

  const state = reactive({
    isOpenDelete: false,
    idItems: '',
    isOpenForm: false,
    isOpenClipboard: false,
  })

  function openModalForm() {
    state.idItems = ''
    state.isOpenForm = true
  }

  function openModalClipboard() {
    state.isOpenClipboard = true
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
    await useGetData(`/rsvp/getById/${route.query.id}`).then((res) => {
      listRsvp.value = res.data
    })
    await useGetData(`/guest/guestStats/${route.query.id}`).then((res) => {
      listGuestStats.total_guests = res.data.total_guests
      listGuestStats.total_attended = res.data.total_attended
      listGuestStats.total_not_attended = res.data.total_not_attended
      listGuestStats.total_greetings = res.data.total_greetings
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
