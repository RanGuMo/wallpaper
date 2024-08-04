<template>
  <view class="preview">
    <swiper circular>
      <swiper-item v-for="(item,index) in 5" :key="index">
        <image @click="maskChange" src="../../common/images/preview1.jpg" mode="aspectFill"></image>
      </swiper-item>
    </swiper>


    <view class="mask" v-if="maskState">
      <view class="goBack"></view>
      <view class="count">3 / 9</view>
      <view class="time"><uni-dateformat :date="new Date()" format="hh:mm"></uni-dateformat></view>
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

  const maskState = ref(true);

  //1.点击图片 遮罩层状态进行切换
  const maskChange = () => {
    maskState.value = !maskState.value
  }
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
      &>view {
        //表示 mask 下面的子元素是view 会加上这些属性，孙元素不加
        position: absolute;
        left: 0;
        margin: auto;
        color: #fff;
        right: 0;
        width: fit-content;
      }

      .goBack {}

      .count {
        top: 10vh;
        background: rgba(0, 0, 0, 0.3);
        font-size: 28rpx;
        border-radius: 40rpx;
        padding: 8rpx 28rpx;
        backdrop-filter: blur(10rpx);
      }

      .time {
        font-size: 140rpx;
        top: calc(10vh + 80rpx);
        font-weight: 100;
        line-height: 1em;
        text-shadow: 0 4rpx rgba(0, 0, 0, 0.3);
      }

      .date {
        font-size: 34rpx;
        top: calc(10vh + 230rpx);
        text-shadow: 0 2rpx rgba(0, 0, 0, 0.3);
      }

      .footer {
        background: rgba(255, 255, 255, 0.8);
        bottom: 10vh;
        width: 65vw;
        height: 120rpx;
        border-radius: 120rpx;
        color: #000;
        display: flex;
        justify-content: space-around;
        align-items: center;
        box-shadow: 0 2rpx 0 rgba(0, 0, 0, 0.1);
        backdrop-filter: blur(20rpx);

        .box {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 2rpx 12rpx;

          .text {
            font-size: 26rpx;
            color: $text-font-color-2;
          }
        }
      }
    }


  }
</style>