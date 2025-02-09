<template>
  <NavBar />
  <!-- <IndexPage /> -->
  <!-- <Main /> -->
   <main class="main-content">
    <router-view />
   </main>
</template>

<script setup>
import { ref } from "vue";
import NavBar from "./components/NavBar.vue";
</script>

<style scoped>
  .main-content {
  margin-left: 80px;   /* Navbar と同じ幅だけ余白を確保 */
  background-color: #000;
  min-height: 100vh;
}
</style>
