import $http from '@/plugins/http';
import router from '@/router';

export const login = ({ commit, dispatch }, loginForm) => {
    $http.post("/login", loginForm) // (url, parameter(body))
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
}

export const logout = ({ commit }) => {
    commit("logout");
    router.push({ name: "home" });
}

export const getMemeberInfo = ({ commit }) => {
    // 로컬 스토리지에 저장되어 있는 토큰을 불러온다.
    let token = localStorage.getItem("access_token");
    let config = {
      headers: { "access-token" : token }
    };

    $http.get("/users/2", config)
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

export default {
    login,
    logout,
    getMemeberInfo
}
