<template>
	<view class="userLayout">
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
						<view class="text">{{userinfo.downloadSize}}</view>
						<uni-icons type="right" size="15" color="#aaa"></uni-icons>
					</view>
				</view>



			</view>
		</view>
		<view class="section">

		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";
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
	}
</style>