/// <reference types="vite/client" />
import type { App } from "Vue";

declare global {
  declare interface Window {
    vm: App;
  }
}
