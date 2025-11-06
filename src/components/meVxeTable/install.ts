import { app } from '@/app';
import { VxeUI, VxeModal } from 'vxe-pc-ui';
import { VxeTable, VxeColumn, VxeColgroup, VxeGrid, VxeToolbar } from 'vxe-table';
import VXETablePluginElement from 'vxe-table-plugin-element';
import 'vxe-table-plugin-element/dist/style.css';
import 'vxe-pc-ui/es/style.css'
import 'vxe-table/es/style.css'
import { useSettingStore } from '@/store';
VxeUI.use(VXETablePluginElement);
if (app?.config?.globalProperties?.$start) {
  //为了兼容热更新重新拉取
  VxeUI.setConfig({
    // 对组件内置的提示语进行国际化翻译
    i18n: app.config.globalProperties.$t,
  });
  app.use(VxeModal);
  app.use(VxeTable);
  app.use(VxeColumn);
  app.use(VxeColgroup);
  app.use(VxeGrid);
  app.use(VxeToolbar);
  const setting = useSettingStore();
  watch(
    () => setting.isDark,
    (val) => {
      VxeUI.setTheme(val ? 'dark' : 'light');
    },
    { immediate: true },
  );
}
