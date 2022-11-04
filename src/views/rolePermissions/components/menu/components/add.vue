<template>
  <el-dialog :model-value="show" :title="data ? '编辑' : '新增'" @update:model-value="emit('update:show', $event)">
    <el-form ref="formRef" :model="formData" :rules="rules">
      <el-form-item label="父级" prop="parentId">
        <el-tree-select
          v-model="formData.parentId"
          :props="{ label: 'name', value: 'id' }"
          :data="menuData"
          :render-after-expand="false"
          filterable
          check-strictly
        />
      </el-form-item>
      <el-form-item label="名称" prop="name">
        <el-input v-model="formData.name"></el-input>
      </el-form-item>
      <el-form-item label="规则" prop="rule">
        <el-input v-model="formData.rule"></el-input>
      </el-form-item>
      <el-form-item label="排序" prop="sort">
        <el-input-number v-model="formData.sort"></el-input-number>
      </el-form-item>
      <el-form-item label="类型" prop="type">
        <el-radio-group v-model="formData.type">
          <el-radio v-for="(item, key) in type" :key="key" :label="+key">{{ item }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="状态" prop="status">
        <el-radio-group v-model="formData.status">
          <el-radio v-for="(item, key) in status" :key="key" :label="+key">{{ item }}</el-radio>
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
import { addMenuApi, MenuInfo, editMenuApi, menuListApi } from '@/api/menu';
import { FormInstance, FormRules } from 'element-plus';
import { PropType } from 'vue';
import { type, status } from '../dict';
const props = defineProps<{
  show:boolean,
  data?:Required<MenuInfo>
}>();
const emit = defineEmits<{
  (e:'update:show',show: boolean):void,
  (e:'success'):void
}>();
const formRef = ref<FormInstance>();
const formData = ref(new MenuInfo());
const rules = reactive<FormRules>({
  parentId: [{ required: true, message: '父级必须选择', trigger: 'blur' }],
  name: [{ required: true, message: '名称必须填写', trigger: 'blur' }],
  rule: [{ required: true, message: '规则必须填写', trigger: 'blur' }],
  type: [{ required: true, message: '类型必须选择', trigger: 'blur' }],
  status: [{ required: true, message: '状态必须选择', trigger: 'blur' }],
});
const resetFormData = () => {
  if (props.data) {
    formData.value = { ...props.data };
  } else {
    formData.value = new MenuInfo();
  }
};
watch(() => props.data, resetFormData);
const list = menuListApi();
list.run();
const menuData = computed(() => {
  if (list.data.value) {
    return [{ id: 0, name: '无', parentId: 0, children: [], status: 1 }, ...list.data.value];
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
      await editMenuApi().runAsync(formData.value.id, formData.value);
    } else {
      await addMenuApi().runAsync(formData.value);
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
