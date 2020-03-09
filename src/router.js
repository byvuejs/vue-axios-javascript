import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

Vue.use(Router);

// const rejectAuthUser = (to, from, next) => {
//   if (store.state.isLogin) {
//     // 이미 로그인 된 유저니깐 막는다.
//     alert('이미 로그인을 하였습니다.');
//     next({ name: "home" });
//   } else {
//     next();
//   }
// }

// const onlyAuthUser = (to, from, next) => {
//   if (!store.state.isLogin) {
//     // 아직 로그인이 안 된 유저
//     alert('로그인이 필요한 기능입니다.');
//     next({ name: "home" });
//   } else {
//     next();
//   }
// }

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () =>
        import(/* webpackChunkName: 'home' */ '@/views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      // beforeEnter: rejectAuthUser, // 라우터에 들어오기전에 이 함수를 실행, 로그인 검증
      component: () =>
        import(/* webpackChunkName: 'login' */ '@/views/Login.vue')
    },
    {
      path: '/mypage',
      name: 'mypage',
      // beforeEnter: onlyAuthUser, // 라우터에 들어오기전에 이 함수를 실행, 로그인 검증
      component: () =>
        import(/* webpackChunkName: 'mypage' */ '@/views/Mypage.vue')
    },
  ]
});
