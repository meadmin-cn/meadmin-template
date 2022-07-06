import { defineStore } from 'pinia';
import { filterRoute } from '@/utils/permison';
import { asyncRoutes, router } from '@/router';
import { loginApi } from "@/api/user";
import { LoginParams } from "@/api/model/userModel";
import key from "@/enmus/key";
import { Ref } from 'vue';
import cookies from 'js-cookie';
import config from '@/config/login';
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
                            cookies.set(key.token, token, {
                                expires: config.token_expires,
                                domain: config.token_domain
                            });
                        } else {
                            cookies.remove(key.token, {
                                domain: config.token_domain
                            });
                        }
                        trigger();// 记得触发事件 trigger,告诉vue触发页面更新
                    }
                }
            }),
        }
    },
    actions: {
        initState: function () {
            let token = cookies.get(key.token);
            if (token) {
                this.token = token;
            } else {
                this.token = '';
            }
        },
        login: async function (params: LoginParams) {
            let data = await loginApi().run(params);
            if (data) {
                this.user = data.user;
                this.auth = data.auth;
                this.token = data['Admin-Token'];
                if (this.auth) {
                    const routes = filterRoute(asyncRoutes);
                    routes.forEach(item => {
                        router.addRoute(Object.assign({ name: item.path }, item))
                    });
                }
            }
            return data;
        },
        logOut: function () {
            loading();
            this.user = {};
            this.auth = undefined;
            this.token = '';
            cookies.remove('Admin-Token');
            window.location.href = PageEnum.LOGIN;
        },
    },

});