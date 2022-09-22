<template>
  <div class="role-permissions">
    <group class="group" @current-change="checkedRules = $event" ref="group"></group>
    <Menu class="menu" :checked-rules="checkedRules" @subRules="($refs.group as any).setGroupRules($event)"></Menu>
  </div>
</template>
<script lang="ts" setup name="RulePermissions">
import Group from './components/group/group.vue';
import Menu from './components/menu/menu.vue';
const checkedRules = shallowRef([] as string[]);
</script>
<style lang="scss" scoped>
.role-permissions {
  display: flex;
  flex-wrap: wrap;
  margin: -10px;

  .group {
    flex: 1;
    margin: 10px;
    min-width: 300px;
  }

  .menu {
    flex: 3;
    margin: 10px;
  }

  :deep(.keyword-lighten) {
    background-color: var(--el-color-warning-light-3);
  }
}
</style>
