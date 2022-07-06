declare module 'vue-router' {
    interface RouteMeta extends Record<string | number | symbol, unknown> {
        // 标题
        title: string;
        //权限 多个之间为或的关系
        auth?: string[];
        // 是否是固定的tab
        affix?: boolean;
        // 图标
        icon?: string;
        // 在tab中隐藏
        hideTab?: boolean;
        // 在菜单中隐藏
        hideMenu?: boolean;
        //外链
        isLink?: boolean;
    }
}
export { };