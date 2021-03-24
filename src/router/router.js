import Vue from 'vue'
// @ts-ignore
import Router from 'vue-router'
 // @ts-ignore
 import Home from '../views/home/Home'

Vue.use(Router)
const originalReplace = Router.prototype.replace;
Router.prototype.replace = function replace(location) {
    return originalReplace.call(this, location).catch(err => err);
};

export default new Router({
  mode: 'history',
  // @ts-ignore
  base: process.env.BASE_URL,
  routes: [
    {
     path:'/',
     redirect:'/home',
     component: Home
    },
    {
      path: '/home',
      name: 'home',
      // @ts-ignore
      component: Home
    },
    {
      path: '/categary',
      name: 'categary',
      // @ts-ignore
      component: () => import('../views/categary/Categary')
    },
    {
      path: '/cart',
      name: 'cart',
      // @ts-ignore
      component: () => import( '../views/cart/Cart')
    },
    {
      path: '/profile',
      name: 'profile',
      // @ts-ignore
      component: () => import('../views/profile/Profile')
    },
    // 详情页路由
    {
      path: '/detail/:iid',
      name: 'detail',
      // @ts-ignore
      component: () => import('../views/detail/Detail')
    }
  ]
})
