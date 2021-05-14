import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AppView from '@/views/app-view/AppView.vue';
import WelcomeView from '@/views/welcome-view/WelcomeView.vue';
import CommunityView from '@/views/community-view/CommunityView.vue';
import MainView from '@/views/community-view/main-view/MainView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/signup',
    name: 'signup',
    component: WelcomeView,
  },
  {
    path: '/',
    name: 'home',
    component: AppView,
    children: [
      {
        path: 'communities/:communityId',
        name: 'community',
        component: CommunityView,
        children: [
          {
            path: 'channels/:channelId',
            name: 'channel',
            component: MainView,
          },
        ],
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
