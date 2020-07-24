import Vue from 'vue'
import App from './App.vue'
import router from './router'

// import VueAwesomeSwiper from 'vue-awesome-swiper'

// // import style
// //import 'swiper/css/swiper.css'
// // If you use Swiper 6.0.0 or higher
// import 'swiper/swiper-bundle.css'

// Vue.use(VueAwesomeSwiper)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
