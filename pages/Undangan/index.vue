<template>
  <div class="body flex h-screen w-full flex-col items-center justify-center">
    <button
      class="group fixed right-4 top-4 z-50 min-w-[120px] px-4 py-2"
      :class="[
        isPlaying ? 'bg-[#545F30]' : 'bg-[#3D4522]',
        'transform rounded-full transition-all duration-300 ease-in-out hover:-translate-y-0.5 hover:scale-105 hover:shadow-lg',
      ]"
      @click="togglePlaying"
    >
      <!-- Music Icon with Animation -->
      <div class="flex items-center gap-3">
        <Icon
          name="ph:music-note-simple-bold"
          class="h-5 w-5 text-white transition-transform duration-300"
          :class="isPlaying ? 'rotate-[360deg]' : 'rotate-0'"
        />

        <div class="flex items-center gap-2">
          <!-- Toggle Switch -->
          <div
            class="relative h-[24px] w-[40px] overflow-hidden rounded-full bg-[#5B703F]"
          >
            <div
              class="absolute top-[2px] h-[20px] w-[20px] rounded-full bg-white shadow-md transition-all duration-500 hover:scale-90"
              :class="[
                isPlaying ? 'translate-x-[18px]' : 'translate-x-[2px]',
                'transform ease-[cubic-bezier(0.4,0,0.2,1)]',
              ]"
            />
          </div>

          <!-- Text Label -->
          <span
            class="text-sm font-medium text-white transition-all duration-300"
            :class="isPlaying ? 'opacity-100' : 'opacity-80'"
          >
            {{ isPlaying ? 'On' : 'Off' }}
          </span>
        </div>
      </div>
    </button>
    <img
      src="/thema/primeYellow/daun_top_left_opening.png"
      class="z-5 animate-leaf-left w-300-responsive daun-left fixed top-0"
    />
    <img
      src="/thema/primeYellow/top_left_opening.png"
      class="w-opening-border fixed left-0 top-0 z-10"
    />
    <img
      src="/thema/primeYellow/blue_birds_opening.png"
      class="bird-container fixed left-[20px] top-0 z-20 w-[350px]"
    />
    <img
      src="/thema/primeYellow/white_birds_opening.png"
      class="z-15 animate-birds-entry fixed right-[110px] top-[270px] w-[270px]"
    />
    <img
      src="/thema/primeYellow/daun_top_right_opening.png"
      class="z-5 animate-leaf-right fixed right-[140px] top-[30px] w-[250px]"
    />
    <img
      src="/thema/primeYellow/top_right_opening.png"
      class="w-opening-border fixed right-0 top-0 z-10"
    />
    <div class="text-container fixed z-30 text-center">
      <p class="invitation-text mb-16">
        Dengan ini kami mengundang bapak/ibu<br />
        Menghadiri Pernikahan
      </p>
      <div class="border-container flex items-center justify-center">
        <div class="absolute">
          <div class="photo-frame-container relative flex items-center">
            <div class="absolute left-1/2 top-36 z-30 -translate-x-1/2">
              <img
                src="/thema/primeYellow/and_opening.png"
                class="w-[100px] animate-wiggle-more"
                alt="and"
              />
            </div>

            <div class="relative mr-10 flex flex-col items-center text-center">
              <div class="relative h-[400px] w-[265px]">
                <img
                  src="/thema/primeYellow/laki_opening.png"
                  class="w-300-responsive absolute left-1/2 top-1/2 z-10 h-[401px] -translate-x-1/2 -translate-y-1/2 transform object-cover"
                />
                <img
                  src="/thema/primeYellow/frame_photo_opening.png"
                  class="absolute left-0 top-0 z-20 h-full w-full"
                  alt="frame"
                />
              </div>
              <div
                class="mt-2 rounded-xl bg-[#FFF7F1] px-7 py-2 font-serif text-2xl font-medium text-[#2C5530]"
              >
                Mamat Komarudin
              </div>
            </div>

            <div class="relative flex flex-col items-center text-center">
              <div class="relative h-[400px] w-[265px]">
                <img
                  src="/thema/primeYellow/cewe_opening.png"
                  class="w-300-responsive absolute left-1/2 top-1/2 z-10 h-[401px] -translate-x-1/2 -translate-y-1/2 transform object-cover"
                  alt="bride"
                />
                <img
                  src="/thema/primeYellow/frame_photo_opening.png"
                  class="absolute left-0 top-0 z-20 h-full w-full"
                  alt="frame"
                />
              </div>
              <div
                class="mt-2 rounded-xl bg-[#FFF7F1] px-7 py-2 font-serif text-2xl font-medium text-[#2C5530]"
              >
                Mamat Komarudin
              </div>
            </div>
          </div>
        </div>
        <img
          src="/thema/primeYellow/border_form_opening.png"
          class="w-[1200px]"
          alt="border"
        />
      </div>
    </div>
    <div class="fixed bottom-20 z-30">
      <button
        class="buka-undangan-btn mx-auto flex items-center gap-2 rounded-lg px-6 py-3"
      >
        <span class="icon-envelope">✉️</span>
        <span>Buka Undangan</span>
      </button>
    </div>
    <img
      src="/thema/primeYellow/daun_gold_left_opening.png"
      class="w-300-responsive fixed bottom-60 left-20 z-10"
    />
    <img
      src="/thema/primeYellow/daun_gold_right_opening.png"
      class="w-300-responsive fixed bottom-60 right-20 z-10"
    />
    <img
      src="/thema/primeYellow/daun_left_bottom_opening.png"
      class="animate-leaf-left-bottom w-300-responsive fixed -bottom-[30px] -left-[5px] z-10"
    />
    <img
      src="/thema/primeYellow/daun_left_bottom_opening_2.png"
      class="fixed bottom-0 left-48 z-10 w-[260px]"
    />
    <img
      src="/thema/primeYellow/daun_right_bottom_opening.png"
      class="w-300-responsive fixed -bottom-[30px] -right-[5px] z-10"
    />
    <img
      src="/thema/primeYellow/daun_right_bottom_opening_2.png"
      class="fixed bottom-0 right-56 z-10 w-[260px]"
    />
  </div>
</template>
<script setup>
  definePageMeta({
    layout: false,
    middleware: 'auth',
  })
  const isPlaying = ref(false)
  const togglePlaying = () => {
    isPlaying.value = !isPlaying.value
  }
</script>
<style scoped>
  .body {
    background: url('/thema/primeYellow/bg_opening_yellow.png') no-repeat;
    background-size: cover;
    background-position: center;
  }
  @keyframes swaying {
    0% {
      transform: rotate(0deg);
    }
    20% {
      transform: rotate(4deg) translateY(-6px);
    }
    50% {
      transform: rotate(-3deg) translateY(4px);
    }
    80% {
      transform: rotate(3deg) translateY(-4px);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .animate-leaf-left {
    animation: swaying 8s cubic-bezier(0.42, 0, 0.58, 1) infinite;
    transform-origin: left 20%;
    will-change: transform;
  }
  .animate-leaf-left-bottom {
    animation: swaying 8s cubic-bezier(0.42, 0, 0.58, 1) infinite;
    transform-origin: left bottom;
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
  @keyframes rotateAroundZ {
    0% {
      transform: rotate(95deg);
    }
    100% {
      transform: rotate(0deg);
    }
  }
  .bird-container {
    transform-origin: top right;
    animation: rotateAroundZ 2s ease-in-out forwards alternate;
  }
  .text-container {
    top: 45%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
  }
  .invitation-text {
    font-family: 'Lora', serif;
    font-size: 1.75rem;
    color: #5b5b5b;
    line-height: 1.6;
    letter-spacing: 0.5px;
  }
  .buka-undangan-btn {
    background-color: #4a5c3b;
    color: white;
    font-family: 'Lora', serif;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    border: 2px solid #4a5c3b;
  }
  .buka-undangan-btn:hover {
    background-color: transparent;
    color: #4a5c3b;
  }
  .photo-frame-container {
    position: relative;
    z-index: 30;
    left: 50%;
    transform: translateX(-50%);
  }
  .group:hover .music-icon {
    transform: scale(1.1);
  }

  @media (max-width: 2880px) {
    .w-opening-border {
      width: 1100px;
    }
    .w-300-responsive {
      width: 350px;
    }
    .daun-left {
      left: 420px;
    }
  }

  /* Desktop large screens */
  @media (max-width: 2400px) {
    .w-opening-border {
      width: 900px;
    }
    .w-300-responsive {
      width: 320px;
    }
    .daun-left {
      left: 350px;
    }
  }

  /* Desktop medium screens */
  @media (max-width: 2150px) {
    .w-opening-border {
      width: 800px;
    }
    .w-300-responsive {
      width: 300px;
    }
    .daun-left {
      left: 300px;
    }
  }

  /* Desktop standard screens */
  @media (max-width: 1920px) {
    .w-opening-border {
      width: 700px;
    }
    .w-300-responsive {
      width: 250px;
    }
    .daun-left {
      left: 250px;
    }
  }

  /* Desktop small screens */
  @media (max-width: 1600px) {
    .w-opening-border {
      width: 600px;
    }
    .w-300-responsive {
      width: 200px;
    }
    .daun-left {
      left: 200px;
    }
  }

  /* Laptop screens */
  @media (max-width: 1366px) {
    .w-opening-border {
      width: 500px;
    }
    .w-300-responsive {
      width: 180px;
    }
    .daun-left {
      left: 180px;
    }
  }

  /* Tablet landscape */
  @media (max-width: 1024px) {
    .w-opening-border {
      width: 400px;
    }
    .w-300-responsive {
      width: 150px;
    }
    .daun-left {
      left: 150px;
    }
  }

  /* Tablet portrait */
  @media (max-width: 768px) {
    .w-opening-border {
      width: 300px;
    }
    .w-300-responsive {
      width: 120px;
    }
    .daun-left {
      left: 120px;
    }
  }

  /* Mobile landscape */
  @media (max-width: 576px) {
    .w-opening-border {
      width: 250px;
    }
    .w-300-responsive {
      width: 100px;
    }
    .daun-left {
      left: 100px;
    }
  }

  /* Mobile portrait */
  @media (max-width: 375px) {
    .w-opening-border {
      width: 200px;
    }
    .w-300-responsive {
      width: 80px;
    }
    .daun-left {
      left: 80px;
    }
  }
</style>
