import Vue from 'vue'
import App from './App.vue'
import router from './router'

import VueAwesomeSwiper from 'vue-awesome-swiper'

<<<<<<< HEAD
Vue.use(VueAwesomeSwiper)

import 'vue-awesome-swiper/node_modules/swiper/dist/css/swiper.css'
=======
// Vue.use(VueAwesomeSwiper)
import global from './utils/global_data'

Vue.prototype.global = global
>>>>>>> 0eb2e8a2ed2a115508de7c8d0d79c989d600ec63

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
