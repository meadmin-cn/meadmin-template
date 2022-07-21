<template>
    <div class="footer">
        <a class="icon pointer" :class="{ 'is-disabled': scrollLeft <= 0 }" @click="back">
            <el-icon-d-arrow-left></el-icon-d-arrow-left>
        </a>
        <el-scrollbar ref="scrollbarRef" @scroll="scroll($event)" view-class="list-parent" style="flex-grow:1">
            <div class="list" ref="listRef">
                <el-dropdown trigger="contextmenu">
                    <div class="item pointer active">控制台1</div>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item>
                                <el-icon-refresh /> 重新加载
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <el-icon-close /> 关闭当前
                            </el-dropdown-item>
                            <el-dropdown-item divided>
                                <el-icon-download style="transform: rotate(90deg);" />关闭左侧
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <el-icon-download style="transform: rotate(270deg);" />关闭右侧
                            </el-dropdown-item>
                            <el-dropdown-item divided>
                                <el-icon-document-delete /> 关闭其他
                            </el-dropdown-item>
                            <el-dropdown-item>
                                <el-icon-minus /> 关闭全部
                            </el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
                <div class="item pointer">控制台2</div>
                <div class="item pointer">控制台3</div>
                <div class="item pointer">控制台4</div>
                <div class="item pointer">控制台5</div>
                <div class="item pointer">控制台6</div>
                <div class="item pointer">控制台7</div>
                <div class="item">控制台8</div>
                <div class="item">控制台9</div>
                <div class="item">控制台10</div>
                <div class="item">控制台1</div>
                <div class="item">控制台12</div>
                <div class="item">控制台13</div>
                <div class="item">控制台14</div>
                <div class="item">控制台15</div>
                <div class="item">控制台16</div>
            </div>

        </el-scrollbar>
        <div class="right">
            <div class="icon pointer" :class="{ 'is-disabled': scrollLeft >= max }" @click="go()">
                <el-icon-d-arrow-right></el-icon-d-arrow-right>
            </div>
            <div class="icon pointer">
                <el-icon-refresh></el-icon-refresh>
            </div>
            <el-dropdown>
                <div class="icon pointer">
                    <el-icon-menu></el-icon-menu>
                </div>
                <template #dropdown>
                    <el-dropdown-menu>
                        <el-dropdown-item>
                            <el-icon-refresh /> 重新加载
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <el-icon-close /> 关闭当前
                        </el-dropdown-item>
                        <el-dropdown-item divided>
                            <el-icon-download style="transform: rotate(90deg);" />关闭左侧
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <el-icon-download style="transform: rotate(270deg);" />关闭右侧
                        </el-dropdown-item>
                        <el-dropdown-item divided>
                            <el-icon-document-delete /> 关闭其他
                        </el-dropdown-item>
                        <el-dropdown-item>
                            <el-icon-minus /> 关闭全部
                        </el-dropdown-item>
                    </el-dropdown-menu>
                </template>
            </el-dropdown>

        </div>

    </div>
</template>
<script setup lang="ts" name="footer">
import { mitter, event } from '@/event';
import { ElScrollbar } from 'element-plus';
const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>()
const listRef = ref<HTMLDivElement>();
let scrollLeft = ref(0);
const scroll = (options: { scrollLeft: number; }) => {
    scrollLeft.value = options.scrollLeft;
}
let max = ref(0);
mitter.on(event.resize, () => {
    max.value = listRef.value!.clientWidth - scrollbarRef.value?.$el.clientWidth;
}, true);
onMounted(() => {
    max.value = listRef.value!.clientWidth - scrollbarRef.value?.$el.clientWidth;
})
const back = () => {
    scrollbarRef.value!.scrollTo({ behavior: 'smooth', left: scrollLeft.value - scrollbarRef.value!.$el.clientWidth + 100 })
}
const go = () => {
    scrollbarRef.value!.scrollTo({ behavior: 'smooth', left: scrollLeft.value + scrollbarRef.value!.$el.clientWidth - 100 })
}

</script>
<style lang="scss" scoped>
@use 'element-plus/theme-chalk/src/mixins/function.scss' as *;

.footer {
    border-bottom: 1px solid getCssVar('border', 'color');
    height: 35px;
    display: flex;
    align-items: center;

    .is-disabled {
        color: getCssVar('disabled-text', 'color') !important;
        cursor: not-allowed;
    }

    .icon {
        padding: 0 10px;
        height: 100%;
        display: flex;
        align-items: center;
        border-right: 1px solid getCssVar('border', 'color');
        color: getCssVar('text-color', 'regular');
    }

    .icon:hover {
        color: getCssVar('text-color', 'primary');
    }

    .right {
        display: flex;
        flex-shrink: 0;
        flex-grow: 0;
        justify-self: right;
        height: 100%;
        border-left: 1px solid getCssVar('border', 'color');
    }

    &:deep(.list-parent) {
        height: 100%;
    }

    &:deep(.list) {
        display: flex;
        height: 100%;
        align-items: center;
        width: max-content;
        .el-dropdown{
            height: 100%;
        }
        .item {
            border-right: 1px solid getCssVar('border', 'color');
            height: 100%;
            align-items: center;
            display: flex;
            padding: 0 16px;
            flex-shrink: 0;
            flex-grow: 0;
            position: relative;
        }

        .item:first-child {
            margin-left: 0;
        }

        .item:hover {
            // background-color: rgba(getCssVar('color-primary', 'rgb'), 0.5);
            background-color: rgba(getCssVar('color-primary', 'rgb'), 0.1);
            color: getCssVar('color', 'primary');

        }

        .item.active {
            // color: getCssVar('color','primary');
            background-color: rgba(getCssVar('color-primary', 'rgb'), 0.1);
            color: getCssVar('color', 'primary');
        }

        .item::after {
            position: absolute;
            content: '';
            height: 2px;
            bottom: 0;
            left: 0;
            background-color: getCssVar('color', 'primary');
            width: 0;
            transition: width 0.5s;
        }

        .item:hover::after,
        .item.active::after {
            width: 100%;
        }
    }

}
</style>