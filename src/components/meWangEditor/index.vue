<template>
  <div class="me-wang-editor">
    <Toolbar v-if="showEditor" class="wang-toolbar" :editor="editorRef" :default-config="config.toolbar" :mode="mode" />
    <Editor
      v-if="showEditor"
      :model-value="modelValue"
      :default-content="defaultContent"
      :default-html="defaultHtml"
      :default-config="config.editor"
      :mode="mode"
      style="overflow-y: hidden"
      @update:model-value="emit('update:modelValue', $event)"
      @on-created="handleCreated"
      @on-change="emit('onChange', $event)"
      @on-destroyed="emit('onDestroyed', $event)"
      @on-max-length="emit('onMaxLength', $event)"
      @on-focus="emit('onFocus', $event)"
      @on-blur="emit('onBlur', $event)"
      @custom-alert="(...args) => emit('customAlert', ...args)"
      @custom-paste="(...args) => emit('customPaste', ...args)"
    />
  </div>
</template>

<script setup lang="ts" name="MeWangEditor">
import './meWangEditor.scss';
import { onBeforeUnmount, shallowRef, PropType } from 'vue';
import { Editor, Toolbar } from '@wangeditor/editor-for-vue';
import { i18nChangeLanguage, IEditorConfig, IToolbarConfig, IDomEditor, SlateDescendant } from '@wangeditor/editor';
import { useGlobalStore } from '@/store';
const props = defineProps({
  mode: {
    type: String as PropType<'simple' | 'default'>,
    default: 'default',
  },
  config: {
    type: Object as PropType<{ toolbar?: Partial<IToolbarConfig>; editor?: Partial<IEditorConfig> }>,
    default: () => ({}),
  },
  modelValue: {
    type: String,
    required: true,
  },
  /** 编辑器默认内容 */
  defaultContent: {
    type: Array as PropType<SlateDescendant[]>,
    default: () => [],
  },
  defaultHtml: {
    type: String,
    default: '',
  },
});
const emit = defineEmits([
  'update:modelValue',
  'onCreated',
  'onChange',
  'onDestroyed',
  'onMaxLength',
  'onFocus',
  'onBlur',
  'customAlert',
  'customPaste',
]);
const { i18n } = useGlobalStore();
// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef<IDomEditor | undefined>();
defineExpose({ editorRef });
//切换语言
const showEditor = ref(true);
i18nChangeLanguage(i18n.locale.value);
watch(i18n.locale, async (locale) => {
  // 切换语言 - 'en' 或者 'zh-CN'
  showEditor.value = false;
  await nextTick();
  i18nChangeLanguage(locale);
  showEditor.value = true;
});
// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  editorRef.value && editorRef.value.destroy();
});
const handleCreated = (editor: IDomEditor) => {
  editorRef.value && editorRef.value.destroy();
  editorRef.value = editor; // 记录 editor 实例，重要！
  emit('onCreated', editor);
};
</script>
<style lang="scss" scoped>
.me-wang-editor {
  border: 1px solid var(--el-border-color);
  height: 500px;
  display: flex;
  flex-direction: column;
  .wang-toolbar {
    border-bottom: 1px solid var(--el-border-color);
  }
  :deep(.w-e-scroll) {
    &::-webkit-scrollbar {
      z-index: 1;
      border-radius: 4px;
      width: 4px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: var(--el-text-color-secondary);
      width: 100%;
      opacity: 0.1;
      border-radius: 4px;
    }
    overflow-y: overlay !important;
  }
}
</style>
