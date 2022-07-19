import { LocaleMessages, VueMessageType, Composer, VueI18n } from 'vue-i18n'
import { localeConfig as config } from '@/config';
import { ComponentOptions, VNode } from 'vue';
import { event, mitter } from '@/event';
import { loading, closeLoading } from '@/utils/loading';
import { useSettingStore } from '@/store';
import { Language } from 'element-plus/es/locale';
import { useGlobalStore } from '@/store';
type GlobaleI18n = Composer<unknown, unknown, unknown>;
const MessageMap: Map<string, Record<any, any>> = new Map();
export type MessageImport = [(locale: string) => Promise<{ default: LocaleMessages<VueMessageType> }>, string?];

/**
 * 异步加载语言包
 * @param locale 
 * @param messageImport 
 * @returns 
 */
export const loadMessage = <P extends Record<any, any> = { default: LocaleMessages<VueMessageType> }>
  (messageImport: [(locale: string) => Promise<P>, string?], locale?: string) => {
  if (!locale) {
    locale = useGlobalStore().i18n!.locale.value;
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
        console.warn('加载语言包超时');
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
        console.warn('语言包加载失败', e);
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
export const setLocaleMessage = (i18n: GlobaleI18n, locale: string, messageImport: MessageImport) => {
  if (Object.keys(i18n.getLocaleMessage(locale)).length) {
    return true;
  }
  let message = loadMessage(messageImport, locale);
  if (message instanceof Promise) {
    return new Promise((resolve, reject) => {
      (message as Promise<{ default: LocaleMessages<VueMessageType> } | undefined>).then((message) => {
        if (message && message.default) {
          i18n.setLocaleMessage(locale, message.default);
          resolve(true);
        } else {
          resolve(false);
        }
      }).catch(() => resolve(false))
    });
  } else if (message.default) {
    i18n.setLocaleMessage(locale, message.default);
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
export const setI18nLanguage = async (locale: string, isLoading = true, i18n?: GlobaleI18n) => {
  if (!i18n) {
    i18n = useGlobalStore().i18n;
    if (!i18n) {
      throw new Error('请传入i18n 或在全局i18n注册后调用')
    }
  }

  if (i18n.locale.value === locale) {
    return true;
  }
  isLoading && loading();
  if (i18n === useGlobalStore().i18n) {
    let messageArr = [
      setLocaleMessage(i18n, locale, [(locale) => import(`./lang/${locale}.ts`)]),
      loadMessage<{ default: Language }>([(locale) => import(`../../node_modules/element-plus/es/locale/lang/${locale}.mjs`), 'element-plus'], locale),
      ...mitter.emit(event.beforeLocalChange, { locale, i18n })
    ];
    const res = await Promise.allSettled(messageArr);
    if (res[1].status == 'fulfilled' && res[1].value) {
      useSettingStore().elLocale = res[1].value.default;
    }
  }
  i18n.locale.value = locale;
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






/**
 * 获取组件的异步导入语言包promison数组函数
 * @param options 
 * @param importArr 
 * @returns 
 */
export const useGetLoadMessagePromison = () => {
  const instance = getCurrentInstance();
  if (instance == null) {
    throw new Error('必须在setup中调用');
  }
  const app = instance.appContext.app;
  const getLoadMessagePromison = (options: VNode & { __v_isVNode: true } | ComponentOptions | string, importArr: Promise<any>[] = [], locale?: string) => {
    if (typeof options == 'string') {
      const component = app.component(options);
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
    console.log(importArr)
    return importArr;
  }
  return getLoadMessagePromison;
}