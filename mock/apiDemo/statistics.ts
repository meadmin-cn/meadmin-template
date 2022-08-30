import { success, fail } from '../helper';

export default [
  {
    url: '/api/statistics', //
    method: 'get',
    timeout: 500 + Math.floor(Math.random() * 1000),
    response: () => {
      return success(
        {
          view: {
            //浏览数
            total: Math.floor(Math.random() * 100000), //合计
            yesterdayTotal: Math.floor(Math.random() * 10000), //昨日新增
          },
          user: {
            //会员数
            total: Math.floor(Math.random() * 100000),
            yesterdayTotal: Math.floor(Math.random() * 1000),
          },
          order: {
            //订单数
            total: Math.floor(Math.random() * 100000),
            yesterdayTotal: Math.floor(Math.random() * 1000),
          },
          turnover: {
            //成交额
            total: Math.floor(Math.random() * 1000000000) / 100,
            yesterdayTotal: Math.floor(Math.random() * 1000000) / 100,
          },
        },
        '登录成功',
      );
    },
  },
];
