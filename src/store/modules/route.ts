import MenuModeEnum from '@/dict/menuModeEnum';
import { filterAsyncRoutes, initDynamicViewsModules } from '@/utils/permission';
import useUserStore from './user';
import { router, constantRoutes, asyncRoutes, flatteningRoutes2 } from '@/router';
import { RouteRecordRaw } from 'vue-router';
import { settingConfig } from '@/config';
import { menuApi } from '@/api/routeMenu';
export default defineStore('route', {
  state: () => ({
    addRoutes: [] as RouteRecordRaw[],
    cacheFullPath: new Set() as Set<string | RegExp>,
  }),
  getters: {
    routes: (state) => constantRoutes.concat(state.addRoutes),
  },
  actions: {
    //生成权限过滤后的动态路由
    async generateRoutes() {
      if (useUserStore().rules) {
        switch (settingConfig.menuMode) {
          case MenuModeEnum.STATIC:
            this.addRoutes = markRaw(filterAsyncRoutes(asyncRoutes));
            break;
          case MenuModeEnum.API:
            initDynamicViewsModules();
            this.addRoutes = markRaw(filterAsyncRoutes(await menuApi()(), undefined, true));
            break;
        }
      }
      return this.addRoutes;
    },
    //初始化路由
    async initRoutes() {
      flatteningRoutes2(await this.generateRoutes(), constantRoutes.length).forEach((route) => router.addRoute(route));
    },
  },
});
