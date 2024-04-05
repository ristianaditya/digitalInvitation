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
                  <td class="font-normal leading-normal text-sm">{{ pageNumber++ }}</td>
                  <td class="font-normal leading-normal text-sm">{{ history.id_payment }}</td>
                  <td class="font-normal leading-normal text-sm">
                    <span v-if="history.subscribe == 'DigitalDreamscape'"
                      class="inline-flex items-center justify-center w-full px-3 py-1 font-bold leading-6 text-[#49479F] bg-[#D2C6FA] border border-transparent rounded-full md:w-auto hover:bg-[#ccbdfd] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ccbdfd] font-inter text-xs">
                      DreamScape
                      <img src="/tier/tier3.png" alt="" class="rounded-3xl w-5 h-5 ml-1" />
                    </span>
                    <span v-else-if="history.subscribe == 'SparkleSend'"
                      class="inline-flex items-center justify-center w-full px-3 py-1 font-bold leading-6 text-[#4e3f1b] bg-[#F8D075] border border-transparent rounded-full md:w-auto hover:bg-[#facc62] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fdd26d] font-inter text-xs">
                      {{ history.subscribe }}
                      <img src="/tier/tier2.png" alt="" class="rounded-3xl w-5 h-5 ml-1" />
                    </span>
                    <span v-else-if="history.subscribe == 'DigitalDazzle'"
                      class="inline-flex items-center justify-center w-full px-3 py-1 font-bold leading-6 text-[#161616] bg-[#e0e0e0] border border-transparent rounded-full md:w-auto hover:bg-[#cecece] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#d6d6d6] font-inter text-xs">
                      {{ history.subscribe }}
                      <img src="/tier/free.png" alt="" class="rounded-3xl w-5 h-5 ml-1" />
                    </span>
                  </td>
                  <td class="font-normal leading-normal text-sm">{{ history.amount }}</td>
                  <td class="font-normal leading-normal text-sm">
                    <UBadge v-if="history.status == 'success'" color="green" variant="soft" size="lg"
                      class="bg-green-100 text-[10px] font-bold text-md">
                      {{ history.status }}
                    </UBadge>
                    <UBadge v-else-if="history.status == 'failed'" color="red" variant="soft" size="lg"
                      class="bg-red-100 text-[10px] font-bold text-md">
                      {{ history.status }}
                    </UBadge>
                    <UBadge v-else-if="history.status == 'pending'" color="orange" variant="soft" size="lg"
                      class="bg-orange-100 text-[10px] font-bold text-md">
                      {{ history.status }}
                    </UBadge>
                  </td>
                  <td class="font-normal leading-normal text-sm">{{ history.subscribe_start }}</td>
                  <td class="font-normal leading-normal text-sm">{{ history.subscribe_expired }}</td>
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
  layout: 'editor',
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
@import url("~/assets/css/table.css");
</style>
