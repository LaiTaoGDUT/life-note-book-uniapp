import { getSystemInfoSync } from './system';

let cacheMenuButtonBoundingClientRect: {
  bottom: number,
  height: number,
  left: number,
  right: number,
  top: number,
  width: number
} | null = null;
export const getMenuButtonBoundingClientRect = () => {
  if (cacheMenuButtonBoundingClientRect) {
    return cacheMenuButtonBoundingClientRect;
  }
  if (process.env.UNI_PLATFORM !== 'h5' && process.env.UNI_PLATFORM !== 'app-plus') {
    cacheMenuButtonBoundingClientRect = uni.getMenuButtonBoundingClientRect();
  } else {
    const systemInfo = getSystemInfoSync();
    let buttonLeft = systemInfo.windowWidth - 87 - 16;
    cacheMenuButtonBoundingClientRect = {
      bottom: 48,
      height: 48,
      left: buttonLeft,
      right: buttonLeft + 87,
      top: 0,
      width: 87
    };
  };
  return cacheMenuButtonBoundingClientRect;
};
