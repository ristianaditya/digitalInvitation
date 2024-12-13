<template>
  <div>
    <h3 v-show="label" class="text-md font-bold text-gray-800">{{ label }}</h3>
    <p v-show="desc" class="mb-3 text-sm text-gray-600">
      {{ desc }}
    </p>
    <div class="relative mb-5 mt-1">
      <div class="relative grid grid-cols-8 gap-3">
        <USelectMenu
          v-model="value"
          class="col-span-7"
          :name="name"
          :options="dataMusic"
          searchable
          color="white"
          @click="getMusics"
          @change="openMusic(value)"
        >
          <template #label>
            <span v-if="!value" class="truncate"> Pilih Musics </span>
          </template>
          <template #option-empty="{ query }">
            <q>{{ query }}</q> not found
          </template>
        </USelectMenu>
        <div
          class="btn btn-circle btn-sm self-center bg-[#F8D075] hover:bg-[#ccaa5a]"
          @click="openModalForm()"
        >
          <Icon name="material-symbols:add" class="text-2xl" />
        </div>
      </div>
      <p class="mt-2 text-sm text-red-500">
        {{ errorMessage }}
      </p>
    </div>
  </div>
  <UModal v-model="isOpen" :overlay="false">
    <div>
      <MusicfyPlayer :config="config" />
    </div>
  </UModal>
  <BaseModalForm
    :open-modal="state.isOpenForm"
    title-modal="Form Musics"
    desc-modal="This form is used to add and update the music list."
    @close="state.isOpenForm = false"
  >
    <template #body>
      <div>
        <MusicsForm
          :id-modal="state.idItems"
          @close="state.isOpenForm = false"
          @confirm="confirmSave()"
        />
      </div>
    </template>
  </BaseModalForm>
</template>
<script setup>
  import { useField } from 'vee-validate'
  const props = defineProps({
    name: String,
    type: String,
    label: String,
    desc: String,
  })
  const isOpen = ref(false)
  const config = ref()
  const srcMusic = ref()
  const { value, errorMessage } = useField(() => props.name)

  const dataMusic = ref()

  const state = reactive({
    isOpenDelete: false,
    isOpenForm: false,
    idItems: '',
  })

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
        provider: 'URL',
        src: params.music,
      },
      image: {
        src: 'https://dimatis.yizack.com/images/reminiscences.jpg',
        alt: 'Dimatis - Reminiscences',
      },
      size: {
        width: '100%',
      },
    })
    isOpen.value = true
  }

  async function confirmSave() {
    state.isOpenForm = false
  }

  function openModalForm() {
    state.idItems = ''
    state.isOpenForm = true
  }
</script>
<style>
  div[id^='headlessui-combobox-button'] > button {
    @apply form-input relative block w-full rounded-md border-0 bg-white px-3 py-2 text-gray-900 placeholder-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#49479F] disabled:cursor-not-allowed disabled:opacity-75;
  }
</style>
