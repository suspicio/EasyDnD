import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import Toasted from 'vue-toasted'
import './assets/styles/app.scss'
import TextareaAutosize from 'vue-textarea-autosize'

Vue.config.productionTip = false
axios.defaults.baseURL = process.env.VUE_APP_API_URL || ''

Vue.use(Toasted, {
  duration: 4000,
  position: 'bottom-right'
})
Vue.use(TextareaAutosize)

Vue.component('fade-loader', require('vue-spinner/src/FadeLoader.vue'))
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')