import axios from 'axios'

const $http = axios.create({
    baseURL: (function () {
        let url = '';
        url = commonUtils.CONSTANT.URL;

        return url;
    })(),
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=UTF-8'
    },
    mode: 'no-cors'
});

$http.interceptors.response.use(
    res => {
        console.group(`%cHTTP Request`, 'font-size:16px; color:#edb219; font-weight:bold;');
        console.log(`%c[${(res.config.method).toLocaleUpperCase()}] ${res.config.url}`, 'font-size:12px;');
        console.log(`%cStatus: ${res.status}`, 'font-size:12px;');
        console.log(`%cStatusText: ${res.statusText}`, 'font-size:12px;');
        console.dir(res.data);
        console.groupEnd();

        switch (res.status) {
            case 200:
            case 201:
                break;
            case 400:
            case 401:
            case 403:
            case 405:
            case 409:
            case 410:
                return Promise.reject(res);
        }
        return Promise.resolve(res);
    }, err => {
        console.error('error', err);
    }
)

export default $http
