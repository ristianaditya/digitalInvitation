<template>
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

definePageMeta({
  auth: {
    unauthenticatedOnly: false,
  }
})

const { getSession, status } = useAuth()
const session = await getSession()

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

