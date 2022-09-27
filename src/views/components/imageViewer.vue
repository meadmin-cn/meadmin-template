<template>
  <div class="image-viewer">
    <el-button @click="show()"> 预览 </el-button>
  </div>
</template>
<script setup lang="ts" name="ImageViewer">
import { createImageViewer } from '@/components/service/meImageViewer';
const show = () =>
  createImageViewer({
    urlList: [
      'https://scpic.chinaz.net/Files/pic/pic6/pic1281.jpg',
      'https://scpic.chinaz.net/files/pic/pic9/202009/apic27858.jpg',
      'https://tse3-mm.cn.bing.net/th/id/OIP-C.n0_p3rYRuofABd3XudbZnAHaEo?pid=ImgDet&rs=1',
    ],
  });
</script>
