import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/companyProfile/About'
import VerifyEmail from '@/views/account/VerifyEmail'
import login from '@/views/account/Login'
import GetStarted from '@/views/sellers/GetStarted'
import SingleProduct from '@/views/SingleProduct'
import Profile from '@/views/profile/Index'
import Browse from '@/views/BrowseByCategory/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },


    /************************ Account Routes */
    {
      path: '/verify',
      name: 'verify Email',
      component: VerifyEmail,
    },
    {
      path: '/login',
      name: 'verify Email',
      component: login,
    },


    /************************ Product Routes */
    {
      path: '/deal/:slug',
      name: 'product',
      component: SingleProduct
    },
    {
      path: '/me/:username',
      name: 'me',
      component: Profile
    },
    {
      path: '/browse/:query',
      name: 'Filter by Category',
      component: Browse
    },
    {
      path: '/getstarted',
      name: 'getStarted',
      component: GetStarted,
    },
    {
      path: '/getstarted/solutions',
      name: 'solutions',
      component: GetStarted
    },
    {
      path: '/getstarted/resources',
      name: 'resources',
      component: GetStarted
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
