import { createI18n, I18n, I18nOptions, LocaleMessages, VueMessageType, useI18n, UseI18nOptions, LocaleMessageDictionary, IntlDateTimeFormat, IntlNumberFormat, Composer } from 'vue-i18n'
import { localeConfig as config } from '@/config';
import { App, ComponentOptions, Ref, VNode, WritableComputedRef } from 'vue';
import { event, mitter } from '@/event';
import { loading, closeLoading } from '@/utils/loading';
const MessageMap: Map<string, Record<any, any>> = new Map();
let mainApp: App;
export let globaleI18n: I18n<unknown, unknown, unknown, boolean>;
export type MessageImport = [(locale: string) => Promise<{ default: LocaleMessages<VueMessageType> }>, string?];
export function composerToGlobaleI18n(i18nComposer: Composer<unknown, unknown, unknown>): I18n<unknown, unknown, unknown, boolean> {
  return { global: i18nComposer, mode: 'composition', install: () => { } }
}

/**
 * 异步加载语言包
 * @param locale 
 * @param messageImport 
 * @returns 
 */
export function loadMessage<P extends Record<any, any> = { default: LocaleMessages<VueMessageType> }>
  (messageImport: [(locale: string) => Promise<P>, string?], locale?: string) {
  if (!locale) {
    locale = (globaleI18n.global.locale as WritableComputedRef<string>).value;
  }
  const MapName = (messageImport[1] === undefined ? '' : (messageImport[1] || messageImport[0])) + '|' + locale;
  let message = MessageMap.get(MapName);
  if (message) {
    return message as P;
  }
  return new Promise<P | null>((resolve, reject) => {
    let timeOut: NodeJS.Timeout;
    if (config.loadMessageConfig.timeOut) {
      timeOut = setTimeout(() => {
        console.warn('导入执行超时了');
        resolve(null)
      }, config.loadMessageConfig.timeOut);
    }
    messageImport[0](locale!).then((message) => {
      timeOut && clearTimeout(timeOut);
      if (message) {
        MessageMap.set(MapName, message);
        resolve(message);
      }
    }).catch((e) => {
      timeOut && clearTimeout(timeOut);
      if (import.meta.env.DEV && config.loadMessageConfig.errorWarning) {
        console.warn('文件导入失败', e);
      }
      resolve(null);
    });
  });
}


/**
 * 异步设置语言包
 * @param i18n i18n实例
 * @param locale 需要加载的语言
 * @param url 需要加载的语言的url
 * @returns 
 */
export function setLocaleMessage(i18n: I18n<unknown, unknown, unknown, boolean>, locale: string, messageImport: MessageImport) {
  if (Object.keys(i18n.global.getLocaleMessage(locale)).length) {
    return true;
  }
  let message = loadMessage(messageImport, locale);
  if (message instanceof Promise) {
    return new Promise((resolve, reject) => {
      (message as Promise<{ default: LocaleMessages<VueMessageType> } | undefined>).then((message) => {
        if (message && message.default) {
          i18n.global.setLocaleMessage(locale, message.default);
          resolve(true);
        } else {
          resolve(false);
        }
      }).catch(() => resolve(false))
    });
  } else if (message.default) {
    i18n.global.setLocaleMessage(locale, message.default);
  }
  return false;
}

/**
 * 切换对应语言
 * @param locale 
 * @param isLoading 
 * @param i18n 
 * @returns 
 */
export async function setI18nLanguage(locale: string, isLoading = true, i18n = globaleI18n) {
  if (i18n.global.locale === locale || (i18n.global.locale as unknown as Ref<string>).value === locale) {
    return true;
  }
  isLoading && loading();
  if (i18n === globaleI18n) {
    let messageArr = [
      setLocaleMessage(i18n, locale, [(locale) => import(`./lang/${locale}.ts`)]),
      loadMessage([(locale) => import(`../../node_modules/element-plus/dist/locale/${locale}.min.js`), 'element-plus'], locale),
      ...mitter.emit(event.beforeLocalChange, { locale, i18n })
    ];
    const res = await Promise.allSettled(messageArr);
    if (res[1].status == 'fulfilled' && res[1].value) {
      mainApp.config.globalProperties.$elLocale = res[1].value;
    }
  }
  if (typeof i18n.global.locale == 'string') {
    i18n.global.locale = locale;
  } else {
    i18n.global.locale.value = locale;
  }
  /**
   * NOTE:
   * If you need to specify the language setting for headers, such as the `fetch` API, set it here.
   * The following is an example for axios.
   *
   * axios.defaults.headers.common['Accept-Language'] = locale
   */
  document?.querySelector('html')?.setAttribute('lang', locale);
  isLoading && closeLoading();
  return true;
}


//安装VueI18n
export async function installI18n(app: App) {
  mainApp = app;
  const options = Object.assign(config.localeSetting, { legacy: false, locale: undefined, globalInjection: true });
  globaleI18n = createI18n<{ legacy: true, globalInjection: true }>(options as { legacy: true, globalInjection: true } & I18nOptions);
  await setI18nLanguage(config.localeSetting.locale || 'zh-cn',false);
  app.use(globaleI18n);
}

/**
 * useI18n 会自动加载locale语言包（语言包加载为异步执行，如果语言包被加载过则执行时效和同步一致）
 * @param options  useScope的默认值改为了 local
 * @param messageImport 
 * @returns 
 */
export function useLocalesI18n<Options extends UseI18nOptions = object,
  Messages extends Record<keyof Options['messages'], LocaleMessageDictionary<VueMessageType>> = Record<keyof Options['messages'], LocaleMessageDictionary<VueMessageType>>,
  DateTimeFormats extends Record<keyof Options['datetimeFormats'], IntlDateTimeFormat> = Record<keyof Options['datetimeFormats'], IntlDateTimeFormat>,
  NumberFormats extends Record<keyof Options['numberFormats'], IntlNumberFormat> = Record<keyof Options['numberFormats'], IntlNumberFormat>>
  (options: Options, messageImport?: MessageImport) {
  let res = useI18n<Options, Messages, DateTimeFormats, NumberFormats>(Object.assign({ useScope: 'local' }, options));
  if (messageImport) {
    setLocaleMessage(composerToGlobaleI18n(res), res.locale.value, messageImport);
    mitter.on(event.beforeLocalChange, (params) => {
      return setLocaleMessage(composerToGlobaleI18n(res), params.locale, messageImport);
    });
  }
  return res;
}

/**
 * useI18n 会自动加载locale语言包（语言包加载为异步执行，如果语言包被加载过则执行时效和同步一致）
 * @param options 
 * @param messageImport 
 * @returns 
 */
export async function asyncUseLocalesI18n<Options extends UseI18nOptions = object,
  Messages extends Record<keyof Options['messages'], LocaleMessageDictionary<VueMessageType>> = Record<keyof Options['messages'], LocaleMessageDictionary<VueMessageType>>,
  DateTimeFormats extends Record<keyof Options['datetimeFormats'], IntlDateTimeFormat> = Record<keyof Options['datetimeFormats'], IntlDateTimeFormat>,
  NumberFormats extends Record<keyof Options['numberFormats'], IntlNumberFormat> = Record<keyof Options['numberFormats'], IntlNumberFormat>>
  (options: Options, messageImport?: MessageImport) {
  let res = useI18n<Options, Messages, DateTimeFormats, NumberFormats>(Object.assign({ useScope: 'local' }, options));
  if (messageImport) {
    await setLocaleMessage(composerToGlobaleI18n(res), res.locale.value, messageImport);
    mitter.on(event.beforeLocalChange, (params) => {
      return setLocaleMessage(composerToGlobaleI18n(res), params.locale, messageImport);
    });
  }
  return res;
}

/**
 * 获取组件的异步导入语言包promison数组
 * @param options 
 * @param importArr 
 * @returns 
 */
export function getLoadMessagePromison(options: VNode & { __v_isVNode: true } | ComponentOptions | string, importArr: Promise<any>[] = [], locale?: string) {
  if (typeof options == 'string') {
    const component = mainApp.component(options);
    if (component) {
      getLoadMessagePromison(options, importArr)
    }
    return importArr;
  }
  if (options.__v_isVNode) {
    getLoadMessagePromison(options.type, importArr);
    return importArr;
  }
  if (typeof options === 'object') {
    if ((<ComponentOptions>options).components) {
      Object.values((<ComponentOptions>options).components!).forEach(component => {
        getLoadMessagePromison(component as ComponentOptions, importArr);
      });
    }
    if ((<ComponentOptions>options).langImport) {
      const res = loadMessage((<ComponentOptions>options).langImport!, locale);
      if (res instanceof Promise) {
        importArr.push(res);
      }
    }
  }
  return importArr;
}