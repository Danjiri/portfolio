import { createRouter, createWebHistory } from 'vue-router';
import Home from '../pages/index.vue';
import Portfolio from '../pages/Portfolio.vue';
import Concatct from '../pages/Contact.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/portfolio', component: Portfolio },
  { path: '/contact', component: Concatct }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
