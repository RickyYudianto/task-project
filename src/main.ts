import BootstrapVue from 'bootstrap-vue';
import ElementUI from 'element-ui';
import Vue from 'vue';

import App from './App.vue';
import store from './store';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(BootstrapVue);
Vue.use(ElementUI);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
