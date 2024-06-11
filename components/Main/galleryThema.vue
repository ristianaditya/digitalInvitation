<template>
  <div class="bg-[#fafafa]">
    <div class="container py-24">
      <div
        class="mb-10 mt-5 flex flex-col justify-between px-4 md:flex-row md:items-center"
      >
        <h4 class="text-navy-700 ml-1 text-3xl font-bold dark:text-white">
          Gallery
        </h4>
        <ul
          class="mt-4 flex items-center justify-between md:mt-0 md:justify-center md:!gap-5 2xl:!gap-12"
        >
          <li>
            <a
              class="text-brand-500 hover:text-brand-500 text-base font-medium dark:text-white"
              href=" "
              >Wedding</a
            >
          </li>
          <li>
            <a
              class="text-brand-500 hover:text-brand-500 text-base font-medium dark:text-white"
              href=" "
              >Anniversary</a
            >
          </li>
          <li>
            <a
              class="text-brand-500 hover:text-brand-500 text-base font-medium dark:text-white"
              href=" "
              >Graduation</a
            >
          </li>
        </ul>
      </div>
      <div class="z-20 grid grid-cols-1 gap-5 md:grid-cols-4">
        <div v-for="templates in TEMPLATES" :key="templates.name">
          <div
            class="!z-5 shadow-3xl shadow-shadow-500 dark:!bg-navy-800 3xl:p-![18px] undefined relative flex h-fit w-full flex-col rounded-[20px] bg-white bg-clip-border !p-4 dark:text-white dark:shadow-none"
          >
            <div class="h-fit w-full">
              <div class="relative w-full rounded-xl">
                <img
                  src="/thema/gallery/themaSatu.png"
                  class="3xl:h-full 3xl:w-full mb-3 h-[210px] w-full rounded-xl object-cover"
                  alt=""
                />
              </div>
              <div
                class="mb-5 mt-3 flex items-center justify-between px-1 md:items-start"
              >
                <div class="mb-2">
                  <p class="text-navy-700 text-lg font-bold">
                    {{ templates.label }}
                  </p>
                  <p class="mt-1 text-sm font-medium text-gray-600 md:mt-2">
                    01/11/2020
                  </p>
                </div>
                <div class="flex flex-row-reverse md:mt-2 lg:mt-0">
                  <button
                    class="linear hover:bg-brand-800 active:bg-brand-700 rounded-[15px] bg-[#49479F] px-4 py-2 text-sm font-medium text-white transition duration-200"
                    @click="handleClick(templates.name)"
                  >
                    Select
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
  import { TEMPLATES } from '~/common/constant/template'
  const router = useRouter()

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

  function handleClick(value) {
    router.push(`/Builder/${value}?id=${makeid(25)}`)
  }
</script>
