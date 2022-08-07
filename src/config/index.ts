import * as localeConfig from './locale';
import { sizeEnum } from '@/enums/configEnum';
let loginConfig = { //登录配置
    tokenName: 'auth-token',//cookie中存储的token key
    tokenExpires: 7,//token 过期时间
    tokenDomain: typeof window === 'undefined' ? '' : window.location.hostname,//token 存储cookie域名
}

//主题配置
export interface ThemeConfig {
    isDark: boolean,
    size: sizeEnum,
    menuCollapse: boolean,
}
let themeConfig: ThemeConfig = {
    isDark: false,//是否暗黑模式
    size: sizeEnum.default,//默认大小
    menuCollapse: false,//菜单是否折叠
}
export { loginConfig, localeConfig, themeConfig }
