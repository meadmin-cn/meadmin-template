<template>
  <div class="role-permissions">
    <el-scrollbar always view-class="body">
      <group ref="group" class="group" @current-change="checkedRules = $event"></group>
      <Menu class="menu" :checked-rules="checkedRules" @sub-rules="group!.setGroupRules"></Menu>
    </el-scrollbar>
  </div>
</template>
<script lang="ts" setup name="RulePermissions">
import Group from './components/group/group.vue';
import Menu from './components/menu/menu.vue';
const group = ref<InstanceType<typeof Group>>();
const checkedRules = shallowRef([] as string[]);
</script>
<style lang="scss" scoped>
.role-permissions {
  z-index: 1;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  :deep(.body) {
    display: flex;
    flex-wrap: wrap;
    min-height: 100%;
    padding: calc($page-padding - 10px);
    .group {
      flex: 1;
      margin: 10px;
      min-width: 300px;
      min-height: 600px;
    }

    .menu {
      flex: 3;
      margin: 10px;
      min-height: 600px;
    }

    .keyword-lighten {
      background-color: var(--el-color-warning-light-3);
    }
  }
}
</style>
