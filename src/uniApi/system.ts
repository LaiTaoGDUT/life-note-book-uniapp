let cacheSystemInfo: UniApp.GetSystemInfoResult | null = null;
export const getSystemInfoSync = () => {
  if (cacheSystemInfo) {
    return cacheSystemInfo;
  }
  // UniApp 环境
  if (import.meta.env.VITE_PLATFORM !== 'h5' && import.meta.env.VITE_PLATFORM !== 'h5') {
    cacheSystemInfo = uni.getSystemInfoSync();
  } else {
    // H5 环境
    cacheSystemInfo = uni.getSystemInfoSync();
  }
  return cacheSystemInfo;
};
