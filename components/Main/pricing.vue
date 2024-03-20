<template>
  <div>
    <div class="bg-[#49479F] pt-10 font-inter">
      <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24 ">
        <div class="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-16">
          <h1 class="max-w-lg mb-6 text-5xl font-bold leading-none tracking-tight text-white md:mx-auto">
            <span class="relative inline-block">
              <svg viewBox="0 0 52 24" fill="currentColor"
                class="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block">
                <defs>
                  <pattern id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69" x="0" y="0" width=".135" height=".30">
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)" width="52" height="24"></rect>
              </svg>
              <span class="relative">Choose </span>
            </span>
            your Digital Invitation Package
          </h1>
          <p class="text-base text-white md:text-lg">
            Please determine the package price according to your needs. We provide the lowest price and most
            comprehensive
            features.
            See the comparison of each package here.
          </p>
        </div>
        <div class="flex flex-col justify-between items-center lg:flex-row lg:items-start mb-5">

          <div
            class="w-full flex-1 mt-8 p-8 order-2 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-1 lg:rounded-r-none">
            <div class="mb-7 pb-7 flex items-center border-b border-gray-300">
              <img src="/tier/free.png" alt="" class="rounded-3xl w-20 h-20" />
              <div class="ml-5">
                <span class="block text-2xl font-semibold">DigitalDazzle</span>
                <span><span class="font-medium text-gray-500 text-xl align-top">Rp.&thinsp;</span><span
                    class="text-3xl font-bold">0 </span></span>
              </div>
            </div>
            <ul class="mb-7 font-medium text-gray-500">
              <li class="flex text-lg mb-2">
                <img src="/icons/check-grey.svg" />
                <span class="ml-3">Active <span class="text-black">1 week</span></span>
              </li>
              <li class="flex text-lg mb-2">
                <img src="/icons/check-grey.svg" />
                <span class="ml-3">Countdown <span class="text-black">Timer</span></span>
              </li>
              <li class="flex text-lg mb-2">
                <img src="/icons/check-grey.svg" />
                <span class="ml-3"><span class="text-black">Map </span>location</span>
              </li>
              <li class="flex text-lg mb-2">
                <img src="/icons/check-grey.svg" />
                <span class="ml-3"><span class="text-black">Event</span> Information</span>
              </li>
              <li class="flex text-lg">
                <img src="/icons/check-grey.svg" />
                <span class="ml-3">Send <span class="text-black">message</span></span>
              </li>
            </ul>
            <a class="text-sm font-semibold">
              <span
                class="flex items-center justify-center w-full px-4 py-4 text-base font-bold leading-6 text-slate-900 bg-[#F8D075] border border-transparent rounded-md md:w-auto hover:bg-[#facc62] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fdd26d] font-inter ">
                Choose Plan
                <Icon name="ep:arrow-right-bold" class="ml-2" />
              </span></a>
          </div>

          <div
            class="w-full flex-1 p-8 order-1 shadow-xl rounded-3xl bg-gray-900 text-gray-400 sm:w-96 lg:w-full lg:order-2 lg:mt-0">
            <div class="mb-8 pb-8 flex items-center border-b border-gray-600">
              <img src="/tier/tier2.png" alt="" class="rounded-3xl w-20 h-20" />
              <div class="ml-5">
                <span class="block text-3xl font-semibold text-white">SparkleSend</span>
                <span><span class="font-medium text-xl align-top">Rp.&thinsp;</span><span
                    class="text-3xl font-bold text-white">30K </span></span>
              </div>
            </div>
            <ul class="mb-10 font-medium text-xl">
              <li class="flex mb-2">
                <img src="/icons/check-white.svg" />
                <span class="ml-3">All features in <span class="text-white">DigitalDazzle</span></span>
              </li>
              <li class="flex text-lg mb-2">
                <img src="/icons/check-white.svg" />
                <span class="ml-3">Unlimited <span class="text-white">Photo & Video</span></span>
              </li>
              <li class="flex text-lg mb-2">
                <img src="/icons/check-white.svg" />
                <span class="ml-3"><span class="text-white">RSVP</span></span>
              </li>
              <li class="flex text-lg mb-2">
                <img src="/icons/check-white.svg" />
                <span class="ml-3">Active <span class="text-white">1 Month</span></span>
              </li>
              <li class="flex text-lg mb-2">
                <img src="/icons/check-white.svg" />
                <span class="ml-3"> <span class="text-white">QR</span> attendance</span>
              </li>
              <li class="flex text-lg mb-2">
                <img src="/icons/check-white.svg" />
                <span class="ml-3"> <span class="text-white">Story </span></span>
              </li>
              <li class="flex text-lg mb-2">
                <img src="/icons/check-white.svg" />
                <span class="ml-3"> <span class="text-white">Send Gifts </span></span>
              </li>
            </ul>
            <a class="text-sm font-semibold cursor-pointer" @click="createPaymentLink('SparkleSend', 30000)">
              <span
                class="flex items-center justify-center w-full px-4 py-4 text-base font-bold leading-6 text-slate-900 bg-[#F8D075] border border-transparent rounded-md md:w-auto hover:bg-[#facc62] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fdd26d] font-inter ">
                Choose Plan
                <Icon name="ep:arrow-right-bold" class="ml-2" />
              </span></a>
          </div>

          <div
            class="w-full flex-1 mt-8 p-8 order-3 bg-white shadow-xl rounded-3xl sm:w-96 lg:w-full lg:order-3 lg:rounded-l-none">
            <div class="mb-7 pb-7 flex items-center border-b border-gray-300">
              <img src="/tier/tier3.png" alt="" class="rounded-3xl w-20 h-20" />
              <div class="ml-5">
                <span class="block text-2xl font-semibold">DigitalDreamscape</span>
                <span><span class="font-medium text-gray-500 text-xl align-top">Rp.&thinsp;</span><span
                    class="text-3xl font-bold">80K </span></span>
              </div>
            </div>
            <ul class="mb-7 font-medium text-gray-500">
              <li class="flex text-lg mb-2">
                <img src="/icons/check-grey.svg" />
                <span class="ml-3">All features in <span class="text-black">SparkleSend</span></span>
              </li>
              <li class="flex text-lg mb-2">
                <img src="/icons/check-grey.svg" />
                <span class="ml-3"> <span class="text-black">Send Gifts </span></span>
              </li>
              <li class="flex text-lg mb-2">
                <img src="/icons/check-grey.svg" />
                <span class="ml-3"> <span class="text-black">Shareblast </span></span>
              </li>
              <li class="flex text-lg mb-2">
                <img src="/icons/check-grey.svg" />
                <span class="ml-3">Active <span class="text-black">3 Month</span></span>
              </li>
              <li class="flex text-lg mb-2">
                <img src="/icons/check-grey.svg" />
                <span class="ml-3">Create <span class="text-black">unlimited </span>invitations</span>
              </li>
              <li class="flex text-lg">
                <img src="/icons/check-grey.svg" />
                <span class="ml-3"><span class="text-black">Unlimited </span> guests</span>
              </li>
            </ul>
            <a @click="createPaymentLink('DigitalDreamscape', 80000)" class="text-sm font-semibold cursor-pointer">
              <span
                class="flex items-center justify-center w-full px-4 py-4 text-base font-bold leading-6 text-slate-900 bg-[#F8D075] border border-transparent rounded-md md:w-auto hover:bg-[#facc62] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fdd26d] font-inter ">
                Choose Plan
                <Icon name="ep:arrow-right-bold" class="ml-2" />
              </span></a>
          </div>

        </div>
      </div>

      <MainFooter />
    </div>
    <UNotifications />
  </div>
</template>

<script setup>
import { useComplateRegis, useSessionData } from '@/store/index'

import {
  usePostData
} from '~/composables/useFetchData'

const route = useRoute()
const router = useRouter()
const complateRegis = useComplateRegis()
const sessionData = useSessionData()
const toast = useToast()
const { status } = useAuth()
const statusUser = status.value

const paramStatus = ref(route.query.transaction_status)

if (paramStatus.value == 'settlement') {
  const param = {
    user_id: parseInt(route.query.id),
    id_payment: route.query.order_id,
    amount: parseInt(route.query.price),
    status: 'success',
    subscribe: route.query.type,
  }
  await usePostData('/transaction/createPayment', param).then((res) => {
    if (res.status == 200) {
      toast.add({
        icon: 'i-heroicons-check-circle',
        title: 'payment successfully',
        color: 'green',
        timeout: 3000,
      })
    }
  })
  navigateTo('/')
}

function makeid(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

async function createPaymentLink(name, price) {
  if (statusUser === 'authenticated') {
    try {
      if (complateRegis.completion) {
        const parameter = {
          transaction_details: {
            order_id: makeid(40),
            gross_amount: price
          },
          item_detail: {
            name,
            price,
            quantity: 1
          },
          customer_details: {
            first_name: sessionData.name,
            email: sessionData.email,
            phone: sessionData.phone,
          },
          callbacks: {
            finish: `https://9723-180-244-134-115.ngrok-free.app/?id=${sessionData.id}&type=${name}&price=${price}`
          }
        };
        await usePostData(`/transaction/showToken`, { detailsTransaction: parameter }).then((res) => {
          if (res.status == 200) {
            window.snap.pay(res._data.token, {
              onSuccess: function (result) {
                const param = {
                  user_id: parseInt(sessionData.id),
                  id_payment: result.order_id,
                  amount: price,
                  status: 'success',
                  subscribe: name,
                }
                usePostData('/transaction/createPayment', param).then((res) => {
                  if (res.status == 200) {
                    toast.add({
                      icon: 'i-heroicons-check-circle',
                      title: 'payment successfully',
                      color: 'green',
                      timeout: 3000,
                    })
                  }
                })
              },
              onPending: function (result) { console.log('pending'); console.log(result); },
              onError: function (result) { console.log('error'); console.log(result); },
            })
          } else {
            toast.add({
              icon: 'i-heroicons-exclamation-triangle',
              title: 'api service error',
              color: 'orange',
              timeout: 3000,
            })
          }
        })

      } else {
        toast.add({
          icon: 'i-heroicons-exclamation-triangle',
          title: 'complete your registration',
          color: 'orange',
          timeout: 3000,
        })
      }
    } catch (error) {
      toast.add({
        icon: 'i-heroicons-exclamation-triangle',
        title: 'api service error',
        color: 'orange',
        timeout: 3000,
      })
    }
  } else {
    router.push('/login')
  }
}

</script>
