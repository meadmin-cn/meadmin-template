<template>
  <div>
    <div class="api">
      <el-button @click="editor?.setHtml('<p>hello word!</p>')">重置</el-button>
      <el-button @click="editor?.clear()">清除内容</el-button>
      <el-button @click="showDialog = true">获取Html</el-button>
    </div>
    <me-wang-editor
      ref="editorRef"
      v-model="html"
      :config="config"
      @on-created="handleCreated"
      @on-destroyed="handleDestroyed"
    ></me-wang-editor>
    <el-dialog v-model="showDialog" title="html">
      <div class="demo">
        {{ html }}
      </div>
      <div class="demo" v-html="html"></div>
    </el-dialog>
  </div>
</template>

<script setup lang="ts" name="WangEditor">
import { IDomEditor } from '@wangeditor/editor';
const html = ref('<p>hello word!</p>');
const config = {
  editor: {
    maxLength: 1000,
    placeholder: '请输入内容',
    ['MENU_CONF']: {
      uploadImage: {
        // 小于该值就插入 base64 格式（而不上传），默认为 0
        base64LimitSize: 2 * 1024 * 1024, // 5mb
      },
    },
  },
};
const editor = ref<IDomEditor | undefined>();
const handleCreated = (wangEditor: IDomEditor) => {
  editor.value = wangEditor;
};
const handleDestroyed = () => {
  console.log('Destroyed');
};
const showDialog = ref(false);
</script>
<style lang="scss" scoped>
.api {
  margin-bottom: 10px;
}
.demo {
  width: 100%;
  border: 1px solid var(--el-border-color);
  margin-bottom: 10px;
}
</style>
