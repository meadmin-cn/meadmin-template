import { request, RequestOptions } from '@/utils/request';
import { bookType } from '@/dict/book';
import { PageParams, PageResult } from './api.model';

const enum Api {
  LIST = 'demo',
  ADD = 'demo',
  UPDATE = 'demo/{id}',
  DELETE = 'demo/{id}',
}

export class Info {
  id?: number;
  name = '';
  type: keyof typeof bookType = '1';
  bookName = '';
  price = 0.0;
  section = 0;
  createTime?: string;
}

export class ListParams extends PageParams {
  name = '';
  type?: keyof typeof bookType;
  bookName = '';
  priceStart?: number;
  priceEnd?: number;
  sectionStart?: number;
  sectionEnd?: number;
  createTime?: [string, string];
}

//列表
export function listApi(options: RequestOptions<PageResult<Required<Info>>, [ListParams]> = { noLoading: true }) {
  return request(
    (params) => ({
      url: Api.LIST,
      method: 'get',
      params,
    }),
    options,
  );
}

//新增
export function addApi(noLoading = true) {
  return request<null, [Info]>(
    (data) => ({
      url: Api.ADD,
      method: 'post',
      data,
    }),
    { noLoading },
  );
}

//更新
export function updateApi(noLoading = true) {
  return request<null, [number, Info]>(
    (id, data) => ({
      url: Api.UPDATE.replace('{id}', String(id)),
      method: 'put',
      data,
    }),
    { noLoading },
  );
}

//删除
export function delApi(noLoading = true) {
  return request<null, [number]>(
    (id) => ({
      url: Api.DELETE.replace('{id}', String(id)),
      method: 'delete',
    }),
    { noLoading },
  );
}
