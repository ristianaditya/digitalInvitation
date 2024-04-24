<template>
  <div>
    <UContainer
      v-if="stateLoad"
      class="flex h-[80vh] items-center justify-center text-center"
    >
      <span class="loading loading-spinner loading-lg text-[#49479F]"></span>
    </UContainer>
    <div v-else>
      <div v-html="iniHtml"></div>
    </div>
    <div ref="container"></div>
  </div>
</template>
<script setup>
  import { usePostData } from '~/composables/useFetchData'
  definePageMeta({
    layout: false,
    middleware: 'auth',
  })
  useHead({
    script: [{ src: 'https://cdn.tailwindcss.com', body: true }],
  })
  const route = useRoute()
  const stateLoad = ref(true)
  const project = reactive({
    html: '',
    css: '',
  })
  const iniHtml = computed(() => {
    return project.html
  })
  onMounted(async () => {
    await usePostData(`/project/getById/${route.query.id}`).then((res) => {
      project.html = JSON.parse(res._data.project.html)
      project.css = JSON.parse(res._data.project.css)
    })
    const style = document.createElement('style')
    style.innerHTML = project.css
    document.head.appendChild(style)

    stateLoad.value = false
  })
</script>
