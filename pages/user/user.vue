<template>
  <view class="userLayout pageBg">
    <view class="userInfo">
      <view class="avatar">
        <image src="../../static/images/xxmLogo.png" mode=""></image>
      </view>
      <view class="ip">100.100.100.011</view>
      <view class="address">来自于：山东</view>

    </view>
    <view class="section">
      <view class="list">
        <view class="row">
          <view class="left">
            <uni-icons type="download-filled" size="20"></uni-icons>
            <view class="text">我的下载</view>
          </view>
          <view class="right">
            <view class="text">66</view>
            <uni-icons type="right" size="15" color="#aaa"></uni-icons>
          </view>
        </view>

        <view class="row">
          <view class="left">
            <uni-icons type="download-filled" size="20"></uni-icons>
            <view class="text">我的评分</view>
          </view>
          <view class="right">
            <view class="text">66</view>
            <uni-icons type="right" size="15" color="#aaa"></uni-icons>
          </view>
        </view>

        <view class="row">
          <view class="left">
            <uni-icons type="download-filled" size="20"></uni-icons>
            <view class="text">联系客服</view>
          </view>
          <view class="right">
            <view class="text"></view>
            <uni-icons type="right" size="15" color="#aaa"></uni-icons>
          </view>
          <!-- #ifdef MP -->
          <!-- 如果是小程序 -->
          <button open-type="contact">联系客服</button>
          <!-- #endif -->
          <!-- #ifndef MP -->
          <!-- 如果不是小程序 -->
          <button @click="clickContact">拨打电话</button>
          <!-- #endif -->
        </view>

      </view>
    </view>
    <view class="section">
      <view class="list">
        <view class="row" v-for="itme in 2">
          <view class="left">
            <uni-icons type="download-filled" size="20"></uni-icons>
            <view class="text">我的下载</view>
          </view>
          <view class="right">
            <view class="text">66</view>
            <uni-icons type="right" size="15" color="#aaa"></uni-icons>
          </view>
        </view>

      </view>
    </view>
  </view>
</template>

<script setup>
  import {
    ref
  } from "vue";

  const clickContact = () => {
    uni.makePhoneCall({
      phoneNumber: "114"
    })
  }
</script>

<style lang="scss" scoped>
  .userLayout {
    .userInfo {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      padding: 50rpx 0;

      .avatar {
        width: 160rpx;
        height: 160rpx;
        border-radius: 50%;
        overflow: hidden; // 给父级加border-radius: 50%;  必须设置overflow: hidden;

        image {
          width: 100%;
          height: 100%;
        }
      }

      .ip {
        font-size: 44rpx;
        color: #333;
        padding: 20rpx 0 5rpx; // 上 左右 下
      }

      .address {
        font-size: 28rpx;
        color: #aaa;
      }
    }

    .section {
      width: 690rpx;
      margin: 50rpx auto;
      border: 1px solid #eee;
      border-radius: 10rpx;
      box-shadow: 0 0 30rpx rgba(0, 0, 0, 0.05);

      .list {
        .row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 30rpx;
          height: 100rpx;
          border-bottom: 1px solid #eee;
          position: relative;
          background: #fff;

          &:last-child {
            border-bottom: 0;
          }

          .left {
            display: flex;
            align-items: center;
            :deep() {
              .uni-icons {
                color: $brand-theme-color !important;
              }
            }

            .text {
              padding-left: 20rpx;
              color: #666;
            }
          }

          .right {
            display: flex;
            align-items: center;

            .text {
              font-size: 28rpx;
              color: #aaa;
            }
          }

          button {
            position: absolute;
            top: 0;
            left: 0;
            height: 100rpx;
            width: 100%;
            opacity: 0.7;
          }
        }
      }
    }
  }
</style>