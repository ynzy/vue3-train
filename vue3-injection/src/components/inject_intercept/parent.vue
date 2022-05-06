<script setup lang="ts">
import { useProvider } from '@/package/utils/injection';
import child from './child.vue';
import { useUserInfo } from '@/hooks/userUserInfo_intercept';
useProvider(useUserInfo);
</script>
<template>
  <child />
</template>
<style lang="scss" scoped></style>
