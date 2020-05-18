import Vue from 'vue';
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate';

import state from './states';
import getters from './getters';
import mutations from './mutations';
import actions from './actions'

Vue.use(Vuex);

export default new Vuex.Store({
  state, // data
  getters, // computed
  mutations, // methods - 동기식 / state를 변화시키는 함수
  actions, // methods - 비동기 / 비즈니스 로직
  plugins: [
    createPersistedState({
      storage: window.sessionStorage,
      key: 'userInfo',
      paths: ['isLogin', 'isLoginError', 'userInfo']
    })
  ]
});
