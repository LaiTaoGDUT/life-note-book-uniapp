import { defineStore } from 'pinia';
import uniApi from '@/uniApi';

export const useSystemInfoStore = defineStore('systemInfo', {
	state: () => {
		return {
      statusBarHeight: 0,
      titleBarHeight: 0,
      menuButtonWidth: 0,
      safeArea: {
        top: 0, // 安全区域顶部距离屏幕顶部的距离（避开刘海）
        left: 0, // 安全区域左侧距离屏幕左侧的距离
        right: 0, // 安全区域右侧距离屏幕左侧的距离（即安全区域宽度）
        bottom: 0, // 安全区域底部距离屏幕顶部的距离（避开底部小黑条）
        width: 0, // 安全区域宽度
        height: 0 // 安全区域高度（bottom - top）
      }
		};
	},
  actions: {
    initSystemInfo() {
      const systemInfo = uniApi.getSystemInfoSync();
      if (process.env.UNI_PLATFORM === 'h5' || process.env.UNI_PLATFORM === 'app-plus') {
        this.titleBarHeight = 48;
      } else {
        const isAndroid = systemInfo.osName === 'android';
        this.titleBarHeight = isAndroid ? 48 : 44;
      }
      if (systemInfo.safeArea) {
        this.statusBarHeight = systemInfo.safeArea.top;
        this.safeArea = systemInfo.safeArea;
        const rect = uniApi.getMenuButtonBoundingClientRect();
        this.menuButtonWidth = systemInfo.windowWidth - rect.left;
      }
    }
  }
});
