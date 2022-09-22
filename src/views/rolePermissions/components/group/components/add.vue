<template>
  <el-dialog :model-value="show" :title="data ? '编辑' : '新增'" @update:model-value="emit('update:show', $event)">
    <el-form ref="form" :model="formData">
      <el-form-item label="父级" prop="parentId">
        <el-tree-select
          v-model="formData.parentId"
          :disabled="data"
          :props="{ label: 'name', value: 'id' }"
          :data="list.data.value"
          :render-after-expand="false"
          filterable
          check-strictly
        />
      </el-form-item>
      <el-form-item label="名称" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-radio-group v-model="formData.status">
          <el-radio :label="1">启用</el-radio>
          <el-radio :label="0">禁用</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
        <el-button @click="($refs.form as FormInstance).resetFields()">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script setup lang="ts" name="add">
import { GroupInfo, addGroupApi, groupListApi } from '@/api/admin';
import { FormInstance } from 'element-plus';
import { PropType } from 'vue';
const props = defineProps({
  show: {
    type: Boolean,
    required: true,
  },
  data: Object as PropType<Required<GroupInfo>>,
});
const emit = defineEmits({
  ['update:show']: (show: boolean) => true,
});
const formData = reactive(new GroupInfo());
watch(
  () => props.data,
  () => {
    if (props.data) {
      Object.assign(formData, props.data);
    } else {
      Object.assign(formData, new GroupInfo());
    }
  },
);
const list = groupListApi();
list.run();
const onSubmit = () => {
  emit('update:show', false);
};
</script>
<style lang="scss" scoped>
.add {
}
</style>
