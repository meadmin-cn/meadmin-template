<template>
  <div class="login">
    <img src="/logo.svg?url" class="bg" />
    <login-header class="header"></login-header>
    <div class="form" @keyup.enter.exact="login">
      <div class="title">ME-Admin</div>
      <el-form ref="formRef" :rules="rules" :model="loginParams">
        <el-form-item prop="username">
          <el-input
            v-model="loginParams.username"
            autofocus
            :placeholder="t('用户名') + '(示例：admin、editor、viewer)'"
            clearable
          />
        </el-form-item>
        <el-form-item prop="password">
          <el-input
            v-model="loginParams.password"
            type="password"
            :placeholder="t('密码') + '(任意填写即可)'"
            clearable
            show-password
          />
        </el-form-item>
        <el-form-item prop="captcha">
          <el-input v-model="loginParams.captcha" :placeholder="t('验证码') + '(任意填写即可)'" clearable>
            <template #append>
              <img src="@/assets/images/captcha.png" class="captcha" />
            </template>
          </el-input>
        </el-form-item>
        <el-button class="submit" type="primary" @click="login">{{ t('登录') }}</el-button>
      </el-form>
    </div>
  </div>
</template>
<script setup lang="ts" name="Login">
import LoginHeader from './components/header.vue';
import { LoginParams } from '@/api/user';
import { useLocalesI18n } from '@/locales/i18n';
import type { FormInstance, FormRules } from 'element-plus';
import { useUserStore } from '@/store';
const userStore = useUserStore();
const formRef = ref<FormInstance>();
const route = useRoute();
const router = useRouter();
let loginParams = reactive(new LoginParams());
let { t } = useLocalesI18n();
const rules = computed<FormRules>(() => ({
  username: [
    {
      required: true,
      message: t('请填写') + ' ' + t('用户名'),
      trigger: 'blur',
    },
    {
      min: 3,
      max: 8,
      message: t('长度必须在 {0} 到 {1}个字符之间', [3, 8]),
      trigger: 'blur',
    },
  ],
  password: [
    {
      required: true,
      message: t('请填写') + ' ' + t('密码'),
      trigger: 'blur',
    },
    {
      min: 6,
      max: 12,
      message: t('长度必须在 {0} 到 {1}个字符之间', [6, 12]),
      trigger: 'blur',
    },
  ],
  captcha: [
    {
      required: true,
      message: t('请填写') + ' ' + t('验证码'),
      trigger: 'blur',
    },
    {
      len: 4,
      message: t('验证码') + ' ' + t('长度必须为 {0} 个字符', [4]),
      trigger: 'blur',
    },
  ],
}));

const login = async () => {
  formRef.value?.validate(async (valid, fields) => {
    if (valid) {
      await userStore.login(loginParams);
      await router.replace((route.query.redirect as string) || '/');
    } else {
      console.log('提交错误', fields);
    }
  });
};
</script>
<style lang="scss" scoped>
.login {
  background-color: var(--el-bg-color-page);
  width: 100%;
  height: 100%;
  position: relative;

  .bg {
    position: absolute;
    left: 50%;
    top: 40%;
    max-width: 500px;
    max-height: 500px;
    width: 100%;
    height: 100%;
    transform: translate(-50%, -50%);

    @media only screen and (max-width: 500px) {
      background-size: contain;
    }
  }

  .header {
    width: 100%;
  }

  .form {
    z-index: 1;
    position: absolute;
    left: 50%;
    top: 40%;
    transform: translate(-50%, -50%);
    width: 80%;
    max-width: 500px;
    margin: auto;
    padding: 30px 20px;
    background-color: var(--el-mask-color);
    border-radius: 4px;
    box-shadow: 0px 0px 4px var(--el-border-color);

    .title {
      text-align: center;
      width: 100%;
      margin-bottom: 20px;
      font-size: 20px;
      font-weight: bold;
    }
    :deep(.el-input) {
      .captcha {
        margin: 0 -19px;
        height: calc(var(--el-component-size) - 2px);
      }
    }
    :deep(.el-input--large) {
      .captcha {
        height: calc(var(--el-component-size-large) - 2px);
      }
    }

    :deep(.el-input--small) {
      .captcha {
        height: calc(var(--el-component-size-small) - 2px);
      }
    }
    .submit {
      width: 100%;
      margin: auto;
      display: block;
    }
  }
}
</style>
