<template>
  <view class="header-banner" :style="bannerStyle">
    <view class="header-banner-bg">
      <view
        v-for="(item, idx) in bannerList"
        :key="item"
        class="header-banner-bg-item"
        :class="{ active: idx === activeBannerIdx }"
      >
        <image
          :src="item"
          mode="aspectFill"
          class="header-banner-bg-item-img"
        ></image>
      </view>
    </view>
    <header-navigation title="蚂蚁小羊的日常"></header-navigation>
    <view class="header-banner-body">
      <!-- 左侧头像区域 -->
      <view
        class="avatar-section left-avatar"
        @click="handleProfileClick('Ki')"
      >
        <view class="avatar-container">
          <view class="avatar-frame">
            <image
              class="avatar-image"
              src="https://loveli.kikiw.cn/Lovefolder/20251015142956_68ef3f64b1be9.jpeg"
              mode="aspectFill"
            ></image>
            <view class="avatar-frame-decoration">
              <view class="star star-1">✨</view>
              <view class="star star-2">✨</view>
              <view class="star star-3">✨</view>
              <view class="star star-4">✨</view>
              <view class="star star-5">✨</view>
              <view class="star star-6">✨</view>
            </view>
          </view>
          <view class="avatar-outer-ring"></view>
        </view>
        <text class="avatar-label">Ki.</text>
      </view>

      <!-- 中间红心区域 -->
      <view
        class="heart-section"
        :class="[isHeartBeating ? 'beat-animation' : '']"
        @click="handleHeartClick"
        @animationend="handleHeartAnimationEnd"
      >
        <view class="heart-container">
          <image
            class="heart-image"
            src="https://loveli.kikiw.cn/Style/img/like.svg"
            mode="aspectFill"
          ></image>
        </view>
      </view>

      <!-- 右侧头像区域 -->
      <view
        class="avatar-section right-avatar"
        @click="handleProfileClick('Really')"
      >
        <view class="avatar-container">
          <view class="avatar-frame pink">
            <image
              class="avatar-image"
              src="https://loveli.kikiw.cn/Lovefolder/20251015142956_68ef3f64b5aad.jpeg"
              mode="aspectFill"
            ></image>
            <view class="avatar-frame-decoration">
              <view class="star star-1">✨</view>
              <view class="star star-2">✨</view>
              <view class="star star-3">✨</view>
              <view class="star star-4">✨</view>
              <view class="star star-5">✨</view>
              <view class="star star-6">✨</view>
            </view>
          </view>
          <view class="avatar-outer-ring pink"></view>
        </view>
        <text class="avatar-label">Really</text>
      </view>

      <svg
        class="waves"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shape-rendering="auto"
      >
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
          ></path>
        </defs>
        <g class="parallax">
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="0"
            fill="rgba(255,255,255,0.7)"
          ></use>
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="3"
            fill="rgba(255,255,255,0.5)"
          ></use>
          <use
            xlink:href="#gentle-wave"
            x="48"
            y="5"
            fill="rgba(255,255,255,0.3)"
          ></use>
          <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff"></use>
        </g>
      </svg>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue";
import HeaderNavigation from "@/components/HeaderNavigation.vue";
import { useSystemInfoStore } from "@/stores/systemInfo";

const handleProfileClick = (avatar: string) => {
  // 这里可以添加更多交互逻辑，比如跳转到个人页面等
};

const systemInfo = useSystemInfoStore();

const bannerStyle = computed(() => ({
  paddingTop: `${systemInfo.statusBarHeight + systemInfo.titleBarHeight + (systemInfo.isH5OrApp ? 0 : 8)}px`,
}));

const bannerList = ref([
  "https://loveli.kikiw.cn/Lovefolder/20241030162713_6721ede1be872.webp",
  "https://loveli.kikiw.cn/Lovefolder/20241025165327_671b5c87d3025.webp",
  "https://loveli.kikiw.cn/Lovefolder/20241025165328_671b5c8821cae.webp",
]);

const activeBannerIdx = ref(0);

let switchBannerTimer: any = 0;
const timeSwitchBanner = () => {
  switchBannerTimer = setTimeout(() => {
    activeBannerIdx.value =
      (activeBannerIdx.value + 1) % bannerList.value.length;
    timeSwitchBanner();
  }, 5000);
};

const isHeartBeating = ref(false);
const handleHeartClick = () => {
  isHeartBeating.value = true;
};
const handleHeartAnimationEnd = () => {
  isHeartBeating.value = false;
};


onMounted(() => {
  timeSwitchBanner();
});
onUnmounted(() => {
  clearTimeout(switchBannerTimer);
});
</script>

<style scoped lang="scss">
.header-banner {
  position: relative;
  z-index: 0;

  .header-banner-bg {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &::before {
      content: "";
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.2);
      z-index: 99;
    }

    .header-banner-bg-item {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      transition: opacity 0.8s ease-in-out;

      &.active {
        opacity: 1;
      }

      .header-banner-bg-item-img {
        width: 100%;
        height: 100%;
      }
    }
  }

  .header-banner-body {
    height: 700rpx;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    padding: 0 0 100rpx;
    box-sizing: border-box;
  }

  .avatar-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 24rpx 20rpx;
    border-radius: 20rpx;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(30rpx);
    border: 3rpx solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 12rpx 32rpx rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;
    flex-shrink: 0;
  }

  .avatar-section:active {
    transform: scale(0.95);
  }

  .avatar-container {
    position: relative;
    width: 150rpx;
    height: 150rpx;
    border-radius: 50%;
    overflow: visible;
    transition: transform 0.3s ease;
    cursor: pointer;
    flex-shrink: 0;
  }

  .avatar-container:active {
    transform: scale(0.95);
  }

  .avatar-frame {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    overflow: visible;
    padding: 6rpx;
    box-sizing: border-box;
    background: #a8edea;
    box-shadow: 0 0 0 3rpx rgba(255, 255, 255, 0.8),
      0 8rpx 25rpx rgba(0, 0, 0, 0.15), inset 0 0 20rpx rgba(255, 255, 255, 0.5);

    &.pink {
      background: #ff9a9e;
    }
  }

  .avatar-outer-ring {
    position: absolute;
    top: -8rpx;
    left: -8rpx;
    border-radius: 50%;
    width: 166rpx;
    height: 166rpx;
    background: conic-gradient(
      from 0deg,
      #a8edea,
      #fecfef,
      #ff9a9e,
      #fed6e3,
      #a8edea
    );
    z-index: -1;
    animation: rotateRing 8s linear infinite;
    opacity: 0.7;

    &.pink {
      background: conic-gradient(
        from 0deg,
        #ff9a9e,
        #fecfef,
        #a8edea,
        #fed6e3,
        #ff9a9e
      );
    }
  }

  .avatar-frame-decoration {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    pointer-events: none;
  }

  .star {
    position: absolute;
    font-size: 32rpx;
    animation: float 3s ease-in-out infinite;
    filter: drop-shadow(0 4rpx 8rpx rgba(0, 0, 0, 0.1));

    &.star-1 {
      top: -12rpx;
      left: 50%;
      transform: translateX(-50%);
      animation-delay: 0s;
    }

    &.star-2 {
      bottom: -12rpx;
      left: 20rpx;
      animation-delay: 1s;
    }

    &.star-3 {
      bottom: -12rpx;
      right: 20rpx;
      animation-delay: 2s;
    }

    &.star-4 {
      top: 30rpx;
      left: -12rpx;
      animation-delay: 0.5s;
    }

    &.star-5 {
      top: 50%;
      right: -12rpx;
      transform: translateY(-50%);
      animation-delay: 1.5s;
    }

    &.star-6 {
      bottom: 30rpx;
      left: -12rpx;
      animation-delay: 2.5s;
    }
  }

  .avatar-image {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  .avatar-decoration {
    position: absolute;
    top: -16rpx;
    left: -16rpx;
    right: -16rpx;
    bottom: -16rpx;
    border-radius: 50%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.3) 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  .avatar-decoration::before {
    content: "";
    position: absolute;
    top: 20rpx;
    right: 30rpx;
    width: 24rpx;
    height: 24rpx;
    background: white;
    border-radius: 50%;
    opacity: 0.8;
  }

  .avatar-decoration::after {
    content: "";
    position: absolute;
    bottom: 30rpx;
    left: 24rpx;
    width: 16rpx;
    height: 16rpx;
    background: white;
    border-radius: 50%;
    opacity: 0.6;
  }

  .avatar-label {
    background: rgba(0, 0, 0, 0.7);
    color: white;
    padding: 4rpx;
    margin: 24rpx 0 0;
    border-radius: 40rpx;
    font-size: 32rpx;
    font-weight: 500;
    font-family: cursive;
    text-align: center;
    box-shadow: 0 8rpx 30rpx rgba(0, 0, 0, 0.2);
    width: 160rpx;
    white-space: nowrap;
    transition: transform 0.3s ease;
  }

  .avatar-label:active {
    transform: scale(0.95);
  }

  .heart-section {
    margin: 0 40rpx;
    animation: heartPulse 2s linear infinite;

    &.beat-animation {
      animation: heartbeat 1s linear 2;
    }

    .heart-image {
      width: 100rpx;
      height: 100rpx;
    }
  }

  .waves {
    position: absolute;
    bottom: 0;
    z-index: 99;
    width: 100%;
    height: 100rpx;

    .parallax > use {
      animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;

      &:nth-child(1) {
        animation-delay: -2s;
        animation-duration: 7s;
      }

      &:nth-child(2) {
        animation-delay: -3s;
        animation-duration: 10s;
      }

      &:nth-child(3) {
        animation-delay: -4s;
        animation-duration: 13s;
      }

      &:nth-child(4) {
        animation-delay: -5s;
        animation-duration: 20s;
      }
    }
  }
}

@keyframes float {
  0%,
  100% {
    transform: translateY(0rpx) rotate(0deg);
  }
  50% {
    transform: translateY(-10rpx) rotate(5deg);
  }
}

@keyframes rotateRing {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes heartPulse {
  0%,
  100% {
    transform: scale(0.8);
  }
  70% {
    transform: scale(1.3);
  }
}

@keyframes heartbeat {
  0% {
    transform: scale(0.8);
  }
  15% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(1.2);
  }
  45% {
    transform: scale(0.85);
  }
  60% {
    transform: scale(1.15);
  }
  75% {
    transform: scale(0.95);
  }
  100% {
    transform: scale(0.8);
  }
}

@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
</style>
