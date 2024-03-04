<template>
  <div v-if="statusUser === 'authenticated' && complateRegis.completion == false">
    <div class="fixed inset-x-0 bottom-0 z-50 animate-fade-up animate-once">
      <div class="bg-[#49479F]">
        <div class="mx-auto max-w-7xl py-3 px-3 sm:px-6 lg:px-8">
          <div class="flex flex-col items-center justify-between lg:flex-row lg:justify-center">
            <div class="flex flex-1 items-center lg:mr-3 lg:flex-none">
              <p class="ml-3 text-center font-medium text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                  stroke="currentColor" aria-hidden="true" class="mr-2 hidden h-6 w-6 lg:inline">
                  <path stroke-linecap="round" stroke-linejoin="round"
                    d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z">
                  </path>
                </svg>Complete the Registration to Experience All the Features
              </p>
            </div>
            <div class="mt-2 w-full flex-shrink-0 lg:mt-0 lg:w-auto">
              <NuxtLink to="/settings"
                class="flex items-center justify-center rounded-md border border-transparent bg-white px-4 py-2 text-sm font-medium text-[#49479F] shadow-sm">
                Setting
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="relative scroll-smooth" @scroll="handleScroll">
    <div id="home" :class="color.bg" class="transition-all duration-1000">
      <MainHome />
    </div>
    <MainFeature id="feature" :class="color.bg" class="transition-all duration-1000" />
    <MainGalleryThema id="thema" />
    <MainPricing id="pricing" />
  </div>
</template>

<script setup>

import { useComplateRegis } from '@/store/index'

definePageMeta({
  auth: false
})
const complateRegis = useComplateRegis()

const { status } = useAuth()

const statusUser = status.value

const color = reactive({
  bg: 'bg-[#F4F0FD]',
})


const handleScroll = () => {
  const scrollPosition = window.scrollY || window.pageYOffset;

  // Change background color based on scroll position
  if (scrollPosition >= 0 && scrollPosition < window.innerHeight - 300) {
    color.bg = 'bg-[#F4F0FD]';
  } else if (scrollPosition >= window.innerHeight - 300 && scrollPosition < window.innerHeight * 2) {
    color.bg = 'bg-[#FEF7E7]';
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>
