<template>
  <el-popover
    popper-class="me-contextmenu-tooltip el-dropdown__popper"
    :visible="visible"
    :virtual-ref="virtualRef"
    virtual-triggering
    pure
  >
    <ul
      v-click-outside="closeMenu"
      class="el-dropdown-menu el-dropdown-menu--default"
      v-bind="$attrs"
      style="outline: none"
      role="menuitem"
    >
      <li class="el-dropdown-menu__item" @click="reload"><mel-icon-refresh /> {{ $t('重新加载') }}</li>
      <li
        :class="{
          'el-dropdown-menu__item': true,
          'is-disabled': current.meta.affix || modelValue.length === 1,
        }"
        @click="closeCurrent"
      >
        <mel-icon-close /> {{ $t('关闭') }}{{ $t(' ') }}{{ $t('当前') }}
      </li>
      <li
        :class="{
          'el-dropdown-menu__item': true,
          'is-disabled': index <= canCloseFirst,
        }"
        @click="closeLeft"
      >
        <mel-icon-download style="transform: rotate(90deg)" />{{ $t('关闭') }}{{ $t(' ') }}{{ $t('左侧') }}
      </li>
      <li
        :class="{
          'el-dropdown-menu__item': true,
          'is-disabled': modelValue.length === index + 1,
        }"
        @click="closeRight"
      >
        <mel-icon-download style="transform: rotate(270deg)" />{{ $t('关闭') }}{{ $t(' ') }}{{ $t('右侧') }}
      </li>
      <li
        :class="{
          'el-dropdown-menu__item': true,
          'is-disabled': index <= canCloseFirst && modelValue.length === index + 1,
        }"
        @click="closeOther"
      >
        <mel-icon-document-delete /> {{ $t('关闭') }}{{ $t(' ') }}{{ $t('其他') }}
      </li>
      <li
        :class="{
          'el-dropdown-menu__item': true,
          'is-disabled': canCloseFirst === Infinity,
        }"
        @click="closeAll"
      >
        <mel-icon-minus /> {{ $t('关闭') }}{{ $t(' ') }}{{ $t('全部') }}
      </li>
    </ul>
  </el-popover>
</template>
<script setup lang="ts" name="Contextmenu">
import { useRouteStore } from '@/store';
import { PropType } from 'vue';
import { RouteLocationNormalized } from 'vue-router';
const props = defineProps({
  modelValue: {
    required: true,
    type: Array as PropType<RouteLocationNormalized[]>,
  },
  current: {
    required: true,
    type: Object as PropType<RouteLocationNormalized>,
  },
  virtualRef: {
    required: true,
    type: Object as PropType<HTMLElement>,
  },
  visible: {
    type: Boolean,
    default: true,
  },
});
const emit = defineEmits<{
  (e:'update:modelValue',value:RouteLocationNormalized[]):void,
  (e:'update:visible',value:boolean):void
}>();
const tags = ref([] as RouteLocationNormalized[]);
watch(
  () => props.modelValue,
  () => {
    tags.value = [...props.modelValue];
  },
  { immediate: true, deep: true },
);
const router = useRouter();
const route = useRoute();
let index = computed(() => tags.value.indexOf(props.current));
let canCloseFirst = computed(() => {
  const index = tags.value.findIndex((item) => !item.meta.affix);
  return index > -1 ? index : Infinity;
});
const closeMenu = async () => {
  emit('update:visible', false);
  await nextTick();
};
//清除清除tab对应缓存
const routeStore = useRouteStore();
const cleanCache = async (start: number, end: number) => {
  for (let i = start; i <= end; i++) {
    routeStore.cacheFullPath.delete(tags.value[i].fullPath);
  }
};
// 刷新
const reload = () => {
  router.replace('/redirect/' + encodeURIComponent(props.current.fullPath));
  closeMenu();
};
// 关闭当前
const closeCurrent = async () => {
  if (tags.value.length === 0 || props.current.meta.affix) {
    return;
  }
  await closeMenu();
  const nowIndex = index.value;
  cleanCache(index.value, index.value);
  tags.value.splice(index.value, 1);
  emit('update:modelValue', [...tags.value]);
  if (props.current.fullPath === route.fullPath) {
    router.push(tags.value[Math.min(tags.value.length - 1, nowIndex)].fullPath);
  }
};
// 关闭左侧
const closeLeft = async () => {
  if (index.value <= canCloseFirst.value) {
    return;
  }
  await closeMenu();
  cleanCache(canCloseFirst.value, index.value);
  tags.value.splice(canCloseFirst.value, index.value - canCloseFirst.value);
  emit('update:modelValue', [...tags.value]);
  if (tags.value.findIndex((item) => item.fullPath === route.fullPath) === -1) {
    router.push(tags.value[index.value].fullPath);
  }
};
// 关闭右侧
const closeRight = async () => {
  if (index.value + 1 === tags.value.length) {
    return;
  }
  await closeMenu();
  cleanCache(index.value + 1, tags.value.length - 1);
  tags.value.splice(index.value + 1);
  emit('update:modelValue', [...tags.value]);
  if (tags.value.findIndex((item) => item.fullPath === route.fullPath) === -1) {
    router.push(tags.value[index.value].fullPath);
  }
};
// 关闭其他
const closeOther = () => {
  closeLeft();
  closeRight();
};
// 关闭全部
const closeAll = async () => {
  if (canCloseFirst.value === Infinity) {
    return;
  }
  await closeMenu();
  cleanCache(canCloseFirst.value, tags.value.length - 1);
  tags.value.splice(canCloseFirst.value);
  emit('update:modelValue', [...tags.value]);
  if (tags.value.findIndex((item) => item.fullPath === route.fullPath) === -1) {
    router.push(tags.value[tags.value.length - 1].fullPath);
  }
};
defineExpose({ closeAll, closeCurrent, closeLeft, closeMenu, closeOther, closeRight });
</script>
<style lang="scss">
.me-contextmenu-tooltip {
  width: max-content !important;
  min-width: unset !important;

  .el-dropdown-menu__item:not(.is-disabled):hover {
    background-color: var(--el-dropdown-menuItem-hover-fill);
    color: var(--el-dropdown-menuItem-hover-color);
  }
}
</style>
