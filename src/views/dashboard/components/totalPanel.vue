<template>
  <div class="total-panel">
    <el-row :gutter="20">
      <el-col v-for="(item, index) in list" :key="index" :xs="24" :sm="12" :lg="6">
        <el-card shadow="hover" :header="loading ? '' : item.title" class="total-item">
          <el-skeleton :loading="loading">
            <div class="content">
              <div class="total">
                <me-number :end="item.total"></me-number>
                <component :is="item.icon" :style="{ color: item.iconColor }" />
              </div>
              <div class="footer">
                {{ item.subTitle }}<span>{{ item.subTotal }}</span>
              </div>
            </div>
          </el-skeleton>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script setup lang="ts">
import { statisticsApi } from '@/api/statistics';
import { useLocalesI18n } from '@/locales/i18n';
let { t } = useLocalesI18n({}, [(locale) => import(`../lang/${locale}.json`), 'dashboard']);
const { loading, runAsync, data } = statisticsApi(true);
const list = reactive([
  {
    title: computed(() => t('访问量')),
    icon: 'mel-icon-platform',
    iconColor: '#409EFF',
    total: computed(() => data.value?.view.total),
    subTitle: computed(() => t('昨日新增') + '：'),
    subTotal: computed(() => data.value?.view.yesterdayTotal),
  },
  {
    title: t('用户数'),
    icon: 'mel-icon-user-filled',
    iconColor: '#67C23A',
    total: computed(() => data.value?.user.total),
    subTitle: computed(() => t('昨日新增') + '：'),
    subTotal: computed(() => data.value?.user.yesterdayTotal),
  },
  {
    title: computed(() => t('订单数')),
    icon: 'mel-icon-histogram',
    iconColor: '#E6A23C',
    total: computed(() => data.value?.order.total),
    subTitle: computed(() => t('昨日新增') + '：'),
    subTotal: computed(() => data.value?.order.yesterdayTotal),
  },
  {
    title: computed(() => t('成交额')),
    icon: 'mel-icon-money',
    iconColor: '#F56C6C',
    total: computed(() => (data.value ? ([data.value.turnover.total, '￥'] as [number, string]) : 0)),
    subTitle: computed(() => t('昨日新增') + '：'),
    subTotal: computed(() => '￥' + (data.value?.turnover.yesterdayTotal ?? '')),
  },
]);
runAsync();
</script>
<style lang="scss" scoped>
.total-panel {
  margin-bottom: -10px;
  .total-item {
    --el-card-padding: 10px;
    margin-bottom: 10px;
    .content {
      height: 91.5px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 0 10px;
      .total {
        font-size: 24px;
        font-weight: bold;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-grow: 1;
        .el-icon,
        :deep(svg) {
          height: 100%;
          width: auto;
        }
      }
      .footer {
        font-size: 13px;
        color: var(--el-text-color-regular);
        span {
          font-weight: bold;
          color: var(--el-text-color-primary);
        }
      }
    }
  }
}
</style>
