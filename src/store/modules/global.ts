import { Composer } from 'vue-i18n';
import { event, mitter } from '@/event';
import { Component, VNode } from 'vue';
const WIDTH = 992; // refer to Bootstrap's responsive design
const isMobile = ref(window.document.body.offsetWidth < WIDTH);
mitter.on(event.RESIZE, () => {
  isMobile.value = window.document.body.offsetWidth < WIDTH;
});
export default defineStore('global', {
  state: () => {
    let _i18n: Composer;
    return {
      i18n: customRef((track, trigger) => {
        return {
          get() {
            track(); // track 方法放在 get 中，用于提示这个数据是需要追踪变化的
            return _i18n;
          },
          set(i18n: Composer) {
            if (!_i18n) {
              // 只初始化一次值
              _i18n = i18n;
              trigger(); // 记得触发事件 trigger,告诉vue触发页面更新
            }
          },
        };
      }),
      isMobile,
      layoutLoaded: false,
      globalComponents: [] as Array<{
        component: Component | VNode;
        key: number | string | symbol;
        props?: Record<string, any>;
        vnode?: Component;
      }>, //全局组件会渲染到app下
    };
  },
  actions: {
    addGlobalComponents(component: Component | VNode, props?: Record<string, any>, key?: number | string | symbol) {
      if (!key) {
        key = Symbol('componentKey');
      }
      this.globalComponents.push({
        component: markRaw(component),
        props,
        key,
      });
      return key;
    },
    removeGlobalComponents(key: number | string | symbol) {
      const index = this.globalComponents.findIndex((item) => item.key === key);
      if (index > -1) {
        this.globalComponents.splice(index, 1);
        return true;
      }
      return false;
    },
    getVnode<T extends Component>(key: number | string | symbol) {
      const index = this.globalComponents.findIndex((item) => item.key === key);
      if (index > -1) {
        return this.globalComponents[index].vnode as T;
      }
      return undefined;
    },
  },
});
