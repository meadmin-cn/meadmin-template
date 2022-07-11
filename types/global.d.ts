export { }
declare global {
    //svg-icon /el-cion-*组件定义
    type Icon = DefineComponent<{ size: (StringConstructor | NumberConstructor)[], color: StringConstructor }>
}