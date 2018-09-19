'use strict'

import axios from 'axios'
import qs from 'qs'
import Cookies from 'js-cookie'
import {MessageBox} from 'element-ui';


let instance = axios.create({

    baseURL: process.env.BASE_API,  //在config中配置
    timeout: 5000,  //请求超时
    withCredentials: false, //加了这段就可以跨域了
    // transformRequest: [function (data) { // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
    //             data = qs.stringify(data)
    //             return data
    //}]
});
// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    config.headers['Accept'] = '*/*';
    config.headers['Content-Type'] = 'text/plain';
    return config;
    
}, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
instance.interceptors.response.use(function (response) {

    return response;
   

}, function (error) {

    //  对响应错误做点什么
    // MessageBox({
    //     //message: error.response.data.message,
    //     type: 'error',
    //     showConfirmButton: false,
    //     duration: 5 * 1000
    // });
    return Promise.reject(error);
});

export default instance;