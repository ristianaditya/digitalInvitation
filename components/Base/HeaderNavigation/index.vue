<template>
  <div class="flex">
    <p class="-mt-2 mb-7 text-[22px] font-[600]">
      {{ activePage.page }}{{ activePage.child }}
    </p>
    <div
      v-show="activePage.create"
      class="btn btn-circle btn-sm -mt-[6px] ml-3 bg-[#F8D075] hover:bg-[#ccaa5a]"
      @click="openModal()"
    >
      <Icon name="material-symbols:add" class="text-2xl" />
    </div>
  </div>
</template>

<script setup>
  import { useActivePage } from '@/store/index'
  const activePage = useActivePage()
  const emit = defineEmits(['open'])
  function openModal() {
    emit('open')
  }
</script>
