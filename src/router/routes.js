const routes = [
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
    path: '/:any(.*)',
    name: 'notFound',
    component: () => import('@/views/notFound.vue')
  },
]
export default routes