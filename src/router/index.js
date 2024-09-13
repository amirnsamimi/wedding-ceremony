import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/engagement',
      name: 'engagement',
      component: () => import('../views/Engagement.vue')
    },
    {
      path: '/location',
      name:'location',
      component: () => import('../views/Location.vue')
    }
  ]
})

export default router
