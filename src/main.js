import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue/dist/bootstrap-vue.esm';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';

import '/home/agil-dev/Desktop/Test-DEVINWEB/test-devinweb/node_modules/bulma/css/bulma.min.css';
import '/home/agil-dev/Desktop/Test-DEVINWEB/test-devinweb/node_modules/bulma-calendar/dist/css/bulma-calendar.min.css';

Vue.use(BootstrapVue);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
