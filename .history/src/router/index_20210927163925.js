

import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/views/test.vue';
import HelloWorld from '@/components/HelloWorld.vue'

Vue.use(Router)


export default new Router({
  routes: [{
    path: '/',
    name: 'index',
    component: HelloWorld
  },
  {
    path: '/test',
    name: 'test',
    component: Test
  }]
})