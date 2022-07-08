import { UserStore } from "@/store";
import axios, { AxiosRequestConfig } from "axios";
import { ElMessage } from "element-plus";
import { useRequest, Options, setGlobalOptions } from 'vue-request';
import { loading, closeLoading } from "./loading";

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
    console.error(error) // for debug
    return Promise.reject('操作失败，请稍后重试');
});


type RequestOptions<R, P extends unknown[]> = {
    needAll?: boolean,//需要所有的
    noLoading?: boolean,//不需要加载特效
    noError?: boolean,//不需要错误提示
} & Options<R, P>;


setGlobalOptions({
    manual: true,
    // ...
});
//请求函数，当请求失败时直接抛出异常;
export default function request<R, P extends unknown[] = any>(axiosConfig: (...args: P) => AxiosRequestConfig, options?: RequestOptions<R, P>) {
    return useRequest<R, P>(async (...args: P) => {
        try {
            !options?.noLoading && loading();
            let { data: res } = await service(await axiosConfig(...args));
            if (res.code == undefined) {
                throw '格式错误';
            }
            if (res.code !== 200) {
                throw res.msg;
            }
            !options?.noLoading && closeLoading();
            return options?.needAll ? res : res.data;
        } catch (e) {
            !options?.noLoading && closeLoading();
            !options?.noError && ElMessage.error({ message: e instanceof Error ? e.message : String(e) });
            throw e;
        }
    }, options);
}

