<template>
  <div>
    <me-vxe-table
      ref="groupRef"
      :data="group.data.value ?? []"
      :loading="group.loading.value"
      :row-config="{ isCurrent: true, useKey: true }"
      :tree-config="{ expandAll: true, line: true }"
      :custom-column="false"
      :print="false"
      :export-menu="[]"
      show-overflow
      height="800px"
      me-class="group"
      @current-change="groupChange"
      @add="showAddOrEditor()"
      @refresh="getGroup"
      @quick-search="search"
    >
      <vxe-column field="name" title="角色" tree-node>
        <template #default="{ row }">
          <div class="group-item">
            <div>
              <span v-html="row.name"></span>
              &nbsp;<el-tag v-if="row.status === 0" size="small" type="info">禁用</el-tag>
            </div>
            <div class="group-item-btn">
              <el-link type="primary" :underline="false" @click="showAddOrEditor(row)"><mel-icon-edit /></el-link>
              <el-link type="danger" :underline="false" style="margin-left: 5px" @click="del(row.id)"
                ><mel-icon-delete
              /></el-link>
            </div>
          </div>
        </template>
      </vxe-column>
    </me-vxe-table>
    <add v-model:show="showAdd" :data="editorInfo" @success="getGroup()"></add>
  </div>
</template>
<script setup lang="ts" name="Group">
import { groupListApi, GroupListResult, delGroupApi, editGroupApi } from '@/api/admin';
import { cloneDeep } from 'lodash-es';
import { VxeTableEvents } from 'vxe-table';
import { searchTreeTable } from '@/utils/helper';
import Add from './components/add.vue';
import { omit } from 'lodash-es';
const emit = defineEmits({
  currentChange: (row: string[]) => true,
});
const showAdd = ref(false);
const groupRef = ref<MeVxeTableInstance>();
const group = groupListApi();
let groupDataCopy = [] as GroupListResult;
const search = (searchText: string) => {
  group.data.value = searchTreeTable(searchText, ['name'] as ['name'], groupDataCopy);
  nextTick(() => groupRef.value!.vxeTableRef!.setAllTreeExpand(true));
};
const getGroup = async () => {
  await group.runAsync();
  groupDataCopy = cloneDeep(group.data.value!);
  emit('currentChange', []);
  search(groupRef.value!.searchText);
};
getGroup();
const groupChange: VxeTableEvents.CurrentChange = ({ row }: { row: GroupListResult[number] }) =>
  emit('currentChange', row.rules);
const editorInfo = shallowRef<Omit<GroupListResult[number], 'children'>>();
const showAddOrEditor = (info?: GroupListResult[number]) => {
  editorInfo.value = info ? omit(info, ['children']) : undefined;
  showAdd.value = true;
};
const del = (id: number) => {
  ElMessageBox.confirm('确认删除所选角色组?')
    .then(() => {
      delGroupApi().runAsync(id).then(getGroup);
    })
    .catch(() => {
      // catch error
    });
};
const setGroupRules = async (rules?: string[]) => {
  if (!rules) {
    return;
  }
  const row = groupRef.value!.vxeTableRef!.getCurrentRecord();
  if (row) {
    return await editGroupApi().runAsync(row.id, { rules });
  }
  ElMessage.error('请先选择分组');
};
defineExpose({ setGroupRules });
</script>
<style lang="scss" scoped>
.group {
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
</style>
