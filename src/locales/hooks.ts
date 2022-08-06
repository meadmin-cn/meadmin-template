import { useI18n, UseI18nOptions, LocaleMessageDictionary, IntlDateTimeFormat, IntlNumberFormat, VueMessageType, Composer } from "vue-i18n";
import { MessageImport, setLocaleMessage } from './helper';
import { mitter, event } from "@/event";

/**
 * useI18n 会自动加载locale语言包（语言包加载为异步执行，如果语言包被加载过则执行时效和同步一致）
 * @param options  useScope的默认值改为了 local
 * @param messageImport 
 * @returns 
 */
export const useLocalesI18n = <Options extends UseI18nOptions = UseI18nOptions>
  (options: Options, messageImport?: MessageImport) => {
  let res = useI18n<Options>(Object.assign({ useScope: 'local' }, options));
  if (messageImport) {
    setLocaleMessage(res, res.locale.value, messageImport);
    mitter.on(event.beforeLocalChange, (params) => {
      return setLocaleMessage(res, params.locale, messageImport);
    }, true);
  }
  return res;
}

/**
* useI18n 会自动加载locale语言包（语言包加载为异步执行，如果语言包被加载过则执行时效和同步一致）
* @param options 
* @param messageImport 
* @returns 
*/
export const asyncUseLocalesI18n = async <Options extends UseI18nOptions = UseI18nOptions>(options: Options, messageImport?: MessageImport) => {
  let res = useI18n<Options>(Object.assign({ useScope: 'local' }, options));
  if (messageImport) {
    await setLocaleMessage(res, res.locale.value, messageImport);
    mitter.on(event.beforeLocalChange, (params) => {
      return setLocaleMessage(res, params.locale, messageImport);
    });
  }
  return res;
}



