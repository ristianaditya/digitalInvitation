<template>
  <div>
    <h3 v-show="label" class="text-md font-bold text-gray-800">{{ label }}</h3>
    <p v-show="desc" class="mb-3 text-sm text-gray-600">
      {{ desc }}
    </p>
    <div class="relative mb-5 mt-1">
      <div class="relative">
        <textarea
          v-model="value"
          :name="name"
          rows="5"
          class="form-textarea focus:ring-primary-500 dark:focus:ring-primary-400 relative block w-full resize-none rounded-md border-0 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#49479F] disabled:cursor-not-allowed disabled:opacity-75"
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
