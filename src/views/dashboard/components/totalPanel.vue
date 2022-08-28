<template>
  <div class="total-panel">
    <el-row :gutter="20">
      <el-col v-for="(item, index) in list" :key="index" :xs="24" :sm="12" :xl="6">
        <el-card shadow="hover" :header="index == 0 ? '' : item.title" class="total-item">
          <el-skeleton :loading="index == 0">
            <div class="content">
              <div class="total">
                <me-number :end="item.total" :format="undefined"></me-number>
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
const list = reactive([
  {
    title: '用户数',
    icon: 'mel-icon-user-filled',
    iconColor: '#67C23A',
    total: 3000,
    subTitle: '昨日新增：',
    subTotal: 300,
  },
  {
    title: '订单数',
    icon: 'mel-icon-histogram',
    iconColor: '#E6A23C',
    total: 299,
    subTitle: '昨日新增：',
    subTotal: 35,
  },
  {
    title: '成交额',
    icon: 'mel-icon-money',
    iconColor: '#F56C6C',
    total: '￥3815566.88',
    subTitle: '昨日新增：',
    subTotal: 25863,
  },
  {
    title: '访问量',
    icon: 'mel-icon-platform',
    iconColor: '#409EFF',
    total: 26589,
    subTitle: '昨日新增：',
    subTotal: 6930,
  },
]);
</script>
<style lang="scss" scoped>
.total-panel {
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
