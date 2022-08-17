import { I18nOptions } from 'vue-i18n';

export const loadMessageConfig = {
  // 导入语言包配置
  timeOut: 10000, // 导入语言包超时时间ms(对于单次导入而不是整体导入)0代表不超时
  errorWarning: false, // 导入失败的警告（生产环境会被屏蔽）
  componentLoad: true, // 组件语言包导入 不需要多语言或只使用全局语言包时设置为false以提升性能
};

// 语言列表 和elment-plus对应 locale字段值不要改变，否则会导致element-plus组件无法翻译为对应语言
export const localeList = [
  {
    text: '简体中文',
    locale: 'zh-cn',
  },
  {
    text: '美国英语',
    locale: 'en',
  },
  // {
  //     text: '阿塞拜疆语',
  //     locale: 'az',
  // },
  // {
  //     text: '德语',
  //     locale: 'de',
  // },
  // {
  //     text: '葡萄牙语',
  //     locale: 'pt',
  // },
  // {
  //     text: '西班牙语',
  //     locale: 'es',
  // },
  // {
  //     text: '丹麦语',
  //     locale: 'da',
  // },
  // {
  //     text: '法语',
  //     locale: 'fr',
  // },
  // {
  //     text: '挪威语',
  //     locale: 'nb-NO',
  // },
  // {
  //     text: '繁体中文',
  //     locale: 'zh-tw',
  // },
  // {
  //     text: '意大利语',
  //     locale: 'it',
  // },
  // {
  //     text: '韩语',
  //     locale: 'ko',
  // },
  // {
  //     text: '日语',
  //     locale: 'ja',
  // },
  // {
  //     text: '荷兰语',
  //     locale: 'nl',
  // },
  // {
  //     text: '越南语',
  //     locale: 'vi',
  // },
  // {
  //     text: '俄语',
  //     locale: 'ru',
  // },
  // {
  //     text: '土耳其语',
  //     locale: 'tr',
  // },
  // {
  //     text: '巴西葡萄牙语',
  //     locale: 'pt-br',
  // },
  // {
  //     text: '波斯语',
  //     locale: 'fa',
  // },
  // {
  //     text: '泰语',
  //     locale: 'th',
  // },
  // {
  //     text: '印度尼西亚语',
  //     locale: 'id',
  // },
  // {
  //     text: '保加利亚语',
  //     locale: 'bg',
  // },
  // {
  //     text: '普什图语',
  //     locale: 'pa',
  // },
  // {
  //     text: '波兰语',
  //     locale: 'pl',
  // },
  // {
  //     text: '芬兰语',
  //     locale: 'fi',
  // },
  // {
  //     text: '瑞典语',
  //     locale: 'sv',
  // },
  // {
  //     text: '希腊语',
  //     locale: 'el',
  // },
  // {
  //     text: '斯洛伐克语',
  //     locale: 'sk',
  // },
  // {
  //     text: '加泰罗尼亚语',
  //     locale: 'ca',
  // },
  // {
  //     text: '捷克语',
  //     locale: 'cs',
  // },
  // {
  //     text: '乌克兰语',
  //     locale: 'uk',
  // },
  // {
  //     text: '土库曼语',
  //     locale: 'tk',
  // },
  // {
  //     text: '泰米尔语',
  //     locale: 'ta',
  // },
  // {
  //     text: '拉脱维亚语',
  //     locale: 'lv',
  // },
  // {
  //     text: '南非荷兰语',
  //     locale: 'af',
  // },
  // {
  //     text: '爱沙尼亚语',
  //     locale: 'et',
  // },
  // {
  //     text: '斯洛文尼亚语',
  //     locale: 'sl',
  // },
  // {
  //     text: '阿拉伯语',
  //     locale: 'ar',
  // },
  // {
  //     text: '希伯来语',
  //     locale: 'he',
  // },
  // {
  //     text: '立陶宛语',
  //     locale: 'lt',
  // },
  // {
  //     text: '蒙古语',
  //     locale: 'mn',
  // },
  // {
  //     text: '哈萨克语',
  //     locale: 'kk',
  // },
  // {
  //     text: '匈牙利语',
  //     locale: 'hu',
  // },
  // {
  //     text: '罗马尼亚语',
  //     locale: 'ro',
  // },
  // {
  //     text: '库尔德语',
  //     locale: 'ku',
  // },
  // {
  //     text: '维吾尔语',
  //     locale: 'ug-cn',
  // },
  // {
  //     text: '高棉语',
  //     locale: 'km',
  // },
  // {
  //     text: '塞尔维亚语',
  //     locale: 'sr',
  // },
  // {
  //     text: '巴斯克语',
  //     locale: 'eu',
  // },
  // {
  //     text: '吉尔吉斯语',
  //     locale: 'ky',
  // },
  // {
  //     text: '亚美尼亚语',
  //     locale: 'hy-am',
  // },
  // {
  //     text: '克罗地亚语',
  //     locale: 'hr',
  // },
  // {
  //     text: '世界语',
  //     locale: 'eo',
  // },
  // {
  //     text: '孟加拉语',
  //     locale: 'bn',
  // },
];
/**
 * VueI18n初始参数
 * 强制把legacy设置为了false
 * globalInjection设置为了true
 * 文档参考: https://vue-i18n.intlify.dev/api/general.html#i18noptions
 */
const localeSetting: I18nOptions = {
  // Locale
  locale: localeList[0].locale,
  // Default locale
  fallbackLocale: localeList[0].locale,
  missingWarn: false, // 当本地化失败时，压制输出的警告
  fallbackWarn: false, // 抑制回落警告
  fallbackFormat: true, // 跳过为你的"base"语言编写模板;key是您的模板
};
export { localeSetting };
