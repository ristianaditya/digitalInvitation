<template>
  <div class="fixed inset-0 flex overflow-hidden">
    <TheSidebar />
    <div class="flex flex-1 w-full min-w-0">
      <div class="flex-col items-stretch relative w-full flex-1 flex">
        <!-- <TheHeaderEditor /> -->
        <div class="px-20 py-12 overflow-y-auto h-screen">
          <div class=" flex">
            <p class="font-[600] text-[22px] mb-7 -mt-2">{{ activePage.page }}{{ activePage.child }}</p>
            <NuxtLink v-show="activePage.create" :to="activePage.formCreate"
              class=" btn btn-circle btn-sm -mt-[6px] ml-3 bg-[#F8D075] hover:bg-[#ccaa5a]">
              <Icon name="material-symbols:add" class="text-2xl" />
            </NuxtLink>
          </div>
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { useActivePage } from '@/store/index'
const activePage = useActivePage()
</script>
