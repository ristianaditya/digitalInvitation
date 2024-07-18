<template>
  <BaseHeaderNavigation />
  <ThemaList />
</template>
<script setup>
  import { useActivePage } from '@/store/index'

  definePageMeta({
    layout: 'editor-default',
    middleware: 'auth',
  })

  onMounted(async () => {
    const activePage = useActivePage()
    activePage.page = 'Thema'
    activePage.child = ''
    activePage.create = false
    activePage.export = false
    activePage.formCreate = ''
  })
</script>
