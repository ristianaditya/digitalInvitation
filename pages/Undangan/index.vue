<template>
  <div
    class="relative flex min-h-screen items-center justify-center overflow-hidden"
  >
    <!-- Cover with transition -->
    <Transition
      enter-active-class="transition-all duration-1000 ease-in-out"
      enter-from-class="opacity-100 translate-y-0"
      enter-to-class="opacity-0 translate-y-[150%] rotate-12"
      leave-active-class="transition-all duration-1000 ease-in-out"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 translate-y-[150%] rotate-12"
    >
      <div v-if="!isOpen" class="w-full transition-transform">
        <ThemaOpeningPrimeYellow>
          <template #buttonOpen>
            <ThemaButtonOpen
              class="transform transition-all duration-300 hover:scale-110 active:scale-95"
              @click="handleClick"
            />
          </template>
        </ThemaOpeningPrimeYellow>
      </div>
    </Transition>

    <!-- Main content with transition -->
    <Transition
      enter-active-class="transition-all duration-1000 ease-out"
      enter-from-class="opacity-0 translate-y-[-50%] scale-50"
      enter-to-class="opacity-100 translate-y-0 scale-100"
    >
      <div
        v-if="isOpen"
        class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform text-center"
      >
        halooooo
      </div>
    </Transition>

    <!-- Animation overlay -->
    <div v-show="showOverlay" class="pointer-events-none fixed inset-0">
      <div
        v-for="i in 3"
        :key="i"
        class="animate-ripple absolute inset-0"
        :style="{
          animationDelay: `${(i - 1) * 200}ms`,
          border: '2px solid white',
          borderRadius: '50%',
          transform: 'scale(0)',
          opacity: '0.8',
        }"
      ></div>
    </div>
  </div>
</template>

<script setup>
  definePageMeta({
    layout: false,
    middleware: 'auth',
  })

  const isOpen = ref(false)
  const showOverlay = ref(false)

  const handleClick = () => {
    showOverlay.value = true

    setTimeout(() => {
      isOpen.value = true
    }, 300)

    setTimeout(() => {
      showOverlay.value = false
    }, 1500)
  }
</script>

<style scoped>
  @keyframes rippleEffect {
    0% {
      transform: scale(0);
      opacity: 0.8;
    }
    100% {
      transform: scale(2);
      opacity: 0;
    }
  }

  .animate-ripple {
    animation: rippleEffect 1.5s cubic-bezier(0.4, 0, 0.2, 1) forwards;
  }

  /* Hover effect for button */
  .hover\:scale-110:hover {
    transform: scale(1.1);
  }

  .active\:scale-95:active {
    transform: scale(0.95);
  }
</style>
