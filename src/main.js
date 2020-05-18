import '@/plugins/window';
import '@/plugins/vuetify';
import $http from '@/plugins/http';
import Vue from 'vue';
import router from '@/router';
import store from '@/store';
import App from '@/App.vue';
import vueCommon from './plugins/vueCommon';

Vue.config.productionTip = false;
Vue.mixin({ methods: vueCommon });
Vue.prototype.$http = $http;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app');
