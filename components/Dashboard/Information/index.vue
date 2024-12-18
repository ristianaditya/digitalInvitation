<template>
  <div class="z-20 mb-6 grid grid-cols-1 gap-8 md:grid-cols-3">
    <!-- Plan Card -->
    <div
      class="group card relative overflow-hidden rounded-xl bg-white p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#49479F]/20"
    >
      <div
        class="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#F8D075]/10 transition-all duration-300 group-hover:scale-150"
      ></div>
      <div class="relative">
        <div class="mb-4 flex items-center justify-between">
          <div
            class="rounded-2xl bg-gradient-to-r from-[#F9DC94] to-[#F9DC94] p-3 shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              />
            </svg>
          </div>
          <span class="text-sm font-medium text-gray-400">Subscription</span>
        </div>
        <h2 class="text-1xl mb-2 font-bold text-gray-700">Current Plan</h2>
        <div class="flex items-center justify-between">
          <p class="text-2xl font-bold text-[#49479F]">{{ plans }}</p>
          <span
            class="rounded-full px-4 py-1 text-sm font-medium"
            :class="
              paymentStatus == 'success'
                ? 'bg-[#49479F]/10 text-[#49479F]'
                : 'bg-[#F9DC94]/10 text-yellow-500'
            "
            >{{ paymentStatus == 'success' ? 'Active' : 'Inactive' }}
          </span>
        </div>
      </div>
    </div>

    <!-- Payment Status Card -->
    <div
      class="group card relative overflow-hidden rounded-xl bg-white p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#49479F]/20"
    >
      <div
        class="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#F8D075]/10 transition-all duration-300 group-hover:scale-150"
      ></div>
      <div class="relative">
        <div class="mb-4 flex items-center justify-between">
          <div
            class="rounded-2xl bg-gradient-to-r from-[#F9DC94] to-[#F9DC94] p-3 shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
          </div>
          <span class="text-sm font-medium text-gray-400">Last Payment</span>
        </div>
        <h2 class="text-1xl mb-2 font-bold text-gray-700">Payment Status</h2>
        <div class="flex items-center justify-between">
          <p class="text-2xl font-bold text-[#49479F]">{{ paymentStatus }}</p>
          <button
            v-if="paymentStatus !== 'success'"
            @click="handlePayment"
            class="rounded-lg bg-red-600 px-3 py-1 text-sm font-medium text-white hover:bg-red-700"
          >
            Pay Now
          </button>
        </div>
      </div>
    </div>

    <!-- Projects Card -->
    <div
      class="group card relative overflow-hidden rounded-xl bg-white p-6 shadow-xl transition-all duration-300 hover:shadow-2xl hover:shadow-[#49479F]/20"
    >
      <div
        class="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-[#F8D075]/10 transition-all duration-300 group-hover:scale-150"
      ></div>
      <div class="relative">
        <div class="mb-4 flex items-center justify-between">
          <div
            class="rounded-2xl bg-gradient-to-r from-[#F9DC94] to-[#F9DC94] p-3 shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-8 w-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
              />
            </svg>
          </div>
          <span class="text-sm font-medium text-gray-400">Total Count</span>
        </div>
        <h2 class="text-1xl mb-2 font-bold text-gray-700">Total Projects</h2>
        <div class="flex items-center justify-between">
          <p class="text-2xl font-bold text-[#49479F]">
            {{ props.projectCount }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  const props = defineProps({
    projectCount: {
      type: Number,
      default: 0,
    },
  })

  const plans = ref('')
  const paymentStatus = ref('')

  await useGetSession('/user/getSession').then((res) => {
    plans.value = res.data.latest_transaction?.subscribe
    paymentStatus.value = res.data.latest_transaction?.status
  })

  const handlePayment = () => {
    // window.location.href = '/payment'
  }
</script>
