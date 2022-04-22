import { createApp } from 'vue';
import App from './App.vue';

import globalVue from '@/components/global.vue';

const app = createApp(App);
app.component('GlobalComponent', globalVue);
app.mount('#app');
