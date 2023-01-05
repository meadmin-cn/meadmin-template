import MenuModeEnum from '@/dict/menuModeEnum';
import * as localeConfig from './locale';
import loginConfig from './login';
import themeConfig from './theme';
const settingKey = 'me-config';
const settingConfig = {
  version: '1.0.3', //版本当版本改变时会清空localStorage和sessionStorage
  openKeepAlive: true, // 是否开启KeepAlive缓存
  menuMode: MenuModeEnum.STATIC, // 菜单模式
};
export { loginConfig, localeConfig, themeConfig, settingKey, settingConfig };
