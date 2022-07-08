/// <reference types="vite-svg-loader" />

import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import { App, Component } from 'vue'
import add from './svg/add.svg?component';


export function installIcon(app: App) {
    function componentIcon(name:string,IconComponent:Component){
        app.component(name, {
            props: {
                size: [Number,String],
                color: String,
            },
            render() {
                let fontSize:string|undefined = undefined;
                if(this.size){
                    if(typeof this.size === 'string'){
                        fontSize = this.size;
                    }else if(typeof this.size === 'number'){
                        fontSize = this.size+'px';
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
    
    componentIcon('SvgIconAdd', add as Component)
   
    
    console.log(add)
}