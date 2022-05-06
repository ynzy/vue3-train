<script setup lang="ts">
import injectBaseParent from './components/inject_base/parent.vue';
import injectReactiveParent from './components/inject_reactive/parent.vue';
import injectObjectParent from './components/inject_object/parent.vue';
import injectUserInfo from './components/inject_userInfo/userinfo.vue';
import injectPackage from './components/inject_package/package.vue';
import injectFeature from './components/inject_feature/index.vue';
import injectIntercept from './components/inject_intercept/parent.vue';
import { useUserInfo } from './hooks/useUserInfo';
import { useProvider } from '@/package/utils/injection';
import { useFeature } from '@/hooks/userFeature';
import { useNewFeature } from '@/hooks/useNewFeature';
import { httpIntercept } from '@/hooks/intercept';
import { provide } from 'vue';
provide('user', useUserInfo());

const f_token = Symbol();
type FeatureToken = typeof useNewFeature & { token: symbol };
(useFeature as FeatureToken).token = f_token;
(useNewFeature as FeatureToken).token = f_token;

// 旧功能
// useProvider(useFeature);
// 新功能
useProvider(useNewFeature);

// 在这里注入拦截器，下文才能获取到
useProvider(httpIntercept);
</script>

<template>
  <!-- 基础用法 -->
  <injectBaseParent />
  <!-- 响应式用法 -->
  <injectReactiveParent />
  <!-- 封装成对象管理 -->
  <injectObjectParent />
  <!-- 用户信息hooks -->
  <injectUserInfo />
  <!-- 插件根注入 -->
  <injectPackage />
  <!-- 新老功能替换 -->
  <injectFeature />
  <!-- 拦截器 -->
  <injectIntercept />
</template>

<style>
@import './assets/base.css';

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;

  font-weight: normal;
}

header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

@media (min-width: 1024px) {
  body {
    display: flex;
    place-items: center;
  }

  #app {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  .logo {
    margin: 0 2rem 0 0;
  }
}
</style>
