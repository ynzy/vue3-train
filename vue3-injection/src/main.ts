import { createApp } from 'vue';
import App from './App.vue';
import { createPackage } from './package';
const app = createApp(App);

app.use(createPackage());

app.mount('#app');

window.vm = app;
