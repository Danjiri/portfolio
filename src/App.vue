<template>
  <NavBar />
  <!-- <IndexPage /> -->
  <!-- <Main /> -->
  <router-view />
</template>

<script setup>
import { ref } from "vue";
import NavBar from "./components/NavBar.vue";
</script>

<style scoped>
</style>
