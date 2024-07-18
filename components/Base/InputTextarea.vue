<template>
  <div class="grid grid-cols-2 gap-2">
    <div>
      <div class="flex content-center items-center justify-between text-sm">
        <label class="block font-bold text-gray-700">{{ label }}</label>
      </div>
      <p class="text-sm text-gray-500 dark:text-gray-400">{{ desc }}</p>
    </div>
    <div class="relative mt-1">
      <div class="relative">
        <textarea
          v-model="value"
          :name="name"
          rows="5"
          class="form-textarea focus:ring-primary-500 dark:focus:ring-primary-400 relative block w-full resize-none rounded-md border-0 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 disabled:cursor-not-allowed disabled:opacity-75 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500 dark:ring-gray-700"
        ></textarea>
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
  })
  const { value, errorMessage } = useField(() => props.name)
</script>
