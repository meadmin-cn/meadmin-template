import request from '@/utils/request';

const enum Api {
  LIST = '/api/list',
  INFO = '/api/list/info/',
}

//列表接口
export interface ListParams {
  page: number;
  size: number;
}
export interface ListResult {
  total: number;
  list: string[];
}
export function listApi() {
  return request<ListResult, [ListParams]>((params) => ({
    url: Api.LIST,
    method: 'get',
    params,
  }));
}

export function infoApi() {
  return request<string, [number]>((id) => ({
    url: Api.INFO + id,
    method: 'get',
  }));
}
