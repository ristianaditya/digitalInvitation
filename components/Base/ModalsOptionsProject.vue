<template>
  <TransitionRoot appear :show="props.openModal" as="template">
    <Dialog as="div" @close="closeModal" class="relative z-10">
      <TransitionChild as="template" enter="duration-300 ease-out" enter-from="opacity-0" enter-to="opacity-100"
        leave="duration-200 ease-in" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0">
        <div class="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
          <div class="relative p-4 w-full max-w-md max-h-full">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
              <!-- Modal header -->
              <div class="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Create an Invitation
                </h3>
                <button @click="closeModal"
                  class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm h-8 w-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="select-modal">
                  <svg class="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 14 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              <!-- Modal body -->
              <div class="p-4 md:p-5">
                <p class="text-gray-500 dark:text-gray-400 mb-4">Select invite option :</p>
                <ul class="space-y-4 mb-4">
                  <li>
                    <input type="radio" id="invitation-1" name="invitation" value="custom" v-model="typeInvitation"
                      class="hidden peer" required />
                    <label for="invitation-1"
                      class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-[#49479F] peer-checked:border-[#49479F] peer-checked:text-[#49479F] hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">
                      <div class="block">
                        <div class="w-full text-lg font-semibold">Custom Invitation</div>
                        <div class="w-full text-gray-500 dark:text-gray-400">Create your own custom theme</div>
                      </div>
                      <svg class="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </label>
                  </li>
                  <li>
                    <input type="radio" id="invitation-2" name="invitation" value="template" v-model="typeInvitation"
                      class="hidden peer">
                    <label for="invitation-2"
                      class="inline-flex items-center justify-between w-full p-5 text-gray-900 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-500 dark:peer-checked:text-[#49479F] peer-checked:border-[#49479F] peer-checked:text-[#49479F] hover:text-gray-900 hover:bg-gray-100 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-500">
                      <div class="block">
                        <div class="w-full text-lg font-semibold">Template Invitation</div>
                        <div class="w-full text-gray-500 dark:text-gray-400">Choose your theme template </div>
                      </div>
                      <svg class="w-4 h-4 ms-3 rtl:rotate-180 text-gray-500 dark:text-gray-400" aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9" />
                      </svg>
                    </label>
                  </li>
                </ul>
                <button @click="confirmModal"
                  class="text-white inline-flex w-full justify-center bg-[#49479F] hover:bg-[#3a3980] focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-[#49479F] dark:hover:bg-[#49479F] dark:focus:ring-[#3a3980] mt-6">
                  Select
                </button>
              </div>
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

const typeInvitation = ref()

function submitInvitation() {
  console.log('tester', typeInvitation.value);
}

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
  emit('confirm', typeInvitation.value)
}
</script>
