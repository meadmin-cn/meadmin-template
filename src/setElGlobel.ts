import { provideGlobalConfig } from 'element-plus';
import { useSettingStore } from './store';
export default defineComponent({
  setup() {
    const settingStore = useSettingStore();
    provideGlobalConfig(
      {
        locale: settingStore.elLocale,
        size: settingStore.themeConfig.size,
      },
      undefined,
      true,
    );
  },
  render: () => '',
});
