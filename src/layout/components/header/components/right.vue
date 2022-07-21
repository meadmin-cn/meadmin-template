<template>
  <el-space class="right">
    <div></div>
    <me-dark-switch class="item no-hover"></me-dark-switch>
    <el-dropdown class="item pointer" max-height="500px">
      <div class="flex-center">
        <el-badge is-dot>
          <el-icon-bell class="message-icon"></el-icon-bell>
        </el-badge>
      </div>
      <template #dropdown>
        <div class="message-tabs">
          <div class="message-header">
              <div>全部已读</div>
              <div>查看更多</div>
          </div>
          <el-tabs  model-value="notify">
          <el-tab-pane label="通知" name="notify">
            <el-card class="box-card" shadow="never">
            <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
            </el-card>
          </el-tab-pane>
          <el-tab-pane label="消息" name="message">Config</el-tab-pane>
          <el-tab-pane label="待办" name="agenda">Role</el-tab-pane>
          </el-tabs>
        </div>
        
      </template>
    </el-dropdown>
    <me-locale-select class="item"></me-locale-select>
    <me-size-select class="item"></me-size-select>
    <el-space class="item pointer">
      <el-avatar size="small" src="" />
      admin
    </el-space>
  </el-space>
</template>
<script setup lang="ts" name="right">
import MeDarkSwitch from "@/components/meDarkSwitch.vue";
import MeLocaleSelect from "@/components/meLocaleSelect.vue";
import MeSizeSelect from "@/components/meSizeSelect.vue";


</script>
<style lang="scss" scoped>
@use 'element-plus/theme-chalk/src/mixins/function.scss' as *;

.right {
  font-size: 1rem;
  height: 100%;

  .item {
    padding: 0 10px;
    height: 100%;
  }

  .item:hover {
    background-color: getCssVar('bg-color','page');
  }

  .no-hover:hover {
    background-color: unset;
  }

  &:deep(.el-space__item) {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .message-icon {
    height: 25px;
    line-height: 25px;
    font-size: 1.2em;
  }

}

.message-tabs {
  padding: 15px 10px;
  height: 300px;
  .message-header{
    display: flex;
    align-items: center;
  }
}
</style>