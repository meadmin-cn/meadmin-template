import request from "@/utils/request"

const api = {
    login: '/api/user/login',
}


//登录
export class LoginParams {
    username = '';
    password = '';
}
export interface LoginResult {
    token: string;
}
export function loginApi() {
    return request<LoginResult, [LoginParams
    
    
    
    
    
    
    ]>((params) => ({
        url: api.login,
        method: 'post',
        data: params
    }));
};
