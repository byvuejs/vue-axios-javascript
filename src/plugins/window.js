window.commonUtils = (function (commonUtils) {
    commonUtils = {
        /**
         * @return {String}
         * @description 전역 변수
         */
        CONSTANT: {
            AUTH: {
                ADMIN: 'ROLE_ADMIN',
                USER: 'ROLE_USER'
            },
            API: {
                USER: '/users'
            },
            URL: (function () {
                let url = '';

                if (location.hostname === 'localhost') {
                    // url = 'http://localhost:3000'
                    url = 'https://reqres.in/api'
                }

                return url;
            })()
        }
    }

    return commonUtils

})(window.commonUtils || {})
