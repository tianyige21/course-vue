import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:1
  },
  mutations: {
     increment (state) {
      // εζ΄ηΆζ
      state.count++
    }
  },
  actions: {},
  modules: {},
})