<template>
  <el-card shadow="hover">
    <div ref="viewChartsRef" class="view-charts"></div>
  </el-card>

  <el-row :gutter="20"> </el-row>
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
import { LineChart, LineSeriesOption } from 'echarts/charts';
import { UniversalTransition } from 'echarts/features';
import { SVGRenderer } from 'echarts/renderers';
import { use } from 'echarts/core';
echarts.use([
  TitleComponent,
  ToolboxComponent,
  TooltipComponent,
  GridComponent,
  LegendComponent,
  LineChart,
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
const viewChartsRef = ref(null as HTMLElement | null);
onMounted(() => {
  watchEffect(() => {
    const myChart = echarts.init(viewChartsRef.value!, 'dark');
    myChart.setOption({
      title: {
        text: '浏览量',
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
        },
      },
      legend: {
        data: ['PV', 'UV'],
      },
      grid: {
        left: '20px',
        right: '20px',
        bottom: '3%',
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
          data: [30, 50, 80, 90, 300, 350, 400, 500, 400, 280, 100],
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
  });
});
</script>
<style lang="scss" scoped>
.view-charts {
  width: 100%;
  height: 500px;
}
</style>
