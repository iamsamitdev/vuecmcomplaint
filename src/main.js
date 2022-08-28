import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// VeeValidate
import VeeValidate from 'vee-validate'
Vue.use(VeeValidate)

// Sweet Alert 2
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'

// Tailwind CSS
import '@/styles/tailwind.css'

Vue.config.productionTip = false
Vue.use(VueSweetalert2)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
