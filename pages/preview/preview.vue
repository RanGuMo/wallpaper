<template>
  <view class="preview">
    <swiper circular>
      <swiper-item v-for="(item,index) in 5" :key="index">
        <image src="../../common/images/preview1.jpg" mode="aspectFill"></image>
      </swiper-item>
    </swiper>


    <view class="mask">
      <view class="goBack"></view>
      <view class="count">3 / 9</view>
      <view class="time">10:10</view>
      <view class="date"><uni-dateformat :date="new Date()" format="MM月dd日"></uni-dateformat></view>
      <view class="footer">
        <view class="box">
          <uni-icons type="info" size="28"></uni-icons>
          <view class="text">信息</view>
        </view>
        <view class="box">
          <uni-icons type="star" size="28"></uni-icons>
          <view class="text">5分</view>
        </view>
        <view class="box">
          <uni-icons type="download" size="23"></uni-icons>
          <view class="text">下载</view>
        </view>
      </view>
    </view>


  </view>
</template>

<script setup>
  import {
    ref
  } from 'vue';
</script>

<style lang="scss" scoped>
  .preview {
    width: 100%;
    height: 100vh;
    position: relative;

    swiper {
      width: 100%;
      height: 100%;

      image {
        width: 100%;
        height: 100%;
      }
    }

    .mask {
      .goBack {}

      .count {
        position: absolute;
        left: 0;
        margin: auto;
        color: #fff;
        right: 0;
        width: fit-content; //宽度根据内容自适应
        top: 10vh;
        background: rgba(0, 0, 0, 0.3);
        font-size: 28rpx;
        border-radius: 40rpx;
        padding: 8rpx 28rpx;
        backdrop-filter: blur(10rpx);
      }

      .time {}

      .date {}

      .footer {}
    }


  }
</style>