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
                  <th>File Name</th>
                  <th>File Path</th>
                  <th>Type</th>
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
                  <th>File Name</th>
                  <th>File Path</th>
                  <th>Type</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="assets in listAssets" :key="assets.id">
                  <td class="text-sm font-normal leading-normal">
                    {{ pageNumber++ }}
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    {{ assets.file_name }}
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    <NuxtLink
                      :to="assets.file_path"
                      target="_blank"
                      class="flex flex-row text-blue-900"
                    >
                      <span
                        class="i-heroicons-link mr-1 h-5 w-5"
                        aria-hidden="true"
                      ></span>
                      <p class="w-96 truncate">
                        {{ assets.file_path }}
                      </p>
                    </NuxtLink>
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    {{ assets.type }}
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
                          @click="openEditModalForm(assets.id)"
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
                          @click="openModalDelete(assets.id)"
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
      title-modal="Form Assets"
      desc-modal="This form is used to add and update the assets list."
      @close="state.isOpenForm = false"
    >
      <template #body>
        <div>
          <AssetsForm
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

  const listAssets = ref()
  const stateLoad = ref(true)
  const pageNumber = ref(1)

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
    await usePostData(`/assets/delete/${state.idItems}`)
    state.isOpenDelete = false
    stateLoad.value = true
    await useGetData('/assets/getAssets').then((res) => {
      listAssets.value = res.assets
    })
    pageNumber.value = 1
    stateLoad.value = false
  }

  async function confirmSave() {
    stateLoad.value = true
    state.isOpenForm = false
    await useGetData('/assets/getAssets').then((res) => {
      listAssets.value = res.assets
    })
    pageNumber.value = 1
    stateLoad.value = false
  }

  onMounted(async () => {
    const activePage = useActivePage()
    activePage.page = 'Assets Editor'
    activePage.child = ''
    activePage.create = true
    activePage.export = false
    activePage.formCreate = '/assets/form'

    await useGetData('/assets/getAssets').then((res) => {
      listAssets.value = res.assets
    })
    stateLoad.value = false
  })
</script>
<style>
  @import 'datatables.net-dt';
  @import 'datatables.net-responsive-dt';
  @import url('~/assets/css/table.css');
</style>
