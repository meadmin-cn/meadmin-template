import { proxyValue } from '@/utils/helper';
import { cloneDeep } from 'lodash-es';

/**
 * 用于解耦v-model 对象/数组
 * 深度代理 对象/数组 响应后触发update方法并传入深copy值
 * @param v
 * @param update
 * @returns
 */
export const computedModel = <T extends Record<string | number, any> | any[]>(
  v: () => T,
  update: (value: T) => void,
) => {
  const data = shallowRef({} as T);
  watch(
    v,
    () => {
      const value = cloneDeep(toRaw(v()));
      data.value = proxyValue(value, () => {
        update(cloneDeep(value));
      });
    },
    { immediate: true, deep: true },
  );
  return data;
};
