import { Ref } from 'vue';
import cookies from 'js-cookie';
import { loginConfig as config } from '@/config';
import { loading } from '@/utils/loading';
import { PageEnum } from '@/enums/pageEnum';
import { router, asyncRoutes } from '@/router';
import { loginApi, LoginParams } from '@/api/user';
interface UserState {
    user: Record<string, any>; //用户信息
    auth: string[] | undefined; //用户权限信息
    token: Ref<string>;//用户token
}
export default defineStore({
    id: 'user',
    state: (): UserState => {
        let _token: string = '';
        return {
            user: {},
            auth: undefined,
            token: customRef<string>((track, trigger) => {
                return {
                    get() {
                        // track 方法放在 get 中，用于提示这个数据是需要追踪变化的
                        track();
                        return _token;
                    },
                    set(token: string) {
                        _token = token;
                        if (token) {
                            cookies.set(config.tokenName, token, {
                                expires: config.tokenExpires,
                                domain: config.tokenDomain
                            });
                        } else {
                            cookies.remove(config.tokenName, {
                                domain: config.tokenDomain
                            });
                        }
                        trigger();// 记得触发事件 trigger,告诉vue触发页面更新
                    }
                }
            }),
        }
    },
    actions: {
        //初始化
        init: async function () {
            let token = cookies.get(config.tokenName);
            if (token) {
                this.token = token;
                asyncRoutes.forEach(route => router.addRoute(route));
            } else {
                this.token = '';
                asyncRoutes.forEach(route => router.addRoute(route));
            }
        },
        //登录
        login: async function (params: LoginParams) {
            let res = await loginApi().runAsync(params);
            this.token = res.token;
        },
        //退出
        logOut: function () {
            loading();
            this.token = '';
            window.location.href = PageEnum.LOGIN;
        },
    },
});