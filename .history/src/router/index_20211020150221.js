

import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/views/test.vue';
import Home from '@/views/home.vue'
import MachineData from '@/views/machineData.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  },
  {
    path: '/machinedata',
    name: 'machineData',
    component:() => import('../views/machineData.vue')
  }]
})

