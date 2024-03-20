<template>
  <TransitionRoot appear :show="props.openModal" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0">
        <div class="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
          <div class="bg-black opacity-25 w-full h-full absolute z-10 inset-0"></div>
          <div
            class="bg-white rounded-lg md:max-w-md md:mx-auto p-5 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative">
            <div class="md:flex items-center">
              <div
                class="rounded-full border border-gray-300 flex items-center justify-center w-16 h-16 flex-shrink-0 mx-auto">
                <Icon name="ph:seal-warning-bold" class="text-4xl" />
              </div>
              <div class="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
                <p class="font-bold text-xl">Sign out</p>
                <p class="text-sm text-gray-700 mt-1">Are you sure you would like to sign out of your Invite Plus
                  account?
                </p>
              </div>
            </div>
            <div class="text-center md:text-right mt-4 md:flex md:justify-end">
              <button @click="confirmModal"
                class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2 hover:bg-red-300">Sign
                out !</button>
              <button @click="closeModal" class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4
          md:mt-0 md:order-1 hover:bg-gray-300">Cancel</button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
} from '@headlessui/vue'

const props = defineProps({
  openModal: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['close', 'confirm']);

function closeModal() {
  emit('close')
}
function confirmModal() {
  emit('confirm')
}
</script>
