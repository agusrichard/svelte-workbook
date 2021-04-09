import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    levels: [true, false, false, false, false]
  },
  mutations: {
    setLevels(state, index) {
      console.log('mutations index', index)
      const newLevels = [...state.levels]
      newLevels[index] = true
      state.levels = newLevels
    }
  },
  actions: {
    setLevels({ commit }, payload) {
      console.log('index', payload.index)
      commit('setLevels', payload.index)
    }
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
