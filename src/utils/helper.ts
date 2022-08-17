/**
 * 对象中的每个可便利元素按序执行一个由您提供的 reducer 函数，
 * 每一次运行 reducer 会将先前元素的计算结果作为参数传入，
 * 最后将其结果汇总为单个返回值。
 * @param object 用户遍历的对象
 * @param callbackfn  “reducer” 函数，包含四个参数：
 *  previousValue：上一次调用 callbackFn 时的返回值。在第一次调用时，其值则为 initialValue。
 *  currentValue：数组中正在处理的元素。
 *  currentKey：数组中正在处理的元素的key。
 *  object：用于遍历的d对象。
 * @param initialValue  作为第一次调用 callback 函数时参数 previousValue 的值
 * @returns
 */
export function objectRreduce<T, P extends Record<string, any> = Record<string, any>>(
  object: P,
  callbackfn: (previousValue: T, currentValue: P[keyof P], currentKey: string, object: P) => T,
  initialValue: T,
): T {
  for (const i in object) {
    if (Object.hasOwn(object, i)) {
      initialValue = callbackfn(initialValue, object[i], i, object);
    }
  }
  return initialValue;
}

/**
 * 合并对象的value（value必须为数组）
 * @param object
 * @returns
 */
export function concatObjectValue<T, P extends Record<string, T[]> = Record<string, T[]>>(object: P) {
  return objectRreduce(
    object,
    (currentValue, previousValue) => {
      return currentValue.concat(previousValue || []);
    },
    [] as T[],
  );
}

/**
 * 文件名转驼峰
 * @param fileName
 * @param nameTemplate
 * @returns
 */
export const fileToHump = function (fileName: string): string {
  const index = fileName.lastIndexOf('.');
  if (index > 0) {
    fileName = fileName.slice(0, index);
  }
  const fileNameArr = fileName.replace(/\\/g, '/').split('/');
  if (fileNameArr[fileNameArr.length - 1] === 'index' || fileNameArr[fileNameArr.length - 1] === 'Index') {
    fileNameArr.pop();
  }
  for (let i = 1, len = fileNameArr.length; i < len; i++) {
    fileNameArr[i] = fileNameArr[i].slice(0, 1).toUpperCase() + fileNameArr[i].slice(1);
  }
  return fileNameArr.join('');
};

/**
 * 混色
 * @param color1  16进制颜色1
 * @param color2  16进制颜色2
 * @param opacity 透明度0-1
 * @returns
 */
export const mixColor = function (color1: string, color2: string, opacity: number) {
  let red1 = parseInt(color1.slice(1, 3), 16);
  let green1 = parseInt(color1.slice(3, 5), 16);
  let blue1 = parseInt(color1.slice(5, 7), 16);
  if (opacity === 0) {
    return [red1, green1, blue1].toString();
  }
  const red2 = parseInt(color2.slice(1, 3), 16);
  const green2 = parseInt(color2.slice(3, 5), 16);
  const blue2 = parseInt(color2.slice(5, 7), 16);
  red1 += Math.round(opacity * (red2 - red1));
  green1 += Math.round(opacity * (green2 - green1));
  blue1 += Math.round(opacity * (blue2 - blue1));
  return '#' + red1.toString(16) + green1.toString(16) + blue1.toString(16);
};

/**
 * 获取灰阶值 越小颜色越深
 * @param color
 * @returns
 */
export const getColorLuma = function (color: string) {
  const red = parseInt(color.slice(1, 3), 16);
  const green = parseInt(color.slice(3, 5), 16);
  const blue = parseInt(color.slice(5, 7), 16);
  return red * 0.299 + green * 0.587 + blue * 0.114;
};
