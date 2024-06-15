<template>
  <div>
    <UContainer
      v-if="stateLoad"
      class="flex h-[100vh] items-center justify-center text-center"
    >
      <span class="loading loading-spinner loading-lg text-[#49479F]"></span>
    </UContainer>
    <div v-else>
      <div
        v-if="
          invitation.status == 'unpublish' ||
          invitation.notFound == true ||
          !!!invitation.subs
        "
      >
        <NotFound />
      </div>
      <div v-else>
        <ThemaEnvelope
          v-show="envelope"
          :date="invitation.date"
          :person-first="invitation.personFirst"
          :person-second="invitation.personSecond"
          :invite-desc="invitation.inviteDesc"
          :invite-name="route.query.to"
          @close="envelope = false"
        />
        <div v-show="!envelope">
          <div>
            <div
              class="fixed bottom-4 left-1/2 z-50 h-16 w-full max-w-md -translate-x-1/2 rounded-full border border-gray-200 bg-white/30 shadow-2xl shadow-indigo-500/50 backdrop-blur-xl dark:border-gray-600 dark:bg-gray-700"
            >
              <div class="mx-auto grid h-full max-w-md grid-cols-3">
                <button
                  data-tooltip-target="tooltip-home"
                  type="button"
                  class="group inline-flex flex-col items-center justify-center rounded-s-full px-5 hover:bg-gray-50 dark:hover:bg-gray-800"
                  @click="state.isOpenForm = true"
                >
                  <Icon name="material-symbols:rsvp" class="text-4xl" />
                  <span class="sr-only">RSVP</span>
                </button>
                <div
                  id="tooltip-home"
                  role="tooltip"
                  class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                >
                  Home
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <div class="flex items-center justify-center">
                  <button
                    v-if="!!!musicPlay"
                    ref="buttonPlay"
                    data-tooltip-target="tooltip-new"
                    type="button"
                    class="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#49479F] font-medium hover:bg-[#32316d] focus:outline-none focus:ring-4 focus:ring-[#8d8be2] dark:focus:ring-[#49479F]"
                    @click="playMusic()"
                  >
                    <Icon
                      name="material-symbols:play-arrow"
                      class="text-xl text-white"
                    />
                    <span class="sr-only">Play Music</span>
                  </button>
                  <button
                    v-else
                    data-tooltip-target="tooltip-new"
                    type="button"
                    class="group inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#49479F] font-medium hover:bg-[#32316d] focus:outline-none focus:ring-4 focus:ring-[#8d8be2] dark:focus:ring-[#49479F]"
                    @click="playMusic()"
                  >
                    <Icon name="ph:pause-fill" class="text-xl text-white" />
                    <span class="sr-only">Pause Music</span>
                  </button>
                </div>
                <div
                  id="tooltip-new"
                  role="tooltip"
                  class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                >
                  Create new item
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
                <button
                  data-tooltip-target="tooltip-profile"
                  type="button"
                  class="group inline-flex flex-col items-center justify-center rounded-e-full px-5 hover:bg-gray-50 dark:hover:bg-gray-800"
                  @click="openQrModalForm(route.query.to, route.params.id)"
                >
                  <Icon name="uil:qrcode-scan" class="text-2xl" />
                  <span class="sr-only">QR Code</span>
                </button>
                <div
                  id="tooltip-profile"
                  role="tooltip"
                  class="tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700"
                >
                  Profile
                  <div class="tooltip-arrow" data-popper-arrow></div>
                </div>
              </div>
            </div>

            <div v-html="iniHtml"></div>
          </div>
          <div ref="container"></div>
        </div>
        <BaseModalForm
          :open-modal="state.isOpenQrForm"
          title-modal="QR Code"
          desc-modal="Guest's qr code to be scanned."
          @close="state.isOpenQrForm = false"
        >
          <template #body>
            <div class="w-full text-center">
              <img :src="qrcode" alt="QR Code" class="h-100 w-full" />
            </div>
          </template>
        </BaseModalForm>
        <BaseModalForm
          :open-modal="state.isOpenForm"
          title-modal="Form RSVP"
          desc-modal="This form is used to add and update the guest list."
          @close="state.isOpenForm = false"
        >
          <template #body>
            <div>
              <Rsvp
                :id-modal="route.query.to"
                @close="state.isOpenForm = false"
                @confirm="confirmSave()"
              />
            </div>
          </template>
        </BaseModalForm>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { usePostData } from '~/composables/useFetchData'
  import { useQRCode } from '@vueuse/integrations/useQRCode'

  definePageMeta({
    layout: false,
    auth: false,
  })
  useHead({
    script: [{ src: 'https://cdn.tailwindcss.com', body: true }],
  })
  const envelope = ref(true)
  const route = useRoute()
  const stateLoad = ref(true)
  const musicPlay = ref(false)
  const buttonPlay = ref('')
  const codeGuest = ref('')
  const state = reactive({
    isOpenQrForm: false,
    isOpenForm: false,
  })
  const qrcode = useQRCode(codeGuest)
  let beep = null
  const project = reactive({
    html: '',
    css: '',
  })
  const invitation = reactive({
    date: '',
    personFirst: '',
    personSecond: '',
    inviteDesc: '',
    musicSrc: '',
    status: 'unpublish',
    notFound: false,
    subs: '',
  })
  const iniHtml = computed(() => {
    return project.html
  })

  function openQrModalForm(name, invite_link) {
    codeGuest.value = `${invite_link}/${name}`
    state.isOpenQrForm = true
  }

  function playMusic() {
    if (!beep) {
      beep = new Audio(invitation.musicSrc)
      beep.volume = 0.1
      beep.addEventListener('canplay', () => {
        if (!musicPlay.value) {
          beep.play()
          musicPlay.value = true
        }
      })
    } else {
      if (!musicPlay.value) {
        beep.play()
        musicPlay.value = true
      } else {
        beep.pause()
        musicPlay.value = false
      }
    }
  }
  setTimeout(() => {
    playMusic()
  }, 8000)
  onMounted(async () => {
    await usePostData(`/invitations/getInvitation/${route.params.id}`).then(
      (res) => {
        if (res.status == 200) {
          project.html = JSON.parse(res._data.data[0].project.html)
          project.css = JSON.parse(res._data.data[0].project.css)
          invitation.date = res._data.data[0].invite_date
          invitation.personFirst = res._data.data[0].familydata.personFirst
          invitation.personSecond = res._data.data[0].familydata.personSecond
          invitation.inviteDesc = res._data.data[0].invite_name
          invitation.musicSrc = res._data.data[0].music.music
          invitation.status = res._data.data[0].status
        } else {
          invitation.notFound = true
        }
      },
    )
    await usePostData(`/invitations/getTransaction/${route.params.id}`).then(
      (res) => {
        if (res.status == 200) {
          invitation.subs = res._data.data.latest_transaction
        } else {
          invitation.notFound = true
        }
      },
    )
    const style = document.createElement('style')
    style.innerHTML = project.css
    document.head.appendChild(style)
    stateLoad.value = false
  })
</script>
