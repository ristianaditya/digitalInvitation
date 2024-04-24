<template>
  <div class="grid grid-cols-2 items-center gap-2 font-inter">
    <div>
      <div class="flex content-center items-center justify-between text-sm">
        <label
          class="block font-bold text-gray-700 after:ms-0.5 after:text-red-500 after:content-['*'] dark:text-gray-200 dark:after:text-red-400"
          >{{ label }}</label
        >
      </div>
      <p class="text-sm text-gray-500 dark:text-gray-400">{{ desc }}</p>
    </div>
    <div class="relative mt-1">
      <div class="relative">
        <input
          v-model="value"
          :name="name"
          :type="type"
          class="form-input text-md relative block w-full rounded-md border-0 bg-white px-3 py-2 ps-10 text-gray-900 placeholder-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#49479F] disabled:cursor-not-allowed disabled:opacity-75 dark:bg-gray-900 dark:text-white dark:placeholder-gray-500 dark:ring-gray-700 dark:focus:ring-[#49479F]"
          autocomplete="off"
        />
        <span
          class="pointer-events-none absolute inset-y-0 start-0 flex items-center px-3"
          ><span
            :class="icon"
            class="h-5 w-5 flex-shrink-0 text-gray-400 dark:text-gray-500"
          ></span
        ></span>
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
    type: String,
    label: String,
    icon: String,
    desc: String,
  })
  const { value, errorMessage } = useField(() => props.name)
</script>
