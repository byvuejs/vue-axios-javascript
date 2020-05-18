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
        },
        
        getBrowser() {
            const agt = navigator.userAgent.toLowerCase();
            
            if (agt.indexOf('chrome') !== -1) return 'Chrome';
            if (agt.indexOf('opera') !== -1) return 'Opera';
            if (agt.indexOf('firefox') !== -1) return 'Firefox';
            if (agt.indexOf('safari') !== -1) return 'Safari';
            if (agt.indexOf('mozilla') !== -1) return 'Mozilla';             
        }
    };
    
    /**
    * @namespace commonUtils.string
    * @description 문자열 처리 관련 함수
    */
    commonUtils.string = {
        /**
        * @param {String}
        * @return {Boolean}
        * @description 문자열 값이 유무
        * @example commonUtils.string.isValue(str);
        */
        isValue(str) {
            if(
                str === null || 
                str === '' || 
                str === undefined ||
                str === 'undefined' ||
                this.isBlank(str)
            ) return false;
            return true;
        },
        
        /**
        * @param {String}
        * @return {Boolean}
        * @description 문자열이 공백 문자인지 판단
        * @example commonUtils.string.isBlack(str);
        */
        isBlack(str) {
            for (let i = 0; i < str.length; i++) {
                const c = str.charAt(i);
                if ((c !== '') && (c !== '\n') && (c !== 'et')) return false;
            }
            return true;
        }
    }

    return commonUtils;

})(window.commonUtils || {})
