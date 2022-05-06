import type { App } from "vue";
import { usePackage } from "./hooks/usePackage";
import { useProvider, useProviders } from "./utils/injection";

export function createPackage() {
  return {
    install(app: App) {
      console.log("使用package插件！");

      useProvider(usePackage, app);
      //   useProviders([usePackage], app);
    },
  };
}
