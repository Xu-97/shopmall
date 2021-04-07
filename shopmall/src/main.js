import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import store from './store/store'

import FastClick  from "fastclick"
// 引入 Vue -lazyload

import VueLazyLoad from "vue-lazyload"

import 'lib-flexible/flexible.js'

import toast from "./components/Toast"

// add swiper
// import vueSwiper from 'vue-awesome-swiper'
// import 'swiper/dist/css/swiper.css'
// Vue.use(vueSwiper)
// import axios from 'axios'

//解决移动端300ms延迟

FastClick.attach(document.body)

// 使用Vue  懒加载
Vue.use(VueLazyLoad,{
  //图片懒加载使用占位符图片                                                                                                                      
  loading: require('./assets/img/others/hah.png')
})
Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()
// 安装TOAST 插件
Vue.use(toast)
new Vue({
  router,
  store,
  // @ts-ignore
  render: h => h(App)
}).$mount('#app')

// instance({
//   url:"/home/data",
//   params: {
//     type: 'pop',
//     page: 1
//   }
// }).then(res =>{
//   console.log(res);
// })

// git remote add origin git@github.com:webxurui/shopmall.git
