<template>
  <div class="grid grid-cols-2 gap-2">
    <div>
      <div class="flex content-center items-center justify-between text-sm">
        <label for="aUkbh3TvCg_690" class="block font-medium text-gray-700 dark:text-gray-200 ">{{ label }}</label>
      </div>
      <p class="text-gray-500 dark:text-gray-400 text-sm">{{ desc }}
      </p>
    </div>
    <div class="relative">
      <USelectMenu :name="name" :placeholder="placeholder" v-model="value" :options="listdata" :popper="{ arrow: true }"
        class=" w-full text-md focus:ring-[#49479F] dark:focus:ring-[#49479F]" />
    </div>
  </div>
</template>

<script setup>
import { useField } from 'vee-validate';
const props = defineProps({
  name: String,
  label: String,
  desc: String,
  placeholder: String,
  listdata: Array
})
const { value, errorMessage } = useField(() => props.name);
</script>
