 const textabout =  {
  name: 'textabout',
  path: '/htmldoc/textabout',
  redirect:{name:'basiclabel'},
  component: () => import('@/layouts/index.vue'),
  meta: { menu: { title: '文本相关', icon: 'DashboardOne' } },
  children: [
    {
      name: 'basiclabel', meta: { menu: { title: '基本标签' } }, path: 'basiclabel',
      component: () => import('@/views/html/textabout/basiclabel.vue'),

    },
    {
      name: 'destext', meta: { menu: { title: '描述文本' } }, path: 'destext',
      component: () => import('@/views/html/textabout/destext.vue'),
    },
    {
      name: 'emphasize', meta: { menu: { title: '强调文本' } }, path: 'emphasize',
      component: () => import('@/views/html/textabout/emphasize.vue'),
    },
    {
      name: 'quote', meta: { menu: { title: '引用标签' } }, path: 'quote',
      component: () => import('@/views/html/textabout/quote.vue'),
    },
    {
      name: 'contact', meta: { menu: { title: '联系信息' } }, path: 'contact',
      component: () => import('@/views/html/textabout/contact.vue'),
    }
  ] 
}
export default textabout