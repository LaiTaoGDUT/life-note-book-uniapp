<template>
  <view
    class="header-banner"
    :style="bannerStyle"
  >
    <view class="header-banner-bg">
      <view
        v-for="item in bannerList"
        :key="item"
        class="header-banner-bg-item"
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
  computed
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

    .header-banner-bg-item {
      width: 100%;
      height: 100%;

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
