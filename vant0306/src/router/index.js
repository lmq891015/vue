import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '',redirect: '/teamData'},
    { path: '/oilPrice',name: 'oilPrice',component:() => import('@/views/oilPrice')},
    { path: '/teamData',name: 'teamData',component:() => import('@/views/team')},
  ]
})
