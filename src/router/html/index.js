const htmlDoc = [
  {
    path: '/html/introduction',
    component: () => import('@/views/html/index.vue'),
    children: [
      {
        path: '/html/introduction', name: 'htmlIntroduction',
        component: () => import('@/views/layouts/index.vue'),
      }
    ]
  },
    
]

export default htmlDoc