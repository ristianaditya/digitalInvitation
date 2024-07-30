<template>
  <div
    class="mb-7 grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6 xl:grid-cols-4"
  >
    <div
      class="group flex flex-col overflow-hidden rounded-2xl bg-pink-50 transition hover:bg-pink-100 active:bg-pink-50"
    >
      <div class="flex grow items-center justify-between p-6">
        <div>
          <dt
            v-if="
              invitation.subs == 'SparkleSend' ||
              invitation.subs == 'DigitalDreamscape'
            "
            class="text-2xl font-bold text-[#CD6996]"
          >
            {{ listGuestStats?.total_guests || 0 }}
          </dt>
          <Icon v-else name="gg:infinity" class="h-10 w-10 text-[#CD6996]" />
          <dd class="text-sm font-medium text-[#CD6996]">Guests</dd>
        </div>
        <Icon name="fluent:guest-12-filled" class="h-10 w-10 text-[#CD6996]" />
      </div>
    </div>

    <div
      class="group flex flex-col overflow-hidden rounded-2xl bg-sky-50 transition hover:bg-sky-100 active:bg-sky-50"
    >
      <div class="flex grow items-center justify-between p-6">
        <div>
          <dt
            v-if="
              invitation.subs == 'SparkleSend' ||
              invitation.subs == 'DigitalDreamscape'
            "
            class="text-2xl font-bold text-[#5AB5E1]"
          >
            {{ listGuestStats?.total_attended || 0 }}
          </dt>
          <Icon v-else name="gg:infinity" class="h-10 w-10 text-[#5AB5E1]" />
          <dd class="text-sm font-medium text-[#5AB5E1]">Attend (scanned)</dd>
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
          <dt
            v-if="
              invitation.subs == 'SparkleSend' ||
              invitation.subs == 'DigitalDreamscape'
            "
            class="text-2xl font-bold text-[#49479F]"
          >
            {{ listGuestStats?.total_not_attended || 0 }}
          </dt>
          <Icon v-else name="gg:infinity" class="h-10 w-10 text-[#49479F]" />
          <dd class="text-sm font-medium text-[#49479F]">Absent (scanned)</dd>
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
          <dt
            v-if="
              invitation.subs == 'SparkleSend' ||
              invitation.subs == 'DigitalDreamscape'
            "
            class="text-2xl font-bold text-[#CB8954]"
          >
            {{
              invitation.subs == 'SparkleSend' ||
              invitation.subs == 'DigitalDreamscape'
                ? listGuestStats?.total_greetings || 0
                : ''
            }}
          </dt>
          <Icon v-else name="gg:infinity" class="h-10 w-10 text-[#CB8954]" />

          <dd class="text-sm font-medium text-[#CB8954]">Wishes</dd>
        </div>
        <Icon
          name="game-icons:nothing-to-say"
          class="h-10 w-10 text-[#CB8954]"
        />
      </div>
    </div>
  </div>
</template>
<script setup>
  import { useGetData } from '~/composables/useFetchData'
  import { useSessionData } from '@/store/index'

  const sessionData = useSessionData()
  const invitation = reactive({
    subs: '',
    role: 'user',
  })

  const listGuestStats = reactive({
    total_guests: '',
    total_attended: '',
    total_not_attended: '',
    total_greetings: '',
  })
  const route = useRoute()

  onMounted(async () => {
    await useGetData(`/guest/guestStats/${route.query.id}`).then((res) => {
      listGuestStats.total_guests = res.data.total_guests
      listGuestStats.total_attended = res.data.total_attended
      listGuestStats.total_not_attended = res.data.total_not_attended
      listGuestStats.total_greetings = res.data.total_greetings
    })

    await useGetSession('/user/getSession').then((res) => {
      invitation.subs = res.data.latest_transaction?.subscribe
      invitation.role = res.data.role
      sessionData.subscribe = res.data.latest_transaction?.subscribe
    })
  })
</script>
