import { request, RequestOptions } from '@/utils/request';

const enum Api {
  LIST = 'table/list/',
}
export type ListResult = BasePageResult<{
  date: string;
  name: string;
  province: string;
  city: string;
  address: string;
  zip: string;
}>;
export function listApi(options: RequestOptions<ListResult, [BasePageParams]> = {}) {
  return request(
    (params) => ({
      url: Api.LIST,
      method: 'get',
      params: params,
    }),
    Object.assign({ noLoading: true }, options),
  );
}
