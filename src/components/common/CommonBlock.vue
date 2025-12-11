<template>
  <view class="common-block">
    <view class="common-block-body">
      <slot></slot>
    </view>
  </view>
</template>
<script setup lang="ts">
</script>
<style scoped lang="scss">
.common-block {
  padding: 32rpx 32rpx 0;

  .common-block-body {
    background: #fff;
    padding: 24rpx;
    border-radius: 32rpx;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 8rpx 24rpx;
  }
}
</style>