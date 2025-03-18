<template>
  <div clss="menu">
    <me-vxe-table
      ref="menuRef"
      v-model:quick-search="searchText"
      :data="menu.data.value ?? []"
      :loading="menu.loading.value"
      :custom-column="false"
      :tree-config="{ expandAll: true, line: true, reserve: true }"
      :checkbox-config="{ labelField: 'id' }"
      :row-config="{ keyField: 'rule', useKey: true }"
      :column-config="{ useKey: true }"
      align="center"
      border
      me-class="table-menu"
      height="auto"
      show-overflow
      @refresh="getMenu"
      @quick-search="search"
      @add="showAddOrEditor()"
    >
      <vxe-column type="checkbox" title="ID" tree-node width="240px" align="left" header-align="center"></vxe-column>
      <vxe-column field="name" title="菜单" type="html"></vxe-column>
      <vxe-column field="rule" title="规则" type="html"></vxe-column>
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
      <vxe-column title="操作">
        <template #default="{ row }">
          <el-button type="primary" link @click="showAddOrEditor(row)"><mel-icon-edit /></el-button>
          <el-button type="danger" link @click="del(row.id)"><mel-icon-delete /></el-button>
        </template>
      </vxe-column>

      <template #toolsButton>
        <el-button
          type="success"
          @click="
            emit(
              'subRules',
              menuRef!.vxeTableRef!.getCheckboxRecords(true).map((item) => item.rule),
            )
          "
          >保存</el-button
        >
      </template>
    </me-vxe-table>
    <add v-model:show="showAdd" :data="editorInfo" @success="getMenu()"></add>
  </div>
</template>
<script setup lang="ts" name="Menu">
import { delMenuApi, menuListApi, MenuListResult } from '@/api/menu';
import { cloneDeep, omit } from 'lodash-es';
import { searchTreeTable } from '@/utils/helper';
import { PropType } from 'vue';
import * as dict from './dict';
import Add from './components/add.vue';
const props = defineProps({
  checkedRules: {
    type: Array as PropType<string[]>,
    default: () => [],
  },
});
const emit = defineEmits<{
  (e: 'subRules', rules: string[]): void;
}>();
const showAdd = ref(false);
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
const searchText = ref('');
const search = (searchText: string) => {
  menu.data.value = searchTreeTable(searchText, ['name', 'rule'] as ['name', 'rule'], menuDataCopy);
  nextTick(() => menuRef.value!.vxeTableRef!.setAllTreeExpand(true));
};
const getMenu = async () => {
  await menu.runAsync();
  menuDataCopy = cloneDeep(menu.data.value!);
  search(searchText.value);
};
getMenu();
const editorInfo = ref<Omit<MenuListResult[number], 'children'>>();
const showAddOrEditor = (info?: MenuListResult[number]) => {
  editorInfo.value = info ? omit(info, ['children']) : undefined;
  showAdd.value = true;
};
const del = (id: number) => {
  ElMessageBox.confirm('确认删除所选菜单?')
    .then(() => {
      delMenuApi().runAsync(id).then(getMenu);
    })
    .catch(() => {
      // catch error
    });
};
</script>
<style lang="scss" scoped>
.menu {
  .table-menu {
    height: 100%;
    display: flex;
    flex-direction: column;
    :deep(.me-vxe-body) {
      flex-grow: 1;
    }
  }
}
</style>
