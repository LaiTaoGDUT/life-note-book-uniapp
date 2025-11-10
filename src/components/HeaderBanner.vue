<template>
  <view
    class="header-banner"
    :style="bannerStyle"
  >
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
    <view class="header-banner-body"></view>
  </view>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  onMounted,
  onUnmounted
} from 'vue';
import HeaderNavigation from '@/components/HeaderNavigation.vue';
import { useSystemInfoStore } from '@/stores/systemInfo';

const systemInfo = useSystemInfoStore();

const bannerStyle = computed(() => ({
  paddingTop: `${systemInfo.statusBarHeight + systemInfo.titleBarHeight}px`
}));

const bannerList = ref([
  'https://loveli.kikiw.cn/Lovefolder/20241030162713_6721ede1be872.webp',
  'https://loveli.kikiw.cn/Lovefolder/20241025165327_671b5c87d3025.webp',
  'https://loveli.kikiw.cn/Lovefolder/20241025165328_671b5c8821cae.webp'
]);

const activeBannerIdx = ref(0);

let switchBannerTimer: any = 0;
const timeSwitchBanner = () => {
  switchBannerTimer = setTimeout(() => {
    activeBannerIdx.value = (activeBannerIdx.value + 1) % bannerList.value.length;
    timeSwitchBanner();
  }, 5000);
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
      background: rgba(0, 0, 0, 0.1);
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
    height: 200px;
  }
}
</style>
