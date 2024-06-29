<template>
  <BaseHeaderNavigation />
  <div class="h-[70vh] max-w-md md:w-full">
    <p class="error">{{ error }}</p>

    <div
      v-if="failed"
      role="alert"
      class="alert mb-4 w-full border-red-400 shadow-lg"
    >
      <Icon name="ic:twotone-sms-failed" class="h-7 w-7 text-red-600" />
      <div>
        <h3 class="font-bold">Unregistered Guests</h3>
      </div>
    </div>
    <div v-else>
      <div v-if="!!result" role="alert" class="alert mb-4 w-full shadow-lg">
        <Icon name="icon-park:success" class="h-7 w-7" />
        <div>
          <h3 class="font-bold">{{ result }}</h3>
        </div>
        <UBadge color="blue" variant="subtle">Registered Guests</UBadge>
      </div>
      <div
        v-else
        role="alert"
        class="alert mb-4 grid w-full grid-cols-12 gap-0 shadow-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          class="h-6 w-6 shrink-0 stroke-info"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          ></path>
        </svg>
        <div class="col-start-2 col-end-12 text-left">
          <h3 class="font-bold">Scan QR Code Below !</h3>
          <div class="text-xs">
            Wait until the guest name appears on the camera
          </div>
        </div>
      </div>
    </div>
    <select
      v-model="selectedDevice"
      class="select select-bordered select-sm mb-3 w-40 max-w-xs"
    >
      <option disabled selected>Normal</option>
      <option v-for="device in devices" :key="device.label" :value="device">
        {{ device.label }}
      </option>
    </select>
    <div class="h-[70vh] max-w-md md:w-full">
      <qrcode-stream
        v-if="selectedDevice !== null"
        :constraints="{ deviceId: selectedDevice.deviceId }"
        :track="trackFunctionSelected.value"
        :formats="selectedBarcodeFormats"
        @error="onError"
        @detect="onDetect"
      />
      <p v-else class="error">No cameras on this device</p>
    </div>
  </div>
  <UNotifications />
</template>

<script setup>
  import { useActivePage } from '@/store/index'
  import { QrcodeStream } from 'vue-qrcode-reader'

  definePageMeta({
    layout: 'editor-default',
    middleware: 'auth',
  })

  const toast = useToast()
  const result = ref('')
  const failed = ref(false)
  const selectedDevice = ref(null)
  const devices = ref([])
  const barcodeFormats = ref({
    qr_code: true,
  })
  const trackFunctionSelected = ref({ text: 'outline', value: paintCenterText })
  const selectedBarcodeFormats = computed(() => {
    return Object.keys(barcodeFormats.value).filter(
      (format) => barcodeFormats.value[format],
    )
  })
  const error = ref('')

  async function onDetect(detectedCodes) {
    const valueString = detectedCodes.map((code) => code.rawValue)[0]
    const parts = valueString.split('/')
    result.value = parts[1]
    try {
      failed.value = false
      const param = {
        name: parts[1],
        invite_link: parts[0],
      }
      await usePostData(`/guest/attendance`, param).then((res) => {
        if (res.status == 200) {
          toast.add({
            icon: 'i-heroicons-check-circle',
            title: 'Guest successfully updated',
            color: 'green',
            timeout: 3000,
          })
        } else {
          failed.value = true
          toast.add({
            icon: 'i-heroicons-exclamation-triangle',
            title: 'Guest not found',
            color: 'orange',
            timeout: 3000,
          })
        }
      })
    } catch (error) {
      failed.value = true
      toast.add({
        icon: 'i-heroicons-exclamation-triangle',
        title: 'api service error',
        color: 'orange',
        timeout: 3000,
      })
    }
  }

  onMounted(async () => {
    const activePage = useActivePage()
    activePage.page = 'QR Scanner'
    activePage.create = false
    activePage.child = ''
    activePage.export = false
    devices.value = (await navigator.mediaDevices.enumerateDevices()).filter(
      ({ kind }) => kind === 'videoinput',
    )

    if (devices.value.length > 0) {
      selectedDevice.value = devices.value[0]
    }
  })

  function paintCenterText(detectedCodes, ctx) {
    for (const detectedCode of detectedCodes) {
      const { boundingBox } = detectedCode

      const centerX = boundingBox.x + boundingBox.width / 2
      const centerY = boundingBox.y + boundingBox.height / 2

      const fontSize = Math.max(14, (60 * boundingBox.width) / ctx.canvas.width)

      ctx.font = `bold ${fontSize}px sans-serif`
      ctx.textAlign = 'center'

      ctx.lineWidth = 3
      ctx.strokeStyle = '#35495e'
      const parts = detectedCode.rawValue.split('/')
      ctx.strokeText(parts[1], centerX, centerY)

      ctx.fillStyle = '#5cb984'
      ctx.fillText(parts[1], centerX, centerY)
    }
  }

  function onError(err) {
    error.value = `[${err.name}]: `

    if (err.name === 'NotAllowedError') {
      error.value += 'you need to grant camera access permission'
    } else if (err.name === 'NotFoundError') {
      error.value += 'no camera on this device'
    } else if (err.name === 'NotSupportedError') {
      error.value += 'secure context required (HTTPS, localhost)'
    } else if (err.name === 'NotReadableError') {
      error.value += 'is the camera already in use?'
    } else if (err.name === 'OverconstrainedError') {
      error.value += 'installed cameras are not suitable'
    } else if (err.name === 'StreamApiNotSupportedError') {
      error.value += 'Stream API is not supported in this browser'
    } else if (err.name === 'InsecureContextError') {
      error.value +=
        'Camera access is only permitted in secure context. Use HTTPS or localhost rather than HTTP.'
    } else {
      error.value += err.message
    }
  }
</script>

<style scoped>
  .error {
    font-weight: bold;
    color: red;
  }
  .barcode-format-checkbox {
    margin-right: 10px;
    white-space: nowrap;
  }
</style>
