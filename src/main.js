import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2';
// If you don't need the styles, do not connect
import 'sweetalert2/dist/sweetalert2.min.css';
import VModal from 'vue-js-modal';

Vue.config.productionTip = false
Vue.use(VueSweetalert2);
Vue.use(VModal);
Vue.filter('date', function (value) {
  if (!value) return ''
  value = new Date(value);
  return `${value.getDate()}-${value.getMonth()+1}-${value.getFullYear()} ${value.getHours()}:${value.getMinutes()}`
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
