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
        '获取成功',
      );
    },
  },
  {
    url: '/api/statistics/chart', //
    method: 'get',
    timeout: 500 + Math.floor(Math.random() * 1000),
    response: () => {
      return success(
        {
          view: {
            PV: [300, 500, 800, 900, 3000, 3500, 4000, 5000, 4000, 2800, 1000],
            UV: [8, 16, 39, 42, 156, 160, 153, 200, 148, 140, 43],
          },
          origion: [1048, 735, 580, 484, 300],
          allocation: [1048, 735, 580, 484, 300],
          orderDistribution: {
            new: [4200, 3000, 20000, 35000, 50000],
            old: [5000, 14000, 28000, 26000, 42000],
          },
        },
        '获取成功',
      );
    },
  },
];
