import { createI18n, I18n, I18nOptions, LocaleMessages, VueMessageType,useI18n as originUseI18n, UseI18nOptions, LocaleMessageDictionary, IntlDateTimeFormat, IntlNumberFormat, Composer } from 'vue-i18n'
import {localeSetting} from '@/config/locale';
import { App, Ref } from 'vue';
const MessageMap:Map<string,Record<any,any>> = new Map();
let mainApp:App;
export let globaleI18n:I18n<unknown, unknown, unknown, boolean>;
export type MessageImport=(locale:string)=>Promise<{default:LocaleMessages<VueMessageType>}>;
export function composerToGlobaleI18n(i18nComposer:Composer<unknown,unknown,unknown>):I18n<unknown, unknown, unknown, boolean>{
  return {global:i18nComposer,mode:'composition',install:()=>{}}
}

/**
 * 异步加载语言
 * @param locale 
 * @param messageImport 
 * @returns 
 */
export function loadMessage<P extends Record<any,any> = {default:LocaleMessages<VueMessageType>}>
(locale:string,messageImport:(locale:string)=>Promise<P>){
  const MapName = messageImport+locale;
  let message = MessageMap.get(MapName);
  if(message){
    return message as P;
  }
  return new Promise<P>((resolve,reject)=>{
    messageImport(locale).then((message)=>{
      if(message){
        MessageMap.set(MapName,message);
        resolve(message);
      }
    }).catch(reject);
  });
}


/**
 * 异步设置语言
 * @param i18n i18n实例
 * @param locale 需要加载的语言
 * @param url 需要加载的语言的url
 * @returns 
 */
export function setLocaleMessage(i18n:I18n<unknown,unknown,unknown,boolean>,locale:string,messageImport:MessageImport){
  if(Object.keys(i18n.global.getLocaleMessage(locale)).length){
    return true;
  }
  let message = loadMessage(locale,messageImport);
  if(message instanceof Promise){
    return new Promise((resolve,reject)=>{
      (message as Promise<{default:LocaleMessages<VueMessageType>}>).then((message)=>{
        if(message.default){
          i18n.global.setLocaleMessage(locale, message.default);
          resolve(true);
        }else{
          resolve(false);
        }
      }).catch(()=>resolve(false))
    });
  }else if(message.default){
    i18n.global.setLocaleMessage(locale, message.default);
  }
  return false;
}

/**
 * 切换对应语言
 * @param locale 
 * @param i18n 
 * @returns 
 */
 export async function setI18nLanguage(locale:string,i18n=globaleI18n) {
  if(i18n.global.locale === locale || (i18n.global.locale as unknown as Ref<string>).value === locale){
    return true;
  }
  if(i18n === globaleI18n){
    await setLocaleMessage(i18n,locale,(locale)=>import(`./lang/${locale}.ts`));
    try{
      let message = await loadMessage(locale,(locale)=>import(`../../node_modules/element-plus/dist/locale/${locale}.min.js`));
      if(message){
        mainApp.config.globalProperties.$elLocale = message;
      }
    }catch{

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
   return true;
}


//安装VueI18n
export async function installI18n(app: App) {
  mainApp = app;
  const options = Object.assign(localeSetting,{legacy: false,locale:undefined,globalInjection:true});
  globaleI18n = createI18n<{legacy:true,globalInjection:true}>(options as {legacy:true,globalInjection:true} & I18nOptions);
  await setI18nLanguage(localeSetting.locale || 'zh-cn');
  app.use(globaleI18n);
}

/**
 * useI18n 会自动加载locale语言包（语言包加载为异步执行，如果语言包被加载过则执行时效和同步一致）
 * @param options  useScope的默认值改为了 local
 * @param messageImport 
 * @returns 
 */
export function useI18n<Options extends UseI18nOptions = object, 
Messages extends Record<keyof Options['messages'],LocaleMessageDictionary<VueMessageType>> = Record<keyof Options['messages'], LocaleMessageDictionary<VueMessageType>>, 
DateTimeFormats extends Record<keyof Options['datetimeFormats'], IntlDateTimeFormat> = Record<keyof Options['datetimeFormats'], IntlDateTimeFormat>, 
NumberFormats extends Record<keyof Options['numberFormats'], IntlNumberFormat> = Record<keyof Options['numberFormats'], IntlNumberFormat>>
(options:Options,messageImport?:MessageImport) {
  let res = originUseI18n<Options,Messages,DateTimeFormats,NumberFormats>(Object.assign({useScope:'local'},options));
  messageImport && setLocaleMessage(composerToGlobaleI18n(res),res.locale.value,messageImport);
  return res;
}

/**
 * useI18n 会自动加载locale语言包（语言包加载为异步执行，如果语言包被加载过则执行时效和同步一致）
 * @param options 
 * @param messageImport 
 * @returns 
 */
export async function asyncUseI18n<Options extends UseI18nOptions = object, 
Messages extends Record<keyof Options['messages'],LocaleMessageDictionary<VueMessageType>> = Record<keyof Options['messages'], LocaleMessageDictionary<VueMessageType>>, 
DateTimeFormats extends Record<keyof Options['datetimeFormats'], IntlDateTimeFormat> = Record<keyof Options['datetimeFormats'], IntlDateTimeFormat>, 
NumberFormats extends Record<keyof Options['numberFormats'], IntlNumberFormat> = Record<keyof Options['numberFormats'], IntlNumberFormat>>
(options:Options,messageImport?:MessageImport) {
  let res = originUseI18n<Options,Messages,DateTimeFormats,NumberFormats>(Object.assign({useScope:'local'},options));
  messageImport && (await setLocaleMessage(composerToGlobaleI18n(res),res.locale.value,messageImport));
  return res;
}