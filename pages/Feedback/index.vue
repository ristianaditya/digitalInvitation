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
                  <th>Email</th>
                  <th>Questions 1</th>
                  <th>Questions 2</th>
                  <th>Questions 3</th>
                  <th>Questions 4</th>
                  <th>Questions 5</th>
                  <th>Feedback</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="quiz in listQuiz" :key="quiz.id">
                  <td class="text-sm font-normal leading-normal">
                    {{ pageNumber++ }}
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    {{ quiz.user.email }}
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    {{ param[JSON.parse(quiz.quiz).satu] }}
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    {{ param[JSON.parse(quiz.quiz).dua] }}
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    {{ param[JSON.parse(quiz.quiz).tiga] }}
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    {{ param[JSON.parse(quiz.quiz).empat] }}
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    {{ param[JSON.parse(quiz.quiz).lima] }}
                  </td>
                  <td class="text-sm font-normal leading-normal">
                    {{ quiz.feedback }}
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
  import { useExportExcel } from '@/composables/useExportExcel'

  DataTable.use(DataTablesCore)

  const stateLoad = ref(true)
  const listQuiz = ref()
  const dataExport = ref()
  const pageNumber = ref(1)

  definePageMeta({
    layout: 'editor-default',
    middleware: 'auth',
  })

  const param = {
    1: 'Sangat Tidak Setuju',
    2: 'Tidak Setuju',
    3: 'Ragu-ragu',
    4: 'Setuju',
    5: 'Sangat Setuju',
  }
  const { exportToExcel } = useExportExcel()
  const handleExport = () => {
    const date = new Date()
    exportToExcel(
      dataExport.value,
      `FEEDBACK_${date.getMonth()}_${date.getFullYear()}.xlsx`,
    )
  }

  onMounted(async () => {
    const activePage = useActivePage()
    activePage.page = 'Feedback'
    activePage.child = ''
    activePage.create = false
    activePage.export = true

    await useGetData('/quiz/getAll').then((res) => {
      listQuiz.value = res.data
    })
    await useGetData('/quiz/feedbackExport').then((res) => {
      dataExport.value = res.data
    })
    stateLoad.value = false
  })
</script>
<style>
  @import 'datatables.net-dt';
  @import 'datatables.net-responsive-dt';
  @import url('~/assets/css/table.css');
</style>
