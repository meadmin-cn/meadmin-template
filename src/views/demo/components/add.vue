<template>
  <me-dialog :title="t(info.id ? '编辑' : '新增')" :model-value="modelValue" :close-on-click-modal="false"
    class="add-dialog">
    <el-form ref="formEl" :model="info" :rules="rules" class="add">
      <el-form-item :label="t('姓名')" prop="name">
        <el-input v-model="info.name"></el-input>
      </el-form-item>
      <el-form-item :label="t('书名')" prop="bookName">
        <el-input v-model="info.bookName"></el-input>
      </el-form-item>
      <el-form-item :label="t('类型')" prop="type">
        <el-select v-model="info.type">
          <el-option v-for="(item, key) in bookType" :key="key" :value="key" :label="item" />
        </el-select>
      </el-form-item>
      <el-form-item :label="t('价格')" prop="price">
        <el-input-number v-model="info.price" :min="0" :precision="2"></el-input-number>
      </el-form-item>
      <el-form-item :label="t('章节')" prop="section">
        <el-input-number v-model="info.section" :min="0" :precision="0"></el-input-number>
      </el-form-item>
    </el-form>
    <template #footer>
      <me-button type="primary" @click="sub()">{{ t('提交') }}</me-button>
      <me-button @click="modelValue = false">{{ t('取消') }}</me-button>
    </template>
  </me-dialog>
</template>

<script setup lang="ts" name="Add">
import { Info, addApi, updateApi } from '@/api/demo';
import { useLocalesI18n } from '@/locales/i18n';
import { bookType } from '@/dict/book';
import { FormInstance, FormRules } from 'element-plus';
let { t } = useLocalesI18n({}, [(locale: string) => import(`../lang/${locale}.json`), 'demo']);
const info = ref(new Info());
const props = defineProps<{
  data?: Required<Info>;
}>();
const modelValue = defineModel<boolean>();
const emit = defineEmits<{
  (e: 'success'): void;
}>();
watch(
  () => props.data,
  (data) => {
    info.value = data ?? new Info();
  },
  { immediate: true },
);
const rules: FormRules = {
  name: { required: true, message: t('请填写') + t('姓名'), trigger: 'blur' },
  bookName: { required: true, message: t('请填写') + t('书名'), trigger: 'blur' },
  type: { required: true, message: t('请选择') + t('类型'), trigger: 'blur' },
  price: { required: true, message: t('请填写') + t('价格'), trigger: 'blur' },
  section: { required: true, message: t('请填写') + t('章节'), trigger: 'blur' },
};
const formEl = ref<FormInstance>();
const loading = ref(false);
const sub = async () => {
  loading.value = true;
  try {
    await formEl.value!.validate();
  } catch (invalidFields) {
    loading.value = false;
    return formEl.value!.scrollToField(Object.keys(invalidFields!)[0]);
  }
  if (info.value.id) {
    await updateApi().runAsync(info.value.id, info.value);
  } else {
    await addApi().runAsync(info.value);
  }
  emit('success');
  loading.value = false;
  modelValue.value = false;
};
</script>
<style lang="scss" scoped>
.add-dialog {
  max-height: 60vh;
}
</style>
