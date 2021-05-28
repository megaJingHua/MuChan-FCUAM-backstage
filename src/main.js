import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui';

import store from './store';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
import "jquery";
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import axios from 'axios'
import VueAxios from 'vue-axios'
import PbulicFunction from './public'
axios.defaults.baseURL = 'https://api.mega1109.com';
Vue.use(PbulicFunction);
Vue.use(VueAxios,axios);
Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
  mode: 'history',
  router
}).$mount('#app')
