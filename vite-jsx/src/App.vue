<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import DynamicValue from './components/DynamicValue';
import SfcJsx from './components/SfcJsx.vue';
import DefineAsyncComponent from './components/DefineAsync/DefineAsyncComponent.vue';
import DynamicComponents from './components/DynamicComponents.vue';
import VueDirectives from './components/Directives/VueDirectives';
</script>

<template>
  <!-- 动态插值 -->
  <DynamicValue />
  <!-- SFC 中使用 jsx -->
  <SfcJsx />
  <!-- 加载异步组件 -->
  <DefineAsyncComponent />
  <!-- 动态组件 -->
  <DynamicComponents />
  <!-- vue指令 -->
  <VueDirectives />
  <!-- <RouterView /> -->
</template>

<style></style>
