<template>
  <UContainer
    v-if="pageLoad"
    class="flex h-[80vh] items-center justify-center text-center"
  >
    <span class="loading loading-spinner loading-lg text-[#49479F]"></span>
  </UContainer>

  <MainPricing id="pricing" />
  <UNotifications />
</template>

<script setup>
  definePageMeta({
    layout: 'cms',
    middleware: 'auth',
  })
</script>
p
