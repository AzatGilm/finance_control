import Vue from 'vue'
import Router from 'vue-router'

// import PageDashboard from '../page/PageDashboard'
// import PageAbout from '../page/PageAbout'
// import PageError404 from '../page/PageError404'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '',
      name: 'dashboard',
      component: () => import('../page/PageDashboard')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../page/PageDashboard')
    },
    {
      path: '/dashboard/:page',
      name: 'dashboard',
      component: () => import('../page/PageDashboard')
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../page/PageAbout')
    },
    {
      path: '*',
      name: 'Not found',
      component: () => import('../page/PageError404')
    }
  ]
})

export default router
