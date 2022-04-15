import { defineComponent, ref, watch, watchEffect } from 'vue';
import CustomInput from './CustomInput.vue';

const Layout = (label)=> <div class='layout'>
  <div class='left'>左边</div>
  <div class='right'>右边</div>
</div>

export default defineComponent({
  setup() {
      const modelValue = ref('')
      const searchText = ref('')
      const trimValue = ref(' ')
      watch(modelValue,(v)=>{
        console.log('modelValue',v);
      })
      watch(searchText,(v)=>{
        console.log('searchText',v);
      })
      watch(trimValue,(v)=>{
        console.log('trimValue',v,v.length);
      })
      
    return () => {
      return <>
        {/* 正常写法 */}
        {/* <input v-model="value" /> // vue  */}
        <input type="text" v-model={modelValue.value} />
        <br />
        {/* 指定值写法 */}
        {/* <CustomInput v-model:modelValue="searchText"/> // vue */}
        <CustomInput v-model:modelValue={searchText.value}/>
        <br />
        {/* 修饰符写法 */}
        {/* <input v-model:modelValue.trim="value" />  // vue */}
        <input v-model={[trimValue.value,['trim']]} />
        <CustomInput v-model={[searchText.value,'modelValue',['trim']]}/>
        {/*  */}
        <Layout label='正常写法'/>
      </>;
    };
  }
});
