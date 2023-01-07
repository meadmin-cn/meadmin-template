import { request, RequestOptions } from '@/utils/request';
const enum Api {
  LIST = 'list',
  INFO = 'list/info',
}

//列表接口
export interface ListParams {
  page: number;
  size: number;
  createTime?: [string, string];
}
export interface ListResult {
  total: number;
  list: string[];
}
export function listApi(options: RequestOptions<ListResult, [ListParams]>) {
  return request(
    (params) => ({
      url: Api.LIST,
      method: 'get',
      params,
    }),
    options,
  );
}
export function infoApi() {
  return request<string, [number]>((id) => ({
    url: Api.INFO + id,
    method: 'get',
  }));
}
