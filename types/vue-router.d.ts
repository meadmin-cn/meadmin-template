import { _RouteRecordBase, RouteMeta } from 'vue-router';
declare module 'vue-router' {
  export interface RouteMeta extends Record<string | number | symbol, unknown> {
    // 标题设置该路由在侧边栏和面包屑中展示的名字
    title: string;
    // 对应权限 多个之间为或的关系
    rule?: string[];
    // 是否是固定的tag
    affix?: boolean;
    // 图标
    icon?: string;
    // 在tag中隐藏
    hideTag?: boolean;
    // 外链
    isLink?: boolean;
    // 当路由设置了该属性，则会高亮相对应的侧边栏。
    // 这在某些场景非常有用，比如：一个文章的列表页路由为：/article/list
    // 点击文章进入文章详情页，这时候路由为/article/1，但你想在侧边栏高亮文章列表的路由，就可以进行如下设置
    // asyncRoutes如果不设置会自动计算展示不隐藏的祖级（包括当前）
    activeMenu?: string;
    // 如果设置为true，则不会被 <keep-alive> 缓存
    noCache?: boolean;
    // 在菜单中隐藏
    hideMenu?: boolean;
    // 当你一个路由下面的 children 声明的路由大于1个时，自动会变成嵌套的模式
    // 只有一个时，会将那个子路由当做根路由显示在侧边栏
    // 若你想不管路由下面的 children 声明的个数都显示你的根路由
    // 你可以设置 alwaysShow: true，这样它就会忽略之前定义的规则，一直显示根路由
    alwaysShow?: boolean;
    // 是否需要面包屑false不需要 ture或undefined为需要
    breadcrumb?: boolean;
    //路由在菜单的index deep映射（会动态计算不要设置默认值）
    menuIndex?: number[];
  }
  export interface _RouteRecordBase {
    // 没有需要展示的子集（会动态计算不要设置默认值）
    noShowingChildren?: boolean;
  }
}
export {};
