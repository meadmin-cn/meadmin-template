import request from "@/utils/request"

const api = {
    login: '/api/user/login',
    userInfo: '/api/user/info',
}


//登录
export class LoginParams {
    username = '';
    password = '';
}
export interface LoginResult {
    token: string
}
export function loginApi() {
    return request<LoginResult, [LoginParams]>((params) => ({
        url: api.login,
        method: 'post',
        data: params
    }));
};


//获取用户详细信息
export interface UserInfoResult {
    rules: string[],//权限
    introduction: string,//备注
    avatar: string,//头像
    name: string,//名称
    username: string//用户名
}
export function userInfoApi() {
    return request<UserInfoResult>(() => ({
        url: api.userInfo,
        method: 'get'
    }),{noLoading:true});
}