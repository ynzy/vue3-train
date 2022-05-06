import { ref } from "vue";
import { f_token } from "./const";

export function useFeature() {
  const msg = "一个功能use";
  const count = ref(0);
  const increment = () => {
    return count.value++;
  };
  return {
    msg,
    count,
    increment,
  };
}

useFeature.token = f_token;
