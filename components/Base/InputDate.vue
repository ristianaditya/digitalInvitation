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
        <VueDatePicker :name="name" v-model="value"></VueDatePicker>
        <span class="absolute inset-y-0 start-0 flex items-center pointer-events-none px-3"><span :class="icon"
            class="flex-shrink-0 text-gray-400 dark:text-gray-500 h-5 w-5"></span></span>
      </div>
      <p class="mt-2 text-red-500 dark:text-red-400 text-sm">{{ errorMessage }}</p>
    </div>
  </div>
</template>

<script setup>
import { useField } from 'vee-validate';
import VueDatePicker from '@vuepic/vue-datepicker';
import '@vuepic/vue-datepicker/dist/main.css'

const date = ref();

const props = defineProps({
  name: String,
  type: String,
  label: String,
  icon: String,
  desc: String
})
const { value, errorMessage } = useField(() => props.name);
</script>
