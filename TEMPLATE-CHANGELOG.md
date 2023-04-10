

## [1.1.13](https://github.com/meadmin-cn/meadmin-template/compare/template-1.1.12...template-1.1.13) (2023-04-10)


### Bug 修复[fix]

* layput meKeepAlive 最大缓存值设置为30 ([4637542](https://github.com/meadmin-cn/meadmin-template/commit/4637542e9ac9939ddcb7f00bdd65b0305dfdc92d))


### 重构[refactor]

* 删除多余的类型引入 ([615f452](https://github.com/meadmin-cn/meadmin-template/commit/615f45288dab280c7b7520c13c370e7e935ec7a3))

## [1.1.12](https://github.com/meadmin-cn/meadmin-template/compare/template-1.1.11...template-1.1.12) (2023-04-03)


### Bug 修复[fix]

* meKeepAlive常量改为动态获取(因为@vue/share在里面删除了) ([6d2380d](https://github.com/meadmin-cn/meadmin-template/commit/6d2380d493004aadb5b76e5478f39cda5a2cf814))


### 新功能[feat]

* 加上缺少的幽灵依赖，解决pnpm启动和打包问题 ([4f878ec](https://github.com/meadmin-cn/meadmin-template/commit/4f878ec350464e4247f389a086f3b082a94875d8))

## [1.1.11](https://github.com/meadmin-cn/meadmin-template/compare/template-1.1.10...template-1.1.11) (2023-03-29)


### 新功能[feat]

* 优化全局类型 ([1f07048](https://github.com/meadmin-cn/meadmin-template/commit/1f07048713d979ec8920c0bd637876ba449b5286))

## [1.1.10](https://github.com/meadmin-cn/meadmin-template/compare/template-1.1.9...template-1.1.10) (2023-03-21)


### Bug 修复[fix]

* 修复字体切换无效问题 ([134dae5](https://github.com/meadmin-cn/meadmin-template/commit/134dae5c02de1bfa3402b7484301efcd5d3a8dcc))

## [1.1.9](https://github.com/meadmin-cn/meadmin-template/compare/template-1.1.8...template-1.1.9) (2023-03-14)


### CI发版[ci]

* github hook 加上自动创建nojekll ([5391f33](https://github.com/meadmin-cn/meadmin-template/commit/5391f333f53d5e3483ca892c0b6f2b7eba5d2fe4))


### Bug 修复[fix]

* 修复vue-i18n文件打包引入错误bug ([26225f8](https://github.com/meadmin-cn/meadmin-template/commit/26225f8539e6df0a98f47446cb2a2c6c270baa4b))

## [1.1.8](https://github.com/meadmin-cn/meadmin-template/compare/template-1.1.7...template-1.1.8) (2023-01-09)


### 其他[chore]

* 移除meKeepAlive 需要的define常量 （从vue自动获取） ([b5ee3ea](https://github.com/meadmin-cn/meadmin-template/commit/b5ee3ea2e52613fa7a62f65bc08e875b9a22004c))


### 重构[refactor]

* 禁用autoImport ts类型自动生成（已放到git中无需再次生成） ([31f3566](https://github.com/meadmin-cn/meadmin-template/commit/31f3566858fddf4cf41ca300e1bbf8f617981547))


### CI发版[ci]

* eslint name 校验规则更宽松 ([c7341a7](https://github.com/meadmin-cn/meadmin-template/commit/c7341a736d169ac6df9036407d485e4268d85721))
* husky校验 esint 设置为自动修复 ([ba826aa](https://github.com/meadmin-cn/meadmin-template/commit/ba826aa478cf40934c960058fc212e61fa53e96d))


### 新功能[feat]

* 加上全局滚动条样式 ([365e065](https://github.com/meadmin-cn/meadmin-template/commit/365e065aca58e9a4a6bafe410a56d802506824ac))
* 请求函数加上数组query 转换 ([39fa3f9](https://github.com/meadmin-cn/meadmin-template/commit/39fa3f91374019d7349159fef79636cf1fad5439))
* reqest query参数 删除null值 ([26a989c](https://github.com/meadmin-cn/meadmin-template/commit/26a989c6d237263c8356f47a51278b5d5f92b2ec))

## [1.1.7](https://github.com/meadmin-cn/meadmin-template/compare/template-1.1.6...template-1.1.7) (2023-01-06)


### 重构[refactor]

* 将vite plugin 提取到plugins目录中优化目录结构 ([d121f11](https://github.com/meadmin-cn/meadmin-template/commit/d121f119d7e1174230d6801190527dd11f338a5c))
* enums 更换为dict ([58c6f8d](https://github.com/meadmin-cn/meadmin-template/commit/58c6f8dbad246e04a379c7c382fa308a8b26d84c))


### 性能改进[perf]

* 升级vite版本为4 typescript为4.9 ([4174cda](https://github.com/meadmin-cn/meadmin-template/commit/4174cda2dd9623f0132cf8611b6a19e5e1f4f3a0))
* 优化tsc校验 ([ea23ee4](https://github.com/meadmin-cn/meadmin-template/commit/ea23ee428d0e6eb32c3e6846a4ce08e77ff874c0))


### 文档更改[docs]

* vite版本改为4版本 ([f733260](https://github.com/meadmin-cn/meadmin-template/commit/f7332606f0fb929605401a444bbfc4eca566c36c))


### Bug 修复[fix]

* 变量错误修复 ([89f2e91](https://github.com/meadmin-cn/meadmin-template/commit/89f2e91f9e64cb452409104691661529daabfd2b))
* 修复 加载路由组件异常后切换路由loading不关闭bug ([dba02e2](https://github.com/meadmin-cn/meadmin-template/commit/dba02e221a4d314b161b7809bc81362f4ea6d0d5))

## [1.1.6](https://github.com/meadmin-cn/meadmin-template/compare/template-1.1.4...template-1.1.6) (2022-12-20)


### 重构[refactor]

* loginApi直接返回axios规避vue-request非setup警告 ([eb036b6](https://github.com/meadmin-cn/meadmin-template/commit/eb036b6488f42afca9c150e42f298e448416a723))


### Bug 修复[fix]

* 修复热更新后偶现页面loading无法关闭的bug ([8a9e731](https://github.com/meadmin-cn/meadmin-template/commit/8a9e731ad8c0708f7e7fe53270ad50503c531a8c))


### 文档更改[docs]

* 特性介绍添加 ([67fd3c4](https://github.com/meadmin-cn/meadmin-template/commit/67fd3c40b0df4693378a138582da8206192f47ec))

## [1.1.4](https://github.com/meadmin-cn/meadmin-template/compare/template-1.1.3...template-1.1.4) (2022-12-19)


### 其他[chore]

* **vite.config:** 手动设置core-js/modules预构建, ([3a0de1b](https://github.com/meadmin-cn/meadmin-template/commit/3a0de1b11c13a3be47bd815b00b826f24eb7bc58))
* **vite.config:** chunks打包优化 ([899f20d](https://github.com/meadmin-cn/meadmin-template/commit/899f20dca0cb25b38cbb6e8c8c1419aab707447e))


### Bug 修复[fix]

* **router:** 修复 连续跳转两个路由菜单progress进度条不关闭的问题 ([1c25234](https://github.com/meadmin-cn/meadmin-template/commit/1c25234f9477fe700a24fff1b16e661c00f3a079))

## [1.1.3](https://github.com/meadmin-cn/meadmin-template/compare/template-1.1.2...template-1.1.3) (2022-12-01)


### Bug 修复[fix]

* **router:** 修复 连续跳转两个路由菜单 loading不关闭的问题 ([caba383](https://github.com/meadmin-cn/meadmin-template/commit/caba3839f764dff85359cb445515ca53f456876b))


### 文档更改[docs]

* **README:** 说明描述更改 ([06eac69](https://github.com/meadmin-cn/meadmin-template/commit/06eac69b706f93372c82b2b71bea87d14488c4b9))


### 重构[refactor]

* 更换el-drawer custom-class 为class ([753a534](https://github.com/meadmin-cn/meadmin-template/commit/753a53433c217930dce750976b7d932212537401))
* **request:** 将/api/设置为前缀 ([29223fd](https://github.com/meadmin-cn/meadmin-template/commit/29223fd29ff1dbcf678fc0e6bafd654dfd8df614))


### 其他[chore]

* **package:** element-plus 依赖版本更新 ([ea392e7](https://github.com/meadmin-cn/meadmin-template/commit/ea392e7b76145a558e61e248ab36e6470fc3b83f))

## [1.1.2](https://github.com/meadmin-cn/meadmin-template/compare/template-1.1.1...template-1.1.2) (2022-11-17)


### 性能改进[perf]

* **request:** 优化 request类型及使用示例以更好的提示返回值 ([f3f4079](https://github.com/meadmin-cn/meadmin-template/commit/f3f4079cdc0ff060c60654cb1d5d2ae24956411d))


### Bug 修复[fix]

* **api:** 修复userInfoApi类型检查错误 ([d82d9fe](https://github.com/meadmin-cn/meadmin-template/commit/d82d9fe22a7ec71f46f369e8463555ef71a7fb8a))
* svg image 引入修改规避警告 ([4e166dd](https://github.com/meadmin-cn/meadmin-template/commit/4e166dda5febdfab48a34cc4fbbbab054171c12f))


### 文档更改[docs]

* **README:** 文档介绍更改 ([c77a402](https://github.com/meadmin-cn/meadmin-template/commit/c77a402486286e8b78198bd4f8518f3623a24368))

## [1.1.1](https://github.com/meadmin-cn/meadmin-template/compare/template-1.1.0...template-1.1.1) (2022-11-10)


### 新功能[feat]

* 菜单栏头部标题固定顶部 ([7a141c6](https://github.com/meadmin-cn/meadmin-template/commit/7a141c6a57c3640df38ae370135167667179fc0a))
* 添加菜单搜索功能 ([f42271c](https://github.com/meadmin-cn/meadmin-template/commit/f42271c1cde311a5986ce5558298ad26378f395a))


### Bug 修复[fix]

* 修复layout及子组件更改时热更新报错问题(将layout layoutPage改为动态引入) ([3a96bb6](https://github.com/meadmin-cn/meadmin-template/commit/3a96bb6fc0bba6419d82f36d889488ae8b374651))

## [1.1.0](https://github.com/meadmin-cn/meadmin-template/compare/template-1.0.13...template-1.1.0) (2022-11-07)


### 性能改进[perf]

* 升级auto 插件版本 ([091d675](https://github.com/meadmin-cn/meadmin-template/commit/091d67557da35bb936746f0a6d921fdfcd87d6cd))


### Bug 修复[fix]

* 全局变量命名加上$ ([dd4c537](https://github.com/meadmin-cn/meadmin-template/commit/dd4c537472745ef255cc808b48e2941dfc819e0e))


### 重构[refactor]

* 优化ts类型写法 ([12159b3](https://github.com/meadmin-cn/meadmin-template/commit/12159b331ad7fbec042e899e6768c22e824d9b65))


### 新功能[feat]

* 加上app create start 表示以便判断是否是热更新引用拿到 ([417d82f](https://github.com/meadmin-cn/meadmin-template/commit/417d82f1e4d5dab5a72eb190ac9389164af7ca62))
* 接口请求公共提示加上国际化支持 ([dfaeb8b](https://github.com/meadmin-cn/meadmin-template/commit/dfaeb8b3f44a3e938924aa248366ec28487ed855))
* 请求示例加上自动请求示例 ([5c01ed5](https://github.com/meadmin-cn/meadmin-template/commit/5c01ed522b0080deac654c5719f8175fc169e8ce))

## [1.0.13](https://github.com/meadmin-cn/meadmin-template/compare/template-1.0.12...template-1.0.13) (2022-10-19)


### Bug 修复[fix]

* 修复optimizeDeps.entries设置错误（应为相对于项目根的相对路径） ([962ae3b](https://github.com/meadmin-cn/meadmin-template/commit/962ae3b9a964289f42e1b48cb94e889527a9e7cd))

## [1.0.12](https://github.com/meadmin-cn/meadmin-template/compare/template-1.0.11...template-1.0.12) (2022-10-19)


### 新功能[feat]

* 忽略resolveComponent can only be used in render() or setup().的警告 ([9c228c5](https://github.com/meadmin-cn/meadmin-template/commit/9c228c53944d7e6d02ac8e4088f32a02a5b15e99))


### 重构[refactor]

* 路由注册组件函数去除多余的async ([9ef5d98](https://github.com/meadmin-cn/meadmin-template/commit/9ef5d98ec92f10d0f59a47ca2d6b78ad6ff00b1e))
* vite.ts配置项文件路径改为绝对路径 ([674d849](https://github.com/meadmin-cn/meadmin-template/commit/674d8493383433e8a1d3c4f8e5c6c95cffcb6f01))


### Bug 修复[fix]

* 修复请求loading异常和mock异常问题 ([11afdc4](https://github.com/meadmin-cn/meadmin-template/commit/11afdc4acc2ab614d2e1a2cd768a8aba9174c2d1))
* 已登录情况下访问时loading无法消除问题。 ([b928655](https://github.com/meadmin-cn/meadmin-template/commit/b928655101283ba5a110c5c77321a474c7629044))

## [1.0.11](https://github.com/meadmin-cn/meadmin-template/compare/template-1.0.10...template-1.0.11) (2022-10-08)


### 重构[refactor]

* vueSetUpExtend 改完使用外部包 ([d763c63](https://github.com/meadmin-cn/meadmin-template/commit/d763c631581168c6e2e0798f6e504400d05c9cb4))


### Bug 修复[fix]

* 将请求loading改为使用全局loading ([6781d61](https://github.com/meadmin-cn/meadmin-template/commit/6781d6179fb5e0e4f5bf86c6f91ea588078e3c71))


### 其他[chore]

* 包版本变更为正式版本 ([d2df17e](https://github.com/meadmin-cn/meadmin-template/commit/d2df17eb043fea4ce5a96652ad856029858208dc))
* 提交日志和版本还原 ([2e94319](https://github.com/meadmin-cn/meadmin-template/commit/2e9431999603e96fc33195f8bb4cc861e6270ff3))
* template-release v1.0.11 ([547cd8e](https://github.com/meadmin-cn/meadmin-template/commit/547cd8e608c5c7bd755ecb4cf516429c1f6e2be8))

## [1.0.10](https://github.com/meadmin-cn/meadmin-template/compare/template-1.0.9...template-1.0.10) (2022-10-02)


### 重构[refactor]

* 404页面样式更改 ([54c8108](https://github.com/meadmin-cn/meadmin-template/commit/54c8108bda9f84ebe2ae4b72105b73734888bb05))
* log改为用统一类打印，便于注释掉error和warn打印 ([ed33ffe](https://github.com/meadmin-cn/meadmin-template/commit/ed33ffe90e51bb490a9aadcc41bf0a942cd06e3d))


### 其他[chore]

* 将菜单模式默认值改为静态 ([ad852ff](https://github.com/meadmin-cn/meadmin-template/commit/ad852ff092c693c2b05f01e6f56e3b0d8ad451e2))
* git加上工作区设置 ([179694f](https://github.com/meadmin-cn/meadmin-template/commit/179694f76014f29541b8743e2f068bf8af6ef552))


### 还原提交[revert]

* 忽略vscode设置 ([f624985](https://github.com/meadmin-cn/meadmin-template/commit/f6249854e091c5606b1cf696cb68eb38e1f81e18))


### 新功能[feat]

* 加上页面切换loading,loading改为加在page上 ([53b16ab](https://github.com/meadmin-cn/meadmin-template/commit/53b16ab88e339205e2a930e61b21d1b4cf6553c6))
* 加上注册动态路由视图模块监听 ([ea40981](https://github.com/meadmin-cn/meadmin-template/commit/ea4098172a5365bf4e25530f1818c062ebb56529))
* 加上api获取路由菜单模式 ([d079cb3](https://github.com/meadmin-cn/meadmin-template/commit/d079cb30aeeb78a93b977e550290117459f501c8))

## [1.0.9](https://github.com/meadmin-cn/meadmin-template/compare/template-1.0.8...template-1.0.9) (2022-09-27)


### Bug 修复[fix]

* 加上漏掉的包 ([1e725a7](https://github.com/meadmin-cn/meadmin-template/commit/1e725a742db5b5403b1d40e6859696bf21bf4860))

## [1.0.8](https://github.com/meadmin-cn/meadmin-template/compare/template-1.0.7...template-1.0.8) (2022-09-27)


### 新功能[feat]

* 加上babel支持打包浏览器版本为'chrome 87', 'safari 13', 'firefox 78', 'edge 88' ([18bfbf1](https://github.com/meadmin-cn/meadmin-template/commit/18bfbf10fe87f667e16e2296843f8c364507ef55))


### 其他[chore]

* 完善说明 ([fed6280](https://github.com/meadmin-cn/meadmin-template/commit/fed6280e4830551afdf5ed5201d6a16d1a37a8e3))

## [1.0.7](https://github.com/meadmin-cn/meadmin-template/compare/template-1.0.6...template-1.0.7) (2022-09-23)


### 新功能[feat]

* 加上请求成功提示 ([683c69a](https://github.com/meadmin-cn/meadmin-template/commit/683c69af8716bfc3cb39212fdbcaaadab2268b40))
* 加上全局popover-scrollbar-y 类 ([af84a4b](https://github.com/meadmin-cn/meadmin-template/commit/af84a4bc06b06ad09ab20eca6edcbdd227647744))
* 全局语言包支持引入ts、json格式，支持子孙文件夹引入 ([b92081a](https://github.com/meadmin-cn/meadmin-template/commit/b92081a5c9f7a2b3970fd80fd0c4a8bf9fa9b2d6))
* 自动生成加载组件类型 ([9d7f3d9](https://github.com/meadmin-cn/meadmin-template/commit/9d7f3d93906f8a63df376e9a97dd9bc30d452f16))
* page 背景色更改 ([ecaa1d9](https://github.com/meadmin-cn/meadmin-template/commit/ecaa1d95ccef5f7eb7e066ef0c4103ac084511c2))


### CI发版[ci]

* 去掉无用eslint规则，加上提交自动vue-tsc ([32f2bfe](https://github.com/meadmin-cn/meadmin-template/commit/32f2bfec1710b97e5365d09ed1ff960e66a073e5))


### 文档更改[docs]

* 格式优化 ([e612861](https://github.com/meadmin-cn/meadmin-template/commit/e612861fe93491e637c1c320b39337c029565f02))
* 加上贡献说明 ([2e8472b](https://github.com/meadmin-cn/meadmin-template/commit/2e8472b05d5f2e1bf108c2ef0dd1a684007b2e08))
* 说明更改 ([99569c4](https://github.com/meadmin-cn/meadmin-template/commit/99569c4927b65e4f81b2fb8f46b472859fbadc43))


### 其他[chore]

* 加上element函数声明 ([a1b08a6](https://github.com/meadmin-cn/meadmin-template/commit/a1b08a6e3bda3da9e732c90ed318bf4e5b7998c7))


### 性能改进[perf]

* 加上element动态函数默认缓存 ([34da538](https://github.com/meadmin-cn/meadmin-template/commit/34da538019ddfa77ee65f15caf6af7d647305edc))
* 强制依赖项扫描src,会导致首次启动变慢，但是不会每次第一次打开新页面都刷新 ([5635d36](https://github.com/meadmin-cn/meadmin-template/commit/5635d36df0c12dcdfa75a9a9130f09c6a697d570))


### Bug 修复[fix]

* 修复菜单收起时，感觉卡顿问题 ([81a18a3](https://github.com/meadmin-cn/meadmin-template/commit/81a18a31385dc84250e66dce55bf86b52201b4c8))
* 修复跟字体不生效bug ([fe8c558](https://github.com/meadmin-cn/meadmin-template/commit/fe8c558f76378d1c9266016989713d34aabfcaf1))
* 修复两个组件引入通一子组件热更新报错问题 ([add16a9](https://github.com/meadmin-cn/meadmin-template/commit/add16a923c320c8dce0ee82c38ba5ce64c47df1d))
* a标签默认样式去除修复 ([f758914](https://github.com/meadmin-cn/meadmin-template/commit/f758914f340b0fd43dcbf5172bb21562740d2b58))
* eslint检查支持数字属性 ([e0e5a4b](https://github.com/meadmin-cn/meadmin-template/commit/e0e5a4bc074759534b96744d06701d769fbec692))


### 重构[refactor]

* 移除vite-plugin-mock包改为@meadmin-cn/vite-plugin-mock ([8fd1bf6](https://github.com/meadmin-cn/meadmin-template/commit/8fd1bf65d3c4bd16ebae6311f621a7970ca54700))
* logo ico添加，登录页背景色设为page color ([f292910](https://github.com/meadmin-cn/meadmin-template/commit/f2929100aaaa2fde01ba9db2a01f3326194f4bff))

## [1.0.6](https://github.com/meadmin-cn/meadmin-template/compare/template-1.0.5...template-1.0.6) (2022-09-16)


### 新功能[feat]

* 将main高度设置为剩余高度 ([5549c1e](https://github.com/meadmin-cn/meadmin-template/commit/5549c1e223f76fcbe4829a4431c53ae07aa30e0d))
* 排版布局更改 ([91d4631](https://github.com/meadmin-cn/meadmin-template/commit/91d4631f3a7b3b08effd6ce172e7b7eed7f8e6c6))


### 还原提交[revert]

* 恢复布局 ([b522084](https://github.com/meadmin-cn/meadmin-template/commit/b522084fe49b992b96b10d87ce7746027ce2e209))


### 性能改进[perf]

* 语言包缓存判断优化 ([4dda883](https://github.com/meadmin-cn/meadmin-template/commit/4dda88326dd2b7ea77b433c72982f90d93a8fc90))


### Bug 修复[fix]

* 修复加载顺序问题 ([1699be0](https://github.com/meadmin-cn/meadmin-template/commit/1699be0b95e44dba06e2e66b9c09be50da7a14d6))
* 修复全局组件不加载语言包问题 ([ccc0f93](https://github.com/meadmin-cn/meadmin-template/commit/ccc0f931757251b33a047b4b82f63c41fcfdae98))
* 修复语言包组件判断逻辑错误 ([597390a](https://github.com/meadmin-cn/meadmin-template/commit/597390a6a499ee0605fa7e30d5c8ba8518110afe))

## [1.0.5](https://github.com/meadmin-cn/meadmin-template/compare/template-1.0.4...template-1.0.5) (2022-09-14)


### Bug 修复[fix]

* 修复 vue ts类型错误 ([9df571f](https://github.com/meadmin-cn/meadmin-template/commit/9df571fa744ec6a21a10547a5f288a03ef661cba))


### CI发版[ci]

* release 命令加上 tsc check ([4e71820](https://github.com/meadmin-cn/meadmin-template/commit/4e71820ce29cd4ffa5f6db6be10d9cb30ad24a0d))

## [1.0.4](https://github.com/meadmin-cn/meadmin-template/compare/template-1.0.3...template-1.0.4) (2022-09-07)


### Bug 修复[fix]

* 修复多级路由下切换的报错问题，扁平化为二级路由 ([9736fb1](https://github.com/meadmin-cn/meadmin-template/commit/9736fb15f75188999c3f943034a5c4d1041d0cf5))


### 新功能[feat]

* 加上gzip压缩 ([54ed748](https://github.com/meadmin-cn/meadmin-template/commit/54ed748ae9ef2bd2b5d155faad48c5a43866159c))
* 加上keepAlive全局开启配置 ([091f9ad](https://github.com/meadmin-cn/meadmin-template/commit/091f9ad03cb6730174bbeb0236b5f53bf2d51e57))
* 加上version配置以便在版本改变时清空缓存 ([4f0a169](https://github.com/meadmin-cn/meadmin-template/commit/4f0a169e2ff061681dfc5319da046eda29bafb41))

## [1.0.3](https://github.com/meadmin-cn/meadmin-template/compare/template-1.0.2...template-1.0.3) (2022-09-03)


### 文档更改[docs]

* 加上仓库说明 ([5ad6b06](https://github.com/meadmin-cn/meadmin-template/commit/5ad6b06af546a54c6dcd6bc11d3818ac169faab4))


### 其他[chore]

* 禁用eslint vue/no-v-html规则 ([f228569](https://github.com/meadmin-cn/meadmin-template/commit/f2285691c92edec5303ec5b8714bdf8f3f1e04b3))


### 重构[refactor]

* 设置按钮优化 ([8d64714](https://github.com/meadmin-cn/meadmin-template/commit/8d64714126d054384a81d474b4b0a6b021ef02d5))
* 优化刷新页面，方式 ([9714171](https://github.com/meadmin-cn/meadmin-template/commit/9714171ca36d1dd41ec638488512545de81fed3b))


### 样式更改[style]

* 忽略纯js库 ([79f4f0b](https://github.com/meadmin-cn/meadmin-template/commit/79f4f0b1b2bf74cef763da1bfc3e1b0aad264d1c))
* 组件名规范化，改为大驼峰 ([d2f64f6](https://github.com/meadmin-cn/meadmin-template/commit/d2f64f6d7b911a71c27c8e65fe5b2edc94d52ef7))
* layout组件名改为大驼峰 ([b25b453](https://github.com/meadmin-cn/meadmin-template/commit/b25b4537a14354de5889cddfb4c4682b3701af05))


### 新功能[feat]

* tag加上删除按钮 ([a20fe1a](https://github.com/meadmin-cn/meadmin-template/commit/a20fe1a7f8c340804209407d40418e4cadcb57a3))


### Bug 修复[fix]

* 顶栏按钮hover背景色修改 ([d2489ee](https://github.com/meadmin-cn/meadmin-template/commit/d2489ee161561729e5f2ec867eda97bf82baef44))
* 修复多级菜单无法正常加载bug ([f14edad](https://github.com/meadmin-cn/meadmin-template/commit/f14edadaa5c9cf6b7ef5b898e70f3a135ef54b34))
* 修复关闭页面不清除缓存bug ([39f8e24](https://github.com/meadmin-cn/meadmin-template/commit/39f8e248a56a868c00e4129beeebec4aef357b48))
* 修复关闭tag按钮需要点两次才生效问题 ([9f7c99b](https://github.com/meadmin-cn/meadmin-template/commit/9f7c99bdb9ee24859054d446ff3a6146e24ef493))

## [1.0.2](https://github.com/meadmin-cn/meadmin-template/compare/template-1.0.0...template-1.0.2) (2022-09-01)


### 样式更改[style]

* 忽略纯js库 ([dad0920](https://github.com/meadmin-cn/meadmin-template/commit/dad092029d6b04a118b6f6eded3e31328bce6ac0))
* 加上国内访问及文档地址 ([eb2fc36](https://github.com/meadmin-cn/meadmin-template/commit/eb2fc36f7692b9b1c7bc390c51e37555034e5e15))
* elint格式修复 ([1e59609](https://github.com/meadmin-cn/meadmin-template/commit/1e596094d89e03799e7f7cab9c33b6f0c5b1944c))


### 文档更改[docs]

* 加上仓库说明 ([277d0bb](https://github.com/meadmin-cn/meadmin-template/commit/277d0bbea2ce0e6ba528fcf3db5cdf2f8d60a682))


### 重构[refactor]

* 暗黑模式切换的设置项吸入settingStore中 ([ddccfac](https://github.com/meadmin-cn/meadmin-template/commit/ddccfac17923b7f25d9d0ef7cdcb275c974bbdd3))
* 设置按钮优化 ([7f3e559](https://github.com/meadmin-cn/meadmin-template/commit/7f3e55902acf5ed0d15306c5afba4a85f6c02c40))

## [1.0.1](https://github.com/meadmin-cn/meadmin-template/compare/template-1.0.0...template-1.0.1) (2022-08-28)


### CI发版[ci]

* 改为各自独立发版命令 ([ae3bcf7](https://github.com/meadmin-cn/meadmin-template/commit/ae3bcf77b67375e8b35253a3dd7838c9fd8666c5))
* 忽略部署文件 ([37d7068](https://github.com/meadmin-cn/meadmin-template/commit/37d7068cb090070d94484f3c047f19deeb04b22b))


### 文档更改[docs]

* 加上文档地址 ([534d870](https://github.com/meadmin-cn/meadmin-template/commit/534d8700a397f65a2934fa0ffe199355bba75fed))
* 文档名称修改 ([2484986](https://github.com/meadmin-cn/meadmin-template/commit/2484986058c3f1c85c692d770871006309a43f56))


### 重构[refactor]

* 样式规范化 ([d7ee0dd](https://github.com/meadmin-cn/meadmin-template/commit/d7ee0ddeb46de0cb9db2b0882df43ac261d43bfa))


### Bug 修复[fix]

* 去除VueI18nPlugin以让Vue18n其支持内联 JavaScript 字符串的模板 ([8c78f47](https://github.com/meadmin-cn/meadmin-template/commit/8c78f474bf01e60fe930d8457fb6986a13b9f663))
* 修复文档链接样式错误，修复刷新不自动关闭菜单错误 ([6dda967](https://github.com/meadmin-cn/meadmin-template/commit/6dda967e3960625c64041d686972630503af0d72))


### 新功能[feat]

* 登录框加上验证码 ([3273dfb](https://github.com/meadmin-cn/meadmin-template/commit/3273dfb9092f4e7dadd466953fb9e3d970b49270))
* 登录输入框加一键清空和密码框显示隐藏 ([7905fb8](https://github.com/meadmin-cn/meadmin-template/commit/7905fb83ff6daa35422877cd741d9d6d99241239))
* 加上切换动画 ([303195a](https://github.com/meadmin-cn/meadmin-template/commit/303195a986900a751244ae5f22e1d79efcb5ed67))

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


### 其他[chore]

* 合并基础模板分支 ([b82860d](https://github.com/meadmin-cn/meadmin-template/commit/b82860dae13b40f8612b6efd38d98e55167e52e9))
* release v1.0.0 ([f92424c](https://github.com/meadmin-cn/meadmin-template/commit/f92424c051c920223d05a27cab07b3ea0fbadc9d))
* release v1.0.0 ([7deb74a](https://github.com/meadmin-cn/meadmin-template/commit/7deb74acc9bad9b105cd1626f3bd75347390b128))


### CI发版[ci]

* 部署脚本错误修复 ([0ff7d74](https://github.com/meadmin-cn/meadmin-template/commit/0ff7d74aa6080759111ef699abb8fb09c866438d))
* 加上提交信息校验遵循conventional commits ([88edeb4](https://github.com/meadmin-cn/meadmin-template/commit/88edeb499f9cecf34604e8bfbbd9da06f961d923))
* 加上自动发布预览 ([12d4fc1](https://github.com/meadmin-cn/meadmin-template/commit/12d4fc12c3f6e7bcd690273a4e34a77cec6c43ec))
* 提交加上hook ([5437577](https://github.com/meadmin-cn/meadmin-template/commit/5437577a91dd5268befc5f30d5fc4a34b6f4c53d))
* 修改template发版配置 ([7b0ac81](https://github.com/meadmin-cn/meadmin-template/commit/7b0ac815d3ee19c2f83eedca999b4ca2145a312e))
* 修改template发版配置 ([6e1c5d1](https://github.com/meadmin-cn/meadmin-template/commit/6e1c5d160760c8da49f03ba3a383ae809cb880f2))
* realease 发版分支修复 ([f7636ea](https://github.com/meadmin-cn/meadmin-template/commit/f7636eaa0d2c55a23d266c831a3dd74b4931fa79))
* release tag name 添加 ([7155a2a](https://github.com/meadmin-cn/meadmin-template/commit/7155a2a9f494cf613ffa23e45ed260d4bb24e862))
* release tag修复 ([209e1d9](https://github.com/meadmin-cn/meadmin-template/commit/209e1d97a8b525a903406d3aa9310684ff7ad02d))
* release配置修改 ([4bc22c3](https://github.com/meadmin-cn/meadmin-template/commit/4bc22c359da581cd6270dcbd04eb2fdc177a9e64))


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