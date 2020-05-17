import Vue from 'vue'
import App from './App.vue'
import { store } from './store'
import { vuetify } from './plugins';

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store,
  vuetify,
}).$mount('#app')
