import axios from 'axios'
import { http_error_handler } from './httpErrorHandler'

const $http = axios.create({
    baseURL: (() => {
        return commonUtils.CONSTANT.URL || '';
    })(),
    headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json;charset=UTF-8',
        'Cache-Control': 'no-cache'
    },
    mode: 'no-cors'
});

$http.interceptors.request.use(config => {
    console.log('%c Request Success: ', 'color:#4CAF50; font-weight:bold;', config);
    return config;
}, error => {
    console.log('%c Request Fail: ', 'color:#EC6060; font-weight:bold;', JSON.stringify(error, undefined, 4));
    return Promise.reject(error);
});

$http.interceptors.response.use(response => {
    console.group(`% Response Success`, 'font-size:16px; color:#3E51B5; font-weight:bold;');
    console.log(`%c [${(res.config.method).toLocaleUpperCase()}] ${res.config.baseURL}${res.config.url}`, 'font-size:12px;');
    console.log(`%c Status: ${res.status}`, 'font-size:12px;');
    console.log(`%c StatusText: ${res.statusText}`, 'font-size:12px;');
    console.dir(res.data);
    console.groupEnd();
    // console.log('%c Response Success: ', 'color:#4CAF50; font-weight:bold;', response);
    return response;
}, error => {
    console.log('%c Response Fail: ', 'color:#EC6060; font-weight:bold;', JSON.stringify(error, undefined, 4));
    http_error_handler(error);
    return Promise.reject(error);
});

export default $http
