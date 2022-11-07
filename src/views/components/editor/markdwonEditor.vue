<template>
  <div class="markdwon-editor">
    <div class="header">
      当前示例使用的md-editor-v3,文档地址：
      <el-link type="primary" href="https://imzbf.github.io/md-editor-v3/docs">md-editor-v3</el-link>
      github地址：<el-link type="primary" href="https://github.com/imzbf/md-editor-v3">https://github.com/imzbf/md-editor-v3</el-link>
    </div>
    <md-editor
      v-model="md"
      :class="md"
      :theme="setting.isDark ? 'dark' : 'light'"
      :language="language"
      @on-upload-img="onUploadImg"
    ></md-editor>
  </div>
</template>

<script setup lang="ts" name="MarkdwonEditor">
import 'md-editor-v3/lib/style.css';
import MdEditor from 'md-editor-v3';
import { useSettingStore } from '@/store';
const setting = useSettingStore();
const md = ref(`## 😲 md-editor-v3

Markdown 编辑器，vue3 版本，使用 jsx 模板 和 typescript 开发，支持切换主题、prettier 美化文本等。

### 🤖 基本演示

**加粗**，<u>下划线</u>，_斜体_，~删除线~，上标<sup>26</sup>，下标<sub>[1]</sub>，\`inline code\`，[超链接](https://imzbf.cc)

> 引用：这是一段引用。

![mark and Emoji extension](https://imzbf.github.io/md-editor-v3/imgs/mark_emoji.gif)

## 🤗 代码演示

\`\`\`vue
<template>
  <md-editor v-model="text" />
</template>

<script setup>
import { ref } from 'vue';
import MdEditor from 'md-editor-v3';
import 'md-editor-v3/lib/style.css';

const text = ref('Hello Editor!');
<\/script>
\`\`\`

## 🖨 文本演示

依照普朗克长度这项单位，目前可观测的宇宙的直径估计值（直径约 930 亿光年，即 8.8 × 10<sup>26</sup> 米）即为 5.4 × 10<sup>61</sup>倍普朗克长度。而可观测宇宙体积则为 8.4 × 10<sup>184</sup>立方普朗克长度（普朗克体积）。

## 📈 表格演示

| 昵称 | 来自      |
| ---- | --------- |
| 之间 | 中国-重庆 |

## 📏 公式

行内：$x+y^{2x}$

$$
\sqrt[3]{x}
$$

## 🧬 图表

\`\`\`mermaid
flowchart TD
  Start --> Stop
\`\`\`

## ☘️ 占个坑@！`);
const language = computed(
  () =>
    ({
      'zh-cn': 'zh-CN', // eslint-disable-line
      en: 'en-US',
    }[setting.locale] ?? 'zh-CN'),
);

const onUploadImg = async (files: File[], callback: (urls: string[]) => void) => {
  const res = await Promise.all(
    files.map((file) => {
      return new Promise<{ data: { url: string } }>((rev, rej) => {
        const reader = new FileReader();
        reader.addEventListener(
          'load',
          function () {
            console.log( reader.result)
            rev({
              data: {
                url: reader.result as string,
              },
            });
          },
          false,
        );
        reader.readAsDataURL(file);
      });
    }),
  );

  callback(res.map((item) => item.data.url));
};
</script>

<style lang="scss" scoped>
.markdwon-editor {
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  .header {
    margin-bottom: 10px;
  }
  .md-editor {
    flex-grow: 1;
  }
}
</style>
