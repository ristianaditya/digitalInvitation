<template>
  <div class="pb-14 text-[14px] font-[400]">
    <div class="mt-4 flex justify-between">
      <p class="w-[70%]">
        Tiket belum dibuat, silahkan buat tiket terlebih dahulu untuk bisa
        diterbitkan pada layanan aplikasi Sapawarga.
      </p>
      <UButton class="pointer-events-none h-9" variant="solid" :ui="{
        rounded: 'rounded-lg',
        variant: { solid: 'bg-[#F5F5F5] text-[#A3A3A3] hover:bg-[#F9F9F9]' },
      }">
        Published</UButton>
    </div>
    <div class="mt-4 flex justify-between">
      <p class="w-[70%]">
        Objek wisata sudah diterbitkan, dan sudah bisa diakses pada layanan
        aplikasi Sapawarga.
      </p>
      <UButton class="pointer-events-none h-9" color="red" variant="solid"
        :ui="{ rounded: 'rounded-lg', variant: { solid: 'bg-[#DC2626]' } }">
        Unpublish</UButton>
    </div>
    <div class="mt-4 flex justify-between">
      <p class="w-[70%]">
        Objek wisata belum diterbitkan, dan belum bisa diakses pada layanan
        aplikasi Sapawarga.
      </p>
      <UButton class="pointer-events-none h-9" color="green" variant="solid"
        :ui="{ rounded: 'rounded-lg', variant: { solid: 'bg-[#108F5A]' } }">
        Publish</UButton>
    </div>
    <hr class="my-8 h-[2px] w-full border-0 bg-gray-200 dark:bg-gray-700" />
    <p class="mr-2 text-lg font-[600] capitalize">Delete Invitation</p>
    <div class="mt-3 flex justify-between text-md">
      <p>
        Are you sure you want to delete these invitations ? Deleted invitations cannot be returned.
      </p>
      <UButton class="h-9 w-20 text-md justify-center" color="red" variant="outline" :ui="{ rounded: 'rounded-lg' }">
        Delete</UButton>
    </div>
  </div>
</template>
<script setup>
import { useActivePage } from '@/store/index'
definePageMeta({
  layout: 'editor',
  middleware: 'auth',
})

onMounted(async () => {
  const activePage = useActivePage()
  activePage.page = 'Dashboard'
  activePage.create = false
  activePage.child = ' / Publish'

  definePageMeta({
    layout: 'editor',
    middleware: 'auth',
  })
})
</script>
