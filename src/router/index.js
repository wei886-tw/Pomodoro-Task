import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/WelcomeView.vue'),
    },

    {
      path: '/homeView',
      name: 'homeView',
      component: () => import('../views/HomeView.vue'),
    },
    {
      path: '/pomodoroView',
      name: 'pomodoroView',
      component: () => import('../views/PomodoroView.vue'),
    },
  ],
})

export default router
