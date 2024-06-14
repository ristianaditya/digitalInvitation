<template>
  <div>
    <div class="bg-[#49479F] pt-10 font-inter">
      <div
        class="mx-auto px-4 py-16 sm:max-w-xl md:max-w-full md:px-24 lg:max-w-screen-xl lg:px-8 lg:py-24"
      >
        <div
          class="mb-10 max-w-xl sm:text-center md:mx-auto md:mb-16 lg:max-w-2xl"
        >
          <div
            class="mb-6 max-w-lg text-5xl font-bold leading-none tracking-tight text-white md:mx-auto"
          >
            <span class="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                class="text-blue-gray-100 absolute left-0 top-0 z-0 -ml-20 -mt-8 hidden w-32 sm:block lg:-ml-28 lg:-mt-10 lg:w-32"
              >
                <defs>
                  <pattern
                    id="7e5e8ff8-1960-4094-a63a-2a0c0f922d69"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7"></circle>
                  </pattern>
                </defs>
                <rect
                  fill="url(#7e5e8ff8-1960-4094-a63a-2a0c0f922d69)"
                  width="52"
                  height="24"
                ></rect>
              </svg>
              <span class="relative">Choose </span>
            </span>
            your Digital Invitation Plans
          </div>
          <p class="text-base text-white md:text-lg">
            Please determine the package price according to your needs. We
            provide the lowest price and most comprehensive features. See the
            comparison of each package here.
          </p>
        </div>
        <div
          class="mb-5 flex flex-col items-center justify-between lg:flex-row lg:items-start"
        >
          <div
            class="order-2 mt-8 w-full flex-1 rounded-3xl bg-white p-8 shadow-xl sm:w-96 lg:order-1 lg:w-full lg:rounded-r-none"
          >
            <div class="mb-7 flex items-center border-b border-gray-300 pb-7">
              <img src="/tier/free.png" alt="" class="h-20 w-20 rounded-3xl" />
              <div class="ml-5">
                <span class="block text-2xl font-semibold">DigitalDazzle</span>
                <span
                  ><span class="align-top text-xl font-medium text-gray-500"
                    >Rp.&thinsp;</span
                  ><span class="text-3xl font-bold">0 </span></span
                >
              </div>
            </div>
            <ul class="mb-7 font-medium text-gray-500">
              <li class="mb-2 flex text-lg">
                <img src="/icons/check-grey.svg" />
                <span class="ml-3"
                  >Active <span class="text-black">1 week</span></span
                >
              </li>
              <li class="mb-2 flex text-lg">
                <img src="/icons/check-grey.svg" />
                <span class="ml-3"
                  >Countdown <span class="text-black">Timer</span></span
                >
              </li>
              <li class="mb-2 flex text-lg">
                <img src="/icons/check-grey.svg" />
                <span class="ml-3"
                  ><span class="text-black">Map </span>location</span
                >
              </li>
              <li class="mb-2 flex text-lg">
                <img src="/icons/check-grey.svg" />
                <span class="ml-3"
                  ><span class="text-black">Event</span> Information</span
                >
              </li>
              <li class="flex text-lg">
                <img src="/icons/check-grey.svg" />
                <span class="ml-3"
                  >Send <span class="text-black">message</span></span
                >
              </li>
            </ul>
            <a
              class="cursor-pointer text-sm font-semibold"
              @click="openModal('DigitalDazzle')"
            >
              <span
                class="flex w-full items-center justify-center rounded-md border border-transparent bg-[#F8D075] px-4 py-4 font-inter text-base font-bold leading-6 text-slate-900 hover:bg-[#facc62] focus:outline-none focus:ring-2 focus:ring-[#fdd26d] focus:ring-offset-2 md:w-auto"
              >
                Claim Free
                <Icon name="ep:arrow-right-bold" class="ml-2" /> </span
            ></a>
          </div>

          <div
            class="order-1 w-full flex-1 rounded-3xl bg-gray-900 p-8 text-gray-400 shadow-xl sm:w-96 lg:order-2 lg:mt-0 lg:w-full"
          >
            <div class="mb-8 flex items-center border-b border-gray-600 pb-8">
              <img src="/tier/tier2.png" alt="" class="h-20 w-20 rounded-3xl" />
              <div class="ml-5">
                <span class="block text-3xl font-semibold text-white"
                  >SparkleSend</span
                >
                <span
                  ><span class="align-top text-xl font-medium">Rp.&thinsp;</span
                  ><span class="text-3xl font-bold text-white">30K </span></span
                >
              </div>
            </div>
            <ul class="mb-10 text-xl font-medium">
              <li class="mb-2 flex">
                <img src="/icons/check-white.svg" />
                <span class="ml-3"
                  >All features in
                  <span class="text-white">DigitalDazzle</span></span
                >
              </li>
              <li class="mb-2 flex text-lg">
                <img src="/icons/check-white.svg" />
                <span class="ml-3"
                  >Unlimited <span class="text-white">Photo & Video</span></span
                >
              </li>
              <li class="mb-2 flex text-lg">
                <img src="/icons/check-white.svg" />
                <span class="ml-3"><span class="text-white">RSVP</span></span>
              </li>
              <li class="mb-2 flex text-lg">
                <img src="/icons/check-white.svg" />
                <span class="ml-3"
                  >Active <span class="text-white">1 Month</span></span
                >
              </li>
              <li class="mb-2 flex text-lg">
                <img src="/icons/check-white.svg" />
                <span class="ml-3">
                  <span class="text-white">QR</span> attendance</span
                >
              </li>
              <li class="mb-2 flex text-lg">
                <img src="/icons/check-white.svg" />
                <span class="ml-3">
                  <span class="text-white">Story </span></span
                >
              </li>
              <li class="mb-2 flex text-lg">
                <img src="/icons/check-white.svg" />
                <span class="ml-3">
                  <span class="text-white">Send Gifts </span></span
                >
              </li>
            </ul>
            <a
              class="cursor-pointer text-sm font-semibold"
              @click="openModal('SparkleSend')"
            >
              <span
                class="flex w-full items-center justify-center rounded-md border border-transparent bg-[#F8D075] px-4 py-4 font-inter text-base font-bold leading-6 text-slate-900 hover:bg-[#facc62] focus:outline-none focus:ring-2 focus:ring-[#fdd26d] focus:ring-offset-2 md:w-auto"
              >
                Choose Plan
                <Icon name="ep:arrow-right-bold" class="ml-2" /> </span
            ></a>
          </div>

          <div
            class="order-3 mt-8 w-full flex-1 rounded-3xl bg-white p-8 shadow-xl sm:w-96 lg:order-3 lg:w-full lg:rounded-l-none"
          >
            <div class="mb-7 flex items-center border-b border-gray-300 pb-7">
              <img src="/tier/tier3.png" alt="" class="h-20 w-20 rounded-3xl" />
              <div class="ml-5">
                <span class="block text-2xl font-semibold"
                  >DigitalDreamscape</span
                >
                <span
                  ><span class="align-top text-xl font-medium text-gray-500"
                    >Rp.&thinsp;</span
                  ><span class="text-3xl font-bold">80K </span></span
                >
              </div>
            </div>
            <ul class="mb-7 font-medium text-gray-500">
              <li class="mb-2 flex text-lg">
                <img src="/icons/check-grey.svg" />
                <span class="ml-3"
                  >All features in
                  <span class="text-black">SparkleSend</span></span
                >
              </li>
              <li class="mb-2 flex text-lg">
                <img src="/icons/check-grey.svg" />
                <span class="ml-3">
                  <span class="text-black">Send Gifts </span></span
                >
              </li>
              <li class="mb-2 flex text-lg">
                <img src="/icons/check-grey.svg" />
                <span class="ml-3">
                  <span class="text-black">Shareblast </span></span
                >
              </li>
              <li class="mb-2 flex text-lg">
                <img src="/icons/check-grey.svg" />
                <span class="ml-3"
                  >Active <span class="text-black">3 Month</span></span
                >
              </li>
              <li class="mb-2 flex text-lg">
                <img src="/icons/check-grey.svg" />
                <span class="ml-3"
                  >Create
                  <span class="text-black">unlimited </span>invitations</span
                >
              </li>
              <li class="flex text-lg">
                <img src="/icons/check-grey.svg" />
                <span class="ml-3"
                  ><span class="text-black">Unlimited </span> guests</span
                >
              </li>
            </ul>
            <a
              class="cursor-pointer text-sm font-semibold"
              @click="openModal('DigitalDreamscape')"
            >
              <span
                class="flex w-full items-center justify-center rounded-md border border-transparent bg-[#F8D075] px-4 py-4 font-inter text-base font-bold leading-6 text-slate-900 hover:bg-[#facc62] focus:outline-none focus:ring-2 focus:ring-[#fdd26d] focus:ring-offset-2 md:w-auto"
              >
                Choose Plan
                <Icon name="ep:arrow-right-bold" class="ml-2" /> </span
            ></a>
          </div>
        </div>
      </div>
      <MainFooter />
    </div>
    <BaseModalForm
      :open-modal="state.isOpenForm"
      title-modal="Order Summary"
      desc-modal="Guest's qr code to be scanned."
      @close="state.isOpenForm = false"
    >
      <template #body>
        <div class="w-full text-center">
          <div class="mt-4 space-y-6">
            <div class="space-y-4">
              <div class="space-y-2">
                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-gray-500 dark:text-gray-400">
                    Original price
                  </dt>
                  <dd
                    class="text-base font-medium text-gray-900 dark:text-white"
                  >
                    Rp. {{ plans[state.type]?.price }}
                  </dd>
                </dl>

                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-gray-500 dark:text-gray-400">Transfer Fee</dt>
                  <dd class="text-base font-medium">
                    Rp. {{ plans[state.type]?.fee }}
                  </dd>
                </dl>

                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-gray-500 dark:text-gray-400">
                    Subscription Plans
                  </dt>
                  <dd
                    class="text-base font-medium text-gray-900 dark:text-white"
                  >
                    {{ state.type }}
                  </dd>
                </dl>
                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-gray-500 dark:text-gray-400">Active</dt>
                  <dd
                    class="text-base font-medium text-gray-900 dark:text-white"
                  >
                    {{ plans[state.type]?.days }} days
                  </dd>
                </dl>
                <dl class="flex items-center justify-between gap-4">
                  <dt class="text-gray-500 dark:text-gray-400">Expired</dt>
                  <dd
                    class="text-base font-medium text-gray-900 dark:text-white"
                  >
                    {{ state.date }}
                  </dd>
                </dl>

                <dl class="flex items-center justify-between gap-4">
                  <dt class="font-bold text-gray-900">Email</dt>
                  <dd
                    class="text-base font-medium text-gray-900 dark:text-white"
                  >
                    {{ sessionData.email }}
                  </dd>
                </dl>
              </div>
              <dl
                class="flex items-center justify-between gap-4 border-t border-gray-200 pt-2 dark:border-gray-700"
              >
                <dt class="text-lg font-bold text-gray-900 dark:text-white">
                  Total
                </dt>
                <dd class="text-lg font-bold text-gray-900 dark:text-white">
                  Rp. {{ plans[state.type]?.price + plans[state.type]?.fee }}
                </dd>
              </dl>
            </div>

            <div class="gap-4 sm:flex sm:items-center">
              <button
                type="button"
                class="w-full rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-[#49479F] focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
                @click="state.isOpenForm = false"
              >
                Cancel
              </button>

              <button
                type="submit"
                class="focus:ring-primary-300 mt-4 flex w-full items-center justify-center rounded-lg bg-[#49479F] px-5 py-2.5 text-sm font-medium text-white hover:bg-[#393880] focus:outline-none focus:ring-4 sm:mt-0"
                @click="
                  createPaymentLink(
                    state.type,
                    plans[state.type]?.price,
                    plans[state.type]?.pay,
                  )
                "
              >
                Pay
              </button>
            </div>
          </div>
        </div>
      </template>
    </BaseModalForm>
    <BaseModalForm
      :open-modal="state.isOpenFormAlert"
      title-modal="Payment Successful"
      desc-modal="your subscription is now active."
      @close="state.isOpenFormAlert = false"
    >
      <template #body>
        <img
          src="https://cdn.dribbble.com/users/147386/screenshots/5315437/success-tick-dribbble.gif"
          alt=""
          class="h-[300px] w-[500px]"
        />
      </template>
    </BaseModalForm>
    <UNotifications />
  </div>
</template>

<script setup>
  import { useComplateRegis, useSessionData } from '@/store/index'

  import { usePostData } from '~/composables/useFetchData'

  const route = useRoute()
  const router = useRouter()
  const complateRegis = useComplateRegis()
  const sessionData = useSessionData()
  const toast = useToast()
  const { status } = useAuth()
  const statusUser = status.value
  const state = reactive({
    isOpenForm: false,
    isOpenFormAlert: false,
    type: '',
    date: '',
  })
  const plans = {
    DigitalDazzle: {
      price: 0,
      fee: 0,
      pay: false,
      days: 7,
    },
    SparkleSend: {
      price: 30000,
      fee: 4000,
      pay: true,
      days: 30,
    },
    DigitalDreamscape: {
      price: 80000,
      fee: 4000,
      pay: true,
      days: 90,
    },
  }
  const paramStatus = ref(route.query.transaction_status)

  function openModal(type) {
    state.isOpenForm = true
    state.type = type
    const date = new Date()
    date.setDate(date.getDate() + plans[type]?.days)
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

    const dayName = days[date.getDay()]
    const day = date.getDate()
    const month = months[date.getMonth()]
    const year = date.getFullYear()

    state.date = dayName + ', ' + day + ' ' + month + ' ' + year
  }

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
        state.isOpenFormAlert = true
        useGetSession('/user/getSession').then((res) => {
          sessionData.subscribe = res.data.latest_transaction?.subscribe
          sessionData.id = res.data.id
          sessionData.name = res.data.name
          sessionData.email = res.data.email
          sessionData.phone = res.data.no_phone
        })
      }
    })
    navigateTo('/')
  }

  function makeid(length) {
    let result = ''
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    const charactersLength = characters.length
    let counter = 0
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength))
      counter += 1
    }
    return result
  }

  async function createPaymentLink(name, price, pay) {
    if (statusUser === 'authenticated') {
      try {
        if (complateRegis.completion) {
          if (pay) {
            const parameter = {
              transaction_details: {
                order_id: makeid(40),
                gross_amount: price,
              },
              item_detail: {
                name,
                price,
                quantity: 1,
              },
              customer_details: {
                first_name: sessionData.name,
                email: sessionData.email,
                phone: sessionData.phone,
              },
              callbacks: {
                // finish: `https://f947-180-244-133-178.ngrok-free.app/?id=${sessionData.id}&type=${name}&price=${price}`,
                finish: `http://localhost:3000/?id=${sessionData.id}&type=${name}&price=${price}`,
              },
            }
            await usePostData(`/transaction/showToken`, {
              detailsTransaction: parameter,
            }).then((res) => {
              if (res.status == 200) {
                window.location.replace(
                  `https://app.sandbox.midtrans.com/snap/v4/redirection/${res._data.token}`,
                  // `https://app.midtrans.com/snap/v4/redirection/${res._data.token}`,
                )
                // window.snap.pay(res._data.token, {
                //   onSuccess: function (result) {
                //     const param = {
                //       user_id: parseInt(sessionData.id),
                //       id_payment: result.order_id,
                //       amount: price,
                //       status: 'success',
                //       subscribe: name,
                //     }
                //     usePostData('/transaction/createPayment', param).then((res) => {
                //       if (res.status == 200) {
                //         toast.add({
                //           icon: 'i-heroicons-check-circle',
                //           title: 'payment successfully',
                //           color: 'green',
                //           timeout: 3000,
                //         })
                //       }
                //     })
                //   },
                //   onPending: function (result) { console.log('pending'); console.log(result); },
                //   onError: function (result) { console.log('error'); console.log(result); },
                // })
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
            const param = {
              user_id: parseInt(sessionData.id),
              id_payment: makeid(40),
              amount: price,
              status: 'success',
              subscribe: name,
            }
            usePostData('/transaction/createPayment', param).then((res) => {
              if (res.status == 200) {
                state.isOpenFormAlert = true
                setTimeout(() => {
                  state.isOpenFormAlert = false
                }, '3000')
              }
              if (res.status == 409) {
                toast.add({
                  icon: 'i-heroicons-exclamation-triangle',
                  title: 'DigitalDazzle has Already Claimed',
                  color: 'orange',
                  timeout: 3000,
                })
              }
            })
          }
          state.isOpenForm = false
        } else {
          toast.add({
            icon: 'i-heroicons-exclamation-triangle',
            title: 'complete your registration',
            color: 'orange',
            timeout: 3000,
          })
        }
        useGetSession('/user/getSession').then((res) => {
          sessionData.subscribe = res.data.latest_transaction?.subscribe
          sessionData.id = res.data.id
          sessionData.name = res.data.name
          sessionData.email = res.data.email
          sessionData.phone = res.data.no_phone
        })
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

  setTimeout(() => {
    state.isOpenFormAlert = false
  }, '3000')
</script>
