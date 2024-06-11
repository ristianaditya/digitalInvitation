<template>
  <div class="full header overflow-hidden">
    <div class="top-left"></div>
    <div class="body flex h-screen w-screen items-center justify-center">
      <div
        v-if="!!props.date"
        class="newsletter animate-fade animate-once animate-ease-linear"
      >
        <div class="newsletter-main">
          <div class="stamp">
            <img src="/thema/cap.png" alt="" />
          </div>
          <div class="m-auto mb-5 mt-3 flex flex-col justify-center space-y-6">
            <img
              src="/thema/flowers.gif"
              alt="flower"
              class="m-auto max-h-[100px] max-w-[200px]"
            />
            <div>
              <h5
                class="caption mt-5 font-satisfy text-lg font-bold text-[#FAA6B0]"
              >
                {{ converter(props.date) }}
              </h5>
              <h1 class="my-3 font-satisfy text-6xl">
                {{ uppercaseEachWord(props.personFirst) }} &amp;
                {{ uppercaseEachWord(props.personSecond) }}
              </h1>
              <b>{{ props.inviteDesc }}</b>
            </div>
            <div class="mt-2 pt-5">
              <i>Dear</i>
              <h4 class="caption mt-1 font-satisfy text-lg text-[#49479F]">
                {{ uppercaseEachWord(props.inviteName) }}
              </h4>
              <i>at the place</i>
            </div>
          </div>
          <div class="design mt-10">
            <img src="/thema/line.png" />
          </div>
          <a
            class="group relative mb-7 mt-8 inline-flex cursor-pointer items-center justify-center overflow-hidden rounded-full border-2 border-[#49479F] p-4 px-5 py-2 font-medium text-[#49479F] shadow-md transition duration-300 ease-out"
            @click="closeModal()"
          >
            <span
              class="ease absolute inset-0 flex h-full w-full -translate-x-full items-center justify-center bg-[#49479F] text-white duration-300 group-hover:translate-x-0"
            >
              <svg
                class="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </span>
            <span
              class="ease absolute flex h-full w-full transform items-center justify-center text-[#49479F] transition-all duration-300 group-hover:translate-x-full"
              >Open Invitation</span
            >
            <span class="invisible relative">Open Invitation</span>
          </a>
        </div>
      </div>
    </div>
    <div class="header-footer">
      <div class="bottom-left"></div>
      <div class="bottom-right"></div>
    </div>
    <div class="top-right"></div>
  </div>
</template>
<script setup>
  definePageMeta({
    layout: false,
    middleware: 'auth',
  })
  const props = defineProps({
    date: String,
    personFirst: String,
    personSecond: String,
    inviteDesc: String,
    inviteName: String,
  })
  const emit = defineEmits(['close'])

  function converter(params) {
    const utcTime = new Date(params)
    const days = [
      'Minggu',
      'Senin',
      'Selasa',
      'Rabu',
      'Kamis',
      'Jumat',
      'Sabtu',
    ]
    const months = [
      'Januari',
      'Februari',
      'Maret',
      'April',
      'Mei',
      'Juni',
      'Juli',
      'Agustus',
      'September',
      'Oktober',
      'November',
      'Desember',
    ]

    let day = days[utcTime.getDay()]
    let month = months[utcTime.getMonth()]
    let year = utcTime.getFullYear()

    return `${day}, ${utcTime.getDate()} ${month} ${year}`
  }

  function uppercaseEachWord(str) {
    return str.replace(/\b\w/g, function (char) {
      return char.toUpperCase()
    })
  }
  function closeModal() {
    emit('close')
  }
</script>
<style scoped>
  img {
    max-width: 100%;
  }
  .body {
    background: url('/thema/bg.png') no-repeat;
    background-blend-mode: overlay;
    background-size: cover;
  }
  .newsletter {
    background: url('/thema/envelope.jpg') no-repeat;
    background-size: cover;
    min-height: 600px;
    width: 27%;
  }
  .newsletter-main {
    width: 90%;
    margin: 0 auto;
    padding: 0.5em 0em;
    text-align: center;
  }
  .stamp img {
    width: 13%;
  }
  .stamp {
    text-align: right;
  }
  @media (max-width: 1440px) {
    .newsletter {
      min-height: 580px;
    }
  }
  @media (max-width: 1280px) {
    .newsletter {
      width: 35%;
    }
  }
  @media (max-width: 1024px) {
    .newsletter {
      min-height: 600px;
      width: 45%;
    }
    .newsletter {
      min-height: 580px;
    }
  }
  @media (max-width: 768px) {
    .newsletter {
      width: 57%;
    }
  }
  @media (max-width: 640px) {
    .newsletter {
      width: 72%;
    }
  }
  @media (max-width: 480px) {
    .newsletter {
      min-height: 475px;
    }
  }
  @media (max-width: 384px) {
    .newsletter {
      width: 80%;
    }
  }
  @media (max-width: 320px) {
    .design img {
      width: 70%;
    }
    .newsletter {
      width: 92%;
      min-height: 425px;
      margin: 1em auto;
    }
  }

  .full {
    width: 100%;
    height: 100vh;
    display: flex;
    background-size: cover;
    align-items: center;
  }
  .header {
    position: relative;
    background: #fff;
  }

  @-webkit-keyframes slideTopRight {
    100% {
      right: 0px;
      top: 0px;
    }
  }

  @keyframes slideTopRight {
    100% {
      right: 0px;
      top: 0px;
    }
  }

  @-webkit-keyframes slideTopLeft {
    100% {
      left: 0px;
      top: 0px;
    }
  }
  @keyframes slideTopLeft {
    100% {
      left: 0px;
      top: 0px;
    }
  }

  @-webkit-keyframes slideBottomLeft {
    100% {
      left: 0px;
      bottom: 0px;
    }
  }
  @keyframes slideBottomLeft {
    100% {
      left: 0px;
      bottom: 0px;
    }
  }

  @-webkit-keyframes slideBottomRight {
    100% {
      right: 0px;
      bottom: 0px;
    }
  }
  @keyframes slideBottomRight {
    100% {
      right: 0px;
      bottom: 0px;
    }
  }
  .top-left,
  .top-right,
  .bottom-left,
  .bottom-right {
    display: block;
    content: '';
    height: 50vh;
    width: 40%;
    position: absolute;
  }
  .top-left {
    background: url('/thema/topLeft.png') no-repeat;
    background-size: contain;
    background-position: top left;
    top: -500px;
    left: -500px;
    -webkit-animation: slideTopLeft 0.5s forwards;
    -webkit-animation-delay: 2s;
    animation: slideTopLeft 0.5s forwards;
    animation-delay: 2s;
  }
  .top-right {
    top: -500px;
    right: -500px;
    background: url('/thema/topRight.png') no-repeat;
    background-size: contain;
    background-position: top right;
    -webkit-animation: slideTopRight 0.5s forwards;
    -webkit-animation-delay: 2s;
    animation: slideTopRight 0.5s forwards;
    animation-delay: 2s;
  }
  .bottom-left {
    background: url('/thema/bottomLeft.png') no-repeat;
    background-size: contain;
    background-position: bottom left;
    bottom: -500px;
    left: -500px;
    -webkit-animation: slideBottomLeft 0.5s forwards;
    -webkit-animation-delay: 2.5s;
    animation: slideBottomLeft 0.5s forwards;
    animation-delay: 2.5s;
  }
  .bottom-right {
    bottom: -500px;
    right: -500px;
    background: url('/thema/bottomRight.png') no-repeat;
    background-size: contain;
    background-position: bottom right;
    -webkit-animation: slideBottomRight 0.5s forwards;
    -webkit-animation-delay: 2.5s;
    animation: slideBottomRight 0.5s forwards;
    animation-delay: 2.5s;
  }

  footer {
    position: relative;
  }
  footer img {
    max-width: 100px;
  }
  @media (max-width: 576px) {
    footer::before,
    footer::after {
      height: 10vh;
    }
  }
</style>
