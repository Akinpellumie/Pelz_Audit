import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    device:''
  },
  mutations: {
    new_Device(state,device){
      state.device=device;
    }
  },
  actions: {
    addDevice({commit}, newDevice){
      commit('new_Device', newDevice)
      
  }
  }
})
