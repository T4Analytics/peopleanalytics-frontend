<template>
<button @click="topFunction" v-if="scroolTopButton" title="Go to top" class="fixed bottom-5 right-7 z-50 text-lg border-none outline-none bg-primary text-white cursor-pointer p-3 rounded-xl opacity-80 hover:opacity-100">
<ArrowUpIcon class="h-5 w-5" aria-hidden="true"/>
</button>

</template>
<script setup>
import { ref } from "vue"
import {
  ArrowUpIcon
} from "@heroicons/vue/outline";
const scroolTopButton = ref(false)
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scroolTopButton.value = true
  } else {
    scroolTopButton.value = false
  }
}

const topFunction = () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


</script>

