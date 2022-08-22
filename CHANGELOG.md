

## 1.0.0 (2022-08-22)


### 重构[refactor]

* 去掉自动注册全局组件和全局指令，改为自动引入组件和指令 ([35501cc](https://github.com/meadmin-cn/meadmin-template/commit/35501cc1a9dff732010ee4e2373779aefae2c633))


### 文档更改[docs]

* readMe完善 ([827eed3](https://github.com/meadmin-cn/meadmin-template/commit/827eed3746eae9c170cd60039298b4eee49448ca))


### 新功能[feat]

* 暗黑模式 ([e82fa93](https://github.com/meadmin-cn/meadmin-template/commit/e82fa93c92ef92a3447f2c69001a651a083516d7))
* 登录背景图修改 ([e1c7ba2](https://github.com/meadmin-cn/meadmin-template/commit/e1c7ba2244b8e43fbbe8d05993d2d4bfdfeaec9f))
* 多语言国际化支持 ([c8cf980](https://github.com/meadmin-cn/meadmin-template/commit/c8cf980f56a5d39f15708cde664b38599bee964a))
* 加上请求示例，修复进度条bug ([e35fa8b](https://github.com/meadmin-cn/meadmin-template/commit/e35fa8b90e885b7e14e83f008e7cb09cc602bf89))
* 加上用户名密码示例说明 ([e89d918](https://github.com/meadmin-cn/meadmin-template/commit/e89d9187448ae91372610c8c8e50cd027a35983f))
* 加上组件自动引入 ([8aa4552](https://github.com/meadmin-cn/meadmin-template/commit/8aa45526184fba4fe95f4c348973a68fa2b8f4bb))
* 加上gitee地址 ([3628d63](https://github.com/meadmin-cn/meadmin-template/commit/3628d63dbdea703e434e33eac82209cb862bead1))
* 加上size切换 ([7c7806e](https://github.com/meadmin-cn/meadmin-template/commit/7c7806e19542fc77f5c169af5ccac104258b81e7))
* 模式改为hash 构建方式修改 ([7601f65](https://github.com/meadmin-cn/meadmin-template/commit/7601f6531b6041101e57aa2c619e04bb8ff20f54))
* 全局语言包改完文件夹形式设置 ([33202c9](https://github.com/meadmin-cn/meadmin-template/commit/33202c9ccca55a276a741d49461d99d9d8644039))
* 全局组件、全局指令自动注册 ([afcfce5](https://github.com/meadmin-cn/meadmin-template/commit/afcfce5a59186e4c129d89ddfa19d0382b747184))
* 自定义keepAlive缓存支持无name缓存，支持不同路由同一组件复用时分别缓存 ([8cf313c](https://github.com/meadmin-cn/meadmin-template/commit/8cf313c1f46d2b6f417dd5f711f0c08d7a5a72b2))
* 自适应手机模式 ([72b0db9](https://github.com/meadmin-cn/meadmin-template/commit/72b0db9de2b4fd4128dbb8b2e9452a9d87e2e2f0))
* eslint规则完善 ([ec1ce18](https://github.com/meadmin-cn/meadmin-template/commit/ec1ce1895e78cf3643af965658e6c2513ed0728d))
* **icon:** 增加自动生成svg icon ts type ([09d1181](https://github.com/meadmin-cn/meadmin-template/commit/09d118128f19d6affd0ccf92809752298e6739e8))
* logo和登录背景修改 ([1412b21](https://github.com/meadmin-cn/meadmin-template/commit/1412b21167d20c64307be72a83ef6c002ed4b828))
* svg图标自动引入 ([66fdb78](https://github.com/meadmin-cn/meadmin-template/commit/66fdb78c1c4b1bbf8e0943d66ec97e858d1fad2f))


### CI发版[ci]

* 加上提交信息校验遵循conventional commits ([88edeb4](https://github.com/meadmin-cn/meadmin-template/commit/88edeb499f9cecf34604e8bfbbd9da06f961d923))
* 加上自动发布预览 ([12d4fc1](https://github.com/meadmin-cn/meadmin-template/commit/12d4fc12c3f6e7bcd690273a4e34a77cec6c43ec))
* 提交加上hook ([5437577](https://github.com/meadmin-cn/meadmin-template/commit/5437577a91dd5268befc5f30d5fc4a34b6f4c53d))
* 修改template发版配置 ([7b0ac81](https://github.com/meadmin-cn/meadmin-template/commit/7b0ac815d3ee19c2f83eedca999b4ca2145a312e))
* release tag name 添加 ([7155a2a](https://github.com/meadmin-cn/meadmin-template/commit/7155a2a9f494cf613ffa23e45ed260d4bb24e862))
* release tag修复 ([209e1d9](https://github.com/meadmin-cn/meadmin-template/commit/209e1d97a8b525a903406d3aa9310684ff7ad02d))


### 其他[chore]

* 合并基础模板分支 ([b82860d](https://github.com/meadmin-cn/meadmin-template/commit/b82860dae13b40f8612b6efd38d98e55167e52e9))


### Bug 修复[fix]

* 打开路由不是首页时tag展示错误 ([#7](https://github.com/meadmin-cn/meadmin-template/issues/7)) ([24632ca](https://github.com/meadmin-cn/meadmin-template/commit/24632ca87a541470ba8fd1bfe6fb3165af17e18d))
* 导入组件type自动生成错误修复 ([f1a78cb](https://github.com/meadmin-cn/meadmin-template/commit/f1a78cbbe883edc67df29c88b3f24a3dba78875f))
* 登陆表单背景色修改 ([3cec483](https://github.com/meadmin-cn/meadmin-template/commit/3cec483334a96b99c77cff024e6c1b72e5c8a6a9))
* 发布actions错误修复 ([09c21d4](https://github.com/meadmin-cn/meadmin-template/commit/09c21d4844375af699069ebca56c76dbd657bb28))
* 修复面包屑bug,构建方式改为先vite ([0fa3d03](https://github.com/meadmin-cn/meadmin-template/commit/0fa3d03bf8d76096d6a8bf6c376dc70ce0a1a672))
* 修复语言包加载热更新出错的问题 ([4a5a1c3](https://github.com/meadmin-cn/meadmin-template/commit/4a5a1c37dbca7e78797e2f3ed45eb9005b280fc9))
* 修复main分支 releas-it配置 ([#9](https://github.com/meadmin-cn/meadmin-template/issues/9)) ([c715a78](https://github.com/meadmin-cn/meadmin-template/commit/c715a78e93b16515f4346d455347a0075f0e5af5)), closes [#7](https://github.com/meadmin-cn/meadmin-template/issues/7)
* 修复size类型错误 ([5b111d8](https://github.com/meadmin-cn/meadmin-template/commit/5b111d8ac345b6dbe1ea1bdf46d9e585f659076c))
* changelog重命名 ([dda6f26](https://github.com/meadmin-cn/meadmin-template/commit/dda6f26c20569159826bdc13bc652b2075edd1d4))
* eslintrc 配置错误修复 ([a28bc4e](https://github.com/meadmin-cn/meadmin-template/commit/a28bc4e309aa35f63f1a21c0f666405326e3e5f7))
* git actions 错误修复 ([346b30e](https://github.com/meadmin-cn/meadmin-template/commit/346b30e28a5514bbfe79173576242f61ab37f511))