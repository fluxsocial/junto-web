import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AppView from '@/views/app-view/AppView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: '/',
    component: AppView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
