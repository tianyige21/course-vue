import Vue  from 'vue'
import Router from "vue-router";
import Test from '@/views/test.vue';

Vue.use(Router)

export default  new Router({
  routers:[{
    path:'/test',
    name:'test',
    component:Test
  }]
})
