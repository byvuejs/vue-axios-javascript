import App from '@/App.vue';
import '@/plugins/vuetify';
import router from '@/router';
import store from '@/store';
import Vue from 'vue';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  beforeCreate() {
    this.$store.dispatch("getMemeberInfo");
  },
  render: h => h(App)
}).$mount('#app');
