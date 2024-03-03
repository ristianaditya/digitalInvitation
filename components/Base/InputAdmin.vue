<template>
  <div class="grid grid-cols-2 gap-2 items-center font-inter">
    <div>
      <div class="flex content-center items-center justify-between text-sm">
        <label class="block font-medium text-gray-700 dark:text-gray-200 ">{{ label }}</label>
      </div>
      <p class="text-gray-500 dark:text-gray-400 text-sm">{{ desc }}</p>
    </div>
    <div class="mt-1 relative">
      <div class="relative">
        <input :name="name" :type="type" v-model="value"
          class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-input rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-md px-3 py-2 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-[#49479F] dark:focus:ring-[#49479F] ps-10"
          autocomplete="off">
        <span class="absolute inset-y-0 start-0 flex items-center pointer-events-none px-3"><span :class="icon"
            class="flex-shrink-0 text-gray-400 dark:text-gray-500 h-5 w-5"></span></span>
      </div>
      <p class="mt-2 text-red-500 dark:text-red-400 text-sm">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { useField } from 'vee-validate';
const props = defineProps({
  name: String,
  type: String,
  label: String,
  icon: String,
  desc: String
})
const { value, errorMessage } = useField(() => props.name);
</script>
