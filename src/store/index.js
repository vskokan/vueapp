import Vue from 'vue'
import Vuex from 'vuex'
import bait from './modules/bait'
import common from './modules/common'

Vue.use(Vuex)
export default new Vuex.Store({   
    modules: {bait, common}
})


