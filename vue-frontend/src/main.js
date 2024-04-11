/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

import storeSettings from './store/index'

Vue.use(Vuex)

const store = new Vuex.Store(storeSettings)

new Vue({
    Vuex,
    store,
    render: h => h(App)
}).$mount('#app')

