//计算属性代理对象key 对其进行双向绑定
export default <O extends Record<any, any>, K extends keyof O>(obj: O, key: K) => {
  return computed<O[K]>({
    get: () => obj[key],
    set: (val) => {
      obj[key] = val;
    },
  });
};
