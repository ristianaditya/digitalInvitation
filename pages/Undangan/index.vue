<template>
  <div class="body h-screen w-full flex flex-col items-center justify-center">
    <button
      @click="togglePlaying"
      class="fixed top-4 right-4 z-50 bg-[#545F30] rounded-full px-4 py-2 min-w-[120px] flex items-center gap-3"
    >
      <Icon 
        name="ph:music-note-simple-bold" 
        class="text-white h-5 w-5" 
      />
      <div class="flex items-center gap-2">
        <div class="relative w-[40px] h-[24px] bg-[#5B703F] rounded-full">
          <div 
            :class="`
              absolute top-[3px] w-[20px] h-[20px] rounded-full bg-white
              transition-all duration-300 ease-in-out
              ${isPlaying ? 'right-1' : 'left-1'}
            `"
          ></div>
        </div>
        <span class="text-white text-sm font-medium">
          {{ isPlaying ? 'On' : 'Off' }}
        </span>
      </div>
    </button>
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
      class="fixed top-0 z-20 w-[350px] left-[20px] bird-container"
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
    <div class="text-container fixed z-30 text-center">
      <p class="invitation-text mb-16">
        Dengan ini kami mengundang bapak/ibu<br/>
        Menghadiri Pernikahan
      </p>
      <div class="border-container flex items-center justify-center">
        <div class="absolute">
          <div class="photo-frame-container flex items-center relative">  
            <div class="absolute left-1/2 -translate-x-1/2 top-36 z-30">
              <img 
                src="/thema/primeYellow/and_opening.png"
                class="w-[100px]"
                alt="and"
              />
            </div>
            
            <div class="relative mr-8 text-center flex flex-col items-center"> 
              <div class="relative w-[230px] h-[347px]">
                <img 
                  src="/thema/primeYellow/laki_opening.png"
                  class="absolute w-[350px] h-[350px] object-cover z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                />
                <img 
                  src="/thema/primeYellow/frame_photo_opening.png"
                  class="absolute w-full h-full z-20 top-0 left-0"
                  alt="frame"
                />
              </div>
              <div class="mt-2 text-[#2C5530] text-2xl font-medium font-serif bg-[#FFF7F1] rounded-xl px-4 py-2">Mamat Komarudin</div>
            </div>

            <div class="relative text-center flex flex-col items-center">
              <div class="relative w-[230px] h-[347px]">
                <img 
                  src="/thema/primeYellow/cewe_opening.png"
                  class="absolute w-[350px] h-[350px] object-cover z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                  alt="bride"
                />
                <img 
                  src="/thema/primeYellow/frame_photo_opening.png"
                  class="absolute w-full h-full z-20 top-0 left-0"
                  alt="frame"
                />
              </div>
              <div class="mt-2 text-[#2C5530] text-2xl font-medium font-serif bg-[#FFF7F1] rounded-xl px-4 py-2">Mamat Komarudin</div>
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
      <button class="buka-undangan-btn px-6 py-3 rounded-lg flex items-center gap-2 mx-auto">
        <span class="icon-envelope">✉️</span>
        <span>Buka Undangan</span>
      </button>
    </div>
    <img 
      src="/thema/primeYellow/daun_gold_left_opening.png"
      class="fixed bottom-60 left-20 z-10 w-[300px]"
    />
    <img 
      src="/thema/primeYellow/daun_gold_right_opening.png"
      class="fixed bottom-60 right-20 z-10 w-[300px]"
    />
    <img 
      src="/thema/primeYellow/daun_left_bottom_opening.png"
      class="fixed -bottom-[30px] -left-[5px] z-10 w-[300px] animate-leaf-left-bottom"
    />
    <img 
      src="/thema/primeYellow/daun_left_bottom_opening_2.png"
      class="fixed bottom-0 left-48 z-10 w-[260px]"
    />
    <img 
      src="/thema/primeYellow/daun_right_bottom_opening.png"
      class="fixed -bottom-[30px] -right-[5px] z-10 w-[300px]"
    />
    <img 
      src="/thema/primeYellow/daun_right_bottom_opening_2.png"
      class="fixed  bottom-0 right-56 z-10 w-[260px]"
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
  };
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
    color: #5B5B5B;
    line-height: 1.6;
    letter-spacing: 0.5px;
  }
  .buka-undangan-btn {
    background-color: #4A5C3B;
    color: white;
    font-family: 'Lora', serif;
    font-size: 1.1rem;
    transition: all 0.3s ease;
    border: 2px solid #4A5C3B;
  }
  .buka-undangan-btn:hover {
    background-color: transparent;
    color: #4A5C3B;
  }
  .photo-frame-container {
    position: relative;
    z-index: 30;
    left: 50%;
    transform: translateX(-50%);
  }
</style>
