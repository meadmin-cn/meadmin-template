<template>
    <div class="login">
        <Header class="header"></Header>
        <div class="form" @keyup.enter.exact="login()">
            <div class="title">ME-Admin</div>
            <el-form ref="formRef" :rules="rules" :model="loginParams">
                <el-form-item prop="username">
                    <el-input :placeholder="t('用户名')" v-model="loginParams.username" />
                </el-form-item>
                <el-form-item prop="password">
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
                <el-button class="sub" type="primary" @click="login()">{{ t('登 录') }}</el-button>
            </el-form>
        </div>
    </div>
</template>
<script setup lang="ts"  name="login">
import Header from "./components/header.vue";
import { LoginParams } from "@/api/user";
import { useLocalesI18n } from "@/locales/i18n";
import type { FormInstance, FormRules } from 'element-plus';
import { useUserStore } from '@/store';
const userStore = useUserStore();
const formRef = ref<FormInstance>();
const route = useRoute();
const router = useRouter();
let loginParams = reactive(new LoginParams());
let { t } = useLocalesI18n({}, [(locale: string) => import(`@/views/login/lang/${locale}.ts`), 'login']);
let showPass = ref(false);
const rules = computed<FormRules>(() => ({
    username: [{ required: true, message: t('请填写') + ' ' + t('用户名'), trigger: 'blur' },
    { min: 3, max: 8, message: t('长度必须在 {0} 到 {1}个字符之间', [3, 8]), trigger: 'blur' }],
    password: [{ required: true, message: t('请填写') + ' ' + t('密码'), trigger: 'blur' },
    { min: 6, max: 12, message: t('长度必须 在 {0} 到 {1}个字符之间', [6, 12]), trigger: 'blur' }],
}));

const login = async () => {
    formRef.value?.validate(async (valid, fields) => {
        if (valid) {
            await userStore.login(loginParams);
            await router.replace(<string>route.query.redirect || '/');
        } else {
            console.log('提交错误', fields)
        }
    })
}
</script>
<style lang="scss" scoped>
@use 'element-plus/theme-chalk/src/mixins/function.scss' as *;

.dark {
    .login {
        background-color: getCssVar('bg', 'color')
    }
}

.login {
    background: url(@/assets/login-bg.svg) no-repeat scroll top center ;
    background-size: 100% 100%;
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
        background-color: var(--el-mask-color);
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