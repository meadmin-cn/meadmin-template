<template>
    <div class="login">
        <Header class="header"></Header>
        <div class="form">
            <div class="title">ME-Admin</div>
            <el-form>
                <el-form-item>
                    <el-input :placeholder="t('用户名')" v-model="loginParams.username" />
                </el-form-item>
                <el-form-item>
                    <el-input :type="showPass ? 'input' : 'password'" :placeholder="t('密码')"
                        v-model="loginParams.password">
                        <template #suffix>
                            <div class="pointer" @click="showPass = !showPass">
                                <el-icon-view v-if="showPass"></el-icon-view>
                                <el-icon-hide v-else></el-icon-hide>
                            </div>
                        </template>

                    </el-input>
                </el-form-item>
                <el-button class="sub" type="primary">{{ t('登 录') }}</el-button>
            </el-form>
        </div>
    </div>
</template>
<script setup lang="ts"  name="login">
import Header from "./components/header.vue";
import { LoginParams } from "@/api/user";
import { useLocalesI18n } from "@/locales/i18n";
let loginParams = reactive(new LoginParams());
let { t } = useLocalesI18n({}, [(locale: string) => import(`@/views/login/lang/${locale}.ts`), 'login'])
let showPass = ref(false);
</script>
<style lang="scss" scoped>
@use 'element-plus/theme-chalk/src/mixins/function.scss' as *;

.dark {
    .login {
        background-color: getCssVar('bg', 'color')
    }
}

.login {
    background: url(@/assets/login.svg) no-repeat scroll top center;
    background-color: #efeeee;
    width: 100%;
    height: 100%;

    .header {
        width: 100%;
        margin-bottom: 20vh;
    }

    .form {
        width: 80%;
        max-width: 500px;
        margin: auto;
        padding: 30px 20px;
        background-color: getCssVar('bg', 'color');
        border-radius: 4px;
        box-shadow: 0px 0px 4px getCssVar('border', 'color');

        .title {
            text-align: center;
            width: 100%;
            margin-bottom: 20px;
            font-size: 1.6rem;
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