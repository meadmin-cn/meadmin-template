<template>
  <div class="table">
    <me-table
      ref="meTableRef"
      :data="data"
      :custom-column="customColumn"
      :loading="loading"
      :header-cell-style="{ textAlign: 'center' }"
      :cell-style="{ textAlign: 'center' }"
      stripe
      @quick-search="run"
      @refresh="refresh"
      @add="() => {}"
    >
      <template #search>
        <el-form ref="searchRef" :model="searchForm" label-width="100px" class="search">
          <el-row :gutter="10">
            <el-col :xs="24" :sm="12" :md="8" :lg="6">
              <el-form-item :label="t('名称')" prop="name">
                <el-input v-model="searchForm.name" />
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6">
              <el-form-item :label="t('类型')" prop="type">
                <el-select v-model="searchForm.type" clearable>
                  <el-option :label="t('类型') + '1'" value="1" />
                  <el-option :label="t('类型') + '2'" value="2" />
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :xs="24" :sm="12" :md="8" :lg="6">
              <el-form-item :label="t('日期')" prop="date">
                <el-date-picker v-model="searchForm.date" type="date" />
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
                <el-button type="primary" @click="run()">{{ t('查询') }}</el-button>
                <el-button @click="()=>($refs.searchRef as FormInstance).resetFields()">{{ t('重置') }}</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
      </template>
      <template #buttons>
        <el-button @click="canDel = !canDel">{{ t('删除切换') }}</el-button>
        <el-button @click="customColumn = !customColumn">{{ t('自定义列') }}</el-button>
        <el-button @click="data = []">{{ t('清空') }}</el-button>
        <el-button @click="meTableRef!.elTableRef!.toggleAllSelection()">{{ t('全选') }}</el-button>
      </template>
      <el-table-column type="selection" label="选择" width="55" />
      <el-table-column prop="date" :label="t('日期')"> </el-table-column>
      <el-table-column :label="t('快递') + t(' ') + t('详情')">
        <el-table-column prop="name" :label="t('名称')" />
        <el-table-column :label="t('地址') + t(' ') + t('详情')">
          <el-table-column prop="province" :label="t('省')" />
          <el-table-column prop="city" :label="t('市')" />
          <el-table-column prop="address" :label="t('地址')" />
          <el-table-column prop="zip" :label="t('邮政编码')"> </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column :label="t('操作')" min-width="162px">
        <el-button><mel-icon-edit /></el-button>
        <el-button v-if="canDel" type="danger"><mel-icon-delete /></el-button>
      </el-table-column>
      <template #empty>
        {{ t('空空如也') }}
      </template>
    </me-table>
  </div>
</template>
<script setup lang="ts" name="Table">
import { listApi } from '@/api/table';
import { useLocalesI18n } from '@/locales/i18n';
import { FormInstance } from 'element-plus';
const meTableRef = ref<MeTableInstance>();
const customColumn = ref(true);
const { t } = useLocalesI18n({}, [(locale: string) => import(`./lang/${locale}.json`), 'tableLang']);
const canDel = ref(true);
const { loading, run, data, refresh } = listApi();
run();
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
    margin-bottom: -8px;
    :deep(.el-input) {
      width: 220px;
    }
  }
}
</style>
