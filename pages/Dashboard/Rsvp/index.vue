<template>
  <div>
    <BaseHeaderNavigation />
    <GuestListCountRsvp />
    <GuestListRsvp />
    <UNotifications />
  </div>
</template>
<script setup>
  import { useActivePage } from '@/store/index'

  definePageMeta({
    layout: 'editor-default',
    middleware: 'auth',
  })

  onMounted(async () => {
    const activePage = useActivePage()
    activePage.page = 'Dashboard'
    activePage.create = false
    activePage.child = ' / List RSVP'
    activePage.formCreate = ''
    activePage.export = false
  })
</script>
