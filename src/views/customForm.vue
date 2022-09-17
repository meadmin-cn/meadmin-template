<template>
  <div class="custom-form">
    <el-collapse>
      <el-collapse-item class="header">
        <template #title>
          <h3>
            集成的
            <el-link type="primary" href="https://github.com/fuchengwei/vue-form-create">vue-form-create</el-link>
            包,非常感谢!
          </h3>
        </template>
        <div>
          但是此包有以下局限性:全局css入侵、不是用的element样式变量，兼容性差、wangEditor版本过低，不支持对应的自定义配置、不支持扩展自定义组件
          、不支持多语言。
        </div>
        <div>
          如果想要自定义表单功能，去github提<el-link
            type="primary"
            href="https://github.com/meadmin-cn/meadmin-template/issues/26"
            >issues</el-link
          >，如果人数多了，后期有精力会考虑做一版。
        </div>
      </el-collapse-item>
    </el-collapse>
    <div class="body">
      <el-design-form class="design-form"></el-design-form>
    </div>
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
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  .header {
    background: var(--el-bg-color);
    padding: 0 10px;
  }
  .body {
    position: relative;
    flex-grow: 1;
    .design-form {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }
}
//为了兼容暗黑模式对create-form样式做的覆盖
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
  .el-dialog__header {
    border-color: var(--el-border-color);
  }
  .ace-tm {
    background: unset;
    color: var(--el-text-color-primary);
    .ace_marker-layer {
      .ace_active-line {
        background: var(--el-border-color-dark);
      }
    }

    .ace_print-margin {
      background: var(--el-border-color);
    }
    .ace_indent-guide {
      background: unset;
      border-right: 1px solid var(--el-border-color);
    }
    .ace_cursor {
      color: var(--el-text-color-primary);
    }
    .ace_gutter-active-line {
      background-color: var(--el-border-color-darker);
    }
    .ace_gutter {
      background: var(--el-fill-color-dark);
      color: var(--el-text-color-regular);
    }
  }
  .el-dialog__footer {
    border-color: var(--el-border-color);
  }
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
