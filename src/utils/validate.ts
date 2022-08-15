/**
 * 是否是外链
 * @param path
 * @returns
 */
export function isExternal(path: string) {
  return /^(https?:|mailto:|tel:)/.test(path);
}
