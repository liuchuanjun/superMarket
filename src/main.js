import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'

Vue.use(VueAwesomeSwiper)

import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
import global from './utils/global_data'

Vue.prototype.global = global

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
