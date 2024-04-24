<template>
  <div>
    <h3 v-show="label" class="text-md font-bold text-gray-800">{{ label }}</h3>
    <p v-show="desc" class="mb-3 text-sm text-gray-600">
      {{ desc }}
    </p>
    <div class="relative mb-5 mt-1">
      <div class="relative">
        <USelectMenu
          v-model="value"
          :name="name"
          :placeholder="placeholder"
          :options="listdata"
          :popper="{ arrow: true }"
          class="text-md w-full focus:ring-[#49479F] dark:focus:ring-[#49479F]"
        />
      </div>
      <p class="mt-2 text-sm text-red-500 dark:text-red-400">
        {{ errorMessage }}
      </p>
    </div>
  </div>
</template>

<script setup>
  import { useField } from 'vee-validate'
  const props = defineProps({
    name: String,
    label: String,
    desc: String,
    placeholder: String,
    listdata: Array,
  })
  const { value, errorMessage } = useField(() => props.name)
</script>
<style>
  div[id^='headlessui-listbox-button'] > button {
    height: 43px;
  }
</style>
