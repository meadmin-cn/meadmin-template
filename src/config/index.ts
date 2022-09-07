import * as localeConfig from './locale';
import loginConfig from './login';
import themeConfig from './theme';
const settingKey = 'me-config';
const settingConfig = {
  openKeepAlive: true, // 是否开启KeepAlive缓存
};
export { loginConfig, localeConfig, themeConfig, settingKey, settingConfig };
