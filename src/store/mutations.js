

export default {
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
}
