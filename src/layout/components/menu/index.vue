<template>
<div class="layout-menu">
    <div class="title">
        Me-Admin
    </div>
    <el-menu class="el-menu-vertical-demo" default-active="2">
        <el-sub-menu index="1">
          <template #title>
            <el-icon-location></el-icon-location>
            <span>Navigator One</span>
          </template>
            <el-menu-item index="1-1">item one</el-menu-item>
            <el-menu-item index="1-2">item one</el-menu-item>
            <el-menu-item index="1-3">item three</el-menu-item>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon-menu></el-icon-menu>
          <span>Navigator Two</span>
        </el-menu-item>

        <el-menu-item index="4">
          <span>Navigator Four</span>
        </el-menu-item>
    </el-menu>
</div>
</template>
<script setup lang="ts" name="layoutMenu">


</script>
<style lang="scss" scoped>
@use 'element-plus/theme-chalk/src/mixins/function.scss' as *;

.layout-menu{
    background-color: #001529;
    height: 100%;
    color: #ffffff;
    .title{
        display: flex;
        align-items: center;
        justify-content: center;
        height: getCssVar('menu-item','height');
        font-weight: bold;
    }
    &:deep(.el-menu){
        background-color: inherit;
        border: 0;
        .el-menu-item,.el-sub-menu__title,.el-menu-item-group__title{
            color: #ffffff;
        }
        .el-menu-item.is-active {
            color: getCssVar('color','primary');
        }
        .el-sub-menu__title:hover,.el-menu-item:hover {
            background-color: rgba(getCssVar('color-primary','rgb'),0.1);
        }
        .el-menu--inline{
            background-color:#0d2236; 
        }
        .el-menu-item,.el-sub-menu{
            .el-icon{
                width: 1em;
                margin-left: -1px;
            }
            
        }
       
    }
}
</style>