import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      redirect: '/cards',
      name: 'home',
      component: () => import('@/views/cards.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('@/views/dashboard.vue')
    },
    {
      path: '/cards',
      name: 'cards',
      component: () => import('@/views/cards.vue')
    }
  ]
})
