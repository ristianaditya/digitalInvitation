<template>
  <UDashboardPage>
    <UDashboardPanel grow>
      <UDashboardNavbar title="Settings text-3xl" />

      <UDashboardToolbar class="overflow-x-auto text-3xl">
        <UHorizontalNavigation :links="links"
          class="min-h-[49px] flex-shrink-0 flex items-center border-b border-gray-200 dark:border-gray-800 gap-x-5 py-0  overflow-x-auto text-3xl!" />
      </UDashboardToolbar>

      <div class="px-10 pt-10">
        <NuxtPage />
      </div>
    </UDashboardPanel>
  </UDashboardPage>
</template>

<script setup>

const route = useRoute()

const links = [[{
  label: 'General',
  icon: 'i-heroicons-user-circle',
  to: `/SettingProject?id=${route.query.id}`,
  exact: true
}, {
  label: 'Guest List',
  icon: 'i-heroicons-bell',
  to: `/SettingProject/GuestList?id=${route.query.id}`
}, {
  label: 'Publish',
  icon: 'i-heroicons-bell',
  to: `/SettingProject/Publish?id=${route.query.id}`
}]]

definePageMeta({
  layout: 'editor',
  middleware: 'auth',
})
</script>
<style>
.after\:bg-primary-500::after {
  background-color: #49479F !important;
}

a {
  font-size: 15px !important;
}
</style>
