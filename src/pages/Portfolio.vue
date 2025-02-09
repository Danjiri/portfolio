<template>
    <div class="portfolio-container">
      <h1>My Portfolio</h1>
      <div class="projects">
        <div class="project-card" v-for="(project, index) in projects" :key="index">
          <h2>{{ project.title }}</h2>
          <p>{{ project.description }}</p>
          <a :href="project.link" target="_blank">View Project</a>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  const projects = [
    {
      title: "Project 1",
      description: "これは最初のプロジェクトです。",
      link: "https://example.com/project1"
    },
    {
      title: "Project 2",
      description: "こちらは2つ目のプロジェクトです。",
      link: "https://example.com/project2"
    }
  ];
  </script>
  
  <style scoped>
  .portfolio-container {
    padding: 20px;
    background: #121212;
    color: white;
  }
  
  .projects {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
  }
  
  .project-card {
    background: #1e1e1e;
    padding: 15px;
    border-radius: 8px;
    width: 300px;
    transition: transform 0.3s;
  }
  
  .project-card:hover {
    transform: scale(1.05);
  }
  
  .project-card a {
    color: #e63946;
    text-decoration: none;
  }
  </style>
  