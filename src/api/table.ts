import request from '@/utils/request';

const enum Api {
  LIST = '/api/table/list/',
}
export type ListResult = {
  date: string;
  name: string;
  province: string;
  city: string;
  address: string;
  zip: string;
}[];
export function listApi() {
  return request<ListResult>(
    () => ({
      url: Api.LIST,
      method: 'get',
    }),
    { noLoading: true },
  );
}
