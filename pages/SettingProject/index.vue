<template>
  <div class="mb-12 mt-5 grid justify-items-center">
    <div class="max-w-md">
      <SettingProject
        :id-project="route.query.id"
        @close="handleBack()"
        @confirm="handleClick()"
      />
    </div>
  </div>
</template>
<script setup>
  const router = useRouter()
  const route = useRoute()

  definePageMeta({
    layout: 'cms',
    middleware: 'auth',
  })
  const handleBack = () => {
    router.go(-1)
  }
  function handleClick() {
    router.push('/dashboard')
  }
</script>
