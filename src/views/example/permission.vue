<template>
  <div class="permission">
    <el-button v-if="$permission('edit')">{{ $t('编辑') }}</el-button>
    <el-button v-if="permission('show')">{{ $t('查看') }}</el-button>
  </div>
</template>

<script setup lang="ts" name="Permission">
import { permission } from '@/utils/permission';
</script>
<style lang="scss" scoped>
.permission {
}
</style>
