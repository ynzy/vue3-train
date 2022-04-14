<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import DynamicValue from './components/DynamicValue';
import SfcJsx from './components/SfcJsx.vue'
</script>

<template>
<!-- 动态插值 -->
  <DynamicValue/>
  <!-- SFC 中使用 jsx -->
  <SfcJsx/>
  
  <!-- <RouterView /> -->
</template>

<style>

</style>
