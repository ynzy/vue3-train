<script setup lang="ts">
import { inject, watchEffect } from 'vue';
import type { UserInfo } from '../../hooks/useUserInfo';
import child from './child.vue';
const user = inject<UserInfo>('user');
console.log('用户信息hooks', user);
watchEffect(() => {
  console.log(user?.userInfo.value);
});
const handleLogin = () => {
  user?.login({ name: '张三', age: 25, auth: true });
};
const handleEdit = () => {
  user?.editUserInfo({ name: '里斯', age: 67 });
};
</script>
<template>
  <h2>用户信息hooks</h2>
  <div>
    <button @click="handleLogin">登录</button>
    <button @click="user?.logout">退出</button>
    <button @click="handleEdit">修改信息</button>
  </div>
  <div>登录状态:{{ user?.userInfo.value.auth ? '已登录' : '未登录' }}</div>
  <div>我叫{{ user?.userInfo.value.name }} 我的年龄：{{ user?.userInfo.value.age }}</div>
  <child />
</template>
<style lang="scss" scoped></style>
