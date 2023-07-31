import type { RouteRecordRaw } from 'vue-router'

export const hotelRoute: RouteRecordRaw = {
  path: '/hotels',
  name: 'hotels',
  component: () => import('@/hotels/layout/LayoutView.vue'),
  children: [
    {
      path: 'new-hotel',
      name: 'create-hotel',
      component: () => import('@/hotels/pages/create/CreateView.vue')
    },
    {
      path: 'reservation',
      name: 'reservation',
      component: () => import('@/hotels/pages/index/IndexView.vue')
    }
  ]
}
