<template>
  <div class="flex h-screen flex-col overflow-hidden">
    <header
      class="sticky flex min-h-[64px] w-full items-center bg-[#F4F0FD] px-3 py-4"
    >
      <div :padded="false" class="cursor-pointer" @click="handleBack">
        <Icon
          name="ep:arrow-left-bold"
          class="mr-3 justify-self-end text-xl text-[#49479F] hover:text-[#282753]"
          filled
        />
      </div>
      <img
        src="/logos/pink_logo.svg"
        alt="Invitations Plus Logo"
        width="100"
        height="30"
      />
      <div class="ml-2 flex grow border-l-2 border-indigo-500">
        <nav class="flex flex-wrap items-center">
          <div class="inline-block">
            <div
              class="text-md mr-4 pl-2 font-inter text-[16px] font-bold text-[#171717]"
            >
              {{ activePage.page }}{{ activePage.child }}
            </div>
          </div>
        </nav>
      </div>
      <slot name="buttonSave" />
    </header>
    <slot name="body" />
  </div>
</template>

<script setup>
  import { useActivePage } from '@/store/index'
  const activePage = useActivePage()
  const router = useRouter()
  const handleBack = () => {
    router.go(-1)
  }
</script>

<style scoped></style>
