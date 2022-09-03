<template>
  <el-dropdown class="me-size-select" trigger="click" max-height="500px">
    <div class="flex-center pointer" v-bind="$attrs">
      <el-avatar size="small" class="avatar" :src="userStore.user.avatar" />
      <span v-if="!globalStore.isMobile" class="ellipsis-2">{{ userStore.user.name }}</span>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <router-link to="/">
          <el-dropdown-item>
            {{ $t('首页') }}
          </el-dropdown-item>
        </router-link>
        <a href="https://github.com/meadmin-cn/meadmin-template">
          <el-dropdown-item>
            {{ $t('Github') }}
          </el-dropdown-item>
        </a>
        <a href="https://gitee.com/meadmin-cn/meadmin-template">
          <el-dropdown-item>
            {{ $t('Gitee') }}
          </el-dropdown-item>
        </a>
        <a href="https://meadmin-cn.github.io/meadmin-template-doc/">
          <el-dropdown-item>
            {{ $t('文档') }}
          </el-dropdown-item>
        </a>
        <el-dropdown-item divided @click="userStore.logOut()">
          {{ $t('退出登录') }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script setup lang="ts" name="User">
import { useGlobalStore, useUserStore } from '@/store';
const userStore = useUserStore();
const globalStore = useGlobalStore();
</script>
<style lang="scss" scoped>
.flex-center {
  max-width: 120px;
  padding: 0 10px;
  line-height: 120%;

  .avatar {
    margin-right: 5px;
    flex-shrink: 0;
  }
}
</style>
