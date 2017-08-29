import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/home'
import List from '@/components/list'
import Add from '@/components/add'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/list',
      name: 'List',
      component: List
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    }
  ]
})
