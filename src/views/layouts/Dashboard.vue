<template>
  <appSidebar />
  <appHeader class="fixed w-full top-0" />
  <router-view />
  <appScroolToTopButton />
  <appFooter />
</template>

<script setup>
document.documentElement.classList.add("h-full");
document.body.classList.add("h-full", "dark:bg-gray-900", "dark:text-white");
document
  .getElementById("app")
  .classList.add("h-screen", "flex", "flex-col", "justify-between");
</script>

<style>
section {
  padding: 7rem 5rem 5rem 5rem;
}
</style>
