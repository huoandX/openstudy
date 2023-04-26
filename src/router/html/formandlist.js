 const formandlist =  {
  name: 'formandlist',
  path: '/htmldoc/formandlist',
  redirect: { name:'forms'},
  component: () => import('@/layouts/index.vue'),
  meta: { menu: { title: '表单与列表', icon: 'DashboardOne' } },
  children: [
    {
      name: 'forms', meta: { menu: { title: '表单' } }, path: 'forms',
      component: () => import('@/views/html/formandlist/forms.vue'),
    },
    {
      name: 'lists', meta: { menu: { title: '列表' } }, path: 'lists',
      component: () => import('@/views/html/formandlist/lists.vue'),
    }
  ] 
}
export default formandlist