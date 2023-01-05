const enum EventEnum {
  START = 'start', // vue准备启动
  READY = 'ready', // vue启动完成渲染之前触发
  BEFORE_ROUTE_CHANGE = 'beforeRouteChange', // 路由变更前
  AFTER_ROUTE_CHANGE = 'afterRouteChange', // 路由变更后
  BEFORE_LOGIN = 'beforeLogin', // 登录前
  AFTER_LOGIN = 'afterLogin', // 登录成功后
  BEFORE_LOGOUT = 'beforeLogout', // 退出前
  AFTER_LOGOUT = 'aftreLogout', // 退出成功后
  BEFORE_LOCAL_CHANGE = 'beforeLocalChange', // 全局语言变更前
  RESIZE = 'resize', // window变化时触发
  INIT_DYNAMIC_VIEWS_MODULES = 'initDynamicViewsModules', //初始化动态路由页面视图
}
export default EventEnum;
