<template>
    <el-dropdown class="message-box" max-height="500px" trigger="click">
        <div class="flex-center pointer">
            <el-badge is-dot>
                <el-icon-bell class="message-icon"></el-icon-bell>
            </el-badge>
        </div>
        <template #dropdown>
            <div class="message-tabs">
                <div class="message-header">
                    <el-link>全部已读</el-link>
                    <el-link>查看更多</el-link>
                </div>
                <el-tabs model-value="notify">
                    <el-tab-pane label="通知" name="notify">
                        <div v-for="o in 4" :key="o" class="text notify-item">
                            {{ 'List item ' + o }}<div class="date">2022/08/08</div>
                        </div>
                    </el-tab-pane>
                    <el-tab-pane label="消息" name="message">Config</el-tab-pane>
                    <el-tab-pane label="待办" name="agenda">Role</el-tab-pane>
                </el-tabs>
            </div>

        </template>
    </el-dropdown>
</template>
<script setup lang="ts" name="messageBox">


</script>
<style lang="scss" scoped>
@use 'element-plus/theme-chalk/src/mixins/function.scss' as *;

.message-box {
    .flex-center {
        padding: 0 10px;

        .message-icon {
            height: 25px;
            line-height: 25px;
            font-size: 1.2em;
        }
    }
}

.message-tabs {
    padding: 15px 10px;
    height: 300px;
    font-size: 1rem;

    .message-header {
        display: flex;
        justify-content: space-between;

        :deep(.el-link) {
            font-size: .85em !important
        }
    }

    :deep(.el-tabs__header) {
        margin-bottom: 0;
    }

    .notify-item {
        padding: 5px 0;
        border-bottom: 1px solid #eeeeee;

        .date {
            font-size: 12px;
            color: getCssVar('text-color', 'placeholder');
        }
    }
}
</style>