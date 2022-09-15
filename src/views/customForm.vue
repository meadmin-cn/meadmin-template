<template>
  <div class="custom-form">
    <el-design-form></el-design-form>
  </div>
</template>

<script setup lang="ts">
import {
  ElAlert,
  ElAside,
  ElButton,
  ElCascader,
  ElCheckbox,
  ElCheckboxButton,
  ElCheckboxGroup,
  ElCol,
  ElCollapse,
  ElContainer,
  ElDatePicker,
  ElDialog,
  ElForm,
  ElFormItem,
  ElHeader,
  ElInput,
  ElInputNumber,
  ElMain,
  ElOption,
  ElOptionGroup,
  ElRadio,
  ElRadioButton,
  ElRadioGroup,
  ElRate,
  ElRow,
  ElSelect,
  ElSlider,
  ElSwitch,
  ElTabPane,
  ElTabs,
  ElTimePicker,
  ElUpload,
} from 'element-plus';
import { ElDesignForm, ElGenerateForm } from 'vue-form-create';
const app = getCurrentInstance()?.appContext.app;
if (app && !app.config.globalProperties.$initCreate) {
  [
    ElHeader,
    ElButton,
    ElContainer,
    ElMain,
    ElAside,
    ElDialog,
    ElAlert,
    ElTabs,
    ElTabPane,
    ElForm,
    ElFormItem,
    ElRadioGroup,
    ElRadioButton,
    ElInput,
    ElInputNumber,
    ElRadio,
    ElCheckboxGroup,
    ElCheckbox,
    ElCheckboxButton,
    ElTimePicker,
    ElDatePicker,
    ElRate,
    ElSelect,
    ElOption,
    ElOptionGroup,
    ElSwitch,
    ElSlider,
    ElUpload,
    ElCascader,
    ElRow,
    ElCol,
    ElCollapse,
  ].forEach((item) => {
    app.component(item.name, item);
  });
  app.config.globalProperties.$initCreate = true;
}
</script>
<style lang="scss" scoped>
.custom-form {
  width: 100%;
  height: 100%;
}
</style>
