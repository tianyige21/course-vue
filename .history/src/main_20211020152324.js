import Vue from 'vue'
import App from './App.vue'
import router from '../src/router'
import store from '@/store/index.js'
import axios from 'axios'
import ElementUI from 'element-ui'
import "element-ui/lib/theme-chalk/index.css";


Vue.config.productionTip = false

axios.baseURL="/api"

Vue.prototype.$axios = axios
Vue.use(ElementUI)

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')
