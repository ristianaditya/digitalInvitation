<template>
  <div class="body h-screen w-full flex flex-col items-center justify-center">
    <img 
      src="/thema/primeYellow/daun_top_left_opening.png"
      class="fixed top-0 left-[300px] z-5 w-[300px] animate-leaf-left"
    />
    <img 
      src="/thema/primeYellow/top_left_opening.png"
      class="fixed top-0 left-0 z-10 w-[800px]"
    />
    <img 
      src="/thema/primeYellow/blue_birds_opening.png"
      class="fixed top-0 z-20 w-[350px] left-[20px] animate-wiper"
    />
    <img 
      src="/thema/primeYellow/white_birds_opening.png"
      class="fixed top-[270px] z-15 w-[270px] right-[110px] animate-birds-entry"
    />
    <img 
      src="/thema/primeYellow/daun_top_right_opening.png"
      class="fixed top-[30px] right-[140px] z-5 w-[250px] animate-leaf-right"
    />
    <img 
      src="/thema/primeYellow/top_right_opening.png"
      class="fixed top-0 right-0 z-10 w-[800px]"
    />
  </div>
</template>
<script setup>
  definePageMeta({
    layout: false,
    middleware: 'auth',
  })
</script>
<style scoped>
  .body {
    background: url('/thema/primeYellow/bg_opening_yellow.png') no-repeat;
    background-size: cover;
    background-position: center;
  }
  @keyframes swaying {
    0% { transform: rotate(0deg); }
    20% { transform: rotate(4deg) translateY(-6px); }
    50% { transform: rotate(-3deg) translateY(4px); }
    80% { transform: rotate(3deg) translateY(-4px); }
    100% { transform: rotate(0deg); }
  }
  .animate-leaf-left {
    animation: swaying 8s cubic-bezier(0.42, 0, 0.58, 1) infinite; 
    transform-origin: left 20%;
    will-change: transform;
  }
  .animate-leaf-right {
    animation: swaying 8s cubic-bezier(0.42, 0, 0.58, 1) infinite; 
    transform-origin: right 20%;
    will-change: transform;
  }
  @keyframes birds-entry {
    0% {
      transform: translate(100vw, -100px) rotate(10deg);
    }
    30% {
      transform: translate(60vw, -20px) rotate(5deg);
    }
    60% {
      transform: translate(30vw, -40px) rotate(-3deg);
    }
    100% {
      transform: translate(0, 0) rotate(0deg);
    }
  }
  .animate-birds-entry {
    animation: birds-entry 4s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    will-change: transform, opacity;
  }

</style>
