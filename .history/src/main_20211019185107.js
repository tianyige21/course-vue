import Vue from 'vue'
import App from './App.vue'
import router from '../src/router'
import store from '@/store/index.js'
import axios from 'axios'
import element from 'element-ui'

Vue.config.productionTip = false
Vue.prototype.$axios = axios


Vue.use(element)
new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
