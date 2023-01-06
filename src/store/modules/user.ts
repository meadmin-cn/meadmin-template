import { event, mitter } from '@/event';
import { Ref } from 'vue';
import cookies from 'js-cookie';
import { loginConfig as config } from '@/config';
import { loading } from '@/utils/loading';
import { PageEnum } from '@/dict/pageEnum';
import { loginApi, LoginParams, userInfoApi, UserInfoResult } from '@/api/user';
import useRouteStore from './route';
import { router } from '@/router';
interface UserState {
  user: UserInfoResult; // 用户信息
  rules: string[] | undefined; // 用户权限信息
  token: Ref<string>; // 用户token
}
export default defineStore({
  id: 'user',
  state: (): UserState => {
    let _token = '';
    return {
      user: {} as UserInfoResult,
      rules: undefined,
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
                domain: config.tokenDomain,
              });
            } else {
              cookies.remove(config.tokenName, {
                domain: config.tokenDomain,
              });
            }
            trigger(); // 记得触发事件 trigger,告诉vue触发页面更新
          },
        };
      }),
    };
  },
  actions: {
    // 初始化
    init: async function (tokenValue?: string) {
      const token = tokenValue ?? cookies.get(config.tokenName);
      if (token) {
        this.token = token;
        this.user = await userInfoApi(true, !tokenValue)();
        this.rules = this.user.rules;
        await useRouteStore().initRoutes(); //初始化路由
      } else {
        this.token = '';
      }
    },
    // 登录
    login: async function (params: LoginParams) {
      mitter.emit(event.BEFORE_LOGIN);
      const res = await loginApi()(params);
      await this.init(res.token);
      mitter.emit(event.AFTER_LOGIN);
    },
    // 退出
    logOut: async function () {
      loading();
      await Promise.allSettled(mitter.emit(event.BEFORE_LOGOUT));
      this.token = '';
      await router.replace({
        path: PageEnum.LOGIN,
      });
      window.location.reload();
    },
  },
});
