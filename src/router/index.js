import { createRouter, createWebHistory } from 'vue-router'
import AppView from './../views/app-view/AppView.vue';

const routes = [
  {
    name: '/',
    component: AppView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
