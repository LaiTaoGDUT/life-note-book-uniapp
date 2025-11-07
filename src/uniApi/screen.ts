export const getMenuButtonBoundingClientRect = () => {
  if (process.env.UNI_PLATFORM !== 'h5' && process.env.UNI_PLATFORM !== 'app-plus') {
    return uni.getMenuButtonBoundingClientRect();
  }
  return {
    bottom: 83,
    height: 32,
    left: 296,
    right: 383,
    top: 51,
    width: 87
  };
};
