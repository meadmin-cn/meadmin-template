import request from '@/utils/request';

const enum Api {
  GROUP = '/api/admin/group',
}

// 管理员组
export class GroupInfo {
  id?: number;
  parentId?: number;
  name = ''; //名称
  rules = [] as string[]; //权限数组
  status = 1 as 0 | 1; //状态
}
export function addGroupApi() {
  return request<number, [GroupInfo]>(
    () => ({
      url: Api.GROUP,
      method: 'get',
    }),
    { noLoading: true },
  );
}

export type GroupListResult = (Required<GroupInfo> & {
  children: Required<GroupInfo>[];
})[];

export function groupListApi() {
  return request<GroupListResult>(
    () => ({
      url: Api.GROUP,
      method: 'get',
    }),
    { noLoading: true },
  );
}
