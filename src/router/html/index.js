const htmlDoc = [
  {
    path: '/htmldoc/basic',
    component: () => import('@/views/html/index.vue'),
    meta: { show: true },
    children: [
      {
        path: '/htmldoc/basic',
        component: () => import('@/layouts/index.vue'),
        meta: { menu: { title: '基础知识', icon: 'DashboardOne' }},
        name: 'basicknow',
        redirect:{name:'htmlintr'},
        children: [
          {
            name:'htmlintr',
            meta: { menu: { title: 'HTML简介' } }, path: 'intr',
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
      },
      {
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
      },
      {
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
      },
      {
        name: 'aimg',
        path: '/htmldoc/aimg',
        redirect: { name: 'imghandle' },
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
      },
      {
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
      },
      {
        name: 'tablemedium',
        path: '/htmldoc/tablemedium',
        redirect: { name: 'tables' },
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
    ]
  },
]

export default htmlDoc