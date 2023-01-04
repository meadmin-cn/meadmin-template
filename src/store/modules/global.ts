import { Composer } from 'vue-i18n';
import { event, mitter } from '@/event';
import { LoadingOptions } from 'element-plus';
import { forOwn } from 'lodash-es';
const WIDTH = 992; // refer to Bootstrap's responsive design
const isMobile = ref(window.document.body.offsetWidth < WIDTH);
mitter.on(event.RESIZE, () => {
  isMobile.value = window.document.body.offsetWidth < WIDTH;
});
export default defineStore('global', {
  state: () => {
    let _i18n: Composer<unknown, unknown, unknown>;
    return {
      i18n: customRef((track, trigger) => {
        return {
          get() {
            track(); // track 方法放在 get 中，用于提示这个数据是需要追踪变化的
            return _i18n;
          },
          set(i18n: Composer<unknown, unknown, unknown>) {
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
    };
  },
});
