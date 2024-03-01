<template>
  <h6
    class="block w-full -mb-5 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900">
    {{ label }} <a class=" text-red-600">*</a>
  </h6>
  <label class="input input-bordered flex items-center gap-2  border-2"
    :class="errorMessage ? 'input-error' : 'border-[#F4F0FD]'">
    <Icon :name="icon" />
    <input v-model="value" :type="type || 'text'" class="grow" :placeholder="placeholder" />
  </label>
  <div class=" text-sm -mt-5 ml-2 text-red-700">{{ errorMessage }}</div>
</template>
<script setup>
import { useField } from 'vee-validate';
const props = defineProps({
  name: String,
  type: String,
  label: String,
  placeholder: String,
  icon: String
})
const { value, errorMessage } = useField(() => props.name);
</script>
