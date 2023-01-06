<template>
  <div class="me-search-menu pointer" @click="showSearch = true">
    <mel-icon-search class="icon"></mel-icon-search>
    <el-dialog
      v-model="showSearch"
      :show-close="false"
      @keydown.down="handleDown() && srollToIndex()"
      @keyup.up="handleUp() && srollToIndex()"
      @keyup.enter="
        handleEnter();
        close();
      "
    >
      <div class="search">
        <el-input
          v-model="searchText"
          size="large"
          :placeholder="$t('搜索') + $t(' ') + $t('菜单')"
          :prefix-icon="Search"
          clearable
          @input="search(searchText)"
        >
        </el-input>
        <div v-if="filteredMenu.length" ref="listRef" class="list">
          <el-scrollbar max-height="300px">
            <a
              v-for="(item, index) in filteredMenu"
              :key="index"
              class="item"
              :class="{ active: activeIndex === index }"
              @click.stop="
                jump(item);
                close();
              "
              @mouseenter="activeIndex = index"
            >
              {{ item.meta.title }}
            </a>
          </el-scrollbar>
        </div>
        <el-empty v-else :image-size="80" />
      </div>
    </el-dialog>
  </div>
</template>
<script setup lang="ts" name="MeSearchMenu">
import { useSearchMenu } from './useSearchMenu';
import { Search } from '@element-plus/icons-vue';
import { jump } from '@/router';
const showSearch = ref(false);
const searchText = ref('');
const listRef = ref<HTMLElement>();
const { filteredMenu, search, activeIndex, handleDown, handleUp, handleEnter } = useSearchMenu();
const srollToIndex = () => {
  listRef.value!.querySelectorAll('.item')[activeIndex.value].scrollIntoView({
    behavior: 'smooth',
  });
};
const close = () => {
  showSearch.value = false;
  searchText.value = '';
  filteredMenu.value = [];
};
</script>
<style lang="scss" scoped>
.me-search-menu {
  padding: 0 10px;
  display: flex;
  align-items: center;

  .icon {
    font-size: 1.3em;
  }
  :deep(.el-dialog__header) {
    display: none;
  }
  :deep(.el-dialog) {
    min-width: 300px;
  }
}
.search {
  .list {
    padding: 10px 0;
    .item {
      display: block;
      padding: 10px 32px 10px 20px;
      line-height: 1.2em;
    }
    .active {
      color: var(--el-color-primary);
      background-color: var(--el-fill-color-light);
    }
  }
}
</style>
