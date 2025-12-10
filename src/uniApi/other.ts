export const loadFontFace = async (familyName: string, source: string) => {
  // UniApp 环境
  if (process.env.UNI_PLATFORM !== 'h5') {
    uni.loadFontFace({
      family: familyName,
      source: `url("${source}")`,
      success: () => {
        console.log('字体加载成功:', familyName);
      },
      fail: (err) => {
        console.error('字体加载失败:', err);
      }
    });
  }
  // H5 环境
  uni.loadFontFace({
    family: familyName,
    source: `url("${source}")`,
    success: () => {
      console.log('字体加载成功:', familyName);
    },
    fail: (err) => {
      console.error('字体加载失败:', err);
    }
  });
};