<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();
console.log(route.meta);
</script>
<template>
  <div class="layout-tabbar">
    <router-link to="/">首页</router-link>
    <router-link to="/tsBaseView">vue3响应式</router-link>
    <router-link to="/tsBaseView">vue3响应式工具集</router-link>
    <router-link to="/tsBaseView">ts基础</router-link>
    <router-link to="/static">ts进阶</router-link>
    <router-link to="/cssModel">vite基础</router-link>
    <router-link to="/mockAxios">依赖注入进阶</router-link>
    <router-link to="/pinia">pinia状态管理</router-link>
  </div>
  <div class="layout-content">
    <keep-alive v-if="route.meta.keepAlive">
      <router-view></router-view>
    </keep-alive>
    <router-view v-else></router-view>
  </div>
</template>
<style lang="scss" scoped>
.layout-tabbar {
  a {
    display: inline-block;
    margin: 10px;
    padding: 5px;
    color: #000;
    background: rgb(0, 225, 255);
  }
}
</style>
