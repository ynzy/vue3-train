<script setup lang="ts">
import { defineAsyncComponent, onMounted, ref } from 'vue';
import baseVue from './components/01-base.vue';
import reactiveVue from './components/02-reactive.vue';
import dynamicComponentsVue from './components/03-dynamicComponents.vue';
import directiveVue from './components/04-directive.vue';
import propsEmitsVue from './components/05-propsEmits.vue';
import defineExposeVue from './components/06-defineExpose.vue';
import useSlotsArrtsVue from './components/07-useSlotsArrts.vue';
// import topAwaitVue from './components/08-topAwait.vue';

import LoadingComponent from './components/LoadingComponent';

const defineExposeRef = ref();

onMounted(() => {
  // dom获取要在渲染完成之后
  console.log(defineExposeRef);
  defineExposeRef.value.change();
});

const handleEmit = (e) => {
  console.log(e);
};

const topAwaitVue = defineAsyncComponent(() => import('./components/08-topAwait.vue'));
</script>
<template>
  <!-- 基本用法 -->
  <baseVue />
  <!-- 响应式系统 -->
  <reactiveVue />
  <!-- 动态组件 -->
  <dynamicComponentsVue />
  <!-- 自定义指令 -->
  <directiveVue />
  <!-- defineProps & defineEmits -->
  <propsEmitsVue msg="props消息" @change="handleEmit" />
  <!-- defineExpose -->
  <defineExposeVue ref="defineExposeRef" />
  <!-- useSlots, useAttrs -->
  <useSlotsArrtsVue :options="{ name: '正常使用的参数' }" :msg="'透传参数'" @change="handleEmit">
    <div>default内容</div>
    <!-- <template v-slot:test>test内容</template> -->
  </useSlotsArrtsVue>
  <!-- 顶层await -->
  <!-- <topAwaitVue /> -->
  <Suspense>
    <!-- 具有深层异步依赖的组件 -->
    <topAwaitVue />
    <!-- 在 #fallback 插槽中显示 “正在加载中” -->
    <template #fallback> Loading... </template>
  </Suspense>
</template>
<style lang="scss" scoped></style>
