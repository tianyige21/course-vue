import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Test from '@/components/test'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'index',
        component: Index
    },
    {
      path: '/test',
      name: 'test',
      component: Test
  }]
})