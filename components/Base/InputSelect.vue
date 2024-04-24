<template>
  <div class="grid grid-cols-2 gap-2">
    <div>
      <div class="flex content-center items-center justify-between text-sm">
        <label
          for="aUkbh3TvCg_690"
          class="block font-medium text-gray-700 dark:text-gray-200"
          >{{ label }}</label
        >
      </div>
      <p class="text-sm text-gray-500 dark:text-gray-400">{{ desc }}</p>
    </div>
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
  const { value } = useField(() => props.name)
</script>
