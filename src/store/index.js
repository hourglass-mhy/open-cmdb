import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import state from './state'
import mutations from './mutations'
import createLogger from 'vuex/dist/logger'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
    reducer: state => ({
      // isCollapse: state.isCollapse,
    })
})
export default new Vuex.Store({
  actions,
  getters,
  state,
  mutations,
  plugins: [vuexLocal.plugin]
})