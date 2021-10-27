

import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/views/test.vue';
import Home from '@/views/home.vue'
// import MachineData from '@/views/machineData.vue'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
    /***
     * path    定义具体路径 
     * name  设置名称
     * component  具体组件，通过import 引入相应文件
     * redirect  重定向，访问/test，URL直接跳转至 /XXXX （对应的页面）
     * alias  别名 访问/demo2 URL保持不变，实际访问 /test
     */
  },
  {
    path: '/test',
    name: 'test',
    component: Test,
    alias:'/demo2'
  },
  {
    path: '/machinedata',
    name: 'machineData',
    component:() => import('../views/machineData.vue') //   
  }]
})

