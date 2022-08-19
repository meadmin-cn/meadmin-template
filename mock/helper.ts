export function success(data: any, msg = '操作成功') {
  return { code: '200', data, msg };
}

// code 401 代表token失效
export function fail(msg = '操作失败', code = '500', data: any = null) {
  return { code, data, msg };
}

export interface RequestParams {
  method: string;
  body: any;
  headers?: { ['auth-token']?: string };
  query: any;
}
/**
 * @description 本函数用于从request数据中获取token，请根据项目的实际情况修改
 *
 */
export function getRequestToken({ headers }: RequestParams): string | undefined {
  return headers ? headers['auth-token'] : '';
}
