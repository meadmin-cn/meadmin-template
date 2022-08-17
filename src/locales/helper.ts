import { LocaleMessages, VueMessageType, Composer } from 'vue-i18n';
import { localeConfig as config } from '@/config';
import { event, mitter } from '@/event';
import { loading, closeLoading } from '@/utils/loading';
import { Language } from 'element-plus/es/locale';
import { useGlobalStore, useSettingStore } from '@/store';
type GlobaleI18n = Composer<unknown, unknown, unknown, any>;
const MessageMap: Map<string, Record<any, any>> = new Map();
export type MessageImport = [(locale: string) => Promise<{ default: LocaleMessages<VueMessageType> }>, string?];

/**
 * 异步加载语言包
 * @param messageImport 加载函数
 * @param locale 语言
 * @param isLoading 是否loading(仅会在异步加载时进行loading)
 * @returns
 */
export const loadMessage = <P extends Record<any, any> = { default: LocaleMessages<VueMessageType> }>(
  messageImport: [(locale: string) => Promise<P>, string?],
  locale?: string,
  isLoading?: boolean,
) => {
  if (!locale) {
    locale = useGlobalStore().i18n.locale.value;
  }
  const MapName = (messageImport[1] ?? messageImport[0].toString()) + '|' + locale;
  const message = MessageMap.get(MapName);
  if (message) {
    return message as P;
  }
  isLoading && loading();
  return new Promise<P | null>((resolve, reject) => {
    let timeOut: NodeJS.Timeout;
    if (config.loadMessageConfig.timeOut) {
      timeOut = setTimeout(() => {
        console.warn('加载语言包超时');
        isLoading && closeLoading();
        resolve(null);
      }, config.loadMessageConfig.timeOut);
    }
    messageImport[0](locale!)
      .then((message) => {
        timeOut && clearTimeout(timeOut);
        if (message) {
          MessageMap.set(MapName, message);
          isLoading && closeLoading();
          resolve(message);
        }
      })
      .catch((e) => {
        timeOut && clearTimeout(timeOut);
        if (import.meta.env.DEV && config.loadMessageConfig.errorWarning) {
          console.warn(`语言包${MapName}加载失败:`, e);
        }
        isLoading && closeLoading();
        resolve(null);
      });
  });
};

/**
 * 异步设置语言包
 * @param i18n
 * @param locale
 * @param messageImport
 * @returns
 */
export const setLocaleMessage = (i18n: GlobaleI18n, locale: string, messageImport: MessageImport) => {
  if (Object.keys(i18n.getLocaleMessage(locale)).length) {
    return true;
  }
  const message = loadMessage(messageImport, locale);
  if (message instanceof Promise) {
    return new Promise((resolve, reject) => {
      (message as Promise<{ default: LocaleMessages<VueMessageType> } | undefined>)
        .then((message) => {
          if (message?.default) {
            i18n.setLocaleMessage(locale, message.default);
            resolve(true);
          } else {
            resolve(false);
          }
        })
        .catch(() => resolve(false));
    });
  } else if (message.default) {
    i18n.setLocaleMessage(locale, message.default);
  }
  return false;
};

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
      throw new Error('请传入i18n 或在全局i18n注册后调用');
    }
  }
  if (i18n.locale.value === locale) {
    return true;
  }
  isLoading && loading();
  if (i18n === useGlobalStore().i18n) {
    useSettingStore().locale = locale;
    const messageArr = [
      setLocaleMessage(i18n, locale, [async (locale) => await import(`./lang/${locale}.json`)]),
      loadMessage<{ default: Language }>(
        [
          async (locale) => await import(`../../node_modules/element-plus/es/locale/lang/${locale}.mjs`),
          'element-plus',
        ],
        locale,
      ),
      ...mitter.emit(event.beforeLocalChange, { locale, i18n }),
    ];
    const res = await Promise.allSettled(messageArr);
    if (res[1].status === 'fulfilled' && res[1].value) {
      useSettingStore().elLocale = res[1].value.default;
    }
    document?.querySelector('html')?.setAttribute('lang', locale);
  }
  i18n.locale.value = locale;
  isLoading && closeLoading();
  return true;
};
