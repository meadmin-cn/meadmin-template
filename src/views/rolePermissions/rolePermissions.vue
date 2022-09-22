<template>
  <div class="rule-permissions">
    <group class="group" @current-change="checkedRules = $event"></group>
    <rule class="rule" :checked-rules="checkedRules"></rule>
  </div>
</template>
<script lang="ts" setup name="rulePermissions">
import Group from './components/group/group.vue';
import Rule from './components/rule/rule.vue';
const checkedRules = shallowRef([] as string[]);
</script>
<style lang="scss" scoped>
.rule-permissions {
  display: flex;
  flex-wrap: wrap;
  margin: -10px;

  .group {
    flex: 1;
    margin: 10px;
    min-width: 300px;
  }

  .rule {
    flex: 3;
    margin: 10px;
  }

  :deep(.keyword-lighten) {
    background-color: var(--el-color-warning-light-3);
  }
}
</style>
