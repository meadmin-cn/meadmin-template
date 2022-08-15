import xregexp from 'xregexp';
import { parse, compileScript } from '@vue/compiler-sfc';
import { camelize, capitalize } from '@vue/shared';
import MagicString from 'magic-string';
import { Plugin } from 'vite';
import { compileTemplate, SFCDescriptor } from 'vue/compiler-sfc';
export interface ExtendOptions {
  /**
   * 需要要排除的attr
   * @default true
   */
  exclude?: string[];
  setLangImport?: boolean; //是否需要获取langImport(单独用于构建meadmin,普通用户不需要设置)
  setComponents?: boolean; //是否需要设置components(根据<script setup> 引入文件名是否以.vue结尾来判断)
}
function getLangImport(content: string) {
  const regex = new RegExp('(\\s|=)useLocalesI18n\\s*\\([\\s\\S]*');
  let useI18nStr = (content.match(regex) || [])[0];
  if (useI18nStr) {
    let useI18nParams = xregexp.matchRecursive(useI18nStr, '\\(', '\\)')[0];
    if (useI18nParams) {
      useI18nParams = useI18nParams.replace(/(\s*$)/g, '');
    }
    if (useI18nParams.endsWith(']')) {
      let arr = xregexp.matchRecursive(useI18nParams, '\\[', '\\]', 'g', {
        escapeChar: '\\',
        valueNames: [null, null, 'value', null]
      });
      let res = arr[arr.length - 1];
      if (res && /\,\s*$/.test(useI18nParams.slice(0, res.start - 1))) {
        return '[' + res.value + ']';
      }
    }
  }
  return undefined;
}
let i = 0;
function getComponent(sfc: SFCDescriptor) {
  let components = [];
  const sfcScriptBlock = compileScript(sfc, { id: 'vueSetupExtendCompile' });

  if (sfc.template) {
    const code = compileTemplate({
      source: sfc.source,
      filename: sfc.filename,
      id: 'vueSetupExtendCompile'
    }).code;

    for (const match of code.matchAll(/_resolveComponent[0-9]*\("(.+?)"\)/g)) {
      const matchedName = match[1];
      if (match.index != null && matchedName && !matchedName.startsWith('_')) {
        if (sfcScriptBlock.imports) {
          if (sfcScriptBlock.imports[camelize(matchedName)]) {
            components.push(camelize(matchedName));
            continue;
          }
          if (sfcScriptBlock.imports[capitalize(camelize(matchedName))]) {
            components.push(capitalize(camelize(matchedName)));
            continue;
          }
        }
        components.push(match[0]);
      }
    }
  }
  return components;
}

export function supportScript(code: string, options: ExtendOptions) {
  let s: MagicString | undefined;
  const str = () => s || (s = new MagicString(code));
  const { descriptor } = parse(code);
  if (!descriptor.script && descriptor.scriptSetup) {
    let attrs = Object.assign({}, descriptor.scriptSetup.attrs);
    const lang = attrs.lang;
    options.exclude &&
      options.exclude.forEach((item) => {
        delete attrs[item];
      });
    if (options.setLangImport && !attrs.langImport) {
      const langImport = getLangImport(descriptor.scriptSetup.content);
      if (langImport) {
        attrs.langImport = `{{${langImport}}}`;
      }
    }
    if (options.setComponents) {
      const components = getComponent(descriptor);
      if (components.length) {
        attrs.components = `{{[${components}]}}`;
      }
    }
    let scriptStr = '';
    for (let k in attrs) {
      if (attrs[k] === true) {
        scriptStr += `"${k}":true,`;
      } else if (
        (<string>attrs[k]).startsWith('{{') &&
        (<string>attrs[k]).endsWith('}}')
      ) {
        scriptStr += `"${k}":` + (<string>attrs[k]).slice(2, -2) + ',';
      } else {
        scriptStr += `"${k}":"${attrs[k]}",`;
      }
    }

    if (scriptStr) {
      str().appendLeft(
        0,
        `<script ${lang ? `lang="${lang}"` : ''}>
  import { defineComponent } from 'vue';
  export default defineComponent({${scriptStr}});
  </script>\n`
      );
    }
    return {
      map: str().generateMap(),
      code: str().toString()
    };
  } else {
    return null;
  }
}

export default (
  options: ExtendOptions = { exclude: ['lang', 'setup'] }
): Plugin => {
  return {
    name: 'vite:vue-setup-support',
    enforce: 'pre',
    async transform(code, id) {
      if (!/\.vue$/.test(id)) {
        return null;
      }
      return supportScript.call(this, code, options);
    }
  };
};
