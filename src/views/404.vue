<template>
  <div class="no-page">
    <img src="@/assets/images/404.svg?url" />
    <div class="info">
      <div class="title">404</div>
      <div class="content">
        {{ $t('页面不见了') }}!
        <router-link to="/">{{ $t('去') }}{{ $t(' ') }}{{ $t('首页') }}</router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.no-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
  img {
    width: 100%;
    max-width: 500px;
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;

    .title {
      font-size: 1.5em;
    }

    .content {
      margin: 1.5em 0;
      color: var(--el-text-color-placeholder);
      display: flex;
      align-items: center;

      a {
        margin-left: 1em;
        color: var(--el-color-primary);
      }
    }
  }
}
</style>
