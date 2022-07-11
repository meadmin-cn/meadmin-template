/// <reference types="vite-svg-loader" />

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import path from 'path-browserify';
import { App, Component, h } from 'vue'
import { upperFirst } from 'lodash-es';

export function installIcon(app: App) {
    function componentIcon(name: string, IconComponent: Component) {
        app.component(name, {
            props: {
                size: [Number, String],
                color: String,
            },
            render() {
                let fontSize: string | undefined = undefined;
                if (this.size) {
                    if (typeof this.size === 'string') {
                        fontSize = this.size;
                    } else if (typeof this.size === 'number') {
                        fontSize = this.size + 'px';
                    }
                }
                return h('i', {
                    class: 'el-icon',
                    style: {
                        fontSize: fontSize,
                        color: this.color
                    }
                },
                    h(IconComponent))
            }
        })
    }
    //注册element icons
    for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
        componentIcon(`ElIcon${key}`, component)
    }
    //注册自定义的svg icons
    const svgModules = import.meta.glob('./svg/*.svg', {
        import: 'default',
        eager: true
    });
    for (const [key, component] of Object.entries(<Record<string, Component>>svgModules)) {
        componentIcon('SvgIcon' + upperFirst(path.parse(key).name), component)
    }
}