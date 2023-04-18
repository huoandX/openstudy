export default {
  name: 'htmlIntr',
  path: '/htmldoc/intr',
  redirect:'/htmldoc/intr/intr',
  component: () => import('@/layouts/index.vue'),
  meta: { menu: { title: '基础知识', icon: 'DashboardOne' } },
  children: [
    {
      name: 'html.intr', meta: { menu: { title: 'HTML简介' } }, path: 'intr',
      component: () => import('@/views/html/basic/intr.vue'),

    },
    {
      name: 'dev', meta: { menu: { title: '开发环境' } }, path: 'dev',
      component: () => import('@/views/html/basic/dev.vue'),
    },
    {
      name: 'html.basic', meta: { menu: { title: '基础知识' } }, path: 'basic',
      component: () => import('@/views/html/basic/basic.vue'),
    },
    {
      name: 'html.explanatory', meta: { menu: { title: '注释' } }, path: 'explanatory',
      component: () => import('@/views/html/basic/explanatory.vue'),
    }
  ] 
} 