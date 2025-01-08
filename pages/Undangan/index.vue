<template>
  <div class="body flex h-screen w-full flex-col items-center justify-center">
    <button
      class="group fixed right-[1vw] top-[2vh] z-50 min-w-[11vmin] px-[1.5vmin] py-[1vmin]"
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
          class="mr-[-0.2vmin] h-[2vmin] w-[1.4vmin] text-white transition-transform duration-300"
          :class="isPlaying ? 'rotate-[360deg]' : 'rotate-0'"
        />

        <div class="flex items-center gap-2">
          <!-- Toggle Switch -->
          <div
            class="relative h-[2vmin] w-[4vmin] overflow-hidden rounded-full bg-[#5B703F]"
          >
            <div
              class="absolute top-[0.3vmin] h-[1.4vmin] w-[1.4vmin] rounded-full bg-white shadow-md transition-all duration-500 hover:scale-90"
              :class="[
                isPlaying ? 'translate-x-[2.2vmin]' : 'translate-x-[0.1vmin]',
                'transform ease-[cubic-bezier(0.4,0,0.2,1)]',
              ]"
            />
          </div>

          <!-- Text Label -->
          <span
            class="ml-[0.1vmin] text-[1.3vmin] font-medium text-white transition-all duration-300"
            :class="isPlaying ? 'opacity-100' : 'opacity-80'"
          >
            {{ isPlaying ? 'On' : 'Off' }}
          </span>
        </div>
      </div>
    </button>
    <img
      src="/thema/primeYellow/daun_top_left_opening.png"
      class="z-5 animate-leaf-left w-300-responsive leaf-left fixed top-0"
    />
    <img
      src="/thema/primeYellow/top_left_opening.png"
      class="w-opening-border fixed left-0 top-0 z-10"
    />
    <img
      src="/thema/primeYellow/blue_birds_opening.png"
      class="bird-container bird-left fixed top-0 z-20"
    />
    <img
      src="/thema/primeYellow/white_birds_opening.png"
      class="z-15 animate-birds-entry bird-right fixed"
    />
    <img
      src="/thema/primeYellow/daun_top_right_opening.png"
      class="z-5 animate-leaf-right leaf-right fixed"
    />
    <img
      src="/thema/primeYellow/top_right_opening.png"
      class="w-opening-border fixed right-0 top-0 z-10"
    />
    <div class="text-container fixed z-30 text-center">
      <p class="invitation-text mb-[5vh]">
        Dengan ini kami mengundang bapak/ibu<br />
        Menghadiri Pernikahan
      </p>
      <div class="border-container flex items-center justify-center">
        <div class="absolute">
          <div class="photo-frame-container relative flex items-center">
            <div
              class="and-icon-container absolute left-1/2 top-[14vh] z-30 -translate-x-1/2"
            >
              <img
                src="/thema/primeYellow/and_opening.png"
                class="and-icon w-[6vw] animate-wiggle-more"
                alt="and"
              />
            </div>
            <div
              class="relative mr-[2vw] flex flex-col items-center text-center"
            >
              <div class="wedding-container relative h-[39vh] w-[26vh]">
                <img
                  src="/thema/primeYellow/laki_opening.png"
                  class="wedding-photo-person absolute left-1/2 top-1/2 z-10 h-[40vh] w-[26vh] -translate-x-1/2 -translate-y-1/2 transform object-cover"
                />
                <img
                  src="/thema/primeYellow/frame_photo_opening.png"
                  class="absolute left-0 top-0 z-20 h-full w-full"
                  alt="frame"
                />
              </div>
              <div
                class="mt-[1.5vmin] rounded-xl bg-[#FFF7F1] px-[1.3vw] py-[0.7vh] font-serif text-[2.5vmin] font-medium text-[#2C5530]"
              >
                Mamat Komarudin
              </div>
            </div>

            <div class="relative flex flex-col items-center text-center">
              <div class="wedding-container relative h-[39vh] w-[26vh]">
                <img
                  src="/thema/primeYellow/cewe_opening.png"
                  class="wedding-photo-person absolute left-1/2 top-1/2 z-10 h-[40vh] w-[26vh] -translate-x-1/2 -translate-y-1/2 transform object-cover"
                />
                <img
                  src="/thema/primeYellow/frame_photo_opening.png"
                  class="absolute left-0 top-0 z-20 h-full w-full"
                  alt="frame"
                />
              </div>
              <div
                class="mt-[1.5vmin] rounded-xl bg-[#FFF7F1] px-[1.3vw] py-[0.7vh] font-serif text-[2.5vmin] font-medium text-[#2C5530]"
              >
                Mamat Komarudin
              </div>
            </div>
          </div>
        </div>
        <img
          src="/thema/primeYellow/border_form_opening.png"
          class="border-gold-center"
          alt="border"
        />
      </div>
    </div>
    <div class="fixed bottom-[6vh] z-30">
      <button
        class="buka-undangan-btn mx-auto flex items-center gap-2 rounded-lg px-[2vw] py-[1.3vh]"
      >
        <span class="icon-envelope">✉️</span>
        <span>Buka Undangan</span>
      </button>
    </div>
    <img
      src="/thema/primeYellow/daun_gold_left_opening.png"
      class="w-300-responsive leaf-gold-left fixed z-10"
    />
    <img
      src="/thema/primeYellow/daun_gold_right_opening.png"
      class="w-300-responsive leaf-gold-right fixed z-10"
    />
    <img
      src="/thema/primeYellow/daun_left_bottom_opening.png"
      class="animate-leaf-left-bottom w-300-responsive leaf-bottom-left fixed z-10"
    />
    <img
      src="/thema/primeYellow/daun_left_bottom_opening_2.png"
      class="leaf-bottom-left-two fixed bottom-0 z-10"
    />
    <img
      src="/thema/primeYellow/daun_right_bottom_opening.png"
      class="animate-leaf-right-bottom w-300-responsive leaf-bottom-right fixed z-10"
    />
    <img
      src="/thema/primeYellow/daun_right_bottom_opening_2.png"
      class="leaf-bottom-right-two fixed z-10"
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
      transform: rotate(3deg) translateY(-5px);
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
  .animate-leaf-right-bottom {
    animation: swaying 8s cubic-bezier(0.42, 0, 0.58, 1) infinite;
    transform-origin: right bottom;
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
    font-size: 2.75vmin;
    color: #5b5b5b;
    line-height: 1.6;
    letter-spacing: 0.1vmin;
  }
  .buka-undangan-btn {
    background-color: #4a5c3b;
    color: white;
    font-family: 'Lora', serif;
    font-size: 2vmin;
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

  .w-opening-border {
    width: 40vw;
  }
  .w-300-responsive {
    width: 12vw;
  }
  .leaf-left {
    left: 16vw;
  }
  .bird-left {
    left: 2vw;
    width: 16vw;
  }
  .bird-right {
    right: 4vw;
    width: 12vw;
    top: 30vh;
  }
  .leaf-right {
    right: 6vw;
    top: 6vh;
    width: 11vw;
  }
  .leaf-gold-left {
    bottom: 23vh;
    left: 4vw;
  }
  .leaf-gold-right {
    bottom: 20vh;
    right: 3vw;
  }
  .leaf-bottom-left {
    bottom: -5vh;
    left: -0.2vw;
  }
  .leaf-bottom-left-two {
    width: 11vw;
    left: 9vw;
    bottom: -4vh;
  }
  .leaf-bottom-right {
    bottom: -4vh;
    right: -2vw;
  }
  .leaf-bottom-right-two {
    bottom: -2vh;
    right: 9vw;
    width: 10vw;
  }
  .border-gold-center {
    height: 60vmin;
    width: 60vw;
  }

  /* Mobile landscape */
  @media (max-width: 576px) {
    .wedding-container {
      height: 23vh;
      width: 15vh;
    }
    .wedding-photo-person {
      height: 23vh;
      width: 18vh;
    }
    .border-gold-center {
      height: 70vmin;
      width: 80vw;
    }
    .and-icon-container {
      top: 10vh;
    }
    .and-icon {
      width: 9vw;
    }
    .invitation-text {
      font-family: 'Lora', serif;
      font-size: 3.6vmin;
      color: #5b5b5b;
      line-height: 1.6;
      letter-spacing: 0.1vmin;
    }
    .w-opening-border {
      width: 70vw;
    }
    .w-300-responsive {
      width: 30vw;
    }
    .leaf-left {
      left: 23vw;
    }
    .bird-left {
      left: 2vw;
      width: 31vw;
    }
    .bird-right {
      right: 4vw;
      width: 17vw;
      top: 24vh;
    }
    .leaf-right {
      right: 5vw;
      top: 4vh;
      width: 26vw;
    }
    .leaf-gold-left {
      display: none;
    }
    .leaf-gold-right {
      display: none;
    }
    .leaf-bottom-left {
      bottom: -5vh;
      left: -0.2vw;
    }
    .leaf-bottom-left-two {
      width: 31vw;
      left: 16vw;
      bottom: -6vh;
    }
    .leaf-bottom-right {
      bottom: -4vh;
      right: -2vw;
    }
    .leaf-bottom-right-two {
      bottom: -6vh;
      right: 16vw;
      width: 31vw;
    }
  }
</style>
