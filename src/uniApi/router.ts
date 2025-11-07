export const navigateTo = (url: string) => {
  // UniApp 环境
  if (process.env.UNI_PLATFORM !== 'h5') {
    return uni.navigateTo({ url });
  }
  // H5 环境
  uni.navigateTo({ url });
};

export const navigateBack = () => {
  // UniApp 环境
  if (process.env.UNI_PLATFORM !== 'h5') {
    return uni.navigateBack();
  }
  // H5 环境
  uni.navigateBack();
};
