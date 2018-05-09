// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Notification from './libs/notification'
import Tabs from './libs/tabs'
import './assets/styles/global.styl'
Vue.config.productionTip = false
Vue.use(Notification)
Vue.use(Tabs)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
