<template>
  <el-card shadow="hover" header="浏览量">
    <div ref="viewChartRef" class="view-charts"></div>
  </el-card>

  <el-row :gutter="20">
    <el-col :xs="24" :sm="8">
      <el-card shadow="hover" header="访问来源">
        <div ref="origionChartRef" class="view-charts"></div>
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="8">
      <el-card shadow="hover" header="预算分配">
        <div ref="allocationChartRef" class="view-charts"></div>
      </el-card>
    </el-col>
    <el-col :xs="24" :sm="8">
      <el-card shadow="hover" header="订单分布">
        <div ref="orderDistributionChartRef" class="view-charts"></div>
      </el-card>
    </el-col>
  </el-row>
</template>
<script setup lang="ts" name="viewCharts">
import { useSettingStore } from '@/store';
import * as echarts from 'echarts/core';
import {
  TitleComponent,
  TitleComponentOption,
  ToolboxComponent,
  ToolboxComponentOption,
  TooltipComponent,
  TooltipComponentOption,
  GridComponent,
  GridComponentOption,
  LegendComponent,
  LegendComponentOption,
} from 'echarts/components';
import { LineChart, LineSeriesOption, PieChart, PieSeriesOption, RadarChart, RadarSeriesOption } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { SVGRenderer } from 'echarts/renderers';
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
type ViewEChartsOption = echarts.ComposeOption<
  | TitleComponentOption
  | ToolboxComponentOption
  | TooltipComponentOption
  | GridComponentOption
  | LegendComponentOption
  | LineSeriesOption
>;
const viewChartRef = ref(null as HTMLElement | null);
const origionChartRef = ref(null as HTMLElement | null);
const allocationChartRef = ref(null as HTMLElement | null);
const orderDistributionChartRef = ref(null as HTMLElement | null);

onMounted(() => {
  const viewChart = echarts.init(viewChartRef.value!);
  const origionChart = echarts.init(origionChartRef.value!);
  const allocationChart = echarts.init(allocationChartRef.value!);
  const orderDistributionChart = echarts.init(orderDistributionChartRef.value!);
  watchEffect(() => {
    viewChart.setOption({
      textStyle: {
        color: '#303133', //'#E5EAF3'
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
          color: '#303133', //'#E5EAF3'
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
          data: [300, 500, 800, 900, 3000, 3500, 4000, 5000, 4000, 2800, 1000],
        },
        {
          name: 'UV',
          type: 'line',
          stack: 'Total',
          areaStyle: {},
          emphasis: {
            focus: 'series',
          },
          data: [8, 16, 39, 42, 156, 160, 153, 200, 148, 140, 43],
        },
      ],
    });
    origionChart.setOption({
      textStyle: {
        color: '#303133', //'#E5EAF3'
      },
      legend: {
        bottom: '0',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'cross',
        },
      },
      series: [
        {
          name: '访问来源',
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
            { value: 1048, name: '直接访问' },
            { value: 735, name: '搜索引擎' },
            { value: 580, name: '推广邮件' },
            { value: 484, name: '推广短信' },
            { value: 300, name: '营销广告' },
          ],
        },
      ],
    });
    allocationChart.setOption({
      textStyle: {
        color: '#303133', //'#E5EAF3'
      },
      legend: {
        bottom: '0',
        left: 'center',
      },
      tooltip: {
        trigger: 'item',
        axisPointer: {
          type: 'cross',
        },
      },
      series: [
        {
          name: '预算分配',
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
            { value: 1048, name: '日用/百货' },
            { value: 735, name: '电子产品' },
            { value: 580, name: '配饰/挂件' },
            { value: 484, name: '服装/箱包' },
            { value: 300, name: '化妆品' },
          ],
        },
      ],
    });
    orderDistributionChart.setOption({
      legend: {
        data: ['新客', '老客'],
        bottom: '0',
      },
      radar: {
        center: ['50%', '45%'],
        radius: '65%',
        indicator: [
          { name: '日用/百货', max: 6500 },
          { name: '电子产品', max: 16000 },
          { name: '配饰/挂件', max: 30000 },
          { name: '服装/箱包', max: 38000 },
          { name: '化妆品', max: 52000 },
        ],
      },
      series: [
        {
          name: '订单分布',
          type: 'radar',
          data: [
            {
              value: [4200, 3000, 20000, 35000, 50000],
              name: '新客',
            },
            {
              value: [5000, 14000, 28000, 26000, 42000],
              name: '老客',
            },
          ],
        },
      ],
    });
  });
});
</script>
<style lang="scss" scoped>
.view-charts {
  width: 100%;
  height: 300px;
}
</style>
