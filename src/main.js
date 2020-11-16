import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)

import global from './assets/utils/global_data'
import test from './assets/utils/test_data'

Vue.prototype.$global = global
Vue.prototype.$test = test

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
