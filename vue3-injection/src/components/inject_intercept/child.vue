<script setup lang="ts">
import { useUserInfo } from '@/hooks/userUserInfo_intercept';
import { useInjector } from '@/package/utils/injection';
import { watch } from 'vue';
const user = useInjector(useUserInfo);
const handleClick = () => {
  let age = (user?.userInfo.age as number) + 1;

  user?.editUserInfo({ age });
  user?.login(true);
};
watch(
  () => user,
  (val) => {
    console.log(val);
  }
);
</script>
<template>
  <div>
    <h2>赖注入userInject-拦截器</h2>
    <button @click="handleClick">依赖注入userInject</button>
    <div>{{ user?.userInfo.age }}</div>
  </div>
</template>
<style lang="scss" scoped></style>
