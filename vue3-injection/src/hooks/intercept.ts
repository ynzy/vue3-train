import { HTTP_INTERCEPT } from './const';

export function httpIntercept() {
  const intercept = () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          msg: '拦截成功'
        });
      }, 3000);
    });
  };
  return intercept;
}

httpIntercept.token = HTTP_INTERCEPT;
