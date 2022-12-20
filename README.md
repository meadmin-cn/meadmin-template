# Me-admin template
## 简介
Me-admin template是一个免费开源的中后台模板,基于vue3、vite3、 pinia、 elment-plus构建，开箱即用，本项目的开源协议为最宽松的MIT协议，使用无任何限制，本项目采用最新技术栈，可以作为项目的启动模版，以帮助你快速搭建企业级中后台，也是一个很好的学习项目。

开源不易，如果能帮到您，麻烦在[Github](https://github.com/meadmin-cn/meadmin-template)中点个star。

**中文** | [English](./README_EN.md)


## 特性
 - **基于vue3、vite3、pinia、elment-plus、vue-request@next**
 - **基于typescript** 应用级JavaScript 的语言
 - **可配置主题** 可配置主题色及主题模式
 - **友好的国际化方案** 基于vue-i18n 支持按组件异步加载语言包。
 - **自定义keepAlive缓存** 可根据key进行vue keep-alive,解决不同路由使用同一组件不能独立刷新缓存问题
 - **权限** 内置完善的动态路由权限生成方案，按钮级权限。支持前端菜单和接口动态获取菜单两种模式
 - **Mock 数据** 内置mock数据方案便于测试
 - **组件自动引入** 自动按需引入components下的组件定义，可以自定义引入模式和模板，真正的按需引入
 - **便捷的类型自动生成** 自动生成ts type 最大程度减少工作量
 - **友好的request封装** 基于vue-request+axios的request api封装和vue3响应式语法糖深度耦合。
  
## 预览
- 完整版国外访问：[https://meadmin-cn.github.io/meadmin-template](https://meadmin-cn.github.io/meadmin-template)
- 完整版国内访问：[https://meadmin-cn.gitee.io/meadmin-template](https://meadmin-cn.gitee.io/meadmin-template)
  
## 文档
- 国外访问: [https://meadmin-cn.github.io/meadmin-template-doc](https://meadmin-cn.github.io/meadmin-template-doc)
- 国内访问: [https://meadmin-cn.gitee.io/meadmin-template-doc](https://meadmin-cn.gitee.io/meadmin-template-doc)
  
## 分支
- [main](https://github.com/meadmin-cn/meadmin-template/tree/main) 完整版
- [template](https://github.com/meadmin-cn/meadmin-template/tree/template) 基础模板

## 仓库
- [Github](https://github.com/meadmin-cn/meadmin-template)
- [Gitee](https://gitee.com/meadmin-cn/meadmin-template)

## 快速开始

 nodejs版本建议>=16.15.1

- clone 代码
```
git clone https://github.com/meadmin-cn/meadmin-template.git
```
- 安装依赖
```
    cd meadmin-template
    npm install
```
- 本地运行
```
    npm run dev
```
- 打包
```
    npm run build
```

## 贡献代码

- 只允许向main分支贡献代码，template分支由作者自行维护，如果template分支有bug提issus，作者会及时跟进。
- main分支只允许对不在template分支中的文件(不包括语言包文件)/新文件贡献代码
- 贡献代码统一在github而非gitee
### Pull Request:
1.Fork 代码!

2.创建自己的分支: `git checkout -b feat/xxxx`

3.初始化:(`npm run i`) 或( `npm install` `npx husky install`)

4.eslint检查：`npm run eslint`(husky 会自动运行eslint、prettier、type-check，但是不会自动修复eslint的warn，需要自己运行解决下warn)

5.提交修改: git commit -am 'feat: add xxxxx'

6.推送: `git push origin feat/xxxx`

7.提交`pull request`

## Git 贡献提交规范
- 需符合 [commitlint](https://commitlint.js.org/#/concepts-commit-conventions)规范，建议安装`vscode`的`Conventional Commits`扩展
  - `feat`  新功能
  - `fix`  Bug 修复
  - `chore` 杂物处理
  - `docs` 文档更改
  - `style` 样式更改
  - `refactor` 重构
  - `perf` 性能改进
  - `test` 测试添加/更正
  - `revert` 还原提交
  - `ignore` 临时暂存可忽略
  - `ci` CI发版

## 打赏作者

作者还在为孩子奶粉钱苦苦挣扎，如果能帮到您欢迎打赏。打赏时请务必备注github name 后续会维护到打赏鸣谢列表

![./payCode.jpg](https://gitee.com/meadmin-cn/meadmin-template/raw/main/payCode.jpg)


## License
[MIT © meadmin-cn](./LICENSE)