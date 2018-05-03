import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import axios from 'axios'
import router from './router'
import {store} from './store'
import Meta from 'vue-meta'
import VueAnalytics from 'vue-analytics'

import Main from './Main.vue'

// Axios csrf settings
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


// more info: https://github.com/MatteoGabriele/vue-analytics
Vue.use(VueAnalytics, {id: GOOGLE_ANALYTICS, router})

Vue.use(Meta)
Vue.use(BootstrapVue)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


/* eslint-disable no-new */
new Vue({
  el: '#main',
  router,
  store,
  render: h => h(Main)
})
