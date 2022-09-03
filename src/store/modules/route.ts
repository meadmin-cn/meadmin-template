import { filterAsyncRoutes } from '@/utils/permission';
import useUserStore from './user';
import { constantRoutes, asyncRoutes } from '@/router';
import { RouteRecordRaw } from 'vue-router';

export default defineStore('route', {
  state: () => ({
    addRoutes: [] as RouteRecordRaw[],
    cacheFullPath: new Set() as Set<string | RegExp>,
  }),
  getters: {
    routes: (state) => constantRoutes.concat(state.addRoutes),
  },
  actions: {
    generateRoutes() {
      if (useUserStore().rules) {
        this.addRoutes = markRaw(filterAsyncRoutes(asyncRoutes));
      }
      return this.addRoutes;
    },
  },
});
