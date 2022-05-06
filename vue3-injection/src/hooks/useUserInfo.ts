import { ref, watchEffect } from 'vue';

export interface UserInfo {
  userInfo: any;
  login: (n: any) => void;
  logout: () => void;
  editUserInfo: (n: any) => void;
}

export function useUserInfo() {
  const userInfo = ref({
    name: '',
    age: 0,
    auth: false
  });
  watchEffect(() => {
    console.log(userInfo.value);
  });
  const login = (data) => {
    userInfo.value = data;
  };
  const logout = () => {
    userInfo.value = {
      name: '',
      age: 0,
      auth: false
    };
  };
  const editUserInfo = (data) => {
    userInfo.value.name = data.name;
    userInfo.value.age = data.age;
  };

  return {
    userInfo,
    login,
    logout,
    editUserInfo
  };
}
