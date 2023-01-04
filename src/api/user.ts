import request from '@/utils/request';

const enum Api {
  LOGIN = 'user/login',
  USER_INFO = 'user/info',
}

// 登录
export class LoginParams {
  username = '';
  password = '';
  captcha = '';
}
export interface LoginResult {
  token: string;
}
export function loginApi<T extends boolean = true>(returnAxios: T = true as T) {
  return request<LoginResult, [LoginParams], T>(
    (params) => ({
      url: Api.LOGIN,
      method: 'post',
      data: params,
    }),
    {},
    returnAxios,
  );
}

// 获取用户详细信息
export interface UserInfoResult {
  rules: string[]; // 权限
  introduction: string; // 备注
  avatar: string; // 头像
  name: string; // 名称
  username: string; // 用户名
}
export function userInfoApi<T extends boolean = false>(returnAxios: T = false as T, noLoading = true) {
  return request<UserInfoResult, [], T>(
    () => ({
      url: Api.USER_INFO,
      method: 'get',
    }),
    { noLoading },
    returnAxios,
  );
}
