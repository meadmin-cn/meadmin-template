const enum eventEnum {
  start = 'start', // vue准备启动
  ready = 'ready', // vue启动完成渲染之前触发
  beforeRouteChange = 'beforeRouteChange', // 路由变更前
  afterRouteChange = 'afterRouteChange', // 路由变更后
  beforeLogin = 'beforeLogin', // 登录前
  afterLogin = 'afterLogin', // 登录成功后
  beforeLogout = 'beforeLogout', // 退出前
  aftreLogout = 'aftreLogout', // 退出成功后
  beforeLocalChange = 'beforeLocalChange', // 全局语言变更前
  resize = 'resize', // window变化时触发
}
export default eventEnum;
