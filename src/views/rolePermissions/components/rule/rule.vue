<template>
  <me-vxe-table
    ref="menuRef"
    :data="menu.data.value ?? []"
    :loading="menu.loading.value"
    :custom-column="false"
    :tree-config="{ expandAll: true, line: true, reserve: true }"
    :checkbox-config="{ labelField: 'id' }"
    :row-config="{ keyField: 'rule', useKey: true }"
    align="center"
    border="full"
    height="800px"
    me-class="rule"
    show-overflow
    @refresh="getMenu"
    @quick-search="search"
  >
    <vxe-column type="checkbox" title="ID" tree-node width="240px" align="left" header-align="center"></vxe-column>
    <vxe-column field="name" title="菜单" type="html"></vxe-column>
    <vxe-column field="rule" title="权限" type="html"></vxe-column>
    <vxe-column
      field="type"
      title="类型"
      :formatter="({row}:Record<'row',MenuListResult[number]>)=>dict.type[row.type]"
    ></vxe-column>
    <vxe-column field="sort" title="排序"></vxe-column>
    <vxe-column
      field="status"
      title="状态"
      :formatter="({row}:Record<'row',MenuListResult[number]>)=>dict.status[row.status]"
    >
    </vxe-column>
  </me-vxe-table>
</template>
<script setup lang="ts" name="Rule">
import { menuListApi, MenuListResult } from '@/api/menu';
import { cloneDeep } from 'lodash-es';
import { searchTreeTable } from '@/utils/helper';
import { PropType } from 'vue';
import * as dict from './dict';
const props = defineProps({
  checkedRules: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
});
const menuRef = ref<MeVxeTableInstance>();
const menu = menuListApi();
watch(
  () => [props.checkedRules, menu.data.value],
  async () => {
    if (!menu.data.value || !menu.data.value.length) {
      return;
    }
    await menuRef.value!.vxeTableRef!.clearCheckboxRow();
    menuRef.value!.vxeTableRef!.setCheckboxRow(
      props.checkedRules.reduce((previousValue, currentValue) => {
        const row = menuRef.value!.vxeTableRef!.getRowById(currentValue);
        if (!row.children) {
          previousValue.push(row);
        }
        return previousValue;
      }, [] as any[]),
      true,
    );
  },
);
let menuDataCopy = [] as MenuListResult;
const search = (searchText: string) => {
  menu.data.value = searchTreeTable(searchText, ['name', 'rule'] as ['name', 'rule'], menuDataCopy);
  nextTick(() => {
    menuRef.value!.vxeTableRef!.setAllTreeExpand(true);
  });
};
const getMenu = async () => {
  await menu.runAsync();
  menuDataCopy = cloneDeep(menu.data.value!);
  search(menuRef.value!.searchText);
};
getMenu();
</script>
<style lang="scss" scoped>
.rule {
}
</style>
