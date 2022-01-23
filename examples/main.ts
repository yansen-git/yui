import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import yui from '../packages';

createApp(App).use(router).use(yui).mount('#app');
