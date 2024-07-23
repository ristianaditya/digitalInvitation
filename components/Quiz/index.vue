<template>
  <div
    v-if="page == 1"
    class="animate-fade-left animate-normal animate-once animate-ease-out"
  >
    <p class="text-xl font-black">Question 1</p>
    <p class="mt-2">
      Apakah dengan adanya aplikasi undangan digital ini dapat membantu pengguna
      dalam membuat dan menyebarkan undangan secara lebih efisien ?
    </p>

    <div class="mt-5 flex justify-between space-x-1">
      <ul class="inline-flex gap-5">
        <li>
          <input
            id="quizSatu-1"
            v-model="quiz.satu"
            type="radio"
            name="quizSatu"
            class="peer hidden"
            value="1"
            required
          />
          <label
            for="quizSatu-1"
            class="btn h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-[#D2C6FA] font-bold text-blue-900 hover:bg-[#cabdf7] peer-checked:bg-[#ece8fa] peer-checked:text-[#49479F] peer-checked:shadow-inner"
          >
            1
          </label>
        </li>
        <li>
          <input
            id="quizSatu-2"
            v-model="quiz.satu"
            type="radio"
            name="quizSatu"
            class="peer hidden"
            value="2"
          />
          <label
            for="quizSatu-2"
            class="btn h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-[#D2C6FA] font-bold text-blue-900 hover:bg-[#cabdf7] peer-checked:bg-[#ece8fa] peer-checked:text-[#49479F] peer-checked:shadow-inner"
          >
            2
          </label>
        </li>
        <li>
          <input
            id="quizSatu-3"
            v-model="quiz.satu"
            type="radio"
            name="quizSatu"
            class="peer hidden"
            value="3"
          />
          <label
            for="quizSatu-3"
            class="btn h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-[#D2C6FA] font-bold text-blue-900 hover:bg-[#cabdf7] peer-checked:bg-[#ece8fa] peer-checked:text-[#49479F] peer-checked:shadow-inner"
          >
            3
          </label>
        </li>
        <li>
          <input
            id="quizSatu-4"
            v-model="quiz.satu"
            type="radio"
            name="quizSatu"
            class="peer hidden"
            value="4"
          />
          <label
            for="quizSatu-4"
            class="btn h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-[#D2C6FA] font-bold text-blue-900 hover:bg-[#cabdf7] peer-checked:bg-[#ece8fa] peer-checked:text-[#49479F] peer-checked:shadow-inner"
          >
            4
          </label>
        </li>
        <li>
          <input
            id="quizSatu-5"
            v-model="quiz.satu"
            type="radio"
            name="quizSatu"
            class="peer hidden"
            value="5"
          />
          <label
            for="quizSatu-5"
            class="btn h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-[#D2C6FA] font-bold text-blue-900 hover:bg-[#cabdf7] peer-checked:bg-[#ece8fa] peer-checked:text-[#49479F] peer-checked:shadow-inner"
          >
            5
          </label>
        </li>
      </ul>
    </div>
    <div class="mt-2 flex justify-between text-sm text-gray-400">
      <p>Not satisfied</p>
      <p>Very satisfied</p>
    </div>
  </div>
  <div
    v-if="page == 2"
    class="animate-fade-left animate-normal animate-once animate-ease-out"
  >
    <p class="text-xl font-black">Question 2</p>
    <p class="mt-2">
      Apakah fitur kustomisasi desain undangan pada aplikasi ini membantu
      pengguna dalam membuat undangan yang sesuai dengan keinginan mereka ?
    </p>

    <div class="mt-5 flex justify-between space-x-1">
      <ul class="inline-flex gap-5">
        <li>
          <input
            id="quizDua-1"
            v-model="quiz.dua"
            type="radio"
            name="quizDua"
            class="peer hidden"
            value="1"
            required
          />
          <label
            for="quizDua-1"
            class="btn h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-[#D2C6FA] font-bold text-blue-900 hover:bg-[#cabdf7] peer-checked:bg-[#ece8fa] peer-checked:text-[#49479F] peer-checked:shadow-inner"
          >
            1
          </label>
        </li>
        <li>
          <input
            id="quizDua-2"
            v-model="quiz.dua"
            type="radio"
            name="quizDua"
            class="peer hidden"
            value="2"
          />
          <label
            for="quizDua-2"
            class="btn h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-[#D2C6FA] font-bold text-blue-900 hover:bg-[#cabdf7] peer-checked:bg-[#ece8fa] peer-checked:text-[#49479F] peer-checked:shadow-inner"
          >
            2
          </label>
        </li>
        <li>
          <input
            id="quizDua-3"
            v-model="quiz.dua"
            type="radio"
            name="quizDua"
            class="peer hidden"
            value="3"
          />
          <label
            for="quizDua-3"
            class="btn h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-[#D2C6FA] font-bold text-blue-900 hover:bg-[#cabdf7] peer-checked:bg-[#ece8fa] peer-checked:text-[#49479F] peer-checked:shadow-inner"
          >
            3
          </label>
        </li>
        <li>
          <input
            id="quizDua-4"
            v-model="quiz.dua"
            type="radio"
            name="quizDua"
            class="peer hidden"
            value="4"
          />
          <label
            for="quizDua-4"
            class="btn h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-[#D2C6FA] font-bold text-blue-900 hover:bg-[#cabdf7] peer-checked:bg-[#ece8fa] peer-checked:text-[#49479F] peer-checked:shadow-inner"
          >
            4
          </label>
        </li>
        <li>
          <input
            id="quizDua-5"
            v-model="quiz.dua"
            type="radio"
            name="quizDua"
            class="peer hidden"
            value="5"
          />
          <label
            for="quizDua-5"
            class="btn h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-[#D2C6FA] font-bold text-blue-900 hover:bg-[#cabdf7] peer-checked:bg-[#ece8fa] peer-checked:text-[#49479F] peer-checked:shadow-inner"
          >
            5
          </label>
        </li>
      </ul>
    </div>
    <div class="mt-2 flex justify-between text-sm text-gray-400">
      <p>Not satisfied</p>
      <p>Very satisfied</p>
    </div>
  </div>
  <div
    v-if="page == 3"
    class="animate-fade-left animate-normal animate-once animate-ease-out"
  >
    <p class="text-xl font-black">Question 3</p>
    <p class="mt-2">
      Apakah fitur RSVP (konfirmasi kehadiran) pada aplikasi undangan digital
      ini membantu Anda dalam mengetahui jumlah tamu yang akan hadir ?
    </p>

    <div class="mt-5 flex justify-between space-x-1">
      <ul class="inline-flex gap-5">
        <li>
          <input
            id="quizTiga-1"
            v-model="quiz.tiga"
            type="radio"
            name="quizTiga"
            class="peer hidden"
            value="1"
            required
          />
          <label
            for="quizTiga-1"
            class="btn h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-[#D2C6FA] font-bold text-blue-900 hover:bg-[#cabdf7] peer-checked:bg-[#ece8fa] peer-checked:text-[#49479F] peer-checked:shadow-inner"
          >
            1
          </label>
        </li>
        <li>
          <input
            id="quizTiga-2"
            v-model="quiz.tiga"
            type="radio"
            name="quizTiga"
            class="peer hidden"
            value="2"
          />
          <label
            for="quizTiga-2"
            class="btn h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-[#D2C6FA] font-bold text-blue-900 hover:bg-[#cabdf7] peer-checked:bg-[#ece8fa] peer-checked:text-[#49479F] peer-checked:shadow-inner"
          >
            2
          </label>
        </li>
        <li>
          <input
            id="quizTiga-3"
            v-model="quiz.tiga"
            type="radio"
            name="quizTiga"
            class="peer hidden"
            value="3"
          />
          <label
            for="quizTiga-3"
            class="btn h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-[#D2C6FA] font-bold text-blue-900 hover:bg-[#cabdf7] peer-checked:bg-[#ece8fa] peer-checked:text-[#49479F] peer-checked:shadow-inner"
          >
            3
          </label>
        </li>
        <li>
          <input
            id="quizTiga-4"
            v-model="quiz.tiga"
            type="radio"
            name="quizTiga"
            class="peer hidden"
            value="4"
          />
          <label
            for="quizTiga-4"
            class="btn h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-[#D2C6FA] font-bold text-blue-900 hover:bg-[#cabdf7] peer-checked:bg-[#ece8fa] peer-checked:text-[#49479F] peer-checked:shadow-inner"
          >
            4
          </label>
        </li>
        <li>
          <input
            id="quizTiga-5"
            v-model="quiz.tiga"
            type="radio"
            name="quizTiga"
            class="peer hidden"
            value="5"
          />
          <label
            for="quizTiga-5"
            class="btn h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-[#D2C6FA] font-bold text-blue-900 hover:bg-[#cabdf7] peer-checked:bg-[#ece8fa] peer-checked:text-[#49479F] peer-checked:shadow-inner"
          >
            5
          </label>
        </li>
      </ul>
    </div>
    <div class="mt-2 flex justify-between text-sm text-gray-400">
      <p>Not satisfied</p>
      <p>Very satisfied</p>
    </div>
  </div>
  <div
    v-if="page == 4"
    class="animate-fade-left animate-normal animate-once animate-ease-out"
  >
    <p class="text-xl font-black">Question 4</p>
    <p class="mt-2">
      Apakah dengan adanya fitur whatsap auto replay dapat membantu pengguna
      dalam menjawab pertanyaan dan kebingunan pengguna dalam menggunakan
      aplikasi digital invitations ?
    </p>

    <div class="mt-5 flex justify-between space-x-1">
      <ul class="inline-flex gap-5">
        <li>
          <input
            id="quizEmpat-1"
            v-model="quiz.empat"
            type="radio"
            name="quizEmpat"
            class="peer hidden"
            value="1"
            required
          />
          <label
            for="quizEmpat-1"
            class="btn h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-[#D2C6FA] font-bold text-blue-900 hover:bg-[#cabdf7] peer-checked:bg-[#ece8fa] peer-checked:text-[#49479F] peer-checked:shadow-inner"
          >
            1
          </label>
        </li>
        <li>
          <input
            id="quizEmpat-2"
            v-model="quiz.empat"
            type="radio"
            name="quizEmpat"
            class="peer hidden"
            value="2"
          />
          <label
            for="quizEmpat-2"
            class="btn h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-[#D2C6FA] font-bold text-blue-900 hover:bg-[#cabdf7] peer-checked:bg-[#ece8fa] peer-checked:text-[#49479F] peer-checked:shadow-inner"
          >
            2
          </label>
        </li>
        <li>
          <input
            id="quizEmpat-3"
            v-model="quiz.empat"
            type="radio"
            name="quizEmpat"
            class="peer hidden"
            value="3"
          />
          <label
            for="quizEmpat-3"
            class="btn h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-[#D2C6FA] font-bold text-blue-900 hover:bg-[#cabdf7] peer-checked:bg-[#ece8fa] peer-checked:text-[#49479F] peer-checked:shadow-inner"
          >
            3
          </label>
        </li>
        <li>
          <input
            id="quizEmpat-4"
            v-model="quiz.empat"
            type="radio"
            name="quizEmpat"
            class="peer hidden"
            value="4"
          />
          <label
            for="quizEmpat-4"
            class="btn h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-[#D2C6FA] font-bold text-blue-900 hover:bg-[#cabdf7] peer-checked:bg-[#ece8fa] peer-checked:text-[#49479F] peer-checked:shadow-inner"
          >
            4
          </label>
        </li>
        <li>
          <input
            id="quizEmpat-5"
            v-model="quiz.empat"
            type="radio"
            name="quizEmpat"
            class="peer hidden"
            value="5"
          />
          <label
            for="quizEmpat-5"
            class="btn h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-[#D2C6FA] font-bold text-blue-900 hover:bg-[#cabdf7] peer-checked:bg-[#ece8fa] peer-checked:text-[#49479F] peer-checked:shadow-inner"
          >
            5
          </label>
        </li>
      </ul>
    </div>
    <div class="mt-2 flex justify-between text-sm text-gray-400">
      <p>Not satisfied</p>
      <p>Very satisfied</p>
    </div>
  </div>
  <div
    v-if="page == 5"
    class="animate-fade-left animate-normal animate-once animate-ease-out"
  >
    <p class="text-xl font-black">Question 5</p>
    <p class="mt-2">
      Apakah proses pembayaran paket langganan mudah dilakukan oleh pengguna ?
    </p>

    <div class="mt-5 flex justify-between space-x-1">
      <ul class="inline-flex gap-5">
        <li>
          <input
            id="quizLima-1"
            v-model="quiz.lima"
            type="radio"
            name="quizLima"
            class="peer hidden"
            value="1"
            required
          />
          <label
            for="quizLima-1"
            class="btn h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-[#D2C6FA] font-bold text-blue-900 hover:bg-[#cabdf7] peer-checked:bg-[#ece8fa] peer-checked:text-[#49479F] peer-checked:shadow-inner"
          >
            1
          </label>
        </li>
        <li>
          <input
            id="quizLima-2"
            v-model="quiz.lima"
            type="radio"
            name="quizLima"
            class="peer hidden"
            value="2"
          />
          <label
            for="quizLima-2"
            class="btn h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-[#D2C6FA] font-bold text-blue-900 hover:bg-[#cabdf7] peer-checked:bg-[#ece8fa] peer-checked:text-[#49479F] peer-checked:shadow-inner"
          >
            2
          </label>
        </li>
        <li>
          <input
            id="quizLima-3"
            v-model="quiz.lima"
            type="radio"
            name="quizLima"
            class="peer hidden"
            value="3"
          />
          <label
            for="quizLima-3"
            class="btn h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-[#D2C6FA] font-bold text-blue-900 hover:bg-[#cabdf7] peer-checked:bg-[#ece8fa] peer-checked:text-[#49479F] peer-checked:shadow-inner"
          >
            3
          </label>
        </li>
        <li>
          <input
            id="quizLima-4"
            v-model="quiz.lima"
            type="radio"
            name="quizLima"
            class="peer hidden"
            value="4"
          />
          <label
            for="quizLima-4"
            class="btn h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-[#D2C6FA] font-bold text-blue-900 hover:bg-[#cabdf7] peer-checked:bg-[#ece8fa] peer-checked:text-[#49479F] peer-checked:shadow-inner"
          >
            4
          </label>
        </li>
        <li>
          <input
            id="quizLima-5"
            v-model="quiz.lima"
            type="radio"
            name="quizLima"
            class="peer hidden"
            value="5"
          />
          <label
            for="quizLima-5"
            class="btn h-12 w-16 cursor-pointer items-center justify-center rounded-md bg-[#D2C6FA] font-bold text-blue-900 hover:bg-[#cabdf7] peer-checked:bg-[#ece8fa] peer-checked:text-[#49479F] peer-checked:shadow-inner"
          >
            5
          </label>
        </li>
      </ul>
    </div>
    <div class="mt-2 flex justify-between text-sm text-gray-400">
      <p>Not satisfied</p>
      <p>Very satisfied</p>
    </div>
  </div>
  <div
    v-if="page == 6"
    class="animate-fade-left animate-normal animate-once animate-ease-out"
  >
    <textarea
      v-model="feedback"
      name="feedback"
      rows="5"
      class="form-textarea focus:ring-primary-500 dark:focus:ring-primary-400 relative mt-3 block w-full resize-none rounded-md border-0 bg-white px-3 py-2 text-sm text-gray-900 placeholder-gray-400 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-[#49479F] active:ring-[#49479F] disabled:cursor-not-allowed disabled:opacity-75"
    ></textarea>
  </div>
  <div class="mt-6 sm:flex sm:flex-row-reverse">
    <UButton
      v-if="page < 6"
      class="w-28 justify-center bg-[#49479F] text-white hover:bg-[#2b2a61]"
      variant="solid"
      @click="nextQuiz"
    >
      <div>Next</div>
    </UButton>
    <UButton
      v-if="page == 6"
      class="w-28 justify-center bg-[#49479F] text-white hover:bg-[#2b2a61]"
      variant="solid"
      @click="handdleSubmit"
    >
      <div>Submit</div>
    </UButton>
    <UButton
      v-if="page >= 2"
      color="blue"
      class="mr-3 w-20 justify-center"
      variant="soft"
      @click="prevQuiz"
    >
      Previous
    </UButton>
    <UButton
      v-if="page == 1"
      color="blue"
      class="mr-3 w-20 justify-center"
      variant="soft"
      @click="closeModal"
    >
      Cancel
    </UButton>
  </div>
  <UNotifications />
</template>
<script setup>
  const emit = defineEmits(['close', 'confirm'])
  const quiz = reactive({
    satu: '',
    dua: '',
    tiga: '',
    empat: '',
    lima: '',
  })
  const feedback = ref()
  const page = ref(1)
  function closeModal() {
    emit('close')
  }
  function prevQuiz() {
    page.value = page.value - 1
  }
  function nextQuiz() {
    page.value = page.value + 1
  }
  async function handdleSubmit() {
    const toast = useToast()
    const param = {
      quiz: JSON.stringify(quiz),
      feedback: feedback.value,
    }
    await usePostData(`/quiz/create`, param).then((res) => {
      toast.add({
        icon: 'i-heroicons-check-circle',
        title: 'Feedback successfully submited',
        color: 'green',
        timeout: 3000,
      })
      emit('confirm')
    })
  }
</script>
<style>
  .focus\:ring-primary-500:focus {
    @apply focus:ring-[#49479F];
  }
</style>
