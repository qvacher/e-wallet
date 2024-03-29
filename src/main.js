// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router'
import VueI18n from 'vue-i18n'
import messages from '@/lang/messages'

Vue.config.productionTip = false
Vue.use(VueI18n)

let locale = navigator.language
const i18n = new VueI18n({
  fallbackLocale: 'fr-FR',
  locale: locale,
  messages
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  i18n,
  components: { App },
  template: '<App/>'
})
