<template>
  <view
    class="header-navigation__wrap"
    :style="headerNavigationWrapStyle"
  >
    <view class="header-navigation">
      <view
        class="header-navigation__inner"
        :style="headerNavigationInnerStyle"
      >

        <!-- 左侧按钮 -->
        <view class='header-navigation__left'>
          <block v-if="showBack">
            <!-- 返回上一页 -->
            <view class="header-navigation__buttons header-navigation__buttons_back"></view>
          </block>
          <image
            v-else
            class="header-navigation__cover"
            src="https://wx.qlogo.cn/mmhead/JCrjicctRModWUXaF9Mx8LXK3KMljsyozTHjXGYGbFf4t0LGLNyx5thPibyV1UsMjmh0xbzVS8Gos/0"
          ></image>
          <view class="header-navigation__title">
            <block v-if="title">
              <text>{{ title }}</text>
            </block>
          </view>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import uniApi from '@/uniApi';
import { useSystemInfoStore } from '@/stores/systemInfo';

const systemInfo = useSystemInfoStore();

const props = defineProps({
  showBack: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  }
});

const headerNavigationInnerStyle = computed(() => ({
  height: `${systemInfo.statusBarHeight + systemInfo.titleBarHeight + (systemInfo.isH5OrApp ? 0 : 8)}px`,
  paddingTop: `${systemInfo.statusBarHeight}px`,
  paddingRight: `${systemInfo.menuButtonWidth}px`,
  paddingBottom: `${systemInfo.isH5OrApp ? 0 : 8}px`
}));
const headerNavigationWrapStyle = computed(() => ({
  height: `${systemInfo.statusBarHeight + systemInfo.titleBarHeight + (systemInfo.isH5OrApp ? 0 : 8)}px`
}));

const back = () => {
  uniApi.navigateBack();
};
</script>

<style scoped lang="scss">
.header-navigation__wrap {
  width: 100%;
}

.header-navigation {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  flex: none;
  background: rgb(255 255 255 / 0.8);;
  backdrop-filter: blur(16px);
  border-bottom: 2rpx solid #e5e7eb;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 4rpx 24rpx;

  .header-navigation__inner {
    position: relative;
    top: 0;
    left: 0;
    padding-right: 96px;
    width: 100%;
    box-sizing: border-box;
  }

  .header-navigation__left {
    position: relative;
    padding-left: 32rpx;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    box-sizing: border-box;
  }

  .header-navigation__cover {
    width: 64rpx;
    height: 64rpx;
    border-radius: 50%;
    background: #fff;
    margin: 0 12rpx 4rpx 0;
    box-shadow: 0 2rpx 6rpx rgb(0 0 0 / 25%);
  }

  .header-navigation__buttons {
    width: 40rpx;
    height: 40rpx;
    margin-right: 32rpx;
  }

  .header-navigation__title {
    font-size: 32rpx;
    text-align: center;
    position: relative;
    display: flex;
    align-items: center;
    font-weight: bold;
    padding-bottom: 4rpx;
    flex: 1;
    height: 100%;
    color: rgb(24, 24, 24);
    text-shadow: 0 2rpx 2rpx rgb(0 0 0 / 25%);
    font-family: "ZCOOL XiaoWei", sans-serif;
  }
}
</style>
