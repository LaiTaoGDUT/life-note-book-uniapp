let cacheSystemInfo: UniApp.GetSystemInfoResult | null = null;
export const getSystemInfoSync = () => {
  if (cacheSystemInfo) {
    return cacheSystemInfo;
  }
  // UniApp 环境
  if (process.env.UNI_PLATFORM !== 'h5' && process.env.UNI_PLATFORM !== 'app-plus') {
    cacheSystemInfo = uni.getSystemInfoSync();
  } else {
    // H5 环境
    cacheSystemInfo = uni.getSystemInfoSync();
  }
  return cacheSystemInfo;
};
