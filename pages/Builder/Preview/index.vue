<template>
  <div>
    <div
      v-if="stateLoad"
      class="transition-property: transform; fixed left-0 top-0 z-50 h-full w-full transform bg-[#f4f0fdc0] backdrop-blur-xl"
    >
      <div class="mt-[50vh] flex items-center justify-center">
        <div class="loader">
          <div class="loader__balls">
            <div class="loader__balls__group">
              <div class="ball item1"></div>
              <div class="ball item1"></div>
              <div class="ball item1"></div>
            </div>
            <div class="loader__balls__group">
              <div class="ball item2"></div>
              <div class="ball item2"></div>
              <div class="ball item2"></div>
            </div>
            <div class="loader__balls__group">
              <div class="ball item3"></div>
              <div class="ball item3"></div>
              <div class="ball item3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
<style>
  @import url('~/assets/css/builder.css');
</style>
