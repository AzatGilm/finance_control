import Vue from 'vue'
import App from './App.vue'
import vuetify from './plagins/vuetify'

import store from './store'
import router from './router'
import modal from './plagins/ModalWindow/index'

Vue.config.productionTip = false
Vue.use(modal)

new Vue({
  render: h => h(App),
  store,
  router,
  vuetify
}).$mount('#app')
