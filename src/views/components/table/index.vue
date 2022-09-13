<template>
  <div class="table">
    <me-table :data="tableData" @quick-search="() => {}" @refresh="() => {}" @add="() => {}">
      <template #search>
        <el-form ref="searchRef" :model="searchForm" label-width="100px" class="search">
          <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="8" :lg="6">
              <el-form-item :label="t('名称')" prop="name">
                <el-input v-model="searchForm.name" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6">
              <el-form-item :label="t('类型')">
                <el-select v-model="searchForm.type" prop="type">
                  <el-option :label="t('类型') + '1'" value="1" />
                  <el-option :label="t('类型') + '2'" value="2" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6">
              <el-form-item :label="t('日期')" prop="date">
                <el-date-picker v-model="searchForm.date" type="date" placeholder="Pick a date" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6">
              <el-form-item :label="t('地址')" prop="address">
                <el-input v-model="searchForm.address" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6">
              <el-form-item :label="t('邮政编码')" prop="zip">
                <el-input v-model="searchForm.zip" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6">
              <el-form-item>
                <el-button type="primary">{{ t('查询') }}</el-button>
                <el-button @click="()=>($refs.searchRef as FormInstance).resetFields()">{{ t('重置') }}</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </template>
      <template #buttons>
        <el-button @click="addressInfo = !addressInfo">切换地址详情header</el-button>
      </template>
      <el-table-column type="selection" label="选择" width="55" />
      <el-table-column prop="date" :label="t('日期')">
        <template #default>
          <div v-if="addressInfo">111</div>
          <div v-else>2222</div>
        </template>
      </el-table-column>
      <el-table-column :label="t('快递') + t(' ') + t('详情')">
        <el-table-column prop="name" :label="t('名称')" />
        <el-table-column :label="addressInfo ? t('地址') + t(' ') + t('详情') : '111'">
          <el-table-column prop="province" :label="t('省')" />
          <el-table-column prop="city" :label="t('市')" />
          <el-table-column prop="address" :label="t('地址')" />
          <el-table-column prop="zip" :label="t('邮政编码')">
            <template #default>
              <div v-if="addressInfo">111</div>
              <div v-else>2222</div>
            </template>
          </el-table-column>
        </el-table-column>
      </el-table-column>
    </me-table>
  </div>
</template>
<script setup lang="ts" name="Table">
import { useLocalesI18n } from '@/locales/i18n';
import { FormInstance } from 'element-plus';
const { t } = useLocalesI18n({}, [(locale: string) => import(`./lang/${locale}.json`), 'tableLang']);
const addressInfo = ref(true);
const tableData = [
  {
    date: '2016-05-03',
    name: '张三',
    province: '北京',
    city: '北京',
    address: '开发大街1350号',
    zip: '100000',
  },
  {
    date: '2016-05-02',
    name: '李四',
    province: '上海',
    city: '上海',
    address: '测试大街2350号',
    zip: '200000',
  },
  {
    date: '2016-05-04',
    name: '王五',
    province: '山东',
    city: '青岛',
    address: '产品大街0875号',
    zip: '266000',
  },
  {
    date: '2016-05-01',
    name: '刘六',
    province: '山东',
    city: '济南',
    address: '幸福大街4590号',
    zip: '250000',
  },
  {
    date: '2016-05-08',
    name: '张三',
    province: '北京',
    city: '北京',
    address: '开发大街1350号',
    zip: '100000',
  },
  {
    date: '2016-05-06',
    name: '王五',
    province: '山东',
    city: '青岛',
    address: '产品大街0875号',
    zip: '266000',
  },
  {
    date: '2016-05-07',
    name: '王五',
    province: '山东',
    city: '青岛',
    address: '产品大街0875号',
    zip: '266000',
  },
];
const searchForm = reactive({
  name: '',
  type: undefined,
  date: '',
  address: '',
  zip: '',
});
</script>
<style lang="scss" scoped>
.table {
  .search {
    margin-bottom: -18px;
    :deep(.el-input) {
      width: 220px;
    }
  }
}
</style>
