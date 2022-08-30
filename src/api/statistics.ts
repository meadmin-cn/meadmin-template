//统计报表
import request from '@/utils/request';

const enum Api {
  STATISTICS = '/api/statistics',
}

// 获取用户详细信息
export interface StatisticsResult {
  view: {
    //浏览数
    total: number; //合计
    yesterdayTotal: number; //昨日新增
  };
  user: {
    //会员数
    total: number;
    yesterdayTotal: number;
  };
  order: {
    //订单数
    total: number;
    yesterdayTotal: number;
  };
  turnover: {
    //成交额
    total: number;
    yesterdayTotal: number;
  };
}
export function statisticsApi(noLoading?: boolean) {
  return request<StatisticsResult, []>(
    () => ({
      url: Api.STATISTICS,
      method: 'get',
    }),
    { noLoading },
  );
}
