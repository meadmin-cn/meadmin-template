import request from '@/utils/request';

const enum Api {
  GROUP = 'admin/group/index',
  ADD_GROUP = 'admin/group/add',
  EDIT_GROUP = 'admin/group/{id}',
  DEL_GROUP = 'admin/group/{id}',
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
    (info) => ({
      url: Api.ADD_GROUP,
      method: 'POST',
      data: info,
    }),
    { success: true },
  );
}

export function editGroupApi() {
  return request<number, [number, Partial<GroupInfo>]>(
    (id, info) => ({
      url: Api.EDIT_GROUP.replace('{id}', id + ''),
      method: 'POST',
      data: info,
    }),
    { success: true },
  );
}

export function delGroupApi() {
  return request<number, [number]>(
    (id) => ({
      url: Api.DEL_GROUP.replace('{id}', id + ''),
      method: 'DELETE',
    }),
    { success: true },
  );
}

export type GroupListResult = (Required<GroupInfo> & {
  children: GroupListResult;
})[];

export function groupListApi() {
  return request<GroupListResult>(
    () => ({
      url: Api.GROUP,
      method: 'get',
    }),
    { noLoading: true, cacheKey: 'groupList', cacheTime: 5 * 60 * 1000 },
  );
}
