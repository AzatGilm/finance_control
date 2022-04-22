import Vue from 'vue'
import Router from 'vue-router'

import PageDashboard from '../page/PageDashboard'
import PageAbout from '../page/PageAbout'
import PageError404 from '../page/PageError404'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'dashboard',
      component: PageDashboard
    },
    {
      path: '/dashboard/:page',
      name: 'dashboard',
      component: PageDashboard
    },
    {
      path: '/about',
      name: 'about',
      component: PageAbout
    },
    {
      path: '*',
      name: 'Not found',
      component: PageError404
    }
  ]
})

export default router
