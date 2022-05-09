<script setup lang="ts">
import { inject, watchEffect } from 'vue';

import type { UserInfo } from '../../hooks/useUserInfo';
const user = inject<UserInfo>('user');
</script>
<template>
  <div>
    <h3>子组件用户信息</h3>
    <div>我叫{{ user?.userInfo.value.name }} 我的年龄：{{ user?.userInfo.value.age }}</div>
  </div>
</template>
<style lang="scss" scoped></style>
