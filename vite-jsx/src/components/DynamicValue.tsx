import { defineComponent, ref } from 'vue';
export default defineComponent({
    setup() {
      const userName = '名字'
      const count = ref(0)
      const change = () => {
          count.value++
      }
    return () => {
      return <>
        <div>{userName}</div>
        <div>{count.value}</div>
        <button onClick={change}>操作</button>
      </>;
    };
  }
});
