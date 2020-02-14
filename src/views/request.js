import axios from 'axios';
// import {
//     MessageBox,
//     Message
// } from 'element-ui';
// import store from '@/store';
// import {
//     getToken
// } from './auth';
const service = axios.create({
    baseURL: process.env.VUE_APP_BASE_API,
    // withCredentials: true,
    timeout: 5000,
});
service.interceptors.request.use(
    config => {
        // config.headers['WG-Token'] = 456;
        // config.headers['dxtoken'] = 'test';
        // headers: { 'mp-Token': 123, 'dxtoken': 'test' }, // 设置header信息
        // if (config.url.indexOf('portalweb') !== -1) {
        //     config.url = '/upt/ma/mp/portalweb' + config.url;
        // } else {
        //     config.url = '/upt/ma/mp/portaloper' + config.url;
        // }

        // console.log(config.url);
        return config;
    },
    error => {
        console.log(error);
        return Promise.reject(error);
    },
);
// service.interceptors.request.use(
//   config => {
//     if (store.getters.token) {
//       config.headers['DXID'] = getToken();
//     }
//     return config;
//   },
//   error => {
//     console.log(error);
//     return Promise.reject(error);
//   },
// );

service.interceptors.response.use(
    response => {
        const res = response.data;

        // if (res.code !== 0) {
        //     Message({
        //         message: res.msg || 'Error',
        //         type: 'error',
        //         duration: 5 * 1000,
        //     });

        //     // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
        //     if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        //         // to re-login
        //         MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
        //             confirmButtonText: 'Re-Login',
        //             cancelButtonText: 'Cancel',
        //             type: 'warning',
        //         }).then(() => {
        //             // store.dispatch('user/resetToken').then(() => {
        //             //     location.reload();
        //             // });
        //         });
        //     }

        //     return Promise.reject(res);
        // } else {
        return res;
        // }
    },
    error => {
        console.log('err' + error);
        // Message({
        //   message: error.message,
        //   type: 'error',
        //   duration: 5 * 1000,
        // });
        return Promise.reject(error);
    },
);
export default service;