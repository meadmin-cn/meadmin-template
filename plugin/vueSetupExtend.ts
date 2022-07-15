import xregexp from 'xregexp';
import { parse } from '@vue/compiler-sfc'
import MagicString from 'magic-string'
import { Plugin } from 'vite';
function getLangImport(content: string) {
    const regex = new RegExp('(\\s|=)useI18n\\s*\\(.*');
    let useI18nStr = (content.match(regex) || [])[0];
    if (useI18nStr) {
        let useI18nParams = xregexp.matchRecursive(useI18nStr, '\\(', '\\)')[0];
        if (useI18nParams) {
            useI18nParams = useI18nParams.replace(/(\s*$)/g, "");
        }
        if (useI18nParams.endsWith(']')) {
            let arr = xregexp.matchRecursive(useI18nParams, '\\[', '\\]', 'g', {
                escapeChar: '\\'
            });
            return '[' + arr[arr.length - 1] + ']';
        }
    }
    return undefined;
}



export function supportScriptName(code: string, exclude: string[], setLangImport: boolean) {
    let s: MagicString | undefined
    const str = () => s || (s = new MagicString(code))
    const { descriptor } = parse(code)
    if (!descriptor.script && descriptor.scriptSetup) {
        let attrs = Object.assign({}, descriptor.scriptSetup.attrs);
        const lang = attrs.lang;
        exclude.forEach(item => {
            delete attrs[item];
        });
        if (setLangImport && !attrs.langImport) {
            const langImport = getLangImport(descriptor.scriptSetup.content);
            if (langImport) {

                attrs.langImport = `{{${langImport}}}`;
            }
        }
        let scriptStr = '';
        for (let k in attrs) {
            if (attrs[k] === true) {
                scriptStr += `"${k}":true,`;
            } else if ((<string>attrs[k]).startsWith('{{') && (<string>attrs[k]).endsWith('}}')) {
                scriptStr += `"${k}":` + (<string>attrs[k]).slice(2, -2) + ',';
            } else {
                scriptStr += `"${k}":"${attrs[k]}",`;
            }
        }

        if (scriptStr) {
            str().appendLeft(
                0,
                `<script ${lang ? `lang="${lang}"` : ''}>
  import { defineComponent } from 'vue'
  export default defineComponent({${scriptStr}})
  </script>\n`,
            )
        }
        return {
            map: str().generateMap(),
            code: str().toString(),
        }
    } else {
        return null
    }
}


export interface ExtendOptions {
    /**
     * 需要要排除的attr
     * @default true
     */
    exclude?: string[],
    setLangImport?: boolean //是否需要获取langImport(单独用于构建meadmin,普通用户不需要设置)
}
export default (options: ExtendOptions = { exclude: ['lang', 'setup'] }): Plugin => {
    return {
        name: 'vite:setup-name-support',
        enforce: 'pre',
        async transform(code, id) {
            if (!/\.vue$/.test(id)) {
                return null
            }
            return supportScriptName.call(this, code, options.exclude || [], options.setLangImport);
        },
    }
}