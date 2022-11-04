<template>
  <el-dialog :model-value="show" :title="data ? '编辑' : '新增'" @update:model-value="emit('update:show', $event)">
    <el-form ref="formRef" :model="formData" :rules="rules">
      <el-form-item label="父级" prop="parentId">
        <el-tree-select
          v-model="formData.parentId"
          :disabled="data !== undefined"
          :props="{ label: 'name', value: 'id',disabled:({id}:Required<GroupInfo>)=>id<=0}"
          :data="groupData"
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
        <el-button @click="resetFormData()">重置</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script setup lang="ts" name="Add">
import { GroupInfo, addGroupApi, editGroupApi, groupListApi } from '@/api/admin';
import { FormInstance, FormRules } from 'element-plus';
const props = defineProps<{
  show:boolean,
  data?:Required<GroupInfo>
}>();
const emit = defineEmits<{
  (e:'update:show',show: boolean):void,
  (e:'success'):void
}>();
const formRef = ref<FormInstance>();
const formData = ref(new GroupInfo());
const rules = reactive<FormRules>({
  parentId: [{ required: true, message: '父级必须选择', trigger: 'blur' }],
  name: [{ required: true, message: '名称必须填写', trigger: 'blur' }],
  status: [{ required: true, message: '状态必须选择', trigger: 'blur' }],
});
const resetFormData = () => {
  if (props.data) {
    formData.value = { ...props.data };
  } else {
    formData.value = new GroupInfo();
  }
};
watch(() => props.data, resetFormData);
const list = groupListApi();
list.run();
const groupData = computed(() => {
  if (list.data.value) {
    return [{ id: 0, name: '无', parentId: 0, children: [], rules: [], status: 0 }, ...list.data.value];
  }
  return [];
});
watch(
  () => props.show,
  (show) => {
    !show && formRef.value!.clearValidate();
  },
);
const onSubmit = async () => {
  if (await formRef.value!.validate()) {
    if (formData.value.id) {
      await editGroupApi().runAsync(formData.value.id, formData.value);
    } else {
      await addGroupApi().runAsync(formData.value);
    }
    emit('success');
    emit('update:show', false);
  }
};
</script>
<style lang="scss" scoped>
.add {
}
</style>
