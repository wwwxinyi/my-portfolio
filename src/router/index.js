import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Projects from '@/views/Projects.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/projects', name: 'Projects', component: Projects },
  { path: '/:pathMatch(.*)*', redirect: '/' }, // 默认重定向到首页
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;