<template>
  <div class="grid grid-cols-2 gap-2 items-center font-inter">
    <div>
      <div class="flex content-center items-center justify-between text-sm">
        <label
          class="block  font-bold text-gray-700 dark:text-gray-200 after:content-['*'] after:ms-0.5 after:text-red-500 dark:after:text-red-400">{{
            label }}</label>
      </div>
      <p class="text-gray-500 dark:text-gray-400 text-sm">{{ desc }}</p>
    </div>
    <div class="mt-1 relative">
      <div class="relative">
        <USelectMenu :name="name" v-model="value" :options="dataMusic" searchable color="white" @click="getMusics"
          @change="openMusic(value)">
          <template #label>
            <span v-if="!value" class="truncate">
              Pilih Musics
            </span>
          </template>
          <template #option-empty="{ query }">
            <q>{{ query }}</q> not found
          </template>
        </USelectMenu>
      </div>
      <p class="mt-2 text-red-500 dark:text-red-400 text-sm">{{ errorMessage }}</p>
    </div>
  </div>
  <UModal v-model="isOpen" :overlay="false">
    <div>
      <MusicfyPlayer :config="config" />
    </div>
  </UModal>
</template>
<script setup>
import { useField } from 'vee-validate';
const props = defineProps({
  name: String,
  type: String,
  label: String,
  desc: String
})
const isOpen = ref(false)
const config = ref()
const srcMusic = ref()
const { value, errorMessage } = useField(() => props.name);

const dataMusic = ref()

const getMusics = async () => {
  const result = await useGetData('/musics/getMusics')
  dataMusic.value = result.musics.map((data) => ({
    id: data.id,
    label: data.music_name,
    music: data.music,
  }))
}

async function openMusic(params) {
  srcMusic.value = params.music
  config.value = defineMusicfyPlayer({
    audio: {
      provider: "URL",
      src: params.music
    },
    image: {
      src: "https://dimatis.yizack.com/images/reminiscences.jpg",
      alt: "Dimatis - Reminiscences"
    },
    size: {
      width: "100%"
    },
  })
  isOpen.value = true
}
</script>
<style>
div[id^=headlessui-combobox-button]>button {
  @apply relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 px-3 py-2 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-[#49479F] dark:focus:ring-[#49479F]
}
</style>
