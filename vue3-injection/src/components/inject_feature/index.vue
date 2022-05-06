<script setup lang="ts">
import { useFeature } from '@/hooks/userFeature';
import { useInjector } from '@/package/utils/injection';
// 使用的旧的hook
const feature = useInjector(useFeature);
</script>
<template>
  <h2>功能替换</h2>
  <div>
    <h4>新hook替换老hook</h4>
    <div>{{ feature?.msg }}</div>
    <button @click="feature?.increment">测试新的增加功能</button>
    <div>{{ feature?.count }}</div>
  </div>
</template>
<style lang="scss" scoped></style>
