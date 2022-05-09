import { createApp } from 'vue';
import App from './App.vue';
import { createPackage } from './package';
import { useProvider } from '@/package/utils/injection';
// useProvider()
const app = createApp(App);

app.use(createPackage());

app.mount('#app');

window.vm = app;
