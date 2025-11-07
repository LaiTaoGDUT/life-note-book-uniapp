import { createSSRApp } from "vue";
import App from "./App.vue";
import * as Pinia from 'pinia';
import { useSystemInfoStore } from '@/stores/systemInfo';

export function createApp() {
  const app = createSSRApp(App);
  const pinia = Pinia.createPinia();
  app.use(pinia);

  const systemInfoStore = useSystemInfoStore();
  systemInfoStore.initSystemInfo();

  return {
    app,
    Pinia
  };
}
