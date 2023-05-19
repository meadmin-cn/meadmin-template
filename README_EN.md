# Me-admin template
## Introduction
Me-admin template is a free open source admin template, built on VUE3, Vite4, Pinia, and Element-Plus, right out of the box.

**English** | [中文](./README.md)


## Feature
 - **Base on vue3、vite4、pinia、element-plus、vue-request@next**
 - **Base on typescript** The language of application-level JavaScript
 - **Configurable Themes** Configurable theme color and theme mode
 - **Friendly internationalisation scheme** Support for asynchronous loading of language packs by component based on vue-i18n.
 - **Customize the keepAlive cache** Vue keep-alive can be performed according to the key to solve the problem that unified components of different routes cannot refresh the cache independently 
 - **Permission** Built - in perfect dynamic route permission generation scheme
 - **Mock** The built-in mock data scheme is easy to test
 - **Component automatic introduction** Automatically introduces component definitions under Components as needed
 - **Convenient automatic type generation** Automatically generating TS types minimizes the workload

## Preview
- Full version of the github site: [https://meadmin-cn.github.io/meadmin-template](https://meadmin-cn.github.io/meadmin-template)
- Full version Chinese site: [https://meadmin-cn.gitee.io/meadmin-template](https://meadmin-cn.gitee.io/meadmin-template)
  
## Documentation
- Chinese site: [https://meadmin-cn.github.io/meadmin-template-doc](https://meadmin-cn.github.io/meadmin-template-doc)
- github site: [https://meadmin-cn.gitee.io/meadmin-template-doc](https://meadmin-cn.gitee.io/meadmin-template-doc)
  
## branch
- [main](https://github.com/meadmin-cn/meadmin-template/tree/main) full edition
- [template](https://github.com/meadmin-cn/meadmin-template/tree/template) foundation forms

## warehouse
- [Github](https://github.com/meadmin-cn/meadmin-template)
- [Gitee](https://gitee.com/meadmin-cn/meadmin-template)

## Install and use

 nodejs version >= 16.15.1

- clone code
```
git clone https://github.com/meadmin-cn/meadmin-template.git
```
- install
```
    cd meadmin-template
    npm install
```
- run
```
    npm run dev
```
- build
```
    npm run build
```

## contribute

- You are only allowed to contribute code to the main branch. The template branch is maintained by the author. If there is a bug in the template branch, the author will follow up. 
- The main branch only allows code contributions to files (excluding language pack files)/ new files that are not in the Template branch 
- Contribution code is unified on Github instead of Gitee 
### Pull Request:
1.Fork Code!

2.Create your own branch: `git checkout -b feat/xxxx`

3.initialize:(`npm run i`) or ( `npm install` `npx husky install`)

4.Commit: `git commit -am 'feat: add xxxxx'` (Husky automatically runs ESLint --fix, Prettier, and type-check)

5.push: `git push origin feat/xxxx`

6.submit: `pull request`

## Git Contribution Submission Specification
- must comply with [commitlint](https://commitlint.js.org/#/concepts-commit-conventions) regulations，It is recommended that `vscode`'s `Conventional Commits` extension be installed
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

## To admire the authors'

The author is still struggling for the baby milk powder money, if you can help you welcome to tip .Make sure to note that Github Name will be maintained in the tip list later 

![./payCode.jpg](https://gitee.com/meadmin-cn/meadmin-template/raw/main/payCode.jpg)


## License
[MIT © meadmin-cn](./LICENSE)