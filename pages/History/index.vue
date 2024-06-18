<template>
  <div>
    <BaseHeaderNavigation @open="handleExport" />
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
                  <th v-if="sessionData.role === 'admin'">Username</th>
                  <th v-if="sessionData.role === 'admin'">Email</th>
                  <th>Receipt Number</th>
                  <th>Subscribe</th>
                  <th>Price</th>
                  <th>Status</th>
                  <th v-if="sessionData.role === 'user'">Subscribe Start</th>
                  <th>Subscribe Expired</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="history in listHistory" :key="history.id">
                  <td class="text-sm font-normal leading-normal">
                    {{ pageNumber++ }}
                  </td>
                  <td
                    v-if="sessionData.role === 'admin'"
                    class="text-sm font-normal leading-normal"
                  >
                    {{ history.user.username }}
                  </td>
                  <td
                    v-if="sessionData.role === 'admin'"
                    class="text-sm font-normal leading-normal"
                  >
                    {{ history.user.email }}
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
                  <td
                    v-if="sessionData.role === 'user'"
                    class="text-sm font-normal leading-normal"
                  >
                    {{ converter(history.subscribe_start) }}
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    {{ converter(history.subscribe_expired) }}
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
  import { useSessionData } from '@/store/index'
  import { useExportExcel } from '@/composables/useExportExcel'

  DataTable.use(DataTablesCore)

  const sessionData = useSessionData()
  const stateLoad = ref(true)
  const listHistory = ref()
  const dataExport = ref()
  const pageNumber = 1

  definePageMeta({
    layout: 'editor-default',
    middleware: 'auth',
  })

  function converter(params) {
    const utcTime = new Date(params)
    const days = [
      'Minggu',
      'Senin',
      'Selasa',
      'Rabu',
      'Kamis',
      'Jumat',
      'Sabtu',
    ]
    const months = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ]

    let day = days[utcTime.getDay()]
    let month = months[utcTime.getMonth()]
    let year = utcTime.getFullYear()

    return `${day}, ${utcTime.getDate()} ${month} ${year}`
  }

  const { exportToExcel } = useExportExcel()
  const handleExport = () => {
    const date = new Date()
    exportToExcel(
      dataExport.value,
      `PAYMENT_${date.getMonth()}_${date.getFullYear()}.xlsx`,
    )
  }

  onMounted(async () => {
    const activePage = useActivePage()
    activePage.page = 'History Payment'
    activePage.child = ''
    activePage.create = false
    activePage.export = true

    await useGetData('/transaction/historyByUser').then((res) => {
      listHistory.value = res.transaction
    })
    await useGetData('/transaction/transactionExport').then((res) => {
      dataExport.value = res.transaction
    })
    stateLoad.value = false
  })
</script>
<style>
  @import 'datatables.net-dt';
  @import 'datatables.net-responsive-dt';
  @import url('~/assets/css/table.css');
</style>
