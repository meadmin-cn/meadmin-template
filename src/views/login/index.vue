<template>
    <div class="login">
        <div class="form">
            <HelloWorld></HelloWorld>
            <div class="title">meadmin</div>
            <el-form>
                <el-form-item>
                    <el-input :placeholder="t('用户名',{name:'cc'})" v-model="loginParams.username" />
                </el-form-item>
                <el-form-item>
                    <el-input type="password" :placeholder="t('密码{name}',{name:'aa'})" v-model="loginParams.password">
                        <template #suffix>
                            <svg-icon-add></svg-icon-add>
                        </template>

                    </el-input>
                </el-form-item>
                <el-button class="sub" type="primary" @click="aa()">登 录</el-button>
            </el-form>
        </div>
    </div>
</template>

<script setup lang="ts"  name="login">
import HelloWorld from "@/components/HelloWorld.vue";
import { LoginParams } from "@/api/user";
import { useI18n } from "@/locales/I18n";
let loginParams = reactive(new LoginParams());
let { t } = useI18n({formatFallbackMessages:true},[(locale: string) => import(`@/views/login/lang/${locale}.ts`),'login'])
function aa(){
    alert(11);
}
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