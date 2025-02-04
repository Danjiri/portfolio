<template>
  <NavBar />
  <IndexPage />
  <Main />

</template>

<script setup>
import { ref } from "vue";
import IndexPage from "./pages/index.vue";
import Main from "./pages/main.vue";
import NavBar from "./components/NavBar.vue";
</script>

<style scoped>
/* .container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #121212; 
}

.title {
  color: #EAEAEA;
  font-size: 6rem;
  font-family: "Inter","BIZ UDPGothic", sans-serif;
  font-weight: bold;
  text-align: center;
} */
</style>
