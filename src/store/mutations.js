import {
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT
} from './mutations-types'

export default {
    [LOGIN_SUCCESS](state, payload) { // 로그인이 성공했을 때
        state.isLogin = true;
        state.isLoginError = false;
        state.userInfo = payload;
      },
      [LOGIN_FAIL](state) { // 로그인이 실패했을 때
        state.isLogin = false
        state.isLoginError = true;
      },
      [LOGOUT](state) { // 로그아웃
        state.isLogin = false;
        state.isLoginError = false;
        state.userInfo = null;
        localStorage.removeItem("access_token");
      }
}
