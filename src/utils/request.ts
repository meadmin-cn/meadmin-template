import { useUserStore } from '@/store';
import axios, { AxiosRequestConfig } from 'axios';
import { ElMessage } from 'element-plus';
import { useRequest, Options, setGlobalOptions } from 'vue-request';
import { loading, closeLoading } from './loading';

const service = axios.create({
  baseURL: '/', // url = base url + request url
  timeout: 10000, // request timeout
});
// 请求拦截器
service.interceptors.request.use(
  (config) => {
    // 在发送请求之前做一些事情
    if (!config.headers) {
      config.headers = {};
    }
    const userStore = useUserStore();
    if (userStore.token) {
      config.headers['Auth-Token'] = userStore.token;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    console.error(error); // for debug
    throw Error('请求异常，请联系管理员'); // 改写错误信息
  },
);
service.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response;
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    console.error(error); // for debug
    throw Error('操作失败，请稍后重试');
  },
);

type RequestOptions<R, P extends unknown[]> = {
  needAll?: boolean; // 需要所有的
  noLoading?: boolean; // 不需要加载特效
  noError?: boolean; // 不需要错误提示
} & Options<R, P>;

setGlobalOptions({
  manual: true, // 请求需要手动调用
  // ...
});

// 请求函数，当请求失败时直接抛出异常;
function request<R, P extends unknown[] = []>(
  axiosConfig: (...args: P) => AxiosRequestConfig,
  options?: RequestOptions<R, P>,
): ReturnType<typeof useRequest<R, P>>;
function request<R, P extends unknown[] = [], T extends true | undefined = true | undefined>(
  axiosConfig: (...args: P) => AxiosRequestConfig,
  options: RequestOptions<R, P>,
  returnAxios?: T,
): T extends true ? (...args: P) => Promise<R> : ReturnType<typeof useRequest<R, P>>;
/**
 * 请求函数
 * @param axiosConfig  axios的配置项
 * @param options vue request配置项+自定义配置项参考 RequestOptions
 * @param returnAxios
 * @returns
 */
function request<R, P extends unknown[] = [], T = true>(
  axiosConfig: (...args: P) => AxiosRequestConfig,
  options?: RequestOptions<R, P>,
  returnAxios?: T,
) {
  const axiosService = async (...args: P): Promise<R> => {
    try {
      !options?.noLoading && loading();
      const { data: res } = await service(await axiosConfig(...args));
      if (!res || res.code === undefined) {
        throw Error('格式错误');
      }
      // 401：认证失败
      if (res.code === '401') {
        await useUserStore().logOut();
        return res;
      }
      if (res.code !== '200') {
        throw res.msg;
      }

      !options?.noLoading && closeLoading();
      return options?.needAll ? res : res.data;
    } catch (e) {
      !options?.noLoading && closeLoading();
      !options?.noError &&
        ElMessage.error({
          message: e instanceof Error ? e.message : String(e),
        });
      throw e;
    }
  };

  return returnAxios ? axiosService : useRequest<R, P>(axiosService, options);
}

export default request;
