<template>
  <view class="header-navigation">
    <view
      class="header-navigation__inner"
      :style="headerNavigationInnerStyle"
    >

      <!-- 左侧按钮 -->
      <view
        class='header-navigation__left'
        :style="headerNavigationLeftStyle"
      >
        <block v-if="showBack">
          <!-- 返回上一页 -->
          <block v-if="showBack">
            <view class="header-navigation__buttons header-navigation__buttons_back"></view>
          </block>
        </block>
        <block v-else>
          <slot name="left"></slot>
        </block>
      </view>

      <!-- 标题 -->
      <view class='header-navigation__center'>
        <block v-if="title">
          <text>{{ title }}</text>
        </block>
        <block v-else>
          <slot name="center"></slot>
        </block>
      </view>
      
      <!-- 右侧留空 -->
      <view class='header-navigation__right'>
        <slot name="right"></slot>
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
  height: `${systemInfo.statusBarHeight + systemInfo.titleBarHeight}px`,
  paddingTop: `${systemInfo.statusBarHeight}px`,
  paddingRight: `${systemInfo.menuButtonWidth}px`
}));

const headerNavigationLeftStyle = computed(() => ({
  width: `${systemInfo.menuButtonWidth}px`
}));

const back = () => {
  uniApi.navigateBack();
};
</script>

<style scoped lang="scss">
.header-navigation {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  flex: none;
  background: #ffffff9e;
  backdrop-filter: blur(20px);
  border-bottom: 3rpx solid #e5e5e5;

  .header-navigation__inner {
    position: relative;
    top: 0;
    left: 0;
    padding-right: 96px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    box-sizing: border-box;
  }

  .header-navigation__left {
    position: relative;
    padding-left: 7px;
    width: 96px;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    height: 100%;
    box-sizing: border-box;
  }

  .header-navigation__center {
    font-size: 34rpx;
    line-height: 38rpx;
    text-align: center;
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    padding-bottom: 4rpx;
    flex: 1;
    height: 100%;
    color: rgb(24, 24, 24);
    text-shadow: 0 4rpx 4rpx rgb(0 0 0 / 25%);
  }
}
</style>
