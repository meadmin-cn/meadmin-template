import { request, RequestOptions } from '@/utils/request';

const enum Api {
  LIST = 'vxeTable/list',
}
export type ListResult = BasePageResult<{
  id: number;
  name: string;
  nickname: string;
  role: string;
  sex: string;
  sex1: string[];
  state: string;
  region: string[];
  age: number;
  date: string;
  date1: string;
  date2: string;
  date3: string;
  date4: string[];
  date5: string;
  date7: string;
  color1: string;
  tree1: string;
  tree2: string[];
  rate: number;
  rate1: number;
  flag: boolean;
  address: string;
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
