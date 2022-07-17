<template>
    <div class="login">
    <me-dark-switch></me-dark-switch>
        <div class="form">
            <div class="title">ME-Admin</div>
            <el-form>
                <el-form-item>
                    <el-input :placeholder="t('用户名', { name: 'cc' })" v-model="loginParams.username" />
                </el-form-item>
                <el-form-item>
                    <el-input type="password" :placeholder="t('密码{name}', { name: 'aa' })" v-model="loginParams.password">
                        <template #suffix>
                            <svg-icon-add></svg-icon-add>
                        </template>

                    </el-input>
                </el-form-item>
                <el-button class="sub" type="primary">登 录</el-button>
            </el-form>
        </div>
    </div>
</template>
<script setup lang="ts"  name="login">
import MeDarkSwitch from "@/components/meDarkSwitch.vue";
import { LoginParams } from "@/api/user";
import { useLocalesI18n } from "@/locales/I18n";
let loginParams = reactive(new LoginParams());
let { t } = useLocalesI18n({}, [(locale: string) => import(`@/views/login/lang/${locale}.ts`), 'login'])

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
        background-color: getCssVar('bg','color');
        border-radius: 4px;
        box-shadow: 0px 0px 4px getCssVar('border','color');
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