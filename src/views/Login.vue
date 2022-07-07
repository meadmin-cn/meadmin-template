<template>
    <div class="login">
        <div class="form">
            <div class="title">meadmin</div>
            <el-form>
                <el-form-item>
                    <el-input placeholder="用户名" />
                </el-form-item>
                <el-form-item>
                    <el-input placeholder="密码" />
                </el-form-item>
                <el-button class="sub" type="primary">登 录</el-button>
            </el-form>
        </div>

    </div>
</template>
<script setup lang="ts" name="Login">

</script>
<style lang="scss" scoped>
@use 'element-plus/theme-chalk/src/mixins/function.scss' as *;

.login {
    background-color: #2d3a4b;
    width: 100%;
    height: 100%;
    padding-top: 20vh;

    .form {
        width: 80%;
        max-width: 500px;
        margin: auto;
        padding: 30px 20px;
        background-color: #ffffff;
        border-radius: 4px;
        box-shadow: 0px 0px 4px #909399;
        .title {
            text-align: center;
            width: 100%;
            margin-bottom: 20px;
            font-size: getCssVar('font-size', 'extra-large');
            font-weight: bold;
        }
        .sub {
            width: 100%;
            margin: auto;
            display: block;
        }
    }

}
</style>