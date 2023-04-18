export default {
  name: 'aimg',
  path: '/htmldoc/aimg',
  redirect:'/htmldoc/aimg/imghandle',
  component: () => import('@/layouts/index.vue'),
  meta: { menu: { title: '链接与图片', icon: 'DashboardOne' } },
  children: [
    {
      name: 'imghandle', meta: { menu: { title: '图片处理' } }, path: 'imghandle',
      component: () => import('@/views/html/aimg/imghandle.vue'),
    },
    {
      name: 'weblink', meta: { menu: { title: '网页链接' } }, path: 'weblink',
      component: () => import('@/views/html/aimg/weblink.vue'),
    }
  ] 
} 