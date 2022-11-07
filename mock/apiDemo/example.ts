import { success, fail } from '../helper';

export default [
  {
    url: '/api/list', //
    method: 'get',
    response: (req: { body: { username: any }; query: { page?: number; size?: number } }) => {
      const query = req.query;
      if (!query.page || !query.size) {
        return fail('page和size必填');
      }
      if (query.page < 1) {
        return fail('page必须大于0');
      }
      if (query.size < 1) {
        return fail('size必须大于0');
      }
      const list = [] as string[];
      for (let i = 0; i < query.size; i++) {
        list.push(`item-${query.page}-${i}`);
      }
      return success(
        {
          total: 30,
          list,
        },
        '操作成功',
      );
    },
  },
];
