<template>
  <div ref="iconSelectRef" :style="{ width: props.width }">
    <el-popover :visible="popoverVisible" :width="popWitdh" placement="bottom-end" @before-enter="setWidth()">
      <template #reference>
        <div @click="popoverVisible = !popoverVisible">
          <slot>
            <el-input v-model="selectedIcon" readonly placeholder="点击选择图标" class="reference">
              <template #prepend>
                <!-- 根据图标类型展示 -->
                <component :is="displayIcon" v-if="displayIcon" />
              </template>
              <template #suffix>
                <!-- 清空按钮 -->
                <sel-icon-circle-close v-if="selectedIcon" style="margin-right: 8px" @click.stop="clearSelectedIcon" />
                <sel-icon-arrow-down
                  :style="{
                    transform: popoverVisible ? 'rotate(180deg)' : 'rotate(0)',
                    transition: 'transform .5s',
                  }"
                  @click.stop="togglePopover"
                />
              </template>
            </el-input>
          </slot>
        </div>
      </template>

      <!-- 图标选择弹窗 -->
      <div ref="popoverContentRef">
        <el-input v-model="filterText" placeholder="搜索图标" clearable @input="filterIcons" />
        <el-tabs v-model="activeTab" @tab-click="handleTabClick">
          <el-tab-pane label="Svg 图标" name="svg">
            <el-scrollbar height="300px">
              <div class="icon-grid">
                <div v-for="icon in filteredSvgIcons" :key="icon" class="icon-grid-item" @click="selectIcon(icon)">
                  <component :is="icon" />
                  <div class="name">{{ icon.replace('SdssIcon', '') }}</div>
                </div>
              </div>
            </el-scrollbar>
          </el-tab-pane>
          <el-tab-pane label="Element 图标" name="element">
            <el-scrollbar height="300px">
              <div class="icon-grid">
                <div v-for="icon in filteredElementIcons" :key="icon" class="icon-grid-item" @click="selectIcon(icon)">
                  <component :is="icon" />
                  <div class="name">{{ icon.replace('SelIcon', '') }}</div>
                </div>
              </div>
            </el-scrollbar>
          </el-tab-pane>
        </el-tabs>
      </div>
    </el-popover>
  </div>
</template>

<script setup lang="ts">
import { elIConNames, svgIconNames } from '@/icons';
import { normalizeDynamicComponentName } from '@/utils/components';

const props = withDefaults(defineProps<{ width?: string }>(), {
  width: '100%',
});
const popWitdh = ref('');

const iconSelectRef = useTemplateRef<HTMLDivElement>('iconSelectRef');
const popoverContentRef = useTemplateRef<HTMLDivElement>('popoverContentRef');
const popoverVisible = ref(false);
const activeTab = ref('svg');

const selectedIcon = defineModel<string>('modelValue');
const displayIcon = computed(() => selectedIcon.value);

const filterText = ref('');
const filteredSvgIcons = ref<string[]>([...svgIconNames]);
const filteredElementIcons = ref<string[]>([...elIConNames]);

function handleTabClick(tabPane: any) {
  activeTab.value = tabPane.props.name;
  filterIcons();
}

function filterIcons() {
  if (activeTab.value === 'svg') {
    filteredSvgIcons.value = filterText.value ? svgIconNames.filter((icon) => icon.toLowerCase().includes(filterText.value.toLowerCase())) : svgIconNames;
  } else {
    filteredElementIcons.value = filterText.value ? elIConNames.filter((icon) => icon.toLowerCase().includes(filterText.value.toLowerCase())) : elIConNames;
  }
}

function selectIcon(icon: string) {
  selectedIcon.value = icon;
  popoverVisible.value = false;
}

function togglePopover() {
  popoverVisible.value = !popoverVisible.value;
}

onClickOutside(iconSelectRef, () => (popoverVisible.value = false), {
  ignore: [popoverContentRef],
});

/**
 * 清空已选图标
 */
function clearSelectedIcon() {
  selectedIcon.value = '';
}
const setWidth = () => {
  popWitdh.value = iconSelectRef.value?.offsetWidth + 'px' || props.width;
};
watch(
  selectedIcon,
  (value) => {
    // 避免动态组件报错
    const normalizedIcon = normalizeDynamicComponentName(value);
    if (normalizedIcon !== value) {
      selectedIcon.value = typeof normalizedIcon === 'string' ? normalizedIcon : '';
    }
  },
  { immediate: true },
);
onMounted(() => {
  if (displayIcon.value) {
    if (typeof displayIcon.value === 'string' && displayIcon.value.startsWith('SelIcon')) {
      activeTab.value = 'element';
    } else {
      activeTab.value = 'svg';
    }
  }
  setWidth();
});
</script>

<style scoped lang="scss">
.reference :deep(.el-input__wrapper),
.reference :deep(.el-input__inner) {
  cursor: pointer;
}

.icon-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minMax(6em, 1fr));
  gap: 10px;
  padding: 0;
  margin: 0;
  width: 100%;
  justify-content: space-between;
}

.icon-grid-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;
  cursor: pointer;
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  transition: all 0.3s;
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
  width: 4em;
  .name {
    text-align: center;
    margin-top: 10px;
    font-size: 0.5em;
    max-width: 98%;
    overflow: hidden;
  }
}

.icon-grid-item:hover {
  border-color: #4080ff;
  transform: scale(1.2);
}
</style>
