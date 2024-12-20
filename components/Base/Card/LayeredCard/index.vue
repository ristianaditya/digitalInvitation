<template>
  <div
    class="layered-card-container"
    :class="{ 'has-bottom': hasBottomContent }"
  >
    <!-- Bottom layer (only shown if bottom-content exists) -->
    <div v-if="hasBottomContent" class="bottom-layer">
      <slot name="bottom-content"></slot>
    </div>

    <!-- Main card -->
    <div class="main-card">
      <div class="relative">
        <div class="mb-4 flex items-center justify-between">
          <div
            class="rounded-2xl bg-gradient-to-r from-[#F9DC94] to-[#F9DC94] p-3 shadow-lg"
          >
            <slot name="icon"></slot>
          </div>
          <span class="text-sm font-medium text-gray-400">
            <slot name="subtitle"></slot>
          </span>
        </div>

        <h2 class="text-1xl mb-2 font-bold text-gray-700">
          <slot name="title"></slot>
        </h2>

        <div class="flex items-center justify-between">
          <slot name="content"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
  import { useSlots, computed } from 'vue'

  const slots = useSlots()
  const hasBottomContent = computed(() => !!slots['bottom-content'])
</script>

<style scoped>
  .layered-card-container {
    position: relative;
    width: 100%;
  }

  /* Only add bottom padding if there's bottom content */
  .layered-card-container.has-bottom {
    padding-bottom: 3rem;
  }

  .main-card {
    position: relative;
    background: white;
    padding: 1.5rem;
    border-radius: 0.75rem;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    z-index: 2;
    transition: transform 0.2s ease;
  }

  .bottom-layer {
    position: absolute;
    background: white;
    border-radius: 0.75rem;
    bottom: -0.5rem;
    left: 0.75rem;
    right: 0.75rem;
    height: 5rem;
    padding: 1rem 1.5rem;
    z-index: 1;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
    border: 1px solid #f0f0f0;
  }

  /* Hover effect only for cards with bottom content */
  .layered-card-container.has-bottom:hover .main-card {
    transform: translateY(-4px);
  }
</style>
