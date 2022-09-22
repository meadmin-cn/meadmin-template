import { app } from '@/app';
import VXETable from 'vxe-table';
import VXETablePluginElement from './vxe-table-plugin-element';
import './style.scss';
import './vxe-table-plugin-element/style.scss';
VXETable.use(VXETablePluginElement);
if (app.config.globalProperties.$t) {
  //为了兼容热更新重新拉取
  VXETable.setup({
    // 对组件内置的提示语进行国际化翻译
    i18n: app.config.globalProperties.$t,
  });
  app.use(VXETable);
}
