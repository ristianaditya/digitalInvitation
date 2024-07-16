<template>
  <div>
    <div class="mt-10 flex">
      <p class="-mt-2 mb-4 text-[22px] font-[600]">List RSVP</p>
      <Icon
        v-if="sessionData.subscribe == 'DigitalDazzle'"
        name="lets-icons:lock-duotone"
        class="-mt-1 ml-1 h-6 w-6 text-[#741841]"
      />
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
    <div v-else class="mb-80 w-full max-w-full">
      <div
        class="shadow-soft-xl relative flex min-w-0 flex-col break-words rounded-2xl border-0 bg-white bg-clip-border"
      >
        <div
          v-if="sessionData.subscribe == 'DigitalDazzle'"
          class="relative inset-0 z-10 mt-[9rem] flex w-full max-w-full items-center justify-center"
        >
          <span
            class="rounded-full bg-[#FAA6B0] p-1 px-4 text-center text-lg text-white"
          >
            <Icon
              name="lets-icons:lock-duotone"
              class="-mt-1 mr-2 h-6 w-6 text-[#741841]"
            />Unlock Premium Features</span
          >
        </div>

        <div
          class="table-responsive absolute w-full"
          :style="
            sessionData.subscribe == 'DigitalDazzle'
              ? `-webkit-filter: blur(10px); pointer-events: none;`
              : ``
          "
        >
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
            <tbody v-if="sessionData.subscribe == 'DigitalDazzle'">
              <tr>
                <td
                  class="dt-type-numeric sorting_1 text-sm font-normal leading-normal"
                >
                  5
                </td>
                <td class="text-sm font-normal leading-normal">Delly</td>
                <td class="text-sm font-normal leading-normal">
                  halooooo semoga samawa yaaa
                </td>
                <td class="text-sm font-normal leading-normal">
                  <span
                    class="inline-flex items-center rounded-md bg-green-100 px-2.5 py-1.5 text-[10px] font-bold text-green-500 dark:bg-green-400 dark:bg-opacity-10 dark:text-green-400"
                  >
                    ATTENDED
                  </span>
                </td>
              </tr>
              <tr>
                <td
                  class="dt-type-numeric sorting_1 text-sm font-normal leading-normal"
                >
                  6
                </td>
                <td class="text-sm font-normal leading-normal">Delly</td>
                <td class="text-sm font-normal leading-normal">selamat yaa</td>
                <td class="text-sm font-normal leading-normal">
                  <span
                    class="inline-flex items-center rounded-md bg-red-100 px-2.5 py-1.5 text-[10px] font-bold text-red-500 dark:bg-red-400 dark:bg-opacity-10 dark:text-red-400"
                  >
                    ABSENT
                  </span>
                </td>
              </tr>
              <tr>
                <td
                  class="dt-type-numeric sorting_1 text-sm font-normal leading-normal"
                >
                  6
                </td>
                <td class="text-sm font-normal leading-normal">Delly</td>
                <td class="text-sm font-normal leading-normal">selamat yaa</td>
                <td class="text-sm font-normal leading-normal">
                  <span
                    class="inline-flex items-center rounded-md bg-red-100 px-2.5 py-1.5 text-[10px] font-bold text-red-500 dark:bg-red-400 dark:bg-opacity-10 dark:text-red-400"
                  >
                    ABSENT
                  </span>
                </td>
              </tr>
            </tbody>
            <tbody v-else>
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
  </div>
</template>
<script setup>
  import DataTable from 'datatables.net-vue3'
  import { useGetData } from '~/composables/useFetchData'
  import { useSessionData } from '@/store/index'

  const sessionData = useSessionData()
  const listRsvp = ref()
  const stateLoadRsvp = ref(true)
  const pageNumberRsvp = ref(1)
  const route = useRoute()

  onMounted(async () => {
    await useGetData(`/rsvp/getById/${route.query.id}`).then((res) => {
      listRsvp.value = res.data
    })
    stateLoadRsvp.value = false
  })
</script>
<style>
  @import 'datatables.net-dt';
  @import 'datatables.net-responsive-dt';
  @import url('~/assets/css/table.css');
</style>
