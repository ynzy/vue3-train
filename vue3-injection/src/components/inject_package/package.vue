<script setup lang="ts" name="component-PiniaBasicSetup">
import { usePackage } from '@/package/hooks/usePackage';
import { useInjector } from '@/package/utils/injection';
import { ref } from 'vue';

// setup composition API模式
const injectPackage = useInjector(usePackage);
console.log(injectPackage);
</script>

<template>
  <div class="box-styl">
    <h1>插件根注入模式</h1>
    <p class="section-box">
      插件根注入的state: count = <b>{{ injectPackage?.count }}</b>
    </p>
    <p class="section-box">
      插件根注入的getters: doubleCount() =
      <b>{{ injectPackage?.doubleCount() }}</b>
    </p>
    <div class="section-box">
      <p>插件根注入的action: increment()</p>
      <button @click="injectPackage?.increment">点我</button>
    </div>
  </div>
</template>

<style scoped>
.box-styl {
  margin: 10px;
}
.section-box {
  margin: 20px auto;
  width: 300px;
  background-color: #d7ffed;
  border: 1px solid #000;
}
</style>
