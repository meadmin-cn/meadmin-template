<template>
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