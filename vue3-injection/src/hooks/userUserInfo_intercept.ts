import { useInjector } from '@/package/utils/injection';
import { reactive } from 'vue';
import { HTTP_INTERCEPT } from './const';

interface UserInfo {
  name: string;
  age: number;
  auth: boolean;
  sex: null | string;
}

export function useUserInfo() {
  const userInfo = reactive<UserInfo>({
    name: '',
    age: 0,
    auth: false,
    sex: null
  });

  const intercept = useInjector<() => Promise<unknown>>(HTTP_INTERCEPT, 'optional');
  const login = (data: any) => {
    if (!intercept) {
      userInfo.auth = data;
      console.log('没有注入拦截器');
    } else {
      intercept().then((_) => {
        userInfo.auth = data;
        console.log(_);
      });
    }
  };
  const logout = (data: boolean) => {
    userInfo.auth = data;
  };
  const editUserInfo = (data: Partial<UserInfo>) => {
    console.log(data);

    data?.name && (userInfo.name = data?.name);
    // data?.age ?? (userInfo.age = (data?.age as number) || 0);
    typeof data?.age === 'number' && (userInfo.age = data?.age);
    data?.auth && (userInfo.auth = data?.auth);
    console.log(userInfo.age);
  };

  return {
    userInfo,
    login,
    logout,
    editUserInfo
  };
}
