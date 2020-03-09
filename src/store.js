import Vue from 'vue';
import Vuex from 'vuex';
import router from './router';
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: { //data
    userInfo: null,
    allUsers: [
      {
        id: 1, 
        name: 'hoza',
        email: 'hoza@gmail.com',
        password: '1234'
      },
      {
        id: 1, 
        name: 'lego',
        email: 'lego@gmail.com',
        password: '1234'
      }
    ],
    isLogin: false,
    isLoginError: false
  },
  getters: { // computed
  },
  mutations: { // methods - 동기식 / state를 변화시키는 함수
    loginSuccess(state, payload) { // 로그인이 성공했을 때
      state.isLogin = true;
      state.isLoginError = false;
      state.userInfo = payload;
    },
    loginError(state) { // 로그인이 실패했을 때
      state.isLogin = false
      state.isLoginError = true;
    },
    logout(state) { // 로그아웃
      state.isLogin = false;
      state.isLoginError = false;
      state.userInfo = null;
      localStorage.removeItem("access_token");
    }
  },
  actions: { // methods - 비동기 / 비즈니스 로직
    login({ dispatch }, loginForm) { // 로그인을 시도
      // 로그인 -> 토큰 반환
      axios
        .post("https://reqres.in/api/login", loginForm) // (url, parameter(body))
        .then(loginData => {
          // 성공 시 toekn 데이터 반환 (실제로는 user_id 값을 받아올거다)
          // 토큰을 헤더에 포함시켜서 유저 정보를 요청
          let token = loginData.data.token;
          localStorage.setItem("access_token", token); // 토큰을 로컬 스리지에 저장
          dispatch("getMemeberInfo");
        })
        .catch(() => {
          commit("loginError");
        });
    },
    logout({ commit }) {
      commit("logout");
      router.push({ name: "home" });
    },
    getMemeberInfo({ commit }) {
      console.log("getMemeberInfo")
      // 로컬 스토리지에 저장되어 있는 토큰을 불러온다.
      let token = localStorage.getItem("access_token");
      let config = {
        headers: { "access-token" : token }
      };

      axios
      .get("https://reqres.in/api/users/2", config)
      .then(response => {
       let userInfo = {
          id: 2,
          first_name: response.data.data.first_name,
          last_name: response.data.data.last_name,
          avatar: response.data.data.avatar
       };

       commit("loginSuccess", userInfo);
      })
      .catch(() => {
        commit("loginError");
      })
    }
  }
});
