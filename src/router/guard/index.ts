import type { Router, RouteLocationNormalized, useRouter } from 'vue-router';
import { PageEnum } from '@/enums/pageEnum';
import { UserStore } from "@/store";
import { event, mitter } from '@/event'
import nProgress from 'nprogress';
// Don't change the order of creation
export function setupRouterGuard(router: Router) {
    createPermissionGuard(router);
    createProgressGuard(router);
    triggerRouteChange(router);
}


/**
 * 处理页面权限验证
 * @param router
 */
function createPermissionGuard(router: Router) {
    const userStore = UserStore();
    router.beforeEach(async (to) => {
        if (to.path !== PageEnum.LOGIN && !userStore.token) {
            return PageEnum.LOGIN;
        } else if (to.path === PageEnum.LOGIN && userStore.token) {
            return PageEnum.HOME;
        }
    });
}


//处理页面加载进度条
function createProgressGuard(router: Router) {
    router.beforeEach(async (to) => {
        if (to.meta.loaded) {
            return true;
        }
        nProgress.start();
        return true;
    });
    router.afterEach(async () => {
        nProgress.done();
        return true;
    });
}

//动态创建菜单
function createParamMenuGuard(router:Router){
    router.beforeEach(async(to, from, next) => {
        const userStore = UserStore();
        if(!userStore.auth){
            
        }
        next();

    });
    
}

//通知路由变化需要放在最后调用
function triggerRouteChange(router: Router) {
    router.beforeEach(async (to, from) => {
        // 通知路由变化开始
        mitter.emit(event.routeChange, [to, from]);
        return true;
    });
    router.afterEach(() => {
        mitter.emit(event.routeChangeOver);
    });//通知路由变化完成
}

