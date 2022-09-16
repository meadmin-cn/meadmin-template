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
  ElSpace,
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
    ElSpace,
  ].forEach((item) => {
    app.component(item.name, item);
  });
  app.config.globalProperties.$initCreate = true;
}
</script>
<style lang="scss" scoped>
@import '../components/meWangEditor/meWangEditor.scss';
.custom-form {
  position: absolute;
  left: $page-padding;
  right: $page-padding;
  top: $page-padding;
  bottom: $page-padding;
}
:global(#app) {
  color: unset;
  font-family: unset;
  min-height: unset;
}
:global(::-webkit-scrollbar) {
  width: unset;
  height: unset;
}
:global(::-webkit-scrollbar-thumb) {
  border-radius: unset;
  background-color: unset;
}
:global(::-webkit-scrollbar-track) {
  border-radius: unset;
  background-color: unset;
}
:global(.fc-style ::-webkit-scrollbar) {
  width: 5px;
  height: 5px;
}
:global(.fc-style ::-webkit-scrollbar-thumb) {
  border-radius: 1rem;
  background-color: rgba(144, 147, 153, 0.3);
}
:global(.fc-style ::-webkit-scrollbar-track) {
  border-radius: 1rem;
}
:global(.dark .fc-style ::-webkit-scrollbar-thumb) {
  background-color: rgba(163, 166, 173, 0.3);
}

:deep(.fc-style) {
  .widget-config-container {
    .el-header {
      border-color: var(--el-border-color) !important;
      background: var(--el-bg-color) !important;
    }
    .config-tab {
      &.active {
        border-color: var(--el-color-primary);
      }
    }
    .config-content {
      background: var(--el-bg-color);
      .el-form-item {
        border-color: var(--el-border-color);
      }
    }
  }
  .widget-form-container {
    .widget-view-drag,
    .widget-view-action {
      background: var(--el-color-primary) !important;
    }
    .widget-form-list {
      border-color: var(--el-border-color-darker) !important;
      background: var(--el-bg-color);
      .widget-col-list {
        background: var(--el-bg-color);
        border-color: var(--el-border-color);
      }
      .widget-view {
        background-color: var(--el-bg-color);
        &:hover {
          background-color: var(--el-color-primary-light-7);
          outline-color: var(--el-color-primary);
        }
        &.active {
          outline-color: var(--el-color-primary);
          border-color: var(--el-color-primary);
        }
      }
    }
  }
  .center-container {
    border-color: var(--el-border-color);
    .btn-bar {
      background-color: var(--el-bg-color);
      border-color: var(--el-border-color);
    }
    .el-main {
      background: var(--el-bg-color-page);
    }
  }
  .fc-container {
    background: var(--el-bg-color);

    .el-container {
      background: var(--el-bg-color);
    }
    .components {
      .form-edit-widget-label {
        border-color: var(--el-color-info-light-8);

        &:hover {
          border-color: var(--el-color-primary);
          > a {
            color: var(--el-color-primary);
          }
        }
        > a {
          color: var(--el-color-info);
          background: var(--el-color-info-light-9);
          border-color: var(--el-color-info-light-8);
        }
      }
    }
  }
}
</style>
