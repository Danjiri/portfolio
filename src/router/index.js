import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/index.vue';
import Portfolio from '../pages/Portfolio.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/portfolio', component: Portfolio }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
