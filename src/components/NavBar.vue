<template>
    <nav class="sidebar">
      <!-- 左上のロゴ -->
      <div class="logo">
        <router-link to="/"><img :src="logo" alt="Logo" /></router-link>
      </div>
  
      <!-- 各ページへのリンク -->
      <ul class="nav-links">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/portfolio">Portfolio</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
  
      <!-- 左下のアイコン -->
      <div class="social-icons">
        <a href="#"><img :src="logo" alt="Logo" /></a>
        <a href="#"><img :src="logo" alt="Logo" /></a>
        <!-- <a href="#"><img src="@/assets/github.svg" alt="GitHub" /></a> -->
      </div>
    </nav>
  </template>
  
  <script setup>
  import logo from "../assets/vue.svg";
  </script>

  <style scoped>
  /* ナビゲーションの基本スタイル */
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: 80px;
    height: 100vh;
    background: #181818;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 20px 0;
    z-index: 1000;
  }
  
  /* ロゴ */
  .logo img {
    width: 50px;
  }
  
  /* ナビリンク */
  .nav-links {
    list-style: none;
    padding: 0;
  }
  
  .nav-links li {
    margin: 20px 0;
  }
  

  .title {
    color: #EAEAEA;
    font-family: "Inter","BIZ UDPGothic", sans-serif;
  }

  .nav-links a {
    color: #EAEAEA;
    font-family: "Inter","BIZ UDPGothic", sans-serif;
    text-decoration: none;
    font-size: 1rem;
    transition: 0.3s;
  }
  
  .nav-links a:hover {
    color: greenyellow;
  }
  
  /* ソーシャルアイコン */
  .social-icons {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 10vh;
  }
  
  .social-icons img {
    width: 30px;
  }
  </style>
  