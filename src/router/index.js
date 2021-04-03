import { createRouter, createWebHistory } from 'vue-router'
import CommunityView from './../views/CommunityView.vue';

const routes = [
  {
    name: '/',
    component: CommunityView
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
