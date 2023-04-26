import basic from './basic'
import pagestructure from './pagestructure'
import textabout from './textabout'
import aimg from './aimg'
import formandlist from './formandlist'
import tablemedium from './tablemedium'
const htmlDoc = [
  {
    path: '/htmldoc/basic',
    component: () => import('@/views/html/index.vue'),
    meta: { show: true },
    children: [
      { ...basic },
      { ...pagestructure },
      { ...textabout },
      { ...aimg },
      { ...formandlist },
      { ...tablemedium },
    ]
  },
]

export default htmlDoc