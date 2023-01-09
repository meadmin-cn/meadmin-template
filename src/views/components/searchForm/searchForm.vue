<template>
  <el-card class="search-form">
    <me-search-form ref="formRef" :model="params" :search-text="t('筛选')" label-width="95px" @search="search()">
      <el-form-item :label="t('姓名')" prop="name">
        <el-input v-model="params.name"></el-input>
      </el-form-item>
      <template #more>
        <el-form-item :label="t('类型')" prop="type">
          <el-select v-model="params.type">
            <el-option v-for="(item, key) in typeObj" :key="key" :value="key" :label="item" />
          </el-select>
        </el-form-item>
        <el-form-item :label="t('创建时间')" prop="createTimes">
          <el-date-picker v-model="params.createTimes" type="daterange" value-format="YYYY-MM-DD" />
        </el-form-item>
      </template>
    </me-search-form>
  </el-card>
</template>

<script setup lang="ts" name="SearchForm">
import MeSearchForm from '@/components/meSearchForm.vue';
import { useLocalesI18n } from '@/locales/i18n';
let { t } = useLocalesI18n({}, [(locale: string) => import(`./lang/${locale}.json`), 'searchForm']);
const typeObj = {
  '1': '书籍',
  '2': '电脑',
  '3': '手机',
};
const params = reactive({
  name: '',
  type: '',
  createTimes: ['', ''] as [string, string],
});
const formRef = ref<InstanceType<typeof MeSearchForm>>();
const search = () => {
  ElMessageBox.alert(JSON.stringify(params));
};
</script>
<style lang="scss" scoped>
.search-form {
  ::v-deep(.el-input) {
    width: 215px;
  }
}
</style>
