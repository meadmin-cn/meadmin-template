

## [1.1.20](https://github.com/meadmin-cn/meadmin-template/compare/main-1.1.19...main-1.1.20) (2024-01-13)


### 新功能[feat]

* 加上函数式组件调用支持(使用动态组件方式生成组件) ([3e18778](https://github.com/meadmin-cn/meadmin-template/commit/3e18778abc36d8f635e0b79eff5163d2ddfdb074))
* typescript升级到5.2.3，vue-tsc 省级到 1.8.24，vite升级到4.5.1 ([a9c3697](https://github.com/meadmin-cn/meadmin-template/commit/a9c3697b56b1a6d07efe7f34510c9ebed7adf647))


### 其他[chore]

* @vitejs/plugin-vue 版本升级 ([a21ac98](https://github.com/meadmin-cn/meadmin-template/commit/a21ac9832bacde5a37bfbc1de9b4da65f76f9a4b))
* 修改git hooks node版本 ([e7fe3bc](https://github.com/meadmin-cn/meadmin-template/commit/e7fe3bc95eb3e12acbb336ce6d77d13f1c06bdff))
* 优化prettierrc 的换行规则 ([4cd1ad4](https://github.com/meadmin-cn/meadmin-template/commit/4cd1ad4dbe887e8d2d29c3e2ad39624e49185223))
* template-release v1.1.20 ([655b6b2](https://github.com/meadmin-cn/meadmin-template/commit/655b6b26979fbb5118a4ba4f99692c1dd5d04974))
* vite版本升级到vite5 ([2ef5ed0](https://github.com/meadmin-cn/meadmin-template/commit/2ef5ed0ac0955c677dbdfa4f731ed7fb4f5c3b49))


### 样式更改[style]

* 忽略esclint错误规则 ([fb5b903](https://github.com/meadmin-cn/meadmin-template/commit/fb5b90362303cb08ba8c679855790b0b72e00e4e))


### 重构[refactor]

* 升级 vue、typescript、eslint 相关依赖版本 ([03374ff](https://github.com/meadmin-cn/meadmin-template/commit/03374ff9ad21e148608d2381323c295b87e7133b))

## [1.1.19](https://github.com/meadmin-cn/meadmin-template/compare/main-1.1.18...main-1.1.19) (2023-12-03)


### 重构[refactor]

* 优化默认样式，干掉一闪而过的滚动条 ([279a93c](https://github.com/meadmin-cn/meadmin-template/commit/279a93c1826be9245c450e638995cba98b58994e))


### 新功能[feat]

* 加上菜单侧边栏和左侧模式 ([63e83c6](https://github.com/meadmin-cn/meadmin-template/commit/63e83c6efbf49f014ccba89c46f629909b77a020))
* tag菜单加上body点击时关闭 ([4553bde](https://github.com/meadmin-cn/meadmin-template/commit/4553bde10ef28a62131c803475a9b34e2ab2f76e))
* tag滚动会自动多展示前一个/后一个tag ([33dfb3b](https://github.com/meadmin-cn/meadmin-template/commit/33dfb3bab2cff0f6559df6acfa9c93f147a19447))
* tag滚动会自动多展示前一个/后一个tag ([4d40627](https://github.com/meadmin-cn/meadmin-template/commit/4d406275216cdb0d63c82a80a775ec2e0106e569))


### 其他[chore]

* template-release v1.1.18 ([499861d](https://github.com/meadmin-cn/meadmin-template/commit/499861d2647fb879a78b266aa79fa4198edd9c19))
* template-release v1.1.19 ([794ff24](https://github.com/meadmin-cn/meadmin-template/commit/794ff248cb0d93dba847029713d622141f417b51))


### Bug 修复[fix]

* 加上 :column-config="{useKey:true}" 修复新版vxe-table报错 ([5079e3c](https://github.com/meadmin-cn/meadmin-template/commit/5079e3cc6ec670ed9b030054623ac96f4889e986))
* 升级vxe-table版本 对应暗黑模式改为css变量模式 ([0dfc3e0](https://github.com/meadmin-cn/meadmin-template/commit/0dfc3e0c741130ef8d857bc75c0269fecc1ef6f4))
* 修复顶栏菜单模式,...计算错误问题 ([d97f97d](https://github.com/meadmin-cn/meadmin-template/commit/d97f97d8287a9c4bb41ec7cceb0bb1d5896811a9))
* 修复配置响应丢失问题 ([64393f1](https://github.com/meadmin-cn/meadmin-template/commit/64393f1fca5c7439d12e49ec92e589f83d05ec55))
* 修复最大滚动tag值错误 ([30e07bf](https://github.com/meadmin-cn/meadmin-template/commit/30e07bf49fef07f0982ce6a5b8af0e167c752308))
* 修复最大滚动tag值错误 ([5a5fb0f](https://github.com/meadmin-cn/meadmin-template/commit/5a5fb0f9614bef5dccfe509be5293d2de0113ce9))
* 修复scrollLeft精度问题 ([68c6b81](https://github.com/meadmin-cn/meadmin-template/commit/68c6b81537415a2119c73aea101150c9a687ac97))
* 修复tag变更时滚动最大值未更新错误 ([ea0d34c](https://github.com/meadmin-cn/meadmin-template/commit/ea0d34cfee63a05c6226b070221a70f69fe207f1))
* 修复tag变更时滚动最大值未更新错误 ([ba38f08](https://github.com/meadmin-cn/meadmin-template/commit/ba38f088c12ad791a77571caa3cd8e7fe774c835))
* 重新生成type文件 ([0fac8a6](https://github.com/meadmin-cn/meadmin-template/commit/0fac8a65f0a3ebfa15933dcaadab6e586c722207))

## [1.1.18](https://github.com/meadmin-cn/meadmin-template/compare/main-1.1.17...main-1.1.18) (2023-08-08)


### 文档更改[docs]

* 加上qq群 ([2efd4d1](https://github.com/meadmin-cn/meadmin-template/commit/2efd4d1aa22f87fd0eb2923f12809eec61793d69))


### Bug 修复[fix]

* 修复编辑demo未copy问题 ([e68eb1c](https://github.com/meadmin-cn/meadmin-template/commit/e68eb1cf733f7e9f6e3f0b6490b5da699ddb2af6))
* 修复类型错误 ([8390057](https://github.com/meadmin-cn/meadmin-template/commit/8390057af3c2aae1476227fb852520d73ed7f13e))
* 修复深度代理值被设置为null时出错的bug ([1d23622](https://github.com/meadmin-cn/meadmin-template/commit/1d23622bcea2e026f201e31f7ecdeec2690eecc7))


### 其他[chore]

* @typescript-eslint/no-unused-vars 由error改为 warn ([aee0cf8](https://github.com/meadmin-cn/meadmin-template/commit/aee0cf8ef4412d801b472892db72c7df05eb7714))
* 加上挣钱的package-lock ([b1f537d](https://github.com/meadmin-cn/meadmin-template/commit/b1f537d802f115c7005b20c1b532612d80b3b466))
* 将package-lock加入到版本控制 ([0deca2e](https://github.com/meadmin-cn/meadmin-template/commit/0deca2e3c2cfc46dba261407cae3b5b5ebe0b76b))
* 优化写法，已适应编辑器识别 ([db9e786](https://github.com/meadmin-cn/meadmin-template/commit/db9e7862ecb57d1a5b02a6646e0bafc3ff7479d0))
* template-release v1.1.18 ([4e2bbd9](https://github.com/meadmin-cn/meadmin-template/commit/4e2bbd96ac368fc006e32b312c94c5d44b5569c9))
* vue-tsc 升级到1.8.6 ([dfc3247](https://github.com/meadmin-cn/meadmin-template/commit/dfc32475b3daa935018c33e138b4cfe0e3853034))

## [1.1.17](https://github.com/meadmin-cn/meadmin-template/compare/main-1.1.16...main-1.1.17) (2023-06-21)


### 重构[refactor]

* 基础组件用新的vue类型语法重写 ([bb8bf4d](https://github.com/meadmin-cn/meadmin-template/commit/bb8bf4d98e068021c5f9000ae0889344316ca9a6))
* 路由声明移除LayoutPage ([0d3447e](https://github.com/meadmin-cn/meadmin-template/commit/0d3447e4ae179688f074ac2d282347dbd4d403a9))
* 移除LayoutPage引用 ([41d5624](https://github.com/meadmin-cn/meadmin-template/commit/41d5624a6f85c11d1b9404a315fb0ff6e8e972d7))


### Bug 修复[fix]

* 修复超过三级的菜单只有一个子元素时菜单不提升bug ([7abc316](https://github.com/meadmin-cn/meadmin-template/commit/7abc3166d27899367ee9f92bcee26214662f271c))
* 修复当子菜单只有一层并且其子菜单为空数组时渲染出错bug ([3d23151](https://github.com/meadmin-cn/meadmin-template/commit/3d231517128ed730349bed8310a651e83e99dd8d))
* 修复结构store失去响应问题 ([b3f74d8](https://github.com/meadmin-cn/meadmin-template/commit/b3f74d8cff9d1f24be22371388b2bb89584320d9))
* 修复meDialog 关闭后再打开高度错误bug ([c86a86e](https://github.com/meadmin-cn/meadmin-template/commit/c86a86eb7cfe17b53f01214051c2966492a4f81b))
* 修复store动态引入问题 ([223ff0d](https://github.com/meadmin-cn/meadmin-template/commit/223ff0d4ba240366b5339a09fce36d00f8e04676))


### 新功能[feat]

* 加上KeyOfMap、ValueOfMap ([3b0c0ac](https://github.com/meadmin-cn/meadmin-template/commit/3b0c0ac9bd67710263a2d1763279c2d6eb8c79e8))
* 面包屑展示加上子元素判断 ([c236f8c](https://github.com/meadmin-cn/meadmin-template/commit/c236f8c47464e655cd16b1c4d84e66ba17759d5a))
* 优化路由声明，自动声明动态路由的跟路由，动态路由菜单允许只有一级 ([99766d2](https://github.com/meadmin-cn/meadmin-template/commit/99766d27f8090356a31e2c2be66def8d63a9f9b5))


### 其他[chore]

* template-release v1.1.16 ([b4ccf72](https://github.com/meadmin-cn/meadmin-template/commit/b4ccf72a419e8327c8e0e67b6f3061c3250c7b6b))
* template-release v1.1.17 ([417b49f](https://github.com/meadmin-cn/meadmin-template/commit/417b49f32cfbd88f2c8fbe08fefae975c739ce22))
* vue-request 版本改为正式版本 ([8c7a6c1](https://github.com/meadmin-cn/meadmin-template/commit/8c7a6c141c64560d46e7e88e564a0b01f7229a75))

## [1.1.16](https://github.com/meadmin-cn/meadmin-template/compare/main-1.1.15...main-1.1.16) (2023-05-25)


### 新功能[feat]

* 解除 类属性元素的命名限制 ([8bb0499](https://github.com/meadmin-cn/meadmin-template/commit/8bb04995ddd30133d8ce34731203a6a6eaffda6d))
* 升级eslint相关包到最新版本 ([3010d3f](https://github.com/meadmin-cn/meadmin-template/commit/3010d3f49cb771a21c9e778b022dfd4823d69fd5))


### 重构[refactor]

* **vue新语法:** meDialog组件用vue3.3新语法重构 ([c4c1a4d](https://github.com/meadmin-cn/meadmin-template/commit/c4c1a4d7f373a1e14b81822a8afeecb4745bc491))


### 还原提交[revert]

* 还原meDailog ([657c669](https://github.com/meadmin-cn/meadmin-template/commit/657c6692e3d45c4745a696ccb257703f3994afcd))


### 文档更改[docs]

* 拼写错误更正 ([f1a117d](https://github.com/meadmin-cn/meadmin-template/commit/f1a117dca6d088c30a8da5218b654996f5e70cca))
* 英文文档拼写错误修复 ([93850de](https://github.com/meadmin-cn/meadmin-template/commit/93850de02e5aeb7972b79ba21f7d5f48e965aaaa))
* element-plus 拼写错误更正 ([53ccb78](https://github.com/meadmin-cn/meadmin-template/commit/53ccb78c2fa9f5d73572d07d754aeb8360de2ce0))
* element-plus 拼写错误更正 ([#66](https://github.com/meadmin-cn/meadmin-template/issues/66)) ([70b5d08](https://github.com/meadmin-cn/meadmin-template/commit/70b5d0819d06ff92948909bc0ed4676cf4fbcee9))


### Bug 修复[fix]

* 删除core-js/modules预构建mac下vite4.4预构建不成功bug ([f6d7fc9](https://github.com/meadmin-cn/meadmin-template/commit/f6d7fc9d4000ba40916cd08f45a40cd851728e7b))
* 修复 meTable el-table-cloumn slot 不能传参问题 ([7d93df5](https://github.com/meadmin-cn/meadmin-template/commit/7d93df5d20cf2107bebeb0249720b0662a0b92a9))


### 其他[chore]

* template-release v1.1.16 ([d61602f](https://github.com/meadmin-cn/meadmin-template/commit/d61602faefcfa70029b591408c0a76d56d8f4497))

## [1.1.15](https://github.com/meadmin-cn/meadmin-template/compare/main-1.1.14...main-1.1.15) (2023-05-13)


### 新功能[feat]

* 更新vue版本为4.3 同步升级vite和vue-tsc版本 ([7dce364](https://github.com/meadmin-cn/meadmin-template/commit/7dce36429d932c3cc604a14dcf13ce420403a5f3))
* 滚动条样式优化 ([ff323c6](https://github.com/meadmin-cn/meadmin-template/commit/ff323c6007720e7c0e42b64739cc8ec1c699f029))


### Bug 修复[fix]

* 修复错误的eslint template 设置 升级eslint版本 ([a52bf9d](https://github.com/meadmin-cn/meadmin-template/commit/a52bf9dab2f0fdb6b5dd3689dfab653021eaf572))
* 修复element plus api 样式覆盖问题 ([c366b4e](https://github.com/meadmin-cn/meadmin-template/commit/c366b4e2357ef1046f447e96016bcf9045cba135))
* 应用最新eslint规则 删除未使用的变量 ([c2bd051](https://github.com/meadmin-cn/meadmin-template/commit/c2bd05125485424105b4ab1cb5c6c980498d067f))
* computedModel的源对象还原放到下个宏任务进行 ([8df8ed5](https://github.com/meadmin-cn/meadmin-template/commit/8df8ed594953f38f463d639e31d4a6b56ca65895))


### 样式更改[style]

* 代码格式化 ([fc685df](https://github.com/meadmin-cn/meadmin-template/commit/fc685df6e8a398ad9bcdeda8e74f58417ab7c046))
* 重新格式化代码 ([ca589d2](https://github.com/meadmin-cn/meadmin-template/commit/ca589d2a4fe8819e917c82d40217b1a1fc0e0580))


### 文档更改[docs]

* 版本升级说明 ([d45ce67](https://github.com/meadmin-cn/meadmin-template/commit/d45ce67d26551906d727ce5c1a6c212bb4af1f3a))


### 其他[chore]

* 自动生成文件忽略格式化 ([5fd518e](https://github.com/meadmin-cn/meadmin-template/commit/5fd518e3767f5e4e8dfb8087925a156da3d352f4))
* template-release v1.1.14 ([7e47fff](https://github.com/meadmin-cn/meadmin-template/commit/7e47fff82c2e3cdc07c87426656e3de85b6fce93))
* template-release v1.1.15 ([89a89fa](https://github.com/meadmin-cn/meadmin-template/commit/89a89fae11eaa78d92b094f5c95160a41aac3654))

## [1.1.14](https://github.com/meadmin-cn/meadmin-template/compare/main-1.1.13...main-1.1.14) (2023-04-26)


### 样式更改[style]

* 代码块空格添加 ([b04eeac](https://github.com/meadmin-cn/meadmin-template/commit/b04eeacfd3216527f6fca3c14b2c38bbc067b3dc))


### 新功能[feat]

* 示例加上messageBox便于测试api响应 ([2e78817](https://github.com/meadmin-cn/meadmin-template/commit/2e7881774940424fa8f2eb11892df479970575a1))
* eslint 加上块级 注释前面加空行 ([ae2ce87](https://github.com/meadmin-cn/meadmin-template/commit/ae2ce873eb8e57d7bd73a90821fcd43601cae7e2))
* v-model绑定对象或数组，不使用源对象更改的解决方案 ([0a22b6e](https://github.com/meadmin-cn/meadmin-template/commit/0a22b6ee87275a449ef185103ca02ac0382086c9))


### Bug 修复[fix]

* 更改 element plus config设置方式，修复路由api模式下el api组件无法应用配置问题 ([e5d8039](https://github.com/meadmin-cn/meadmin-template/commit/e5d8039ee7819bf1e7e0746918e44cb192979367))
* 加上缺少的全局组件声明 ([dc8714a](https://github.com/meadmin-cn/meadmin-template/commit/dc8714abfcfb14e7f037d0153dc8c66bd54fad00))
* 文件命名错误修复 ([890d352](https://github.com/meadmin-cn/meadmin-template/commit/890d3528c34772167b8133248c0558ff0c2098cb))
* 修复element plus api 样式覆盖问题 ([1626d31](https://github.com/meadmin-cn/meadmin-template/commit/1626d314700d94590fd1de071a8b7574501d20e1))


### 其他[chore]

* 锁定vue-tsc小版本,规避template检查bug ([60a95df](https://github.com/meadmin-cn/meadmin-template/commit/60a95df0d69413d14150217a0473190122528dac))
* template-release v1.1.14 ([4f98f95](https://github.com/meadmin-cn/meadmin-template/commit/4f98f956ab837f86a45822914dd541905b6e2466))

## [1.1.13](https://github.com/meadmin-cn/meadmin-template/compare/main-1.1.12...main-1.1.13) (2023-04-10)


### 新功能[feat]

* meTable 和 meVxeTable 透传slot加上if判断 ([d23e2df](https://github.com/meadmin-cn/meadmin-template/commit/d23e2dfaab12a1e5494d2647c0c68bca12390cba))


### 性能改进[perf]

* 单词错误修复 ([1698947](https://github.com/meadmin-cn/meadmin-template/commit/1698947a817ba1ded7405d95ca71462164fe6282))


### 重构[refactor]

* 删除多余的类型引入 ([615f452](https://github.com/meadmin-cn/meadmin-template/commit/615f45288dab280c7b7520c13c370e7e935ec7a3))
* meSearchForm重构不兼容老写法 ([46a0bc4](https://github.com/meadmin-cn/meadmin-template/commit/46a0bc4655d044c49ec207488bedb6ecfc16e7d0))


### 其他[chore]

* template-release v1.1.13 ([f88a806](https://github.com/meadmin-cn/meadmin-template/commit/f88a806d322d744fd9b5e81c892eaf6689151ea3))


### Bug 修复[fix]

* 优化查询表单变更 更丝滑 ([66526ed](https://github.com/meadmin-cn/meadmin-template/commit/66526ed885be3b4b7b16c038fdbb5560b85011aa))
* layput meKeepAlive 最大缓存值设置为30 ([4637542](https://github.com/meadmin-cn/meadmin-template/commit/4637542e9ac9939ddcb7f00bdd65b0305dfdc92d))
* meSearchForm 组件名错误修复 ([1765ced](https://github.com/meadmin-cn/meadmin-template/commit/1765ced0a9aca832a6b93dc188fca1304d523e22))

## [1.1.12](https://github.com/meadmin-cn/meadmin-template/compare/main-1.1.11...main-1.1.12) (2023-04-03)


### 其他[chore]

* template-release v1.1.12 ([6f1121e](https://github.com/meadmin-cn/meadmin-template/commit/6f1121eed486460aa9945a0f8c856feb007fcd25))


### 新功能[feat]

* 加上缺少的幽灵依赖，解决pnpm启动和打包问题 ([4f878ec](https://github.com/meadmin-cn/meadmin-template/commit/4f878ec350464e4247f389a086f3b082a94875d8))
* 加上缺少的幽灵依赖，解决pnpm下运行问题 ([fd672b6](https://github.com/meadmin-cn/meadmin-template/commit/fd672b64cec5f76b158444a7083574a26c9c8ff8))


### Bug 修复[fix]

* layput meKeepAlive 最大缓存值设置为30 ([8810cef](https://github.com/meadmin-cn/meadmin-template/commit/8810cef75c07f1525158ef8c463f2b34a71e5f8d))
* meKeepAlive常量改为动态获取(因为@vue/share在里面删除了) ([6d2380d](https://github.com/meadmin-cn/meadmin-template/commit/6d2380d493004aadb5b76e5478f39cda5a2cf814))

## [1.1.11](https://github.com/meadmin-cn/meadmin-template/compare/main-1.1.10...main-1.1.11) (2023-03-29)


### 新功能[feat]

* 优化全局类型 ([1f07048](https://github.com/meadmin-cn/meadmin-template/commit/1f07048713d979ec8920c0bd637876ba449b5286))


### 其他[chore]

* template-release v1.1.11 ([02d3e3d](https://github.com/meadmin-cn/meadmin-template/commit/02d3e3db16724ca9771f0137b494abf852148026))

## [1.1.10](https://github.com/meadmin-cn/meadmin-template/compare/main-1.1.9...main-1.1.10) (2023-03-21)


### Bug 修复[fix]

* 修复字体切换无效问题 ([134dae5](https://github.com/meadmin-cn/meadmin-template/commit/134dae5c02de1bfa3402b7484301efcd5d3a8dcc))


### 其他[chore]

* template-release v1.1.10 ([04caa07](https://github.com/meadmin-cn/meadmin-template/commit/04caa0739eedd397bebf71e641d4b4b4c73322f1))

## [1.1.9](https://github.com/meadmin-cn/meadmin-template/compare/main-1.1.8...main-1.1.9) (2023-03-14)


### CI发版[ci]

* github hook 加上自动创建nojekll ([52f2500](https://github.com/meadmin-cn/meadmin-template/commit/52f25004d789e9fab4b01e426fbc9db3e9be1622))
* github hook 加上自动创建nojekll ([5391f33](https://github.com/meadmin-cn/meadmin-template/commit/5391f333f53d5e3483ca892c0b6f2b7eba5d2fe4))


### 新功能[feat]

* meSearchForm查询按钮加上loading效果 ([bea9b55](https://github.com/meadmin-cn/meadmin-template/commit/bea9b550e2e5ef76a2c0b7920b4d45d023e8eaa3))


### Bug 修复[fix]

* 修复mock接口无法请求错误 ([ade3830](https://github.com/meadmin-cn/meadmin-template/commit/ade3830a0475b0b8f23a18ff142b16b01ffdb2c7))
* 修复vue-i18n文件打包引入错误bug ([26225f8](https://github.com/meadmin-cn/meadmin-template/commit/26225f8539e6df0a98f47446cb2a2c6c270baa4b))


### 其他[chore]

* template-release v1.1.9 ([51f6f83](https://github.com/meadmin-cn/meadmin-template/commit/51f6f83fd5dd1b1174687bb5c3c018596b023089))

## [1.1.8](https://github.com/meadmin-cn/meadmin-template/compare/main-1.1.6...main-1.1.8) (2023-01-09)


### 文档更改[docs]

* vite版本改为4版本 ([f733260](https://github.com/meadmin-cn/meadmin-template/commit/f7332606f0fb929605401a444bbfc4eca566c36c))


### CI发版[ci]

* eslint name 校验规则更宽松 ([c7341a7](https://github.com/meadmin-cn/meadmin-template/commit/c7341a736d169ac6df9036407d485e4268d85721))
* husky校验 esint 设置为自动修复 ([ba826aa](https://github.com/meadmin-cn/meadmin-template/commit/ba826aa478cf40934c960058fc212e61fa53e96d))


### 重构[refactor]

* 将vite plugin 提取到plugins目录中优化目录结构 ([d121f11](https://github.com/meadmin-cn/meadmin-template/commit/d121f119d7e1174230d6801190527dd11f338a5c))
* 禁用autoImport ts类型自动生成（已放到git中无需再次生成） ([31f3566](https://github.com/meadmin-cn/meadmin-template/commit/31f3566858fddf4cf41ca300e1bbf8f617981547))
* enums 更换为dict ([58c6f8d](https://github.com/meadmin-cn/meadmin-template/commit/58c6f8dbad246e04a379c7c382fa308a8b26d84c))
* meTable 分页重构 ([cee5c12](https://github.com/meadmin-cn/meadmin-template/commit/cee5c125a3cf00407400b46f34c0820ac9c297f4))
* meVxeTable  分页重构 ([5e74c66](https://github.com/meadmin-cn/meadmin-template/commit/5e74c669a4354c91f130e121581094c82df97708))


### Bug 修复[fix]

* 变量错误修复 ([89f2e91](https://github.com/meadmin-cn/meadmin-template/commit/89f2e91f9e64cb452409104691661529daabfd2b))
* 修复 加载路由组件异常后切换路由loading不关闭bug ([dba02e2](https://github.com/meadmin-cn/meadmin-template/commit/dba02e221a4d314b161b7809bc81362f4ea6d0d5))
* 修复表格打印样式错误 ([925e857](https://github.com/meadmin-cn/meadmin-template/commit/925e85712d9b7f7a6e3cb7b910086b0b1813fc6f))
* 修复点击弹窗后图标不变回默认色bug ([73096d2](https://github.com/meadmin-cn/meadmin-template/commit/73096d25c7179345a6392971d51407864a830655))
* 修复数字动画demo开始按钮不生效bug ([ecb1457](https://github.com/meadmin-cn/meadmin-template/commit/ecb14571590e06581bb0798054364e603411855f))
* 修复meDialog事件类型错误bug ([245a242](https://github.com/meadmin-cn/meadmin-template/commit/245a242663ceedf2d9dc5bfa555843c81a8255ae))


### 性能改进[perf]

* 删除打印测试代码,优化导出属性 ([9b6d701](https://github.com/meadmin-cn/meadmin-template/commit/9b6d7017e93910d76c72d7ac792316ca049bf63a))
* 删除多余引入加上缺少的组件名声明 ([816c941](https://github.com/meadmin-cn/meadmin-template/commit/816c941c13e0d7835d03eab3792c9d8e38136bfb))
* 升级vite版本为4 typescript为4.9 ([4174cda](https://github.com/meadmin-cn/meadmin-template/commit/4174cda2dd9623f0132cf8611b6a19e5e1f4f3a0))
* 搜索表单组件优化样式 ([8edad77](https://github.com/meadmin-cn/meadmin-template/commit/8edad773ff7342344a640303609b72e3735f9026))
* 优化tsc校验 ([ea23ee4](https://github.com/meadmin-cn/meadmin-template/commit/ea23ee428d0e6eb32c3e6846a4ce08e77ff874c0))


### 新功能[feat]

* 弹窗组件优化弹窗滚动条 ([62f4b65](https://github.com/meadmin-cn/meadmin-template/commit/62f4b65446abeb1bee290d7793e988a6300d1e7c))
* 加上查询表单组件 ([6bad7bf](https://github.com/meadmin-cn/meadmin-template/commit/6bad7bf0633a7a9a52d852c696aba217f528b99c))
* 加上全局滚动条样式 ([365e065](https://github.com/meadmin-cn/meadmin-template/commit/365e065aca58e9a4a6bafe410a56d802506824ac))
* 加上完整示例demo ([1707f46](https://github.com/meadmin-cn/meadmin-template/commit/1707f464e2bc62527e8b91cb2b75b7fda2f15be1))
* 加上MeDialog ([e3a5ebd](https://github.com/meadmin-cn/meadmin-template/commit/e3a5ebde21872f2462155a14b1d227c0b6a7d399))
* 请求函数加上数组query 转换 ([39fa3f9](https://github.com/meadmin-cn/meadmin-template/commit/39fa3f91374019d7349159fef79636cf1fad5439))
* reqest query参数 删除null值 ([26a989c](https://github.com/meadmin-cn/meadmin-template/commit/26a989c6d237263c8356f47a51278b5d5f92b2ec))


### 其他[chore]

* 移除meKeepAlive 需要的define常量 （从vue自动获取） ([b5ee3ea](https://github.com/meadmin-cn/meadmin-template/commit/b5ee3ea2e52613fa7a62f65bc08e875b9a22004c))
* template-release v1.1.7 ([342ff32](https://github.com/meadmin-cn/meadmin-template/commit/342ff32220c7f59a053566565b659d0df998ba3a))
* template-release v1.1.8 ([ca60dc4](https://github.com/meadmin-cn/meadmin-template/commit/ca60dc4d8272061e10676f768426a26cd4c12f60))

## [1.1.6](https://github.com/meadmin-cn/meadmin-template/compare/main-1.1.5...main-1.1.6) (2022-12-20)


### 重构[refactor]

* loginApi直接返回axios规避vue-request非setup警告 ([eb036b6](https://github.com/meadmin-cn/meadmin-template/commit/eb036b6488f42afca9c150e42f298e448416a723))


### Bug 修复[fix]

* 修复热更新后偶现页面loading无法关闭的bug ([8a9e731](https://github.com/meadmin-cn/meadmin-template/commit/8a9e731ad8c0708f7e7fe53270ad50503c531a8c))
* **rolePermissions:** 修复快捷搜索不展示bug ([09ae420](https://github.com/meadmin-cn/meadmin-template/commit/09ae42072929edc090ec338f7f8f311c3e1c2b58))
* **rolePermissions:** 修复页面绑定函数错误bug ([fb10e90](https://github.com/meadmin-cn/meadmin-template/commit/fb10e909fcca10b949f9908e69326a5e65d0b22d))


### 文档更改[docs]

* 特性介绍添加 ([67fd3c4](https://github.com/meadmin-cn/meadmin-template/commit/67fd3c40b0df4693378a138582da8206192f47ec))


### 其他[chore]

* template-release v1.1.6 ([4b0a3fc](https://github.com/meadmin-cn/meadmin-template/commit/4b0a3fcfced7d2f6e051e8b2ecd45e8b1ed0adb0))

## [1.1.5](https://github.com/meadmin-cn/meadmin-template/compare/main-1.1.4...main-1.1.5) (2022-12-19)


### 重构[refactor]

* 优化写法 以通过最新版本typescript 的tsc 检测 ([ed7df24](https://github.com/meadmin-cn/meadmin-template/commit/ed7df2463c5cdc776f0dcef69814f51a22c3be17))

## [1.1.4](https://github.com/meadmin-cn/meadmin-template/compare/main-1.1.3...main-1.1.4) (2022-12-19)


### 性能改进[perf]

* meTable和meVxeTable事件声明优化 ([d9968e9](https://github.com/meadmin-cn/meadmin-template/commit/d9968e98a0284995ab9ec949c78847e9044b00a2))


### Bug 修复[fix]

* **router:** 修复 连续跳转两个路由菜单progress进度条不关闭的问题 ([1c25234](https://github.com/meadmin-cn/meadmin-template/commit/1c25234f9477fe700a24fff1b16e661c00f3a079))


### 其他[chore]

* template-release v1.1.4 ([2fe9f33](https://github.com/meadmin-cn/meadmin-template/commit/2fe9f33d47ed7a9aa512bc04405214936297df49))
* **vite.config:** 手动设置core-js/modules预构建, ([3a0de1b](https://github.com/meadmin-cn/meadmin-template/commit/3a0de1b11c13a3be47bd815b00b826f24eb7bc58))
* **vite.config:** chunks打包优化 ([899f20d](https://github.com/meadmin-cn/meadmin-template/commit/899f20dca0cb25b38cbb6e8c8c1419aab707447e))

## [1.1.3](https://github.com/meadmin-cn/meadmin-template/compare/main-1.1.2...main-1.1.3) (2022-12-01)


### 性能改进[perf]

* **request:** 优化 request类型及使用示例以更好的提示返回值 ([3c23293](https://github.com/meadmin-cn/meadmin-template/commit/3c2329331f0fa03fc23f47e40554e69267e01b98))


### 文档更改[docs]

* **README:** 说明描述更改 ([93dcc05](https://github.com/meadmin-cn/meadmin-template/commit/93dcc053c55ad58fa7783dc602a16a301c6bffcb))
* **README:** 说明描述更改 ([06eac69](https://github.com/meadmin-cn/meadmin-template/commit/06eac69b706f93372c82b2b71bea87d14488c4b9))
* **README:** 文档介绍更改 ([25edd80](https://github.com/meadmin-cn/meadmin-template/commit/25edd80e1183496075554a08c9b07f831199e289))


### Bug 修复[fix]

* **api:** 修复userInfoApi类型检查错误 ([77229f6](https://github.com/meadmin-cn/meadmin-template/commit/77229f6e78c628896b37b3841fa2a6ec13755fd2))
* **request:** 将请求地址/api/改为公共前缀 ([a417ef8](https://github.com/meadmin-cn/meadmin-template/commit/a417ef8437b048f8d245db6a9b4f524dde884af5))
* **router:** 修复 连续跳转两个路由菜单 loading不关闭的问题 ([caba383](https://github.com/meadmin-cn/meadmin-template/commit/caba3839f764dff85359cb445515ca53f456876b))
* **router:** 修复 连续跳转两个路由菜单 loading不关闭的问题 ([#41](https://github.com/meadmin-cn/meadmin-template/issues/41)) ([ae14db5](https://github.com/meadmin-cn/meadmin-template/commit/ae14db5bfa456ea08d7d292e33aa23d309961109))
* **router:** 修复 连续跳转两个路由菜单 loading不关闭的问题 ([#41](https://github.com/meadmin-cn/meadmin-template/issues/41)) ([d452ded](https://github.com/meadmin-cn/meadmin-template/commit/d452dede76206c277043a578e1d2fc7aace4b039))
* svg image 引入修改规避警告 ([cd4d985](https://github.com/meadmin-cn/meadmin-template/commit/cd4d985886d9db3c41b26c4031f355440976d952))


### 重构[refactor]

* 更换el-drawer custom-class 为class ([753a534](https://github.com/meadmin-cn/meadmin-template/commit/753a53433c217930dce750976b7d932212537401))
* 快捷搜索重构 ([4034dae](https://github.com/meadmin-cn/meadmin-template/commit/4034dae508c243d14052c9b2002b5d4c6e6a0eac))
* **request:** 将/api/设置为前缀 ([29223fd](https://github.com/meadmin-cn/meadmin-template/commit/29223fd29ff1dbcf678fc0e6bafd654dfd8df614))


### 新功能[feat]

* 关闭eslint错误检测 ([337fdea](https://github.com/meadmin-cn/meadmin-template/commit/337fdea66f31a54f5d7d760fcab419ac9087220b))
* **meTable:** 加上分页支持 ([2d6e446](https://github.com/meadmin-cn/meadmin-template/commit/2d6e4462f9e17d7d97c46609ae7c1a3e27743c40))
* **meVxeTable:** 加上分页支持、快捷搜索重构 ([9bb99ca](https://github.com/meadmin-cn/meadmin-template/commit/9bb99ca894f7806972160dcb2ae9bb306adb0d72))


### 其他[chore]

* **package:** element-plus 依赖版本更新 ([ea392e7](https://github.com/meadmin-cn/meadmin-template/commit/ea392e7b76145a558e61e248ab36e6470fc3b83f))
* release v1.1.1 ([70143bc](https://github.com/meadmin-cn/meadmin-template/commit/70143bc373b957d7d96f6b2909fd70cd049eab16))
* release v1.1.2 ([8b2641a](https://github.com/meadmin-cn/meadmin-template/commit/8b2641af936b9cd7b41f67b2db587e31e97d7d0b))
* template-release v1.1.2 ([3a124ea](https://github.com/meadmin-cn/meadmin-template/commit/3a124ea8afdfd3b781876239adae76430cd9211c))
* template-release v1.1.3 ([96303cd](https://github.com/meadmin-cn/meadmin-template/commit/96303cd6ca9bb7e10fed741a2a4d7e71575efad9))

## [1.1.2](https://github.com/meadmin-cn/meadmin-template/compare/main-1.1.1...main-1.1.2) (2022-11-17)


### 性能改进[perf]

* **request:** 优化 request类型及使用示例以更好的提示返回值 ([f3f4079](https://github.com/meadmin-cn/meadmin-template/commit/f3f4079cdc0ff060c60654cb1d5d2ae24956411d))


### Bug 修复[fix]

* **api:** 修复userInfoApi类型检查错误 ([d82d9fe](https://github.com/meadmin-cn/meadmin-template/commit/d82d9fe22a7ec71f46f369e8463555ef71a7fb8a))
* svg image 引入修改规避警告 ([4e166dd](https://github.com/meadmin-cn/meadmin-template/commit/4e166dda5febdfab48a34cc4fbbbab054171c12f))


### 文档更改[docs]

* **README:** 文档介绍更改 ([c77a402](https://github.com/meadmin-cn/meadmin-template/commit/c77a402486286e8b78198bd4f8518f3623a24368))


### 其他[chore]

* template-release v1.1.2 ([6b2b845](https://github.com/meadmin-cn/meadmin-template/commit/6b2b845e448cfa38b561844ff7a5c1ec13e1e53b))

## [1.1.1](https://github.com/meadmin-cn/meadmin-template/compare/main-1.1.0...main-1.1.1) (2022-11-10)


### 重构[refactor]

* 优化ts类型写法 ([12159b3](https://github.com/meadmin-cn/meadmin-template/commit/12159b331ad7fbec042e899e6768c22e824d9b65))


### 新功能[feat]

* 菜单栏头部标题固定顶部 ([7a141c6](https://github.com/meadmin-cn/meadmin-template/commit/7a141c6a57c3640df38ae370135167667179fc0a))
* 加上app create start 表示以便判断是否是热更新引用拿到 ([417d82f](https://github.com/meadmin-cn/meadmin-template/commit/417d82f1e4d5dab5a72eb190ac9389164af7ca62))
* 接口请求公共提示加上国际化支持 ([dfaeb8b](https://github.com/meadmin-cn/meadmin-template/commit/dfaeb8b3f44a3e938924aa248366ec28487ed855))
* 请求示例加上自动请求示例 ([5c01ed5](https://github.com/meadmin-cn/meadmin-template/commit/5c01ed522b0080deac654c5719f8175fc169e8ce))
* 添加菜单搜索功能 ([f42271c](https://github.com/meadmin-cn/meadmin-template/commit/f42271c1cde311a5986ce5558298ad26378f395a))


### Bug 修复[fix]

* 全局变量命名加上$ ([dd4c537](https://github.com/meadmin-cn/meadmin-template/commit/dd4c537472745ef255cc808b48e2941dfc819e0e))
* 修复layout及子组件更改时热更新报错问题(将layout layoutPage改为动态引入) ([3a96bb6](https://github.com/meadmin-cn/meadmin-template/commit/3a96bb6fc0bba6419d82f36d889488ae8b374651))


### 其他[chore]

* template-release v1.1.0 ([932f8af](https://github.com/meadmin-cn/meadmin-template/commit/932f8af224e787fe1e17fbf2ec042db83d01ef86))
* template-release v1.1.1 ([d2a563f](https://github.com/meadmin-cn/meadmin-template/commit/d2a563f134a5e3866a17445bc024f625329abd9a))


### 性能改进[perf]

* 升级auto 插件版本 ([091d675](https://github.com/meadmin-cn/meadmin-template/commit/091d67557da35bb936746f0a6d921fdfcd87d6cd))
* 示例路由layout改完动态引入 ([f9b05b5](https://github.com/meadmin-cn/meadmin-template/commit/f9b05b573a4284e8aa259550e184e40dadabb926))

## [1.1.0](https://github.com/meadmin-cn/meadmin-template/compare/main-1.1.0...main-1.1.0) (2022-11-07)


### 性能改进[perf]

* 升级auto 插件版本 ([5639716](https://github.com/meadmin-cn/meadmin-template/commit/56397162146eab346663fa038142c60c4664e062))
* 优化meTable表格查询书写方式 ([6427d80](https://github.com/meadmin-cn/meadmin-template/commit/6427d8044b92092e95e1ac61300146311671c5e2))


### 重构[refactor]

* 判断改为用全局变量$start ([933e842](https://github.com/meadmin-cn/meadmin-template/commit/933e84246b41743d895e3aa87714fe2bc59c0ead))
* 优化ts类型写法 ([d901046](https://github.com/meadmin-cn/meadmin-template/commit/d90104643e4045b5c948a09db47f3b96caaf3f1b))
* emit 和props type声明优化 ([de509a7](https://github.com/meadmin-cn/meadmin-template/commit/de509a79e220f6ee94a56847df0e283dc80ae330))


### 其他[chore]

* template-release v1.1.0 ([8ed9d52](https://github.com/meadmin-cn/meadmin-template/commit/8ed9d52b30f10c76aa7ec87f7c1221065b875923))


### 新功能[feat]

* 加上app create start 表示以便判断是否是热更新引用拿到 ([c083ef1](https://github.com/meadmin-cn/meadmin-template/commit/c083ef18ba58070b1dcf003b6f3bf22cd67eeab2))
* 加上markdown编辑器demo ([8da0f85](https://github.com/meadmin-cn/meadmin-template/commit/8da0f853becf43bf322c9ea4644e7e187fceb0e9))
* 接口请求公共提示加上国际化支持 ([e950419](https://github.com/meadmin-cn/meadmin-template/commit/e9504191c1016b657bae42978c36cb477a04ca37))
* 请求示例加上自动请求示例 ([f5e739b](https://github.com/meadmin-cn/meadmin-template/commit/f5e739b5e4f2a939f11cd240d541db7b7cb70d09))
* 优化markdown示例：加上文件上传优化展示demo ([97c7d14](https://github.com/meadmin-cn/meadmin-template/commit/97c7d141d173cca27e31368238fade8c531e16e0))


### Bug 修复[fix]

* 全局变量命名加上$ ([4feb44f](https://github.com/meadmin-cn/meadmin-template/commit/4feb44f578cf9cc906878bc5d8699f4a0f8d4393))

## [1.0.13](https://github.com/meadmin-cn/meadmin-template/compare/main-1.0.12...main-1.0.13) (2022-10-19)


### Bug 修复[fix]

* 首页设置修复 ([697d75f](https://github.com/meadmin-cn/meadmin-template/commit/697d75fdcfc7c5612b77442a32d8dd873e4dea9d))
* 修复optimizeDeps.entries设置错误（应为相对于项目根的相对路径） ([962ae3b](https://github.com/meadmin-cn/meadmin-template/commit/962ae3b9a964289f42e1b48cb94e889527a9e7cd))


### 其他[chore]

* template-release v1.0.13 ([1a1d21e](https://github.com/meadmin-cn/meadmin-template/commit/1a1d21e2324eddb0d0a7128fbda1555541eff36a))

## [1.0.12](https://github.com/meadmin-cn/meadmin-template/compare/main-1.0.11...main-1.0.12) (2022-10-19)


### 新功能[feat]

* 忽略resolveComponent can only be used in render() or setup().的警告 ([9c228c5](https://github.com/meadmin-cn/meadmin-template/commit/9c228c53944d7e6d02ac8e4088f32a02a5b15e99))


### 重构[refactor]

* 路由注册组件函数去除多余的async ([9ef5d98](https://github.com/meadmin-cn/meadmin-template/commit/9ef5d98ec92f10d0f59a47ca2d6b78ad6ff00b1e))
* vite.ts配置项文件路径改为绝对路径 ([674d849](https://github.com/meadmin-cn/meadmin-template/commit/674d8493383433e8a1d3c4f8e5c6c95cffcb6f01))


### Bug 修复[fix]

* 修复表格打印时的抖动问题 ([9d4da74](https://github.com/meadmin-cn/meadmin-template/commit/9d4da742e10cf68a78fe94b44d0be13f9a193032))
* 修复角色权限搜索样式 ([77a83bf](https://github.com/meadmin-cn/meadmin-template/commit/77a83bf93973c660d51724d193aaba57da050fcd))
* 修复请求loading异常和mock异常问题 ([11afdc4](https://github.com/meadmin-cn/meadmin-template/commit/11afdc4acc2ab614d2e1a2cd768a8aba9174c2d1))
* 已登录情况下访问时loading无法消除问题。 ([b928655](https://github.com/meadmin-cn/meadmin-template/commit/b928655101283ba5a110c5c77321a474c7629044))


### 其他[chore]

* template-release v1.0.12 ([ed9141e](https://github.com/meadmin-cn/meadmin-template/commit/ed9141ea31bd2bb8934ae836ff8bc4722811d5f1))

## [1.0.11](https://github.com/meadmin-cn/meadmin-template/compare/main-1.0.10...main-1.0.11) (2022-10-08)


### 重构[refactor]

* vueSetUpExtend 改完使用外部包 ([d763c63](https://github.com/meadmin-cn/meadmin-template/commit/d763c631581168c6e2e0798f6e504400d05c9cb4))


### Bug 修复[fix]

* 将请求loading改为使用全局loading ([6781d61](https://github.com/meadmin-cn/meadmin-template/commit/6781d6179fb5e0e4f5bf86c6f91ea588078e3c71))


### 其他[chore]

* 包版本变更为正式版本 ([d2df17e](https://github.com/meadmin-cn/meadmin-template/commit/d2df17eb043fea4ce5a96652ad856029858208dc))
* 提交日志还原 ([74ee344](https://github.com/meadmin-cn/meadmin-template/commit/74ee344c667a6396fa5154b8dd5c3dd39aee082d))
* 提交日志和版本还原 ([2e94319](https://github.com/meadmin-cn/meadmin-template/commit/2e9431999603e96fc33195f8bb4cc861e6270ff3))
* release v1.0.11 ([377f687](https://github.com/meadmin-cn/meadmin-template/commit/377f6870ca477fd3ce7d3bcc86f30792dffea81b))
* template-release v1.0.11 ([717e71e](https://github.com/meadmin-cn/meadmin-template/commit/717e71efbe97b5762b15dde4e5719c99ac112b3c))
* template-release v1.0.11 ([547cd8e](https://github.com/meadmin-cn/meadmin-template/commit/547cd8e608c5c7bd755ecb4cf516429c1f6e2be8))

## [1.0.10](https://github.com/meadmin-cn/meadmin-template/compare/main-1.0.9...main-1.0.10) (2022-10-02)


### 重构[refactor]

* 404页面样式更改 ([54c8108](https://github.com/meadmin-cn/meadmin-template/commit/54c8108bda9f84ebe2ae4b72105b73734888bb05))
* log改为用统一类打印，便于注释掉error和warn打印 ([ed33ffe](https://github.com/meadmin-cn/meadmin-template/commit/ed33ffe90e51bb490a9aadcc41bf0a942cd06e3d))


### 还原提交[revert]

* 忽略vscode设置 ([f624985](https://github.com/meadmin-cn/meadmin-template/commit/f6249854e091c5606b1cf696cb68eb38e1f81e18))


### 新功能[feat]

* 加上页面切换loading,loading改为加在page上 ([53b16ab](https://github.com/meadmin-cn/meadmin-template/commit/53b16ab88e339205e2a930e61b21d1b4cf6553c6))
* 加上注册动态路由视图模块监听 ([ea40981](https://github.com/meadmin-cn/meadmin-template/commit/ea4098172a5365bf4e25530f1818c062ebb56529))
* 加上api获取路由菜单模式 ([d079cb3](https://github.com/meadmin-cn/meadmin-template/commit/d079cb30aeeb78a93b977e550290117459f501c8))


### 其他[chore]

* 将菜单模式默认值改为静态 ([ad852ff](https://github.com/meadmin-cn/meadmin-template/commit/ad852ff092c693c2b05f01e6f56e3b0d8ad451e2))
* git加上工作区设置 ([179694f](https://github.com/meadmin-cn/meadmin-template/commit/179694f76014f29541b8743e2f068bf8af6ef552))
* template-release v1.0.10 ([e5e5004](https://github.com/meadmin-cn/meadmin-template/commit/e5e50047260a290c7f6948ed46efd2492deb2117))

## [1.0.9](https://github.com/meadmin-cn/meadmin-template/compare/main-1.0.8...main-1.0.9) (2022-09-27)


### Bug 修复[fix]

* 加上漏掉的包 ([1e725a7](https://github.com/meadmin-cn/meadmin-template/commit/1e725a742db5b5403b1d40e6859696bf21bf4860))


### 其他[chore]

* template-release v1.0.9 ([842dda0](https://github.com/meadmin-cn/meadmin-template/commit/842dda017e978048205ec1a1a782fbfe51384004))

## [1.0.8](https://github.com/meadmin-cn/meadmin-template/compare/main-1.0.7...main-1.0.8) (2022-09-27)


### 重构[refactor]

* 将vxeatab 兼容性改为使用vxe-table-plugin-element插件 ([ee56698](https://github.com/meadmin-cn/meadmin-template/commit/ee56698346d73dfa026c7082d05d8373a7f4d53a))


### 新功能[feat]

* 加上图片预览函数调用 ([4d10803](https://github.com/meadmin-cn/meadmin-template/commit/4d1080337cfa73976a13288863d3b4bc64246f6f))
* 加上babel支持打包浏览器版本为'chrome 87', 'safari 13', 'firefox 78', 'edge 88' ([18bfbf1](https://github.com/meadmin-cn/meadmin-template/commit/18bfbf10fe87f667e16e2296843f8c364507ef55))


### 其他[chore]

* 完善说明 ([fed6280](https://github.com/meadmin-cn/meadmin-template/commit/fed6280e4830551afdf5ed5201d6a16d1a37a8e3))
* template-release v1.0.8 ([8051d04](https://github.com/meadmin-cn/meadmin-template/commit/8051d046d6d3f2bb6ef2cf1e3afb71938861792f))

## [1.0.7](https://github.com/meadmin-cn/meadmin-template/compare/main-1.0.6...main-1.0.7) (2022-09-23)


### 样式更改[style]

* 格式问题 ([ce865e1](https://github.com/meadmin-cn/meadmin-template/commit/ce865e1adaa4af6d2b1cc4fbff67a24d69d39aad))


### 新功能[feat]

* 加上菜单权限示例 ([453ed89](https://github.com/meadmin-cn/meadmin-template/commit/453ed899810c14790c6a38c4692fe3c430188b11))
* 加上请求成功提示 ([683c69a](https://github.com/meadmin-cn/meadmin-template/commit/683c69af8716bfc3cb39212fdbcaaadab2268b40))
* 加上全局popover-scrollbar-y 类 ([af84a4b](https://github.com/meadmin-cn/meadmin-template/commit/af84a4bc06b06ad09ab20eca6edcbdd227647744))
* 加上自定义vxeTable ([2206494](https://github.com/meadmin-cn/meadmin-template/commit/2206494debbdc93696a3e3e3334d1b42bf2fc0e4))
* 角色权限demo高度自动初始化时计算 ([ebedfb3](https://github.com/meadmin-cn/meadmin-template/commit/ebedfb392ea20b2559af43b7705174b3c6cff72a))
* 角色权限demo优化更新接口，优化样式 ([7815394](https://github.com/meadmin-cn/meadmin-template/commit/7815394c4c1750b15f015b9c0975070da5caf758))
* 全局语言包支持引入ts、json格式，支持子孙文件夹引入 ([b92081a](https://github.com/meadmin-cn/meadmin-template/commit/b92081a5c9f7a2b3970fd80fd0c4a8bf9fa9b2d6))
* 自定义列加上高度限制和滚动条 ([d0216ef](https://github.com/meadmin-cn/meadmin-template/commit/d0216ef4f636dfb9af471b6ff99e188aab2d0449))
* 自动生成加载组件类型 ([9d7f3d9](https://github.com/meadmin-cn/meadmin-template/commit/9d7f3d93906f8a63df376e9a97dd9bc30d452f16))
* meTable、加上toolsButton ([1af2f9b](https://github.com/meadmin-cn/meadmin-template/commit/1af2f9b981d98ed11bc665f17834b061d2a6451b))
* meVxeTable加上toolsButton ([eb0aaab](https://github.com/meadmin-cn/meadmin-template/commit/eb0aaabfc9f3a02a39d6a4b7128bdd7b82ebe5cb))


### CI发版[ci]

* 去掉无用eslint规则，加上提交自动vue-tsc ([39963ef](https://github.com/meadmin-cn/meadmin-template/commit/39963ef53833980812bd9c18f9e0aebd9934636a))
* 去掉无用eslint规则，加上提交自动vue-tsc ([32f2bfe](https://github.com/meadmin-cn/meadmin-template/commit/32f2bfec1710b97e5365d09ed1ff960e66a073e5))


### 文档更改[docs]

* 格式优化 ([a138eb2](https://github.com/meadmin-cn/meadmin-template/commit/a138eb2d81c8821cc96083f946c72e73340608cb))
* 格式优化 ([e612861](https://github.com/meadmin-cn/meadmin-template/commit/e612861fe93491e637c1c320b39337c029565f02))
* 加上贡献说明 ([2e8472b](https://github.com/meadmin-cn/meadmin-template/commit/2e8472b05d5f2e1bf108c2ef0dd1a684007b2e08))
* 说明更改 ([f22b0a7](https://github.com/meadmin-cn/meadmin-template/commit/f22b0a7cb8405b805cbeb6296657f454c74a7862))
* 说明更改 ([99569c4](https://github.com/meadmin-cn/meadmin-template/commit/99569c4927b65e4f81b2fb8f46b472859fbadc43))


### 性能改进[perf]

* 加上element动态函数默认缓存 ([292de0a](https://github.com/meadmin-cn/meadmin-template/commit/292de0a3871c90398c336ebdebe26ec066ab09b5))
* 加上element动态函数默认缓存 ([34da538](https://github.com/meadmin-cn/meadmin-template/commit/34da538019ddfa77ee65f15caf6af7d647305edc))
* 强制依赖项扫描src,会导致首次启动变慢，但是不会每次第一次打开新页面都刷新 ([5635d36](https://github.com/meadmin-cn/meadmin-template/commit/5635d36df0c12dcdfa75a9a9130f09c6a697d570))


### Bug 修复[fix]

* 加上导出按钮展示判断，加上tooltip暗黑样式 ([1806291](https://github.com/meadmin-cn/meadmin-template/commit/1806291d48e0016d33a5fc03c6788ea0ed439e1c))
* 去掉vxe-table-plugin-element改为内部编写，以修复tsc检查错误 ([a193611](https://github.com/meadmin-cn/meadmin-template/commit/a19361158447009bac6c9eded1b3465bb7d1e8fa))
* 修复打包后自定义表单样式问题 ([eb5a77d](https://github.com/meadmin-cn/meadmin-template/commit/eb5a77d35daf3f7f094ab27935ec9db3dfd646a1))
* 修复跟字体不生效bug ([fe8c558](https://github.com/meadmin-cn/meadmin-template/commit/fe8c558f76378d1c9266016989713d34aabfcaf1))
* 修复更新完权限组不更新bug ([64f8c3a](https://github.com/meadmin-cn/meadmin-template/commit/64f8c3aa2a68ad5867ea96ff1dc71b39daf76535))
* 修复两个组件引入通一子组件热更新报错问题 ([add16a9](https://github.com/meadmin-cn/meadmin-template/commit/add16a923c320c8dce0ee82c38ba5ce64c47df1d))
* 右侧按钮组权限判断错误 ([1854dfc](https://github.com/meadmin-cn/meadmin-template/commit/1854dfc59f070c6f306fdb23c7c55a364019b8ab))
* eslint检查支持数字属性 ([e0e5a4b](https://github.com/meadmin-cn/meadmin-template/commit/e0e5a4bc074759534b96744d06701d769fbec692))


### 重构[refactor]

* 命名规范化ELTable改为ELTableInstance ([8775dab](https://github.com/meadmin-cn/meadmin-template/commit/8775dab4f4844bc566708a4d2fa7c1e66434a7a9))
* 移除vite-plugin-mock包改为@meadmin-cn/vite-plugin-mock ([8fd1bf6](https://github.com/meadmin-cn/meadmin-template/commit/8fd1bf65d3c4bd16ebae6311f621a7970ca54700))
* logo ico添加，登录页背景色设为page color ([f292910](https://github.com/meadmin-cn/meadmin-template/commit/f2929100aaaa2fde01ba9db2a01f3326194f4bff))
* meTable 类型提示增强，导出字段 elTable改为elTableRef ([0ca430a](https://github.com/meadmin-cn/meadmin-template/commit/0ca430a8225d2fc9979dba0988dc3c3ea159cc81))
* metable命名修复 ([eec04d3](https://github.com/meadmin-cn/meadmin-template/commit/eec04d36443382a9fa16870567fcdb7d4c785584))


### 其他[chore]

* 加上element函数声明 ([09d3e59](https://github.com/meadmin-cn/meadmin-template/commit/09d3e59659217cc6a84ea64e931613b944e84176))
* 加上element函数声明 ([a1b08a6](https://github.com/meadmin-cn/meadmin-template/commit/a1b08a6e3bda3da9e732c90ed318bf4e5b7998c7))
* template-release v1.0.7 ([ca785dd](https://github.com/meadmin-cn/meadmin-template/commit/ca785dd16dfb4a01040041df9a6f017fdc4a33c0))

## [1.0.6](https://github.com/meadmin-cn/meadmin-template/compare/main-1.0.5...main-1.0.6) (2022-09-17)


### 还原提交[revert]

* 恢复布局 ([b522084](https://github.com/meadmin-cn/meadmin-template/commit/b522084fe49b992b96b10d87ce7746027ce2e209))


### 性能改进[perf]

* 语言包缓存判断优化 ([4dda883](https://github.com/meadmin-cn/meadmin-template/commit/4dda88326dd2b7ea77b433c72982f90d93a8fc90))


### 其他[chore]

* template-release v1.0.6 ([e64542b](https://github.com/meadmin-cn/meadmin-template/commit/e64542bc7df049082db916bd1cca339f66849a6c))


### 新功能[feat]

* 加上数字动画demo ([cf9c3a1](https://github.com/meadmin-cn/meadmin-template/commit/cf9c3a17e6a9a60b2f788942851fc5e3d2f7ecf5))
* 加上自定义表单 ([bb0d704](https://github.com/meadmin-cn/meadmin-template/commit/bb0d704e0cd5e4386f538e5e3a5bdca04c773d01))
* 将main高度设置为剩余高度 ([0ee886d](https://github.com/meadmin-cn/meadmin-template/commit/0ee886d4c3bc5024881de4b72cb7b74376b3e137))
* 将main高度设置为剩余高度 ([5549c1e](https://github.com/meadmin-cn/meadmin-template/commit/5549c1e223f76fcbe4829a4431c53ae07aa30e0d))
* 排版布局更改 ([af4bf59](https://github.com/meadmin-cn/meadmin-template/commit/af4bf598ff02a05f1c99bf0cbf187855652a6c9e))
* 自定义表单加上皮肤兼容 ([5e9529d](https://github.com/meadmin-cn/meadmin-template/commit/5e9529d9b3ba88ebe8b5a2fa3ca65d90adb64b01))
* page 背景色更改 ([ecaa1d9](https://github.com/meadmin-cn/meadmin-template/commit/ecaa1d95ccef5f7eb7e066ef0c4103ac084511c2))


### Bug 修复[fix]

* 背景色错误修复 ([24a799d](https://github.com/meadmin-cn/meadmin-template/commit/24a799d1a2892d92979a844818dd328893851cb4))
* 修复菜单收起时，感觉卡顿问题 ([81a18a3](https://github.com/meadmin-cn/meadmin-template/commit/81a18a31385dc84250e66dce55bf86b52201b4c8))
* 修复打包后打印样式加载异常错误 ([3730b75](https://github.com/meadmin-cn/meadmin-template/commit/3730b756ae508ed57e64dfc2895748ada6db5876))
* 修复加载顺序问题 ([d55f537](https://github.com/meadmin-cn/meadmin-template/commit/d55f5375930a55dbca043776bd1d97897a2f35ed))
* 修复加载顺序问题 ([1699be0](https://github.com/meadmin-cn/meadmin-template/commit/1699be0b95e44dba06e2e66b9c09be50da7a14d6))
* 修复全局组件不加载语言包问题 ([33ae6fe](https://github.com/meadmin-cn/meadmin-template/commit/33ae6fe604e42f2c476542f6dcf9dd4abd0dedeb))
* 修复数字动画 end变更后不重新触发的bug、优化格式化函数 ([c9abbf3](https://github.com/meadmin-cn/meadmin-template/commit/c9abbf389a8315bf64ffd9e90cbf22ba52cff475))
* 修复语言包组件判断逻辑错误 ([597390a](https://github.com/meadmin-cn/meadmin-template/commit/597390a6a499ee0605fa7e30d5c8ba8518110afe))
* a标签默认样式去除修复 ([f758914](https://github.com/meadmin-cn/meadmin-template/commit/f758914f340b0fd43dcbf5172bb21562740d2b58))

## [1.0.5](https://github.com/meadmin-cn/meadmin-template/compare/main-1.0.4...main-1.0.5) (2022-09-14)


### Bug 修复[fix]

* 修复 vue ts类型错误 ([9df571f](https://github.com/meadmin-cn/meadmin-template/commit/9df571fa744ec6a21a10547a5f288a03ef661cba))
* 修复ts 类型any错误 ([e47193f](https://github.com/meadmin-cn/meadmin-template/commit/e47193f723ebab0c74e3ca74de66d970bc62f92a))


### CI发版[ci]

* release 命令加上 tsc check ([4e71820](https://github.com/meadmin-cn/meadmin-template/commit/4e71820ce29cd4ffa5f6db6be10d9cb30ad24a0d))


### 其他[chore]

* template-release v1.0.5 ([0183cf8](https://github.com/meadmin-cn/meadmin-template/commit/0183cf856485869e527dcd837603012fe283d21f))

## [1.0.4](https://github.com/meadmin-cn/meadmin-template/compare/main-1.0.3...main-1.0.4) (2022-09-14)


### 新功能[feat]

* 二次elTable封装 meTable ([75af535](https://github.com/meadmin-cn/meadmin-template/commit/75af535b33c2f68dc4318cb468ccd00a6920526c))
* 加上gzip压缩 ([54ed748](https://github.com/meadmin-cn/meadmin-template/commit/54ed748ae9ef2bd2b5d155faad48c5a43866159c))
* 加上keepAlive全局开启配置 ([091f9ad](https://github.com/meadmin-cn/meadmin-template/commit/091f9ad03cb6730174bbeb0236b5f53bf2d51e57))
* 加上version配置以便在版本改变时清空缓存 ([4f0a169](https://github.com/meadmin-cn/meadmin-template/commit/4f0a169e2ff061681dfc5319da046eda29bafb41))


### 其他[chore]

* release v1.0.4 ([f69ad85](https://github.com/meadmin-cn/meadmin-template/commit/f69ad85bd556e39bfcd4de13dbcb642bfea84c54))
* template-release v1.0.4 ([16c4c72](https://github.com/meadmin-cn/meadmin-template/commit/16c4c7289124a683b00500257dc466ebaab976f1))


### Bug 修复[fix]

* 格式化后ts忽略错误修复 ([360e7e7](https://github.com/meadmin-cn/meadmin-template/commit/360e7e7005257b3b7319c2e4d163876dc200afc2))
* 修复多级路由下切换的报错问题，扁平化为二级路由 ([9736fb1](https://github.com/meadmin-cn/meadmin-template/commit/9736fb15f75188999c3f943034a5c4d1041d0cf5))
* meNumber组件默认格式化函数地区更换为zh ([a719cc6](https://github.com/meadmin-cn/meadmin-template/commit/a719cc6e67f23f459749cb0ce6202e307bc0d5ee))
* meNumber组件默认格式化函数地区更换为zh ([#20](https://github.com/meadmin-cn/meadmin-template/issues/20)) ([85e6d0d](https://github.com/meadmin-cn/meadmin-template/commit/85e6d0db1cd3747178e7e303d684b0d899c5ba0a))

## [1.0.3](https://github.com/meadmin-cn/meadmin-template/compare/main-1.0.1...main-1.0.3) (2022-09-03)


### 文档更改[docs]

* 加上仓库说明 ([5ad6b06](https://github.com/meadmin-cn/meadmin-template/commit/5ad6b06af546a54c6dcd6bc11d3818ac169faab4))
* 加上文档地址 ([#16](https://github.com/meadmin-cn/meadmin-template/issues/16)) 
* 文档名称修改 ([2484986](https://github.com/meadmin-cn/meadmin-template/commit/2484986058c3f1c85c692d770871006309a43f56))


### 重构[refactor]

* 暗黑模式切换的设置项吸入settingStore中 ([7f7c306](https://github.com/meadmin-cn/meadmin-template/commit/7f7c306ad6316c77265e0a0088065d681058b3e7))
* 设置按钮优化 ([67fc2cc](https://github.com/meadmin-cn/meadmin-template/commit/67fc2cc9fbf0a65a1f8313ec8d8756779943ebaa))
* 优化刷新页面，方式 ([9714171](https://github.com/meadmin-cn/meadmin-template/commit/9714171ca36d1dd41ec638488512545de81fed3b))


### 样式更改[style]

* 忽略纯js库 ([79f4f0b](https://github.com/meadmin-cn/meadmin-template/commit/79f4f0b1b2bf74cef763da1bfc3e1b0aad264d1c))
* 加上国内访问及文档地址 ([eb2fc36](https://github.com/meadmin-cn/meadmin-template/commit/eb2fc36f7692b9b1c7bc390c51e37555034e5e15))
* 组件名规范化，改为大驼峰 ([d2f64f6](https://github.com/meadmin-cn/meadmin-template/commit/d2f64f6d7b911a71c27c8e65fe5b2edc94d52ef7))
* elint格式修复 ([1e59609](https://github.com/meadmin-cn/meadmin-template/commit/1e596094d89e03799e7f7cab9c33b6f0c5b1944c))
* layout组件名改为大驼峰 ([b25b453](https://github.com/meadmin-cn/meadmin-template/commit/b25b4537a14354de5889cddfb4c4682b3701af05))


### 新功能[feat]

* 登录框加上验证码 ([09f5ccc](https://github.com/meadmin-cn/meadmin-template/commit/09f5ccc0b6a5707f2e81fcfe2a712d43216e7e54))
* 登录输入框加一键清空和密码框显示隐藏 ([6648b9a](https://github.com/meadmin-cn/meadmin-template/commit/6648b9addfff7f939d703d8a9b35cf478947b7ac))
* 加上数字动画组件 ([82951a9](https://github.com/meadmin-cn/meadmin-template/commit/82951a9614249dd558dd3a5d00f7583b7279a143))
* 加上wangEditor ([4abbbda](https://github.com/meadmin-cn/meadmin-template/commit/4abbbdadd343aca078fdc218d249248d58454d6c))
* 加上wangEditor语言包优化滚动条样式 ([1c235e5](https://github.com/meadmin-cn/meadmin-template/commit/1c235e533a42e4a835450f38ac457041561d4a3e))
* 控制面板demo完善完成 ([d20e602](https://github.com/meadmin-cn/meadmin-template/commit/d20e602b5064c3469501fca7d9fab95c14bf759f))
* tag加上删除按钮 ([a20fe1a](https://github.com/meadmin-cn/meadmin-template/commit/a20fe1a7f8c340804209407d40418e4cadcb57a3))


### 其他[chore]

* 禁用eslint vue/no-v-html规则 ([f228569](https://github.com/meadmin-cn/meadmin-template/commit/f2285691c92edec5303ec5b8714bdf8f3f1e04b3))
* template-release v1.0.2 ([4e226bb](https://github.com/meadmin-cn/meadmin-template/commit/4e226bbd5ff58d227a6ff6f49ba1f59dcdb05861))
* template-release v1.0.3 ([73c881a](https://github.com/meadmin-cn/meadmin-template/commit/73c881adf616d6afbf68f27dc8f6f39d679befcd))


### Bug 修复[fix]

* 顶栏按钮hover背景色修改 ([d2489ee](https://github.com/meadmin-cn/meadmin-template/commit/d2489ee161561729e5f2ec867eda97bf82baef44))
* 去除VueI18nPlugin以让Vue18n其支持内联 JavaScript 字符串的模板 ([ee18a05](https://github.com/meadmin-cn/meadmin-template/commit/ee18a0599dda460681d0cd5974c70ec89cc33818))
* 修复多级菜单无法正常加载bug ([f14edad](https://github.com/meadmin-cn/meadmin-template/commit/f14edadaa5c9cf6b7ef5b898e70f3a135ef54b34))
* 修复关闭页面不清除缓存bug ([39f8e24](https://github.com/meadmin-cn/meadmin-template/commit/39f8e248a56a868c00e4129beeebec4aef357b48))
* 修复关闭tag按钮需要点两次才生效问题 ([9f7c99b](https://github.com/meadmin-cn/meadmin-template/commit/9f7c99bdb9ee24859054d446ff3a6146e24ef493))
* 修复mockjs模糊匹配问题 ([e287f58](https://github.com/meadmin-cn/meadmin-template/commit/e287f58cb8fd3f08eaa5a118fcafbf9fbc0d5ed7))

## [1.0.1](https://github.com/meadmin-cn/meadmin-template/compare/main-1.0.0...main-1.0.1) (2022-08-28)


### 文档更改[docs]

* 加上文档地址 ([#13](https://github.com/meadmin-cn/meadmin-template/issues/13)) ([0ee505d](https://github.com/meadmin-cn/meadmin-template/commit/0ee505d4c4a7b4260ad52ae03fc4d6755c57dcc4))
* 文档名称修改 ([9ceeb9b](https://github.com/meadmin-cn/meadmin-template/commit/9ceeb9bd87bd2dcb5a2f3671973889d8f0018ab8))


### 重构[refactor]

* 样式规范化 ([d45ff53](https://github.com/meadmin-cn/meadmin-template/commit/d45ff5355dffd36c00f3bc7944764c25ea2ea1a5))


### Bug 修复[fix]

* 去除VueI18nPlugin以让Vue18n其支持内联 JavaScript 字符串的模板 ([e76411f](https://github.com/meadmin-cn/meadmin-template/commit/e76411fc7c3ed8e3cdb37ad79a88309951ba49e8))
* 修复文档链接样式错误，修复刷新不自动关闭菜单错误 ([2de62c5](https://github.com/meadmin-cn/meadmin-template/commit/2de62c52559b712b4b43aa5305292b5795020125))


### 新功能[feat]

* 登录框加上验证码 ([5526274](https://github.com/meadmin-cn/meadmin-template/commit/5526274e52c0819a0281345215186ebd29a9a401))
* 登录输入框加一键清空和密码框显示隐藏 ([f6c1c65](https://github.com/meadmin-cn/meadmin-template/commit/f6c1c65b41e87d740b15d0c4acae7fffaff64158))
* 加上切换动画 ([2be4f31](https://github.com/meadmin-cn/meadmin-template/commit/2be4f3134d703c3b6fa3f65596541f1da16c25dc))


### 其他[chore]

* template-release v1.0.1 ([424eaee](https://github.com/meadmin-cn/meadmin-template/commit/424eaeef8498b8e3dccea3da38c82b1e7abdf3a9))

## 1.0.0 (2022-08-22)


### 重构[refactor]

* 去掉自动注册全局组件和全局指令，改为自动引入组件和指令 ([35501cc](https://github.com/meadmin-cn/meadmin-template/commit/35501cc1a9dff732010ee4e2373779aefae2c633))


### 文档更改[docs]

* readMe完善 ([827eed3](https://github.com/meadmin-cn/meadmin-template/commit/827eed3746eae9c170cd60039298b4eee49448ca))
* readMe完善 ([aff4f85](https://github.com/meadmin-cn/meadmin-template/commit/aff4f85dc195a4183a1d89806c6da99b41382358))


### 新功能[feat]

* 暗黑模式 ([e82fa93](https://github.com/meadmin-cn/meadmin-template/commit/e82fa93c92ef92a3447f2c69001a651a083516d7))
* 登录背景图修改 ([e1c7ba2](https://github.com/meadmin-cn/meadmin-template/commit/e1c7ba2244b8e43fbbe8d05993d2d4bfdfeaec9f))
* 多语言国际化支持 ([c8cf980](https://github.com/meadmin-cn/meadmin-template/commit/c8cf980f56a5d39f15708cde664b38599bee964a))
* 加上请求示例，修复进度条bug ([e35fa8b](https://github.com/meadmin-cn/meadmin-template/commit/e35fa8b90e885b7e14e83f008e7cb09cc602bf89))
* 加上用户名密码示例说明 ([e89d918](https://github.com/meadmin-cn/meadmin-template/commit/e89d9187448ae91372610c8c8e50cd027a35983f))
* 加上用户名密码示例说明 ([e836e58](https://github.com/meadmin-cn/meadmin-template/commit/e836e58cee716655468f413fccdb906cf2e5f3cf))
* 加上组件自动引入 ([8aa4552](https://github.com/meadmin-cn/meadmin-template/commit/8aa45526184fba4fe95f4c348973a68fa2b8f4bb))
* 加上gitee地址 ([3628d63](https://github.com/meadmin-cn/meadmin-template/commit/3628d63dbdea703e434e33eac82209cb862bead1))
* 加上gitee地址 ([dcb5200](https://github.com/meadmin-cn/meadmin-template/commit/dcb5200227a470479e98441809c7cb8f0c720b62))
* 加上size切换 ([7c7806e](https://github.com/meadmin-cn/meadmin-template/commit/7c7806e19542fc77f5c169af5ccac104258b81e7))
* 模式改为hash 构建方式修改 ([7601f65](https://github.com/meadmin-cn/meadmin-template/commit/7601f6531b6041101e57aa2c619e04bb8ff20f54))
* 模式改为hash 构建方式修改 ([8b65177](https://github.com/meadmin-cn/meadmin-template/commit/8b65177b74e394e705ed0f2396f901572a6193b1))
* 全局语言包改完文件夹形式设置 ([33202c9](https://github.com/meadmin-cn/meadmin-template/commit/33202c9ccca55a276a741d49461d99d9d8644039))
* 全局组件、全局指令自动注册 ([afcfce5](https://github.com/meadmin-cn/meadmin-template/commit/afcfce5a59186e4c129d89ddfa19d0382b747184))
* 自定义keepAlive缓存支持无name缓存，支持不同路由同一组件复用时分别缓存 ([8cf313c](https://github.com/meadmin-cn/meadmin-template/commit/8cf313c1f46d2b6f417dd5f711f0c08d7a5a72b2))
* 自适应手机模式 ([72b0db9](https://github.com/meadmin-cn/meadmin-template/commit/72b0db9de2b4fd4128dbb8b2e9452a9d87e2e2f0))
* eslint规则完善 ([ec1ce18](https://github.com/meadmin-cn/meadmin-template/commit/ec1ce1895e78cf3643af965658e6c2513ed0728d))
* **icon:** 增加自动生成svg icon ts type ([09d1181](https://github.com/meadmin-cn/meadmin-template/commit/09d118128f19d6affd0ccf92809752298e6739e8))
* logo和登录背景修改 ([1412b21](https://github.com/meadmin-cn/meadmin-template/commit/1412b21167d20c64307be72a83ef6c002ed4b828))
* svg图标自动引入 ([66fdb78](https://github.com/meadmin-cn/meadmin-template/commit/66fdb78c1c4b1bbf8e0943d66ec97e858d1fad2f))


### Bug 修复[fix]

* 部署分支修复 ([fe2183c](https://github.com/meadmin-cn/meadmin-template/commit/fe2183c48b44c7752c3cee00f3a56a877e03f023))
* 打包后route 不支持json格式化 ([c9c33ae](https://github.com/meadmin-cn/meadmin-template/commit/c9c33ae573e5222482ddf72a63eb4548a1bf43e3))
* 打开路由不是首页时tag展示错误 ([f681fda](https://github.com/meadmin-cn/meadmin-template/commit/f681fda0afdd9a38607da9a33790db9f0771d132))
* 导入组件type自动生成错误修复 ([f1a78cb](https://github.com/meadmin-cn/meadmin-template/commit/f1a78cbbe883edc67df29c88b3f24a3dba78875f))
* 登陆表单背景色修改 ([3cec483](https://github.com/meadmin-cn/meadmin-template/commit/3cec483334a96b99c77cff024e6c1b72e5c8a6a9))
* 发布actions错误修复 ([09c21d4](https://github.com/meadmin-cn/meadmin-template/commit/09c21d4844375af699069ebca56c76dbd657bb28))
* 更新日志错误修复 ([d1bda58](https://github.com/meadmin-cn/meadmin-template/commit/d1bda5815be080f6ca3dc0a286795436554e64c3))
* 修复面包屑bug,构建方式改为先vite ([0fa3d03](https://github.com/meadmin-cn/meadmin-template/commit/0fa3d03bf8d76096d6a8bf6c376dc70ce0a1a672))
* 修复语言包加载热更新出错的问题 ([4a5a1c3](https://github.com/meadmin-cn/meadmin-template/commit/4a5a1c37dbca7e78797e2f3ed45eb9005b280fc9))
* 修复releas 名称错误 ([4ad1b36](https://github.com/meadmin-cn/meadmin-template/commit/4ad1b3666a40294f3ab1c56ec2dd641cda68f9cc))
* 修复size类型错误 ([5b111d8](https://github.com/meadmin-cn/meadmin-template/commit/5b111d8ac345b6dbe1ea1bdf46d9e585f659076c))
* changelog重命名 ([dda6f26](https://github.com/meadmin-cn/meadmin-template/commit/dda6f26c20569159826bdc13bc652b2075edd1d4))
* changelog重命名 ([81b3621](https://github.com/meadmin-cn/meadmin-template/commit/81b3621044de1dc6c08f24ee93255a809ffb6bf2))
* eslintrc 配置错误修复 ([a28bc4e](https://github.com/meadmin-cn/meadmin-template/commit/a28bc4e309aa35f63f1a21c0f666405326e3e5f7))
* git actions 错误修复 ([346b30e](https://github.com/meadmin-cn/meadmin-template/commit/346b30e28a5514bbfe79173576242f61ab37f511))
* vue keepAlive不支持清除无绑定输入框缓存,demo更新 ([64859ff](https://github.com/meadmin-cn/meadmin-template/commit/64859ff9c182b52f181e56b3ad807b88632ae134))
* vue route 不支持json格式化 ([52d1b36](https://github.com/meadmin-cn/meadmin-template/commit/52d1b36068b9167c0b828d07c67d16af67f242e7))


### 其他[chore]

* 合并基础模板分支 ([b82860d](https://github.com/meadmin-cn/meadmin-template/commit/b82860dae13b40f8612b6efd38d98e55167e52e9))
* release v1.0.0 ([f92424c](https://github.com/meadmin-cn/meadmin-template/commit/f92424c051c920223d05a27cab07b3ea0fbadc9d))
* release v1.0.0 ([7deb74a](https://github.com/meadmin-cn/meadmin-template/commit/7deb74acc9bad9b105cd1626f3bd75347390b128))
* template-release v1.0.0 ([63dd83f](https://github.com/meadmin-cn/meadmin-template/commit/63dd83f2835892cb7053d30d8e29318df9baf0e2))


### CI发版[ci]

* 部署脚本错误修复 ([0ff7d74](https://github.com/meadmin-cn/meadmin-template/commit/0ff7d74aa6080759111ef699abb8fb09c866438d))
* 改为各自独立发版命令 ([ae3bcf7](https://github.com/meadmin-cn/meadmin-template/commit/ae3bcf77b67375e8b35253a3dd7838c9fd8666c5))
* 忽略部署文件 ([37d7068](https://github.com/meadmin-cn/meadmin-template/commit/37d7068cb090070d94484f3c047f19deeb04b22b))
* 加上提交信息校验遵循conventional commits ([88edeb4](https://github.com/meadmin-cn/meadmin-template/commit/88edeb499f9cecf34604e8bfbbd9da06f961d923))
* 加上自动发布预览 ([12d4fc1](https://github.com/meadmin-cn/meadmin-template/commit/12d4fc12c3f6e7bcd690273a4e34a77cec6c43ec))
* 提交加上hook ([5437577](https://github.com/meadmin-cn/meadmin-template/commit/5437577a91dd5268befc5f30d5fc4a34b6f4c53d))
* 修改template发版配置 ([7b0ac81](https://github.com/meadmin-cn/meadmin-template/commit/7b0ac815d3ee19c2f83eedca999b4ca2145a312e))
* 修改template发版配置 ([6e1c5d1](https://github.com/meadmin-cn/meadmin-template/commit/6e1c5d160760c8da49f03ba3a383ae809cb880f2))
* realease 发版分支修复 ([f7636ea](https://github.com/meadmin-cn/meadmin-template/commit/f7636eaa0d2c55a23d266c831a3dd74b4931fa79))
* release tag name 添加 ([7155a2a](https://github.com/meadmin-cn/meadmin-template/commit/7155a2a9f494cf613ffa23e45ed260d4bb24e862))
* release tag修复 ([209e1d9](https://github.com/meadmin-cn/meadmin-template/commit/209e1d97a8b525a903406d3aa9310684ff7ad02d))
* release配置修改 ([4bc22c3](https://github.com/meadmin-cn/meadmin-template/commit/4bc22c359da581cd6270dcbd04eb2fdc177a9e64))
