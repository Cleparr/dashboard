import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'

import { BEmbed } from 'bootstrap-vue'
Vue.component('b-embed', BEmbed)


Vue.config.productionTip = false
Vue.use(BootstrapVue)

// Import Bootstrap library
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

