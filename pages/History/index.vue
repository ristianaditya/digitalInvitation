<template>
  <div>
    <BaseHeaderNavigation @open="openModalForm()" />
    <UContainer
      v-if="stateLoad"
      class="flex h-[80vh] items-center justify-center text-center"
    >
      <span class="loading loading-spinner loading-lg text-[#49479F]"></span>
    </UContainer>
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
                  <th>Receipt Number</th>
                  <th>Subscribe</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th>Subscribe Start</th>
                  <th>Subscribe Expired</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="history in listHistory" :key="history.id">
                  <td class="text-sm font-normal leading-normal">
                    {{ pageNumber++ }}
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    {{ history.id_payment }}
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    <span
                      v-if="history.subscribe == 'DigitalDreamscape'"
                      class="inline-flex w-full items-center justify-center rounded-full border border-transparent bg-[#D2C6FA] px-3 py-1 font-inter text-xs font-bold leading-6 text-[#49479F] hover:bg-[#ccbdfd] focus:outline-none focus:ring-2 focus:ring-[#ccbdfd] focus:ring-offset-2 md:w-auto"
                    >
                      DreamScape
                      <img
                        src="/tier/tier3.png"
                        alt=""
                        class="ml-1 h-5 w-5 rounded-3xl"
                      />
                    </span>
                    <span
                      v-else-if="history.subscribe == 'SparkleSend'"
                      class="inline-flex w-full items-center justify-center rounded-full border border-transparent bg-[#F8D075] px-3 py-1 font-inter text-xs font-bold leading-6 text-[#4e3f1b] hover:bg-[#facc62] focus:outline-none focus:ring-2 focus:ring-[#fdd26d] focus:ring-offset-2 md:w-auto"
                    >
                      {{ history.subscribe }}
                      <img
                        src="/tier/tier2.png"
                        alt=""
                        class="ml-1 h-5 w-5 rounded-3xl"
                      />
                    </span>
                    <span
                      v-else-if="history.subscribe == 'DigitalDazzle'"
                      class="inline-flex w-full items-center justify-center rounded-full border border-transparent bg-[#e0e0e0] px-3 py-1 font-inter text-xs font-bold leading-6 text-[#161616] hover:bg-[#cecece] focus:outline-none focus:ring-2 focus:ring-[#d6d6d6] focus:ring-offset-2 md:w-auto"
                    >
                      {{ history.subscribe }}
                      <img
                        src="/tier/free.png"
                        alt=""
                        class="ml-1 h-5 w-5 rounded-3xl"
                      />
                    </span>
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    {{ history.amount }}
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    <UBadge
                      v-if="history.status == 'success'"
                      color="green"
                      variant="soft"
                      size="lg"
                      class="text-md bg-green-100 text-[10px] font-bold"
                    >
                      {{ history.status }}
                    </UBadge>
                    <UBadge
                      v-else-if="history.status == 'failed'"
                      color="red"
                      variant="soft"
                      size="lg"
                      class="text-md bg-red-100 text-[10px] font-bold"
                    >
                      {{ history.status }}
                    </UBadge>
                    <UBadge
                      v-else-if="history.status == 'pending'"
                      color="orange"
                      variant="soft"
                      size="lg"
                      class="text-md bg-orange-100 text-[10px] font-bold"
                    >
                      {{ history.status }}
                    </UBadge>
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    {{ history.subscribe_start }}
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    {{ history.subscribe_expired }}
                  </td>
                </tr>
              </tbody>
            </DataTable>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { useActivePage } from '@/store/index'
  import DataTable from 'datatables.net-vue3'
  import DataTablesCore from 'datatables.net'

  DataTable.use(DataTablesCore)
  const stateLoad = ref(true)
  const listHistory = ref()
  const pageNumber = 1

  definePageMeta({
    layout: 'editor-default',
    middleware: 'auth',
  })
  onMounted(async () => {
    const activePage = useActivePage()
    activePage.page = 'History Payment'
    activePage.child = ''
    activePage.create = false

    await useGetData('/transaction/historyByUser').then((res) => {
      listHistory.value = res.transaction
    })
    stateLoad.value = false
  })
</script>
<style>
  @import 'datatables.net-dt';
  @import 'datatables.net-responsive-dt';
  @import url('~/assets/css/table.css');
</style>
