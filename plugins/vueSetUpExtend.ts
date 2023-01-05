import { vueSetUpExtend } from '@yuntian001/vue-setup-extend';
// @ts-ignore
import { loadMessageConfig } from '../src/config/locale';
export default () =>
  vueSetUpExtend({
    exclude: ['steup', 'lang'],
    setLangImport: loadMessageConfig.componentLoad,
    setComponents: loadMessageConfig.componentLoad,
  });
