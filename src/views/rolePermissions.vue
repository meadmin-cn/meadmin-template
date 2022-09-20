<template>
  <div class="rule-permissions">
    <me-vxe-table
      :data="group.data.value ?? []"
      :loading="group.loading.value"
      :row-config="{ isCurrent: true, useKey: true }"
      :tree-config="{ expandAll: true, line: true, reserve: true }"
      :custom-column="false"
      :print="false"
      :export-menu="[]"
      show-overflow
      height="800px"
      me-class="group"
      @current-change="groupChange"
      @add="getGroup"
      @refresh="getGroup"
      @quick-search="search"
    >
      <vxe-column field="name" title="角色" tree-node>
        <template #default="{ row }">
          <div class="group-item">
            <span v-html="row.name"></span>
            <div class="group-item-btn">
              <el-link type="primary" :underline="false"><mel-icon-edit /></el-link>
              <el-link type="danger" :underline="false" style="margin-left: 5px"><mel-icon-delete /></el-link>
            </div>
          </div>
        </template>
      </vxe-column>
    </me-vxe-table>
    <me-vxe-table
      ref="ruleRef"
      :data="menu.data.value ?? []"
      :loading="menu.loading.value"
      :tree-config="{ expandAll: true, line: true, reserve: true }"
      :checkbox-config="{ labelField: 'id' }"
      :row-config="{ keyField: 'rule', useKey: true }"
      align="center"
      border="full"
      height="800px"
      me-class="rule"
      show-overflow
      @refresh="menu.refresh"
    >
      <vxe-column type="checkbox" title="ID" tree-node width="240px" align="left" header-align="center"></vxe-column>
      <vxe-column field="name" title="菜单"></vxe-column>
      <vxe-column field="rule" title="权限"></vxe-column>
      <vxe-column field="sort" title="排序"></vxe-column>
      <vxe-column field="status" title="状态">
        <template #default="{ row }">
          {{ row.status == 1 ? '开启' : '关闭' }}
        </template>
      </vxe-column>
    </me-vxe-table>
  </div>
</template>
<script lang="ts" setup name="rulePermissions">
import { groupListApi, GroupListResult } from '@/api/admin';
import { menuListApi } from '@/api/menu';
import { cloneDeep } from 'lodash-es';
import { VxeTableEvents, VxeTableInstance } from 'vxe-table';
import XEUtils from 'xe-utils';
const ruleRef = ref<{ vxeTable: VxeTableInstance }>();
const group = groupListApi();
let groupDataCopy = [] as GroupListResult;
const search = (searchText: string) => {
  if (!searchText) {
    return (group.data.value = cloneDeep(groupDataCopy));
  }
  const name = XEUtils.toValueString(searchText).trim().toLowerCase();
  const nameRE = new RegExp(name, 'gi');
  const rest = XEUtils.searchTree(
    cloneDeep(groupDataCopy),
    (item) => XEUtils.toValueString(item.name).toLowerCase().indexOf(name) > -1,
  );
  XEUtils.eachTree(
    rest,
    (item) => (item.name = item.name.replace(nameRE, (match) => `<span class="keyword-lighten">${match}</span>`)),
  );
  group.data.value = rest;
};
const getGroup = async () => {
  await group.runAsync();
  groupDataCopy = cloneDeep(group.data.value!);
};
getGroup();

const menu = menuListApi();
menu.run();
const groupChange: VxeTableEvents.CurrentChange = async ({ row }: { row: GroupListResult[number] }) => {
  await ruleRef.value!.vxeTable.clearCheckboxRow();
  ruleRef.value!.vxeTable.setCheckboxRow(
    row.rules.reduce((previousValue, currentValue) => {
      const row = ruleRef.value!.vxeTable.getRowById(currentValue);
      if (!row.children) {
        previousValue.push(row);
      }
      return previousValue;
    }, [] as any[]),
    true,
  );
};
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
    .group-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      .group-item-btn {
        display: none;
      }
    }
    :deep(.row--current) {
      .group-item-btn {
        display: block;
      }
    }
  }
  .rule {
    flex: 3;
    margin: 10px;
  }
  :deep(.keyword-lighten) {
    background-color: var(--el-color-warning);
    color: var(--el-text-color-primary);
  }
}
</style>
