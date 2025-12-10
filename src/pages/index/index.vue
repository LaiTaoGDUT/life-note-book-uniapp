<template>
  <view class="page-index">
    <header-navigation title="蚂蚁小羊的日常"></header-navigation>
	</view>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import HeaderNavigation from "@/components/HeaderNavigation.vue";
</script>

<style scoped lang="scss">
@import '@/styles/page-common.scss';

.page-index {
  @extend .page-common-container;
}
</style>
