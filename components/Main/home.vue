<template>
  <div>
    <div class="relative -mt-[12rem] h-full overflow-hidden pt-[5.75rem]">
      <div class="grid h-screen">
        <div
          class="relative mx-auto grid w-screen max-w-[1630px] place-self-center px-14 pt-20"
        >
          <div
            class="col-start-1 row-start-1 mb-7 mt-12 h-7 animate-fade-up leading-7 animate-delay-1000 animate-normal animate-ease-linear"
            aria-hidden="true"
          >
            <a
              href="#_"
              class="pointer-events-none mx-auto mb-3 inline-block -skew-y-1 transform rounded-full bg-[#D2C6FA] px-4 py-2 font-inter text-sm font-bold text-[#2C1854] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]"
            >
              Welcome to Invite Plus
            </a>
          </div>
          <div
            class="h1 col-start-1 row-start-2 mb-2 mt-2 max-w-[36rem] text-4xl font-extrabold leading-8 tracking-tight text-slate-900 sm:text-[5rem] xl:max-w-[50.5rem]"
          >
            Fast Invites, Celebrate
            <span class="text-[#faa6b0] type-textHome"></span>
          </div>
          <p
            class="col-start-1 row-start-3 mt-4 max-w-lg font-inter text-xl font-medium leading-8"
          >
            Start your event with beautifully crafted digital invitations,
            combining elegance and user-friendliness. It's the perfect beginning
            for a memorable gathering!
          </p>
          <div
            class="col-start-1 row-start-4 mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
          >
            <!-- :to="`/Builder?id=${makeid(30)}`" -->
            <a class="group relative inline-block text-sm" @click="openModal">
              <span
                class="inline-flex w-full cursor-pointer items-center justify-center rounded-full border border-transparent bg-[#F8D075] px-6 py-4 font-inter text-base font-bold leading-6 text-slate-900 hover:bg-[#facc62] focus:outline-none focus:ring-2 focus:ring-[#fdd26d] focus:ring-offset-2 md:w-auto"
              >
                Create an Invitation
                <Icon name="ep:arrow-right-bold" class="ml-2" />
              </span>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=6282129140149&text=Hello saya pengguna baru apakah kamu bisa menjelaskan tentang invitePlus ?"
              target="_blank"
              class="group relative inline-block text-sm"
            >
              <span
                class="inline-flex w-full items-center justify-center rounded-full border border-transparent bg-[#D2C6FA] px-6 py-4 font-inter text-base font-bold leading-6 text-slate-900 hover:bg-[#b7a3fa] focus:outline-none focus:ring-2 focus:ring-[#b7a3fa] focus:ring-offset-2 md:w-auto"
              >
                Tutorials
                <Icon name="ep:arrow-right-bold" class="ml-2" />
              </span>
            </a>
          </div>
          <div
            class="col-start-1 row-start-5 sm:hidden md:row-span-3 md:row-start-3 lg:row-span-4 lg:row-start-2 xl:row-span-5 xl:row-start-1 xl:flex xl:justify-end"
          >
            <img
              src="/logos/phone.svg"
              alt="Invitations Plus Logo"
              width="550"
              height="700"
            />
          </div>
        </div>
      </div>
    </div>
    <BaseModalsOptionsProject
      :open-modal="isOpen"
      @close="isOpen = false"
      @confirm="handleConfirmation"
    />
  </div>
</template>
<script setup>
  const isOpen = ref(false)
  const router = useRouter()
  const { status } = useAuth()
  const statusUser = status.value

  function openModal() {
    if (statusUser === 'authenticated') {
      isOpen.value = true
    } else {
      router.push('/login')
    }
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

  function handleConfirmation(value) {
    if (value == 'custom') {
      router.push(`/Builder?id=${makeid(25)}`)
    } else if (value == 'template') {
      router.push({ path: '/', hash: '#thema' })
      isOpen.value = false
    }
  }
</script>
<style>
  .h1 {
    font-weight: 800 !important;
    line-height: 1 !important;
  }
</style>
