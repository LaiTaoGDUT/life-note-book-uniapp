export const getSystemInfoSync = () => {
  // UniApp 环境
  if (import.meta.env.VITE_PLATFORM !== 'h5' && import.meta.env.VITE_PLATFORM !== 'h5') {
    return uni.getSystemInfoSync();
  }
  // H5 环境
  return uni.getSystemInfoSync();
};
