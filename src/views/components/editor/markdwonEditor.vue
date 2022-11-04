<template>
<div class="markdwon-editor">
    <div class="header">
      当前示例使用的md-editor-v3,文档地址：
      <el-link href="https://imzbf.github.io/md-editor-v3/docs">md-editor-v3</el-link>
      github地址：<el-link href="https://github.com/imzbf/md-editor-v3">https://github.com/imzbf/md-editor-v3</el-link>

    </div>
    <md-editor class="md" v-model="md" :theme="setting.isDark?'dark':'light'" :language="language"></md-editor>
</div>
</template>

<script setup lang="ts" name="MarkdwonEditor">
import 'md-editor-v3/lib/style.css';
import MdEditor from 'md-editor-v3';
import {useSettingStore} from '@/store';
const setting = useSettingStore();
const md = ref(`112`);
const language	 = computed(()=>
  ({
    'zh-cn':'zh-CN',// eslint-disable-line
    'en':'en-US'
  }[setting.locale] ?? 'zh-CN'));


</script>

<style lang="scss" scoped>
.markdwon-editor{
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  .header{
    margin-bottom: 10px;
  }
  .md{
    flex-grow: 1;
  }
}
</style>