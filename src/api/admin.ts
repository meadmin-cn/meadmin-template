import request from '@/utils/request';

const enum Api {
  GROUP = '/api/admin/group',
}

// 管理员组
interface GroupItem {
  id: number;
  name: string; //名称
  rules: string[]; //权限数组
}

export type GroupListResult = (GroupItem & {
  children: GroupItem[];
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
