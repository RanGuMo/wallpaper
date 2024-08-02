<template>
	<view class="themeItem">
		<navigator url="" class="box" v-if="!isMore">
			<image class="pic" src="../../common/images/classify1.jpg" mode="aspectFill"></image>
			<view class="mask">明星美女</view>
			<view class="tab">3天前更新</view>
		</navigator>
		<navigator url="" class="box more" v-if="isMore">
			<image class="pic" src="../../common/images/more.jpg" mode="aspectFill"></image>
			<view class="mask">
				<uni-icons type="more-filled" size="34" color="#fff"></uni-icons>
				<view class="text">更多</view>
			</view>
		</navigator>
	</view>
</template>

<script setup>
	defineProps({
		isMore: {
			type: Boolean,
			default: false
		}
	})
</script>

<style lang="scss" scoped>
	.themeItem {
		.box {
			height: 340rpx;
			border-radius: 10rpx;
			overflow: hidden;
			position: relative;

			.pic {
				width: 100%;
				height: 100%;
			}

			.mask {
				width: 100%;
				height: 70rpx;
				position: absolute;
				bottom: 0;
				left: 0;
				background: rgba(0, 0, 0, 0.2);
				display: flex;
				justify-content: center;
				align-items: center;
				font-size: 30rpx;
				font-weight: 600;
				color: #fff;
				backdrop-filter: blur(20rpx); // 背景模糊20rpx

			}

			.tab {
				position: absolute;
				left: 0;
				top: 0;
				background: rgba(250, 129, 90, 0.7);
				backdrop-filter: blur(20rpx);
				padding: 6rpx 14rpx;
				color: #fff;
				border-radius: 0 0 20rpx 0;
				// 因为字体最小只能是 12px，如果需要比12p小，
				// 就需要用到transform进行缩放，因为缩放默认是在中心
				// 所以修改缩放位置是左上角
				font-size: 22rpx;
				transform: scale(0.8);
				transform-origin: left top;
			}
		}

		.box.more {
			.mask {
				width: 100%;
				height: 100%;
				flex-direction: column;
			}

			.text {
				font-size: 28rpx;
			}
		}
	}
</style>