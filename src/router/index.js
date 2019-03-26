import Vue from 'vue'
import Router from 'vue-router'
import goods from '@/components/goods/goods'
import ratings from '@/components/ratings/ratings'
import seller from '@/components/seller/seller'

Vue.use(Router)

export default new Router({
  'linkActiveClass': 'active',
  routes: [
    {
      path: '/',
      name: 'good',
      component: goods
    },
    {
      path: '/rating',
      name: 'rating',
      component: ratings
    },
    {
      path: '/seller',
      name: 'seller',
      component: seller
    }
  ]
})
