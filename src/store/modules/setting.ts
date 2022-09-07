import { Language } from 'element-plus/es/locale';
import { themeConfig, settingKey, localeConfig } from '@/config';
import { event, mitter } from '@/event';
import { mixColor } from '@/utils/helper';
const { css } = useStyleTag('');
const useSettingStore = defineStore('setting', {
  state: () => ({
    themeConfig: useStorage(`${settingKey}-theme`, themeConfig, localStorage, { mergeDefaults: true }),
    locale: useStorage(`${settingKey}-locale`, localeConfig.localeSetting.locale ?? 'zh-cn'),
    elLocale: undefined as Language | undefined,
    isDark: useDark({ storageKey: 'me-color-dark-scheme' }),
    showSettingMenu: false,
  }),
  actions: {
    setPrimaryStyle() {
      const style = [];
      const darkStyle = [];
      style.push(`--el-color-primary:${this.themeConfig.primaryColor} !important`);
      darkStyle.push(`--el-color-primary:${this.themeConfig.primaryColor} !important`);
      style.push('--el-color-primary-rgb:' + mixColor(this.themeConfig.primaryColor, '#000000', 0) + ' !important');
      darkStyle.push('--el-color-primary-rgb:' + mixColor(this.themeConfig.primaryColor, '#000000', 0) + ' !important');
      style.push(
        '--el-color-primary-dark-2:' + mixColor(this.themeConfig.primaryColor, '#000000', 0.2) + ' !important',
      );
      darkStyle.push(
        '--el-color-primary-dark-2:' + mixColor(this.themeConfig.primaryColor, '#ffffff', 0.2) + ' !important',
      );
      [3, 5, 7, 8, 9].forEach((number) => {
        style.push(
          `--el-color-primary-light-${number}:` +
            mixColor(this.themeConfig.primaryColor, '#ffffff', number / 10) +
            ' !important',
        );
        darkStyle.push(
          `--el-color-primary-light-${number}:` +
            mixColor(this.themeConfig.primaryColor, '#141414', number / 10) +
            ' !important',
        );
      });
      css.value = ':root{' + style.join(';') + '}' + '.dark{' + darkStyle.join(';') + '}';
    },
    clearCache() {
      localStorage.clear();
    },
  },
});
mitter.once(event.READY, () => {
  const settingStore = useSettingStore();
  watch(() => settingStore.themeConfig.primaryColor, settingStore.setPrimaryStyle, { immediate: true });
});
export default useSettingStore;
