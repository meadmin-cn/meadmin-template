import { UserStore } from "@/store";
import axios from "axios";

const service = axios.create({
    baseURL: '/', // url = base url + request url
    timeout: 10000 // request timeout
});
// 请求拦截器
service.interceptors.request.use((config) => {
    //在发送请求之前做一些事情
    if (!config.headers) {
        config.headers = {}
    }
    let userStore = UserStore()
    if (userStore.token) {
        config.headers['Auth-Token'] = userStore.token
    }
    return config
},
(error) => {
    // 对请求错误做些什么
    console.error(error) // for debug
    return Promise.reject('请求异常，请联系管理员');//改写错误信息
});
service.interceptors.response.use(function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
}, function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject('操作失败，请稍后重试');
});

