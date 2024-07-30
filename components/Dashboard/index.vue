<template>
  <div
    class="mb-10 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 xl:grid-cols-4"
  >
    <div
      class="group flex flex-col overflow-hidden rounded-2xl bg-pink-50 transition hover:bg-pink-100 active:bg-pink-50"
    >
      <div class="flex grow items-center justify-between p-6">
        <div>
          <dt class="text-2xl font-bold text-[#CD6996]">
            {{ dashboard.invitations || 0 }}
          </dt>
          <dd class="text-sm font-medium text-[#CD6996]">Invitations</dd>
        </div>
        <Icon name="fluent:guest-12-filled" class="h-10 w-10 text-[#CD6996]" />
      </div>
    </div>

    <div
      class="group flex flex-col overflow-hidden rounded-2xl bg-sky-50 transition hover:bg-sky-100 active:bg-sky-50"
    >
      <div class="flex grow items-center justify-between p-6">
        <div>
          <dt class="text-2xl font-bold text-[#5AB5E1]">
            {{ dashboard.projetcs || 0 }}
          </dt>
          <dd class="text-sm font-medium text-[#5AB5E1]">Projects</dd>
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
            {{ dashboard.musics || 0 }}
          </dt>
          <dd class="text-sm font-medium text-[#49479F]">Musics</dd>
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
            {{ dashboard.users || 0 }}
          </dt>
          <dd class="text-sm font-medium text-[#CB8954]">Users</dd>
        </div>
        <Icon
          name="game-icons:nothing-to-say"
          class="h-10 w-10 text-[#CB8954]"
        />
      </div>
    </div>
  </div>
  <div class="grid h-[500px] w-full grid-cols-2 gap-6">
    <div class="h-[600px] w-full rounded-xl bg-slate-50 p-5">
      <highchart class="h-full" :options="chartMount" />
    </div>
    <div class="h-[600px] w-full rounded-xl bg-slate-50 p-5">
      <highchart class="h-full" :options="chartSubs" />
    </div>
  </div>
</template>
<script setup>
  const date = new Date()
  const amountTotal = ref('')
  const DigitalDazzle = ref('')
  const DigitalDreamscape = ref('')
  const SparkleSend = ref('')
  const dashboard = reactive({
    invitations: 0,
    musics: 0,
    projetcs: 0,
    users: 0,
  })
  const chartMount = ref({
    chart: {
      type: 'line',
    },
    title: {
      text: `Payment ${date.getFullYear()}`,
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yAxis: {
      title: {
        text: 'Amount',
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        },
        enableMouseTracking: false,
      },
    },
    series: [
      {
        name: 'Payment',
        data: amountTotal,
      },
    ],
  })
  const chartSubs = ref({
    chart: {
      type: 'area',
    },
    title: {
      text: `Subscription ${date.getFullYear()}`,
    },
    xAxis: {
      categories: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec',
      ],
    },
    yAxis: {
      title: {
        text: 'Total Subscription',
      },
    },
    plotOptions: {
      line: {
        dataLabels: {
          enabled: true,
        },
        enableMouseTracking: false,
      },
    },
    series: [
      {
        name: 'DigitalDazzle',
        data: DigitalDazzle,
      },
      {
        name: 'DigitalDreamscape',
        data: DigitalDreamscape,
      },
      {
        name: 'SparkleSend',
        data: SparkleSend,
      },
    ],
  })
  onMounted(async () => {
    await useGetData('/transaction/getMonthlyTransaction').then((res) => {
      amountTotal.value = res.transaction
      DigitalDazzle.value = res.DigitalDazzle
      DigitalDreamscape.value = res.DigitalDreamscape
      SparkleSend.value = res.SparkleSend
    })

    await useGetData('/transaction/getCardDashboard').then((res) => {
      dashboard.invitations = res.invitations.total
      dashboard.musics = res.musics.total
      dashboard.projetcs = res.projetcs.total
      dashboard.users = res.users.total
    })
  })
</script>
