import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
    },

    {
      path: '/workStation',
      name: 'workStation',
      component: () => import('../views/WorkStation.vue'),
    },
  ],
})

export default router
