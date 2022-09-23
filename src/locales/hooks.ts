/*
 * @Author: yuntian001 479820787@qq.com
 * @Date: 2022-08-07 00:35:28
 * @LastEditors: yuntian001 479820787@qq.com
 * @LastEditTime: 2022-08-07 08:11:32
 * @FilePath: \meadmin-template\src\locales\hooks.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useI18n, UseI18nOptions } from 'vue-i18n';
import { loadMessage, MessageImport, setLocaleMessage } from './helper';
import { mitter, event } from '@/event';
import { camelize, capitalize, ComponentOptions, VNode } from 'vue';

/**
 * useI18n 会自动加载locale语言包（语言包加载为异步执行，如果语言包被加载过则执行时效和同步一致）
 * @param options  useScope的默认值改为了 local
 * @param messageImport
 * @returns
 */
export const useLocalesI18n = <Options extends UseI18nOptions = UseI18nOptions>(
  options?: Options,
  messageImport?: MessageImport,
) => {
  const res = useI18n<Options>(Object.assign({ useScope: 'local' }, options));
  if (messageImport) {
    setLocaleMessage(res, res.locale.value, messageImport);
    mitter.on(
      event.BEFORE_LOCAL_CHANGE,
      (params) => {
        setLocaleMessage(res, params.locale, messageImport);
      },
      true,
    );
  }
  return res;
};

/**
 * useI18n 会自动加载locale语言包（语言包加载为异步执行，如果语言包被加载过则执行时效和同步一致）
 * @param options
 * @param messageImport
 * @returns
 */
export const asyncUseLocalesI18n = async <Options extends UseI18nOptions = UseI18nOptions>(
  options?: Options,
  messageImport?: MessageImport,
) => {
  const res = useI18n<Options>(Object.assign({ useScope: 'local' }, options));
  if (messageImport) {
    await setLocaleMessage(res, res.locale.value, messageImport);
    mitter.on(event.BEFORE_LOCAL_CHANGE, (params) => {
      setLocaleMessage(res, params.locale, messageImport);
    });
  }
  return res;
};

const loadComponentCache = new WeakSet<ComponentOptions>();
/**
 * 获取异步导入组件及其子孙的语言包函数
 * @returns
 */
export const useLoadMessages = () => {
  const instance = getCurrentInstance();
  if (instance === null) {
    throw new Error('必须在setup中调用');
  }
  const cache = new Set<any>();
  const app = instance.appContext.app;
  const loadMessages = (
    options: (VNode & { __v_isVNode: true }) | ComponentOptions | string,
    isLoading = true,
    locale: string | undefined = undefined,
    importArr: Array<Promise<any>> = [],
  ) => {
    if (typeof options === 'string') {
      const component = app.component(capitalize(camelize(options)));
      loadMessages(component as ComponentOptions, isLoading, locale, importArr);
      return importArr;
    }
    if (typeof options === 'object' && !loadComponentCache.has(options)) {
      loadComponentCache.add(options);
      if (options.__v_isVNode) {
        loadMessages(options.type, isLoading, locale, importArr);
        return importArr;
      }
      if ((<ComponentOptions>options).components) {
        Object.values((<ComponentOptions>options).components!).forEach((component) => {
          loadMessages(component as ComponentOptions, isLoading, locale, importArr);
        });
      }
      if ((<ComponentOptions>options).getComponents) {
        (<ComponentOptions>options).getComponents().forEach((component: ComponentOptions) => {
          loadMessages(component, isLoading, locale, importArr);
        });
      }
      if ((<ComponentOptions>options).langImport) {
        const res = loadMessage((<ComponentOptions>options).langImport!, locale, isLoading);
        if (res instanceof Promise) {
          importArr.push(res);
        }
      }
    }
    return importArr;
  };
  return loadMessages;
};
