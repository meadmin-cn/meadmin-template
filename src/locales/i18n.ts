import { App } from 'vue';
import { createI18n, I18nOptions } from 'vue-i18n';
import { localeConfig as config } from '@/config';
import { setI18nLanguage } from './helper';
import { useGlobalStore } from '@/store';

//安装VueI18n
export const installI18n = async (app: App) => {
  const options = Object.assign(config.localeSetting, { legacy: false, locale: undefined, globalInjection: true });
  let i18n = createI18n<{ legacy: false, globalInjection: true }>(options as { legacy: false, globalInjection: true } & I18nOptions);
  await setI18nLanguage(config.localeSetting.locale || 'zh-cn', false, i18n.global);
  app.use(i18n);
  useGlobalStore().i18n = i18n.global;
}
export * from './helper';
export * from './hooks';