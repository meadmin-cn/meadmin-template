<template>
<el-space class="right">
    <div></div>
    <me-dark-switch></me-dark-switch>
    <me-locale-select></me-locale-select>
    <me-size-select></me-size-select>
    <el-space>
      <el-avatar size="small" src=""/>
      admin
    </el-space>
    <div></div>
</el-space>
</template>
<script setup lang="ts" name="right">
import MeDarkSwitch from "@/components/meDarkSwitch.vue";
import MeLocaleSelect from "@/components/meLocaleSelect.vue";
import MeSizeSelect from "@/components/meSizeSelect.vue";


</script>
<style lang="scss" scoped>
.right{
    font-size: 1rem;
}
</style>