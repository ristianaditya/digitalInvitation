<template>
  <div>
    <div class="relative -mt-[5.75rem] overflow-hidden pt-[5.75rem] h-full ">
      <div class=" h-screen grid ">
        <div class=" max-w-[1630px] place-self-center w-screen pt-20 relative mx-auto grid px-14">
          <div
            class="mt-12 mb-7 animate-fade-up animate-delay-1000 animate-ease-linear animate-normal col-start-1 row-start-1 h-7 leading-7 "
            aria-hidden="true">
            <a href="#_"
              class="inline-block px-4 py-2 mb-3 mx-auto text-sm text-[#2C1854] bg-[#D2C6FA] rounded-full pointer-events-none shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transform -skew-y-1 font-inter font-bold">
              Welcome to Invite Plus
            </a>
          </div>
          <h1
            class=" h1 col-start-1 row-start-2 mt-2 max-w-[36rem] text-4xl tracking-tight text-slate-900 sm:text-[5rem] xl:max-w-[50.5rem] font-extrabold mb-2 leading-8">
            Fast Invites, Celebrate
            <span class="type-textHome text-[#faa6b0]"></span>
          </h1>
          <p class=" col-start-1 row-start-3 mt-4 max-w-lg font-medium text-xl leading-8 font-inter">
            Start your event with beautifully crafted
            digital invitations, combining elegance and user-friendliness. It's the perfect beginning for a memorable
            gathering!
          </p>
          <div class=" col-start-1 row-start-4 mt-10 flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
            <!-- :to="`/Builder?id=${makeid(30)}`" -->
            <a @click="openModal" class="relative inline-block text-sm group ">
              <span
                class="inline-flex items-center justify-center w-full px-6 py-4 text-base font-bold leading-6 text-slate-900 bg-[#F8D075] border border-transparent rounded-full md:w-auto hover:bg-[#facc62] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#fdd26d] font-inter cursor-pointer">
                Create an Invitation
                <Icon name="ep:arrow-right-bold" class="ml-2" />
              </span>
            </a>
            <a href="https://api.whatsapp.com/send?phone=6282129140149&text=Hello saya pengguna baru apakah kamu bisa menjelaskan tentang invitePlus ?"
              target="_blank" class="relative inline-block text-sm group ">
              <span
                class="inline-flex items-center justify-center w-full px-6 py-4 text-base font-bold leading-6 text-slate-900 bg-[#D2C6FA] border border-transparent rounded-full md:w-auto hover:bg-[#b7a3fa] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#b7a3fa] font-inter ">
                Tutorials
                <Icon name="ep:arrow-right-bold" class="ml-2" />
              </span>
            </a>
          </div>
          <div
            class="col-start-1 row-start-5 md:row-span-3 md:row-start-3 lg:row-span-4 lg:row-start-2 xl:row-span-5 xl:row-start-1 xl:justify-end xl:flex sm:hidden">
            <img src="/logos/phone.svg" alt="Invitations Plus Logo" width="550" height="700" />
          </div>
        </div>
      </div>
    </div>
    <BaseModalsOptionsProject :open-modal="isOpen" @close="isOpen = false" @confirm="handleConfirmation" />
  </div>
</template>
<script setup>

const isOpen = ref(false)
const router = useRouter();
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
  font-weight: 800;
  line-height: 1;
}
</style>
