<template>
    <div class="page page-100 page-padding">
      <el-card v-if="$slots.searchForm" class="seach-header">
        <slot name="searchForm"></slot>
      </el-card>
      <el-card class="content-body" body-style="height:100%"	>
        <slot></slot>
      </el-card>
      <slot name="extend"></slot>
    </div>
  </template>
  <style lang="scss" scoped>
  .page{
    .seach-header{
        flex-shrink: 0;
    }
    .content-body{
        flex:1;
    }
    .content-body:nth-child(n+2){
        margin-top: 10px;
    }
  }

  </style>