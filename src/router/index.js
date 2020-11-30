import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  }, {
    path: '/city',
    name: 'City',
    component: City
  },{
    path:'/detail/:id',
    name:'Detail',
    component:Detail
  }],
  scrollBehavior (to, from, savedPosition) {    //在路由切换页面的时候，新页面的滑动值为0，这样就不会第一个页面滑到下面，跳另一个页面也跑到下面去了
    return { x: 0, y: 0 }
  }
})
