import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage'
import pdfvue from '@/components/pdf'
Vue.use(Router)

export default new Router({
  routes: [
    // {
    //   path: '/',
    //   name: 'HelloWorld',
    //   component: HelloWorld
    // }
    { path: '/', component: HomePage },
    { path:'/use', component: pdfvue},
  ]
})
