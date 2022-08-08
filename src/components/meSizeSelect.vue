<template>
    <el-dropdown class="me-size-select" trigger="click" max-height="500px">
        <div class="flex-center pointer">
            <me-icon-size class="icon"></me-icon-size>
        </div>
        <template #dropdown>
            <el-dropdown-menu>
                <el-dropdown-item :disabled="settingStore.size == item" @click="settingStore.size = item"
                    v-for="item in sizeEnum">{{ $t(item) }}</el-dropdown-item>
            </el-dropdown-menu>
        </template>
    </el-dropdown>
</template>
<script setup lang="ts" name="meSize">
import { sizeEnum } from '@/enums/configEnum';
import { useSettingStore } from '@/store';
const settingStore = useSettingStore();
</script>
<style lang="scss" scoped>
.me-size-select {
    .flex-center {
        padding: 0 10px;

        .icon {
            font-size: 1.2em;
        }
    }

}
</style>
