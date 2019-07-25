import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import About from '@/views/companyProfile/About'
import VerifyEmail from '@/views/verifyEmail'
import GetStarted from '@/views/sellers/GetStarted'
import SingleProduct from '@/views/SingleProduct'
import Profile from '@/views/profile/Index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/verify',
      name: 'verify Email',
      component: VerifyEmail
    },
    {
      path: '/getstarted',
      name: 'verify Email',
      component: GetStarted
    },
    {
      path: '/deal/:slug',
      name: 'product',
      component: SingleProduct
    },
    {
      path: '/profile/:username',
      name: 'profile',
      component: Profile
    }
  ]
})
