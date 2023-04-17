import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/home.vue')
    },
    {
      path: '/knowledgedoc',
      name: 'knowledgedoc',
      component: () => import('@/views/knowledgedoc.vue')
    },
    {
      path: '/html/introduction',
      name: 'htmlIntroduction',
      component: () => import('@/views/html/index.vue')
    },
    {
      path: '/:any(.*)',
      name: 'notFound',
      component: () => import('@/views/notFound.vue')
    },

  ]
})

export default router
