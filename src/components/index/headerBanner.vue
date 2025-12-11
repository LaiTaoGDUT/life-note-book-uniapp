<template>
  <view>
    <view class="header-banner">
      <swiper
        class="header-banner-swiper"
        circular
        :indicator-dots="indicatorDots"
        :autoplay="autoplay"
        :interval="interval"
        :duration="duration"
      >
        <swiper-item>
          <view class="header-banner-swiper-item item-a">
            <view class="swiper-item-title">我们一起走过的</view>
            <view class="swiper-item-desc">第 {{ relationDay }} 天</view>
          </view>
        </swiper-item>
        <swiper-item>
          <view class="header-banner-swiper-item item-b">
            <view class="swiper-item-title">一起记录美好</view>
            <view class="swiper-item-desc">已记录 {{ albumCnt }} 个相册</view>
          </view>
        </swiper-item>
        <swiper-item>
          <view class="header-banner-swiper-item item-c">
            <view class="swiper-item-title">一起好好吃饭</view>
            <view class="swiper-item-desc">已尝试 {{ recipeCnt }} 道新菜</view>
          </view>
        </swiper-item>
      </swiper>
    </view>
  </view>
</template>
<script setup lang="ts">
import { ref, computed } from "vue";

const indicatorDots = ref(false);
const autoplay = ref(true);
const interval = ref(5000);
const duration = ref(300);

const relationStartTimeStamp = 1641225600000; // 2022-01-04 00:00:00
// 计算出当前时间戳和关系开始时间戳的差值，单位为天
const relationDay = computed(() => {
  const currentTimeStamp = Date.now();
  const diffTime = currentTimeStamp - relationStartTimeStamp;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  return diffDays;
});

const albumCnt = ref(0);
const recipeCnt = ref(0);
</script>
<style scoped lang="scss">
.header-banner {
  padding: 32rpx 32rpx 0;
}

.header-banner-swiper {
  overflow: hidden;
  border-radius: 32rpx;
  height: 360rpx;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 8rpx 24rpx;
}

.header-banner-swiper-item {
  height: 100%;
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.08);
    z-index: -1;
    // backdrop-filter: blur(2rpx);
  }

  &.item-a {
    background-image: url("https://static-web.likeevideo.com/as/likee-static/laitao-test/banner1.jpg");
  }

  &.item-b {
    background-image: url("https://static-web.likeevideo.com/as/likee-static/laitao-test/banner2.jpg");
  }

  &.item-c {
    background-image: url("https://static-web.likeevideo.com/as/likee-static/laitao-test/banner3.jpg");
  }

  .swiper-item-title {
    font-size: 48rpx;
    font-weight: bold;
    color: #fff;
    text-shadow: 0 4rpx 4rpx rgb(0 0 0 / 35%);
  }

  .swiper-item-desc {
    font-size: 32rpx;
    color: #fff;
    margin-top: 12rpx;
    text-shadow: 0 4rpx 4rpx rgb(0 0 0 / 35%);
  }
}
</style>