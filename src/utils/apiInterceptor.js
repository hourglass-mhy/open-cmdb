import axios from 'axios';
import { Message } from 'element-ui';
import store from '../store/index';

// 创建axios实例
const service = axios.create({
  // baseURL: process.env.BASE_API
  // timeout: 5000,
});

// request拦截器
service.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  }
)

// respone拦截器
service.interceptors.response.use(
  response => {
    return  response;
  },
  error => {
  	Message({
    message: error.message,
       type: 'error',
       duration: 5 * 1000
    })
    return Promise.reject(error);
  }
)

export default service;