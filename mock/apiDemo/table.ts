import { success, fail } from '../helper';
export default [
  {
    url: '/api/table/list',
    method: 'get',
    timeout: 500 + Math.floor(Math.random() * 1000),
    response: (req: { query: { page?: number; size?: number } }) => {
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
      return success({
        page: query.page,
        size: query.size,
        count: 1000,
        list: [
          {
            date: '2016-05-03',
            name: '张三',
            province: '北京',
            city: '北京',
            address: '开发大街1350号',
            zip: '100000',
          },
          {
            date: '2016-05-02',
            name: '李四',
            province: '上海',
            city: '上海',
            address: '测试大街2350号',
            zip: '200000',
          },
          {
            date: '2016-05-04',
            name: '王五',
            province: '山东',
            city: '青岛',
            address: '产品大街0875号',
            zip: '266000',
          },
          {
            date: '2016-05-01',
            name: '刘六',
            province: '山东',
            city: '济南',
            address: '幸福大街4590号',
            zip: '250000',
          },
          {
            date: '2016-05-08',
            name: '张三',
            province: '北京',
            city: '北京',
            address: '开发大街1350号',
            zip: '100000',
          },
          {
            date: '2016-05-06',
            name: '王五',
            province: '山东',
            city: '青岛',
            address: '产品大街0875号',
            zip: '266000',
          },
          {
            date: '2016-05-07',
            name: '王五',
            province: '山东',
            city: '青岛',
            address: '产品大街0875号',
            zip: '266000',
          },
        ],
      });
    },
  },
];
