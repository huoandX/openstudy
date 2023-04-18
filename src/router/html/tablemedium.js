export default {
  name: 'tablemedium',
  path: '/htmldoc/tablemedium',
  redirect:'/htmldoc/tablemedium/tables',
  component: () => import('@/layouts/index.vue'),
  meta: { menu: { title: '表格与多媒体', icon: 'DashboardOne' } },
  children: [
    {
      name: 'tables', meta: { menu: { title: '表格' } }, path: 'tables',
      component: () => import('@/views/html/tablemedium/tables.vue'),
    },
    {
      name: 'sounds', meta: { menu: { title: '声音' } }, path: 'sounds',
      component: () => import('@/views/html/tablemedium/sounds.vue'),
    },
    {
      name: 'videos', meta: { menu: { title: '视频' } }, path: 'videos',
      component: () => import('@/views/html/tablemedium/videos.vue'),
    }
  ] 
}