import Vue from 'vue'
import Vuex from 'vuex'
import bait from './modules/bait'
import method from './modules/method'
import common from './modules/common'

Vue.use(Vuex)
export default new Vuex.Store({   
    modules: {bait, common, method}
})


