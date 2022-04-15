<!--  -->
<template>
  <button
    v-for="item in btnList"
    :key="item.id"
    :class="{ btn_active: active.id === item.id }"
    @click="change(item)"
  >
    {{ item.name }}
  </button>
  <component :is="active.component" />
</template>
<script lang="tsx">
/**
 * 动态组件
 */
import { defineComponent, ref, reactive } from 'vue';

const Comp1 = () => <div>组件1</div>;
const Comp2 = () => <div>组件2</div>;
const Comp3 = () => <div>组件3</div>;

export default defineComponent({
  components: {
    Comp1,
    Comp2,
    Comp3
  },
  setup(props) {
    const btnList = ref([
      {
        id: Symbol(),
        name: '组件1',
        component: 'Comp1'
      },
      {
        id: Symbol(),
        name: '组件2',
        component: 'Comp2'
      },
      {
        id: Symbol(),
        name: '组件3',
        component: 'Comp3'
      }
    ]);
    const active = ref(btnList.value[0]);
    const change = (item) => {
      active.value = item;
    };
    return {
      btnList,
      active,
      change
    };
  }
});
</script>
<style scoped>
.btn_active {
  background: pink;
}
</style>
