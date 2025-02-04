<template>  
    <div class="container">
      <h1 class="title" @mouseover="changeText" @mouseleave="resetText">{{ message }}</h1>
    </div>
</template>
  
  <script setup>
  import { ref } from "vue";
  const message = ref("I DESIGN & CODE.")
  
  function changeText() {
    message.value = "Sometimes :)"
  }
  
  function resetText() {
    message.value = "I DESIGN & CODE.";
  }
  </script>
  
  <style scoped>
  /* 全画面ダークテーマ */
  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #121212; /* 漆黒の背景 */
  }
  
  /* メインタイトル */
  .title {
    color: #EAEAEA;
    font-size: 6rem;
    font-family: "Inter","BIZ UDPGothic", sans-serif;
    font-weight: bold;
    text-align: center;
  }
  </style>
  