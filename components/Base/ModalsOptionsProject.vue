<template>
  <TransitionRoot appear :show="props.openModal" as="template">
    <Dialog as="div" class="relative z-10" @close="closeModal">
      <TransitionChild
        as="template"
        enter="duration-300 ease-out"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="duration-200 ease-in"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div class="fixed inset-0 bg-black/25" />
      </TransitionChild>

      <div class="fixed inset-0">
        <div
          class="relative min-h-screen px-4 md:flex md:items-center md:justify-center"
        >
          <div class="relative max-h-full w-full max-w-md p-4">
            <!-- Modal content -->
            <div class="relative rounded-lg bg-white shadow dark:bg-gray-700">
              <!-- Modal header -->
              <div
                class="flex items-center justify-between rounded-t border-b p-4 md:p-5 dark:border-gray-600"
              >
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  Create an Invitation
                </h3>
                <button
                  class="ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                  data-modal-toggle="select-modal"
                  @click="closeModal"
                >
                  <svg
                    class="h-3 w-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span class="sr-only">Close modal</span>
                </button>
              </div>
              <!-- Modal body -->
              <div class="p-4 md:p-5">
                <p class="mb-4 text-gray-500 dark:text-gray-400">
                  Select invite option :
                </p>
                <ul class="mb-4 space-y-4">
                  <li>
                    <input
                      id="invitation-1"
                      v-model="typeInvitation"
                      type="radio"
                      name="invitation"
                      value="custom"
                      class="peer hidden"
                      required
                    />
                    <label
                      for="invitation-1"
                      class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-900 hover:bg-gray-100 hover:text-gray-900 peer-checked:border-[#49479F] peer-checked:text-[#49479F] dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:peer-checked:text-[#49479F]"
                    >
                      <div class="block">
                        <div class="w-full text-lg font-semibold">
                          Custom Invitation
                        </div>
                        <div class="w-full text-gray-500 dark:text-gray-400">
                          Create your own custom theme
                        </div>
                      </div>
                      <svg
                        class="ms-3 h-4 w-4 text-gray-500 rtl:rotate-180 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </label>
                  </li>
                  <li>
                    <input
                      id="invitation-2"
                      v-model="typeInvitation"
                      type="radio"
                      name="invitation"
                      value="template"
                      class="peer hidden"
                    />
                    <label
                      for="invitation-2"
                      class="inline-flex w-full cursor-pointer items-center justify-between rounded-lg border border-gray-200 bg-white p-5 text-gray-900 hover:bg-gray-100 hover:text-gray-900 peer-checked:border-[#49479F] peer-checked:text-[#49479F] dark:border-gray-500 dark:bg-gray-600 dark:text-white dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:peer-checked:text-[#49479F]"
                    >
                      <div class="block">
                        <div class="w-full text-lg font-semibold">
                          Template Invitation
                        </div>
                        <div class="w-full text-gray-500 dark:text-gray-400">
                          Choose your theme template
                        </div>
                      </div>
                      <svg
                        class="ms-3 h-4 w-4 text-gray-500 rtl:rotate-180 dark:text-gray-400"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                      </svg>
                    </label>
                  </li>
                </ul>
                <button
                  class="mt-6 inline-flex w-full justify-center rounded-lg bg-[#49479F] px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-[#3a3980] focus:outline-none focus:ring-4 focus:ring-purple-300 dark:bg-[#49479F] dark:hover:bg-[#49479F] dark:focus:ring-[#3a3980]"
                  @click="confirmModal"
                >
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
  import { TransitionRoot, TransitionChild, Dialog } from '@headlessui/vue'

  const typeInvitation = ref()

  const props = defineProps({
    openModal: {
      type: Boolean,
      default: false,
    },
  })

  const emit = defineEmits(['close', 'confirm'])

  function closeModal() {
    emit('close')
  }
  function confirmModal() {
    emit('confirm', typeInvitation.value)
  }
</script>
