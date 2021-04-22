import { createApp } from 'vue';
import VueVirtualScroller from 'vue-virtual-scroller';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import 'vue-virtual-scroller/dist/vue-virtual-scroller.css';

createApp(App)
  .use(store)
  .use(router)
  .use(VueVirtualScroller)
  .mount('#app');
