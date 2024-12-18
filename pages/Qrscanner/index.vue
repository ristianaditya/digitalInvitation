<template>
  <BaseHeaderNavigation />
  <UContainer
    v-if="stateLoad"
    class="flex h-[80vh] items-center justify-center text-center"
  >
    <span class="loading loading-spinner loading-lg text-[#49479F]"></span>
  </UContainer>

  <div v-else class="min-h-20 bg-gray-50">
    <!-- Main Button Container with gradient background -->
    <UContainer class="py-12">
      <div class="mx-auto max-w-4xl">
        <!-- Card Container -->
        <div
          class="transform rounded-2xl bg-white p-8 shadow-xl transition-all duration-300 hover:scale-[1.02]"
        >
          <!-- Header Section -->
          <div class="mb-8 text-center">
            <div class="mb-6 flex justify-center">
              <div class="relative">
                <div
                  class="bg-primary-100 absolute inset-0 animate-ping rounded-full opacity-20"
                ></div>
                <div class="bg-primary-50 relative rounded-full p-4">
                  <Icon
                    name="material-symbols:qr-code-scanner"
                    class="text-primary-600 h-12 w-12"
                  />
                </div>
              </div>
            </div>
            <h1 class="mb-3 text-3xl font-bold text-gray-800">
              QR Code Scanner
            </h1>
            <p class="mx-auto max-w-md text-gray-600">
              Quickly verify and check-in your guests with our seamless QR
              scanning system
            </p>
          </div>

          <!-- Button Section -->
          <div class="space-y-4 text-center">
            <UButton
              size="xl"
              color="primary"
              variant="soft"
              @click="isOpen = true"
              class="group relative w-full overflow-hidden px-8 py-4 md:w-auto"
            >
              <div
                class="from-primary-600 to-primary-500 absolute inset-0 bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              ></div>
              <div
                class="relative flex items-center justify-center gap-2 text-lg font-medium"
              >
                <Icon
                  name="material-symbols:qr-code-scanner"
                  class="h-6 w-6 transition-transform duration-300 group-hover:scale-110"
                />
                <span
                  class="transition-transform duration-300 group-hover:translate-x-1"
                >
                  Start Scanning
                </span>
              </div>
            </UButton>

            <!-- Additional Info -->
            <p class="text-sm text-gray-500">
              <Icon name="heroicons:camera" class="mr-1 inline-block h-4 w-4" />
              Make sure to allow camera access
            </p>
          </div>
        </div>

        <!-- Quick Tips -->
        <div class="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          <div
            class="flex items-start space-x-3 rounded-xl bg-white p-4 shadow-md"
          >
            <div class="rounded-lg bg-blue-50 p-2">
              <Icon name="heroicons:light-bulb" class="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 class="font-medium text-gray-800">Instantly Check-In</h3>
              <p class="text-sm text-gray-500">
                Scan QR code to check-in your guests
              </p>
            </div>
          </div>

          <div
            class="flex items-start space-x-3 rounded-xl bg-white p-4 shadow-md"
          >
            <div class="rounded-lg bg-green-50 p-2">
              <Icon
                name="heroicons:check-circle"
                class="h-6 w-6 text-green-600"
              />
            </div>
            <div>
              <h3 class="font-medium text-gray-800">Quick Verification</h3>
              <p class="text-sm text-gray-500">Instant guest verification</p>
            </div>
          </div>

          <div
            class="flex items-start space-x-3 rounded-xl bg-white p-4 shadow-md"
          >
            <div class="rounded-lg bg-purple-50 p-2">
              <Icon
                name="heroicons:device-phone-mobile"
                class="h-6 w-6 text-purple-600"
              />
            </div>
            <div>
              <h3 class="font-medium text-gray-800">Multiple Cameras</h3>
              <p class="text-sm text-gray-500">
                Switch between available cameras
              </p>
            </div>
          </div>
        </div>
      </div>
    </UContainer>

    <!-- HeadlessUI Dialog (Modal) -->
    <TransitionRoot appear :show="isOpen" as="template">
      <Dialog as="div" @close="isOpen = false" class="relative z-50">
        <!-- Background overlay -->
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black" />
        </TransitionChild>

        <!-- Full-screen container -->
        <div class="fixed inset-0">
          <div class="flex h-full w-full">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel
                class="relative h-full w-full transform overflow-hidden bg-black"
              >
                <!-- Close Button -->
                <button
                  @click="isOpen = false"
                  class="absolute right-4 top-4 z-50 rounded-full p-2 text-white transition-all duration-300 hover:rotate-90 hover:bg-white/10"
                >
                  <Icon name="heroicons:x-mark" class="h-6 w-6" />
                </button>

                <!-- Camera Content -->
                <div class="relative h-full w-full">
                  <!-- Error State -->
                  <div
                    v-if="error"
                    class="flex h-full w-full flex-col items-center justify-center bg-black p-4 text-center"
                  >
                    <Icon
                      name="material-symbols:error-outline"
                      class="mb-4 h-16 w-16 text-red-500"
                    />
                    <p class="text-lg text-white">{{ error }}</p>
                  </div>

                  <!-- Success State -->
                  <div
                    v-else-if="!!result"
                    class="absolute inset-0 z-20 flex items-center justify-center bg-black/90"
                  >
                    <div class="text-center text-white">
                      <Icon
                        name="icon-park:success"
                        class="mb-4 h-16 w-16 text-green-500"
                      />
                      <h3 class="text-2xl font-bold">{{ result }}</h3>
                      <p class="mt-2">Successfully scanned!</p>
                    </div>
                  </div>

                  <!-- Camera Stream -->
                  <div v-else class="h-full w-full">
                    <qrcode-stream
                      v-if="selectedDevice !== null"
                      :constraints="{
                        deviceId: selectedDevice.deviceId,
                        facingMode: 'environment',
                      }"
                      :track="trackFunctionSelected.value"
                      :formats="selectedBarcodeFormats"
                      @error="onError"
                      @detect="onDetect"
                      class="h-full w-full object-cover"
                    />
                    <div
                      v-else
                      class="flex h-full w-full items-center justify-center bg-black"
                    >
                      <p class="text-white">No cameras available</p>
                    </div>

                    <!-- Scanning Overlay -->
                    <div class="scanner-overlay"></div>
                  </div>

                  <!-- Camera Selector -->
                  <div
                    v-if="devices.length > 1"
                    class="absolute bottom-4 left-1/2 -translate-x-1/2 transform"
                  >
                    <select
                      v-model="selectedDevice"
                      class="rounded-full border border-white/20 bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-sm"
                    >
                      <option
                        v-for="device in devices"
                        :key="device.deviceId"
                        :value="device"
                      >
                        {{ device.label }}
                      </option>
                    </select>
                  </div>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
  <UNotifications />
</template>

<script setup>
  import {
    Dialog,
    DialogPanel,
    TransitionRoot,
    TransitionChild,
  } from '@headlessui/vue'
  import { useActivePage } from '@/store/index'
  import { QrcodeStream } from 'vue-qrcode-reader'

  definePageMeta({
    layout: 'editor-default',
    middleware: 'auth',
  })

  const toast = useToast()
  const isOpen = ref(false)
  const result = ref('')
  const failed = ref(false)
  const selectedDevice = ref(null)
  const devices = ref([])
  const stateLoad = ref(true)
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
            description: `${parts[1]} has been checked in`,
            color: 'green',
            timeout: 3000,
          })
          setTimeout(() => {
            isOpen.value = false
            result.value = ''
          }, 2000)
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
        title: 'API service error',
        color: 'red',
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

    try {
      devices.value = (await navigator.mediaDevices.enumerateDevices()).filter(
        ({ kind }) => kind === 'videoinput',
      )
      if (devices.value.length > 0) {
        selectedDevice.value = devices.value[0]
      }
    } catch (err) {
      error.value = 'Error accessing camera devices'
    } finally {
      stateLoad.value = false
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
    error.value = ''

    if (err.name === 'NotAllowedError') {
      error.value = 'Please grant camera access permission'
    } else if (err.name === 'NotFoundError') {
      error.value = 'No camera found on this device'
    } else if (err.name === 'NotSupportedError') {
      error.value = 'Secure context required (HTTPS, localhost)'
    } else if (err.name === 'NotReadableError') {
      error.value = 'Is the camera already in use?'
    } else if (err.name === 'OverconstrainedError') {
      error.value = 'Installed cameras are not suitable'
    } else if (err.name === 'StreamApiNotSupportedError') {
      error.value = 'Stream API is not supported in this browser'
    } else if (err.name === 'InsecureContextError') {
      error.value = 'Please use HTTPS or localhost'
    } else {
      error.value = err.message
    }
  }
</script>

<style scoped>
  /* Scanner overlay animation */
  .scanner-overlay {
    @apply absolute inset-0;
    border: 2px solid rgba(255, 255, 255, 0.5);
    box-shadow: inset 0 0 0 3px rgba(255, 255, 255, 0.1);
    animation: scanner-pulse 2s infinite;
  }

  @keyframes scanner-pulse {
    0% {
      border-color: rgba(255, 255, 255, 0.5);
    }
    50% {
      border-color: rgba(79, 70, 229, 0.8);
      box-shadow: inset 0 0 20px rgba(79, 70, 229, 0.5);
    }
    100% {
      border-color: rgba(255, 255, 255, 0.5);
    }
  }

  /* Gradient animation */
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  /* Select dropdown styling */
  select {
    @apply appearance-none;
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%23ffffff' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e");
    background-position: right 0.5rem center;
    background-repeat: no-repeat;
    background-size: 1.5em 1.5em;
    padding-right: 2.5rem;
  }
</style>
