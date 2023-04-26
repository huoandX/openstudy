const basic = {
  path: '/htmldoc/basic',
  component: () => import('@/layouts/index.vue'),
  meta: { menu: { title: '基础知识', icon: 'DashboardOne' }},
  name: 'basicknow',
  redirect: { name: 'htmlintro' },
  children: [
    {
      name:'htmlintro',
      meta: { menu: { title: 'HTML简介' } }, path: 'intro',
      component: () => import('@/views/html/basic/intro.vue'),
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
export default basic