import Vue from 'vue'
import Router from 'vue-router'
import index from '@/iview/index'
// import login from '@/iview/login'
import login from '@/iview/login1'
import retrieve from '@/iview/retrieve' //忘记密码
import register from '@/iview/register' //忘记密码
import product from '@/iview/product'
import price from '@/iview/price'
import introduce from '@/iview/introduce'
import about from '@/iview/about'
import put from '@/iview/put'
import analyse from '@/iview/analyse'
import scheme from '@/iview/scheme'
import shopping from '@/iview/shopping'
import information from '@/iview/information'
import modelling from '@/iview/modelling'
import multistation from '@/iview/multistation'
import complete from '@/iview/complete'
import termsclause from '@/iview/termsclause'
import agreement from '@/iview/agreement'
import privacy from '@/iview/privacy'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
    },
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: login
    // },
    {
      path: '/retrieve',
      name: 'retrieve',
      component: retrieve
    },
    {
      path: '/register',
      name: 'register',
      component: register
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/product',
      name: 'product',
      component: product
    },
    {
      path: '/price',
      name: 'price',
      component: price
    },
    {
      path: '/introduce',
      name: 'introduce',
      component: introduce
    },
    {
      path: '/about',
      name: 'about',
      component: about
    },
    {
      path: '/put',
      name: 'put',
      component: put
    },
    {
      path: '/analyse',
      name: 'analyse',
      component: analyse
    },
    {
      path: '/scheme',
      name: 'scheme',
      component: scheme
    },
    {
      path: '/shopping',
      name: 'shopping',
      component: shopping
    },
    {
      path: '/information',
      name: 'information',
      component: information
    },
    {
      path: '/modelling',
      name: 'modelling',
      component: modelling
    },
    {
      path: '/multistation',
      name: 'multistation',
      component: multistation
    },
    {
      path: '/complete',
      name: 'complete',
      component: complete
    },
    {
      path: '/termsclause',
      name: 'termsclause',
      component: termsclause
    },
    {
      path: '/agreement',
      name: 'agreement',
      component: agreement
    },
    {
      path: '/privacy',
      name: 'privacy',
      component: privacy
    }
  ]
})
