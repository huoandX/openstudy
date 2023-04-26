const pagestructure = {
  name: 'pagestructure',
  path: '/htmldoc/pagestructure',
  redirect:{name:'html.semantics'},
  component: () => import('@/layouts/index.vue'),
  meta: { menu: { title: '页面结构', icon: 'DashboardOne' } },
  children: [
    {
      name: 'html.semantics', meta: { menu: { title: '语义标签' } }, path: 'semantics',
      component: () => import('@/views/html/pagestructure/semantics.vue'),
    },
    {
      name: 'nestrelation', meta: { menu: { title: '嵌套关系' } }, path: 'nestrelation',
      component: () => import('@/views/html/pagestructure/nestrelation.vue'),
    },
    {
      name: 'basicstructure', meta: { menu: { title: '基本结构' } }, path: 'basicstructure',
      component: () => import('@/views/html/pagestructure/basicstructure.vue'),
    },
    {
      name: 'html.titlectt', meta: { menu: { title: '内容标题' } }, path: 'titlectt',
      component: () => import('@/views/html/pagestructure/titlectt.vue'),
    },
    {
      name: 'html.headfooter', meta: { menu: { title: '页眉页脚' } }, path: 'headfooter',
      component: () => import('@/views/html/pagestructure/headfooter.vue'),
    },
    {
      name: 'navele', meta: { menu: { title: '导航元素' } }, path: 'navele',
      component: () => import('@/views/html/pagestructure/navele.vue'),
    },
    {
      name: 'mainareas', meta: { menu: { title: '主要区域' } }, path: 'mainareas',
      component: () => import('@/views/html/pagestructure/mainareas.vue'),
    },
    {
      name: 'cttareas', meta: { menu: { title: '内容区域' } }, path: 'cttareas',
      component: () => import('@/views/html/pagestructure/cttareas.vue'),
    },
    {
      name: 'blockefinition', meta: { menu: { title: '区块定义' } }, path: 'blockefinition',
      component: () => import('@/views/html/pagestructure/blockefinition.vue'),
    },
    {
      name: 'asideareas', meta: { menu: { title: '附加区域' } }, path: 'asideareas',
      component: () => import('@/views/html/pagestructure/asideareas.vue'),
    },
    {
      name: 'genericdiv', meta: { menu: { title: '通用容器' } }, path: 'genericdiv',
      component: () => import('@/views/html/pagestructure/genericdiv.vue'),
    }
  ] 
}
export default pagestructure