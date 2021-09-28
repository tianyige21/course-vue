import Vue from 'vue'
import App from './App.vue'
import routers from '@/router/index.js'
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  routers
}).$mount('#app')
