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
          <svg v-else class="svg-inline--fa fa-heart text-pink-500 text-xl" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="heart" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path></svg>
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
import {
  computed,
  defineProps
} from 'vue';
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

    .text-pink-500 {
      color: #ff6b9d;
      height: 40rpx;
      margin: 0 12rpx 4rpx 0;
    }
  }

  .header-navigation__title {
    font-size: 40rpx;
    line-height: 45rpx;
    text-align: center;
    position: relative;
    display: flex;
    align-items: center;
    font-weight: bold;
    padding-bottom: 4rpx;
    flex: 1;
    height: 100%;
    background: linear-gradient(135deg, #ff6b9d, #ff8fa3);
    background-clip: text;
    -webkit-text-fill-color: transparent;
    text-shadow: 0 2rpx 2rpx rgb(0 0 0 / 10%);
    font-family: "ZCOOL XiaoWei", sans-serif;
  }
}
</style>
