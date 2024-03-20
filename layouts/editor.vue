<template>
  <div class="fixed inset-0 flex overflow-hidden">
    <TheSidebar />
    <div class="flex flex-1 w-full min-w-0">
      <div class="flex-col items-stretch relative w-full flex-1 flex">
        <TheHeaderEditor />
        <div class=" p-12">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>
