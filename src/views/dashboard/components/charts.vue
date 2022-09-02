<template>
  <el-card shadow="hover" :header="loading ? '' : t('浏览量')" class="card-item">
    <el-skeleton :loading="loading" :rows="8">
      <div ref="viewChartRef" class="view-charts"></div>
    </el-skeleton>
  </el-card>

  <el-row :gutter="20">
    <el-col :xs="24" :sm="8" class="card-item">
      <el-card shadow="hover" :header="loading ? '' : t('访问来源')">
        <el-skeleton :loading="loading" :rows="8">
          <div ref="origionChartRef" class="view-charts"></div>
        </el-skeleton>
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="8" class="card-item">
      <el-card shadow="hover" :header="loading ? '' : t('预算分配')">
        <el-skeleton :loading="loading" :rows="8">
          <div ref="allocationChartRef" class="view-charts"></div>
        </el-skeleton>
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="8" class="card-item">
      <el-card shadow="hover" :header="loading ? '' : t('订单分布')">
        <el-skeleton :loading="loading" :rows="8">
          <div ref="orderDistributionChartRef" class="view-charts"></div>
        </el-skeleton>
      </el-card>
    </el-col>
  </el-row>
</template>
<script setup lang="ts" name="viewCharts">
import { chartApi } from '@/api/statistics';
import { useSettingStore } from '@/store';
import * as echarts from 'echarts/core';
import { TitleComponent, ToolboxComponent, TooltipComponent, GridComponent, LegendComponent } from 'echarts/components';
import { LineChart, PieChart, RadarChart } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { SVGRenderer } from 'echarts/renderers';
import { mitter, event } from '@/event';
import { throttle } from 'lodash-es';
import { useLocalesI18n } from '@/locales/i18n';
let { t } = useLocalesI18n({}, [(locale) => import(`../lang/${locale}.json`), 'dashboard']);
echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
  PieChart,
  RadarChart,
  SVGRenderer,
  UniversalTransition,
]);
const viewChartRef = ref(null as HTMLElement | null);
const origionChartRef = ref(null as HTMLElement | null);
const allocationChartRef = ref(null as HTMLElement | null);
const orderDistributionChartRef = ref(null as HTMLElement | null);
const setting = useSettingStore();
const textColor = computed(() => (setting.isDark ? '#E5EAF3' : '#303133'));
const { loading, runAsync, data } = chartApi();
runAsync();
const viewChart = computed(() => (viewChartRef.value ? echarts.init(viewChartRef.value) : null));
const origionChart = computed(() => (origionChartRef.value ? echarts.init(origionChartRef.value) : null));
const allocationChart = computed(() => (allocationChartRef.value ? echarts.init(allocationChartRef.value) : null));
const orderDistributionChart = computed(() =>
  orderDistributionChartRef.value ? echarts.init(orderDistributionChartRef.value) : null,
);
watchPostEffect(() => {
  const viewChartOptions = {
    textStyle: {
      color: textColor.value,
    },
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'cross',
      },
    },
    legend: {
      top: '10px',
      data: ['PV', 'UV'],
      textStyle: {
        color: textColor.value,
      },
    },
    grid: {
      left: '20px',
      right: '20px',
      bottom: '20px',
      top: '60px',
      containLabel: true,
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: ['02:00', '04:00', '06:00', '08:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00'],
      },
    ],
    yAxis: [
      {
        type: 'value',
      },
    ],
    series: [
      {
        name: 'PV',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: [] as number[],
      },
      {
        name: 'UV',
        type: 'line',
        stack: 'Total',
        areaStyle: {},
        emphasis: {
          focus: 'series',
        },
        data: [] as number[],
      },
    ],
  };
  const origionOptions = {
    textStyle: {
      color: textColor.value,
    },
    legend: {
      bottom: '0',
      left: 'center',
      textStyle: {
        color: textColor.value,
      },
    },
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'cross',
      },
    },
    series: [
      {
        name: t('访问来源'),
        type: 'pie',
        top: '-20%',
        radius: ['40%', '65%'],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold',
          },
        },
        data: [
          { value: 0, name: t('直接访问') },
          { value: 0, name: t('搜索引擎') },
          { value: 0, name: t('推广邮件') },
          { value: 0, name: t('推广短信') },
          { value: 0, name: t('营销广告') },
        ],
      },
    ],
  };
  const allocationOptions = {
    textStyle: {
      color: textColor.value,
    },
    legend: {
      bottom: '0',
      left: 'center',
      textStyle: {
        color: textColor.value,
      },
    },
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'cross',
      },
    },
    series: [
      {
        name: t('预算分配'),
        type: 'pie',
        top: '-20%',
        radius: '65%',
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '40',
            fontWeight: 'bold',
          },
        },
        data: [
          { value: 0, name: t('日用/百货') },
          { value: 0, name: t('电子产品') },
          { value: 0, name: t('配饰/挂件') },
          { value: 0, name: t('服装/箱包') },
          { value: 0, name: t('化妆品') },
        ],
      },
    ],
  };
  const orderDistributionOptions = {
    textStyle: {
      color: textColor.value,
    },
    legend: {
      data: [t('新客'), t('老客')],
      bottom: '0',
      textStyle: {
        color: textColor.value,
      },
    },
    radar: {
      center: ['50%', '45%'],
      radius: '65%',
      indicator: [
        { name: t('日用/百货'), max: 6500 },
        { name: t('电子产品'), max: 16000 },
        { name: t('配饰/挂件'), max: 30000 },
        { name: t('服装/箱包'), max: 38000 },
        { name: t('化妆品'), max: 52000 },
      ],
    },
    series: [
      {
        name: t('订单分布'),
        type: 'radar',
        data: [
          {
            value: [] as number[],
            name: t('新客'),
          },
          {
            value: [] as number[],
            name: t('老客'),
          },
        ],
      },
    ],
  };
  if (data.value) {
    viewChartOptions.series[0].data = data.value.view.PV;
    viewChartOptions.series[1].data = data.value.view.UV;
    origionOptions.series[0].data.forEach((item, key) => {
      item.value = data.value!.origion[key];
    });
    allocationOptions.series[0].data.forEach((item, key) => {
      item.value = data.value!.allocation[key];
    });
    orderDistributionOptions.series[0].data[0].value = data.value.orderDistribution.new;
    orderDistributionOptions.series[0].data[1].value = data.value.orderDistribution.old;
    viewChart.value?.setOption(viewChartOptions);
    origionChart.value?.setOption(origionOptions);
    allocationChart.value?.setOption(allocationOptions);
    orderDistributionChart.value?.setOption(orderDistributionOptions);
  }
});
mitter.on(
  event.RESIZE,
  throttle(() => {
    viewChart.value?.resize();
    origionChart.value?.resize();
    allocationChart.value?.resize();
    orderDistributionChart.value?.resize();
  }, 800),
  true,
);
</script>
<style lang="scss" scoped>
.card-item {
  margin-top: 10px;

  .view-charts {
    width: 100%;
    height: 249px;
  }
}
</style>
