<template>
  <router-view />
</template>
<script setup>
import { useStore } from "vuex"
const store = useStore()

if (store.getters["ui/getThemeMode"] === 'dark') {
  document.documentElement.classList.add('dark')
}

</script>
<style></style>

