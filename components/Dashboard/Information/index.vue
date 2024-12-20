<template>
  <div class="z-20 mb-6 grid grid-cols-1 gap-8 md:grid-cols-3">
    <!-- Plan Card -->
    <BaseCardLayeredCard>
      <!-- Main card content -->
      <template #icon>
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
      </template>
      <template #subtitle>Subscription</template>
      <template #title>Current Plan</template>
      <template #content>
        <p class="text-xl font-bold text-[#49479F]">{{ plans }}</p>
        <span
          class="rounded-full px-4 py-1 text-sm font-medium"
          :class="
            paymentStatus !== 'success'
              ? 'bg-[#49479F]/10 text-[#49479F]'
              : 'bg-[#F9DC94]/10 text-yellow-500'
          "
        >
          {{ paymentStatus == 'success' ? 'Active' : 'Inactive' }}
        </span>
      </template>
    </BaseCardLayeredCard>

    <!-- Payment Status Card -->
    <BaseCardLayeredCard>
      <!-- Main card content -->
      <template #icon>
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
      </template>
      <template #subtitle>Last Payment</template>
      <template #title>Payment Status</template>
      <template #content>
        <div>
          <p
            class="text-xl font-bold text-[#49479F]"
            :class="
              paymentStatus === 'success'
                ? 'text-[#49479F]'
                : paymentStatus === 'failed'
                  ? 'text-red-600'
                  : 'text-yellow-600'
            "
          >
            {{
              paymentStatus === 'success'
                ? 'Paid'
                : paymentStatus === 'failed'
                  ? 'Failed'
                  : 'Pending'
            }}
          </p>
          <!-- <div
            v-if="paymentStatus !== 'success'"
            class="mt-2 text-sm text-gray-500"
          >
            Time remaining: {{ formattedTimeRemaining }}
          </div> -->
        </div>
      </template>

      <!-- Bottom layer content -->
      <template #bottom-content v-if="paymentStatus !== 'success'">
        <div class="mt-4 flex justify-center">
          <button
            @click="handlePayment"
            class="rounded-lg bg-[#49479F] px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-[#49479F]/90"
          >
            Continue Payment
          </button>
        </div>
      </template>
    </BaseCardLayeredCard>

    <!-- Projects Card -->
    <BaseCardLayeredCard>
      <template #icon>
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
      </template>
      <template #subtitle>Total Count</template>
      <template #title>Total Projects</template>
      <template #content>
        <p class="text-xl font-bold text-[#49479F]">
          {{ props.projectCount }}
        </p>
      </template>
    </BaseCardLayeredCard>
  </div>
</template>
<script setup>
  import { usePlanLists, useSessionData } from '@/store/index'
  const planLists = usePlanLists()
  const sessionData = useSessionData()

  const props = defineProps({
    projectCount: {
      type: Number,
      default: 0,
    },
  })

  const plans = ref('')
  const paymentStatus = ref('')
  const midtrans_token = ref('')

  const makeId = (length) => {
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

  await useGetSession('/user/getSession').then((res) => {
    plans.value = res.data.latest_transaction?.subscribe
    paymentStatus.value = res.data.latest_transaction?.status
    midtrans_token.value = res.data.latest_transaction?.midtrans_token
  })

  const handlePayment = async () => {
    if (paymentStatus.value === 'failed') {
      const config = useRuntimeConfig()
      const orderId = makeId(40)

      const parameter = {
        transaction_details: {
          order_id: orderId,
          gross_amount:
            planLists[plans.value].price + planLists[plans.value].fee,
        },
        item_detail: {
          name: plans.value,
          price: planLists[plans.value].price,
          quantity: 1,
        },
        customer_details: {
          first_name: sessionData.name,
          email: sessionData.email,
          phone: sessionData.phone,
        },
        callbacks: {
          finish: `${config.public.baseURL}/Dashboard`,
        },
      }

      await usePostData(`/transaction/showToken`, {
        detailsTransaction: parameter,
      }).then(async (res) => {
        if (res.status == 200) {
          const param = {
            user_id: sessionData.id,
            id_payment: orderId,
            amount: parseInt(planLists[plans.value].price),
            subscribe: plans.value,
            midtrans_token: res._data.token,
          }
          await usePostData('/transaction/createPayment', param).then((res) => {
            if (res.status == 200) {
              useGetSession('/user/getSession').then((res) => {
                sessionData.subscribe = res.data.latest_transaction?.subscribe
              })
            }
          })
          window.location.replace(
            `https://app.sandbox.midtrans.com/snap/v4/redirection/${res._data.token}`,
          )
        } else {
          this.toast.add({
            icon: 'i-heroicons-exclamation-triangle',
            title: 'api service error',
            color: 'orange',
            timeout: 3000,
          })
        }
      })
    } else {
      window.location.replace(
        `https://app.sandbox.midtrans.com/snap/v4/redirection/${midtrans_token.value}`,
      )
    }
  }

  const timeRemaining = ref(24 * 60 * 60) // 24 hours in seconds
  const formattedTimeRemaining = computed(() => {
    const hours = Math.floor(timeRemaining.value / 3600)
    const minutes = Math.floor((timeRemaining.value % 3600) / 60)
    const seconds = timeRemaining.value % 60

    return `${hours}h ${minutes}m ${seconds}s`
  })

  // Start countdown if payment is pending
  if (paymentStatus.value !== 'success') {
    const timer = setInterval(() => {
      if (timeRemaining.value > 0) {
        timeRemaining.value--
      } else {
        clearInterval(timer)
      }
    }, 1000)

    // Clean up timer when component unmounts
    onUnmounted(() => {
      clearInterval(timer)
    })
  }
</script>
