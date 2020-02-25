import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/icons' // icon
// 引入mockjs
import '@/mock/mock.js'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')