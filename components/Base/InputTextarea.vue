<template>
  <div class="grid grid-cols-2 gap-2">
    <div>
      <div class="flex content-center items-center justify-between text-sm"><label for="aUkbh3TvCg_7"
          class="block font-medium text-gray-700 dark:text-gray-200">{{ label }}</label></div>
      <p class="text-gray-500 dark:text-gray-400 text-sm">{{ desc }}</p>
    </div>
    <div class="mt-1 relative">
      <div class="relative">
        <textarea :name="name" rows="5" v-model="value"
          class="relative block w-full disabled:cursor-not-allowed disabled:opacity-75 focus:outline-none border-0 form-textarea rounded-md placeholder-gray-400 dark:placeholder-gray-500 text-sm px-3 py-2 shadow-sm bg-white dark:bg-gray-900 text-gray-900 dark:text-white ring-1 ring-inset ring-gray-300 dark:ring-gray-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 resize-none"></textarea>
      </div>
      <p class="mt-2 text-red-500 dark:text-red-400 text-sm">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { useField } from 'vee-validate';
const props = defineProps({
  name: String,
  label: String,
  desc: String
})
const { value, errorMessage } = useField(() => props.name);
</script>
