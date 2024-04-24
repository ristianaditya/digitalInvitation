<template>
  <div>
    <h3 v-show="label" class="text-md font-bold text-gray-800">{{ label }}</h3>
    <p v-show="desc" class="mb-3 text-sm text-gray-600">
      {{ desc }}
    </p>
    <div class="relative mb-5 mt-1">
      <div class="relative">
        <VueDatePicker v-model="value" :name="name"></VueDatePicker>
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
  import VueDatePicker from '@vuepic/vue-datepicker'
  import '@vuepic/vue-datepicker/dist/main.css'

  const props = defineProps({
    name: String,
    type: String,
    label: String,
    icon: String,
    desc: String,
  })
  const { value, errorMessage } = useField(() => props.name)
</script>
