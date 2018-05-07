import Vue from 'vue'

import axios from 'axios'
import router from './router'
import {store} from './store'
import Meta from 'vue-meta'
import VueAnalytics from 'vue-analytics'

import Main from './Main.vue'
import { index } from './components/index';


// Axios csrf settings
axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'


// more info: https://github.com/MatteoGabriele/vue-analytics
Vue.use(VueAnalytics, {id: GOOGLE_ANALYTICS, router})

Vue.use(Meta)


/* eslint-disable no-new */
new Vue({
  el: '#main',
  router,
  store,
  render: h => h(Main),
  components: { Main }
})

