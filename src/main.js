import App from '@/App.vue';
import $http from '@/plugins/http';
import '@/plugins/vuetify';
import '@/plugins/window';
import router from '@/router';
import store from '@/store';
import Vue from 'vue';

Vue.config.productionTip = false;
Vue.prototype.$http = $http;

new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.dispatch("getMemeberInfo");
  },
  render: h => h(App)
}).$mount('#app');
