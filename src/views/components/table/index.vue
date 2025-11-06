<template>
  <el-card shadow="never" class="table">
    <me-table
      ref="meTableRef"
      v-model:quick-search="searchForm.search"
      :data="data?.list"
      :pagination-options="paginationOptions"
      :custom-column="customColumn"
      :loading="loading"
      :header-cell-style="{ textAlign: 'center' }"
      :cell-style="{ textAlign: 'center' }"
      stripe
      @quick-search="getData(1)"
      @refresh="refresh"
      @add="() => {}"
    >
      <template #search>
        <el-form ref="searchRef" :model="searchForm" inline label-width="100px" class="search">
          <el-form-item :label="t('名称')" prop="name">
            <el-input v-model="searchForm.name" />
          </el-form-item>
          <el-form-item :label="t('类型')" prop="type">
            <el-select v-model="searchForm.type" clearable>
              <el-option :label="t('类型') + '1'" value="1" />
              <el-option :label="t('类型') + '2'" value="2" />
            </el-select>
          </el-form-item>
          <el-form-item :label="t('日期')" prop="date">
            <el-date-picker v-model="searchForm.date" type="date" />
          </el-form-item>
          <el-form-item :label="t('地址')" prop="address">
            <el-input v-model="searchForm.address" />
          </el-form-item>
          <el-form-item :label="t('邮政编码')" prop="zip">
            <el-input v-model="searchForm.zip" />
          </el-form-item>
          <el-form-item label=" ">
            <el-button type="primary" @click="getData(1)">{{ t('查询') }}</el-button>
            <el-button @click="()=>($refs.searchRef as FormInstance).resetFields()">{{ t('重置') }}</el-button>
          </el-form-item>
        </el-form>
      </template>
      <template #buttons>
        <el-button @click="canDel = !canDel">{{ t('删除切换') }}</el-button>
        <el-button @click="customColumn = !customColumn">{{ t('自定义列') }}</el-button>
        <el-button @click="meTableRef!.elTableRef!.toggleAllSelection()">{{ t('全选') }}</el-button>
        <el-button @click="getData(searchForm.page - 1)">{{ t('上一页') }}</el-button>
        <el-button @click="getData(searchForm.page + 1)">{{ t('下一页') }}</el-button>
      </template>
      <el-table-column type="selection" label="选择" width="55" />
      <el-table-column prop="date" :label="t('日期')"> </el-table-column>
      <el-table-column :label="t('快递') + t(' ') + t('详情')">
        <el-table-column prop="name" :label="t('名称')" />
        <el-table-column :label="t('地址') + t(' ') + t('详情')">
          <el-table-column prop="province" :label="t('省')">
            <template #default="{ row }">
              <span>{{ row.province }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="city" :label="t('市')" />
          <el-table-column prop="address" :label="t('地址')" />
          <el-table-column prop="zip" :label="t('邮政编码')"> </el-table-column>
        </el-table-column>
      </el-table-column>
      <el-table-column :label="t('操作')" min-width="162px">
        <template #default="scope">
          <el-button @click="print(scope)">
            <mel-icon-edit />
          </el-button>
          <el-button v-if="canDel" type="danger">
            <mel-icon-delete />
          </el-button>
        </template>
      </el-table-column>
      <template #empty>
        {{ t('空空如也') }}
      </template>
    </me-table>
  </el-card>
</template>
<script setup lang="ts" name="Table">
import { listApi } from '@/api/table';
import { useLocalesI18n } from '@/locales/i18n';
import { FormInstance } from 'element-plus';
const meTableRef = ref<MeTableInstance>();
const customColumn = ref(true);
const { t, loadRes } = useLocalesI18n({}, [(locale: string) => import(`./lang/${locale}.json`), 'tableLang']);
await loadRes;
const canDel = ref(true);
const searchForm = reactive({
  search: '',
  name: '',
  type: undefined,
  date: '',
  address: '',
  zip: '',
  page: 1,
  size: 10,
});
const { loading, run, data, refresh } = listApi({ defaultParams: [searchForm], manual: false });
const getData = (page = searchForm.page, size = searchForm.size) => {
  run(Object.assign(searchForm, { page, size }));
};
const paginationOptions = reactive({
  currentPage: computed(() => searchForm.page),
  pageSize: computed(() => searchForm.size),
  total: computed(() => data.value?.count ?? 0),
  layout: 'sizes, prev, pager, next, jumper, ->, total',
  change: getData,
});
const print = (data: any) => {
  console.log(data);
};
</script>
<style lang="scss" scoped>
.table {
  .search {
    margin-bottom: -18px;

    :deep(.el-input) {
      width: 319px;
    }
  }
}
</style>
