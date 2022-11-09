<template>
  <el-dropdown class="message-box" max-height="500px" trigger="click">
    <div class="flex-center pointer">
      <el-badge :is-dot="isDot">
        <mel-icon-bell class="message-icon"></mel-icon-bell>
      </el-badge>
    </div>
    <template #dropdown>
      <div class="message-tabs">
        <div class="message-header">
          <el-link>{{ $t('全部') }}{{ $t(' ') }}{{ $t('已读') }}</el-link>
          <el-link>{{ $t('查看') }}{{ $t(' ') }}{{ $t('更多') }}</el-link>
        </div>
        <el-tabs model-value="notify">
          <el-tab-pane :label="$t('通知')" name="notify">
            <div v-for="o in 4" :key="o" class="text notify-item">
              {{ 'List item ' + o }}
              <div class="date">2022/08/08</div>
            </div>
          </el-tab-pane>
          <el-tab-pane :label="$t('消息')" name="message">
            <div v-for="o in 4" :key="o" class="text notify-item">
              {{ 'List item ' + o }}
              <div class="date">2022/08/08</div>
            </div>
          </el-tab-pane>
          <el-tab-pane :label="$t('待办')" name="agenda">
            <div v-for="o in 4" :key="o" class="text notify-item">
              {{ 'List item ' + o }}
              <div class="date">2022/08/08</div>
            </div>
          </el-tab-pane>
        </el-tabs>
      </div>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts" name="MessageBox">
const isDot = ref(true);
</script>
<style lang="scss" scoped>
.message-box {
  .flex-center {
    padding: 0 10px;

    .message-icon {
      height: 25px;
      line-height: 25px;
      font-size: 1.3em;
    }
  }
}

.message-tabs {
  padding: 15px 10px;
  height: 300px;
  font-size: 14px;

  .message-header {
    display: flex;
    justify-content: space-between;

    :deep(.el-link) {
      font-size: 0.85em !important;
    }
  }

  :deep(.el-tabs__header) {
    margin-bottom: 0;
  }

  .notify-item {
    padding: 5px 0;
    border-bottom: 1px solid #eeeeee;

    .date {
      font-size: 12px;
      color: var(--el-text-color-placeholder);
    }
  }
}
</style>
