import * as localeConfig from './locale';
let loginConfig = { //登录配置
    tokenName: 'auth-token',//cookie中存储的token key
    tokenExpires: 7,//token 过期时间
    tokenDomain: typeof window === 'undefined' ? '' : window.location.hostname,//token 存储cookie域名
}
let themeConfig = {//主题配置
    isDark: false,//是否暗黑模式
}
export { loginConfig, localeConfig, themeConfig }
