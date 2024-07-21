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
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Gender</th>
                  <th>Role</th>
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
                  <th>Username</th>
                  <th>Email</th>
                  <th>Phone</th>
                  <th>Gender</th>
                  <th>Role</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="users in listUsers" :key="users.id">
                  <td class="text-sm font-normal leading-normal">
                    {{ pageNumber++ }}
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    {{ users.username }}
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    {{ users.email }}
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    {{ users.no_phone }}
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    {{ users.gender }}
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    {{ users.role }}
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    <div class="items-center">
                      <UTooltip text="Edit" :popper="{ offsetDistance: 16 }">
                        <UButton
                          variant="ghost"
                          color="yellow"
                          :ui="{
                            rounded: 'rounded-md',
                          }"
                          @click="openEditModalForm(users.id)"
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
                          @click="openModalDelete(users.id)"
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
      title-modal="Form Users"
      desc-modal="This form is used to add and update the users list."
      @close="state.isOpenForm = false"
    >
      <template #body>
        <div>
          <UsersForm
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

  const toast = useToast()
  const listUsers = ref()
  const stateLoad = ref(true)
  const pageNumber = ref(1)
  const isOpen = ref(false)
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

  async function confirmDelete() {
    await usePostData(`/user/delete/${state.idItems}`)
    state.isOpenDelete = false
    stateLoad.value = true
    await useGetData('/user/getUser').then((res) => {
      listUsers.value = res.data
    })
    toast.add({
      icon: 'i-heroicons-check-circle',
      title: 'account successfully deleted',
      color: 'green',
      timeout: 3000,
    })
    pageNumber.value = 1
    stateLoad.value = false
  }

  async function confirmSave() {
    stateLoad.value = true
    state.isOpenForm = false
    await useGetData('/user/getUser').then((res) => {
      listUsers.value = res.data
    })
    pageNumber.value = 1
    stateLoad.value = false
  }

  onMounted(async () => {
    const activePage = useActivePage()
    activePage.page = 'Users'
    activePage.child = ''
    activePage.create = true
    activePage.export = false

    await useGetData('/user/getUser').then((res) => {
      listUsers.value = res.data
    })
    stateLoad.value = false
  })
</script>
<style>
  @import 'datatables.net-dt';
  @import 'datatables.net-responsive-dt';
  @import url('~/assets/css/table.css');
</style>
