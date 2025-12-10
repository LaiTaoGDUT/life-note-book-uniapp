import { createSSRApp } from "vue";
import App from "./App.vue";
import * as Pinia from 'pinia';
import { useSystemInfoStore } from '@/stores/systemInfo';
// import uniApi from '@/uniApi';

export function createApp() {
  const app = createSSRApp(App);
  const pinia = Pinia.createPinia();
  app.use(pinia);

  const systemInfoStore = useSystemInfoStore();
  systemInfoStore.initSystemInfo();

  // uniApi.loadFontFace('ZCOOL XiaoWei', 'https://static-web.likeevideo.com/as/likee-static/laitao-test/ZCOOLXiaoWei-Regular-min.ttf');

  return {
    app,
    Pinia
  };
}
