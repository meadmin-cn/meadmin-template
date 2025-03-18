import { app } from '@/app';
import VXETable from 'vxe-table';
import VXETablePluginElement from 'vxe-table-plugin-element';
import 'vxe-table-plugin-element/dist/style.css';
import 'vxe-table/lib/style.css';
import { useSettingStore } from '@/store';
VXETable.use(VXETablePluginElement);
if (app.config.globalProperties.$start) {
  //为了兼容热更新重新拉取
  VXETable.setConfig({
    // 对组件内置的提示语进行国际化翻译
    i18n: app.config.globalProperties.$t,
  });
  app.use(VXETable);
  const setting = useSettingStore();
  watch(()=>setting.isDark,(val)=>{
    VXETable.VXETable.setTheme(val? 'dark' : 'light')
  },{immediate:true});
}
