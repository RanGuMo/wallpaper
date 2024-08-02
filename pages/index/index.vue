<template>
	<view class="homeLayout">
		<!-- 轮播图 -->
		<view class="banner">
			<!-- circular 衔接滚动  
			indicator-dots 面板指示点 
			indicator-color 指示点颜色
			indicator-active-color 激活的指示点颜色
			autoplay 自动切换
			-->
			<swiper circular indicator-dots indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#fff"
				autoplay :interval="3000" :duration="1000">
				<swiper-item v-for="item in 3">
					<image src="../../common/images/banner1.jpg" mode=""></image>
				</swiper-item>

			</swiper>
		</view>

		<!-- 公告（垂直的轮播） -->

		<view class="notice">
			<view class="left">
				<uni-icons type="sound-filled" size="20"></uni-icons>
				<text class="text">公告</text>
			</view>
			<view class="center">
				<swiper vertical autoplay interval="1500" duration="300" circular>
					<swiper-item v-for="item in 3">
						内容内容内容内容内容内容内容内容内容内容内容
					</swiper-item>
				</swiper>
			</view>
			<view class="right">
				<uni-icons type="right" size="16" color="#333"></uni-icons>
			</view>
		</view>


		<!-- 展示区域 -->
		<view class="select">
			<common-title>
				<template #name>每日推荐</template>
				<template #custom>
					<view class="date">
						<uni-icons type="calendar" size="18"></uni-icons>
						<view class="text">
							<uni-dateformat :date="Date.now()" format="dd日"></uni-dateformat>
						</view>
					</view>
				</template>
			</common-title>
			<!-- scroll-x 可在x轴滑动   -->
			<view class="content">
				<scroll-view scroll-x>
					<view class="box" v-for="item in 8">
						<image src="../../common/images/preview_small.webp" mode="aspectFill"></image>
					</view>
				</scroll-view>
			</view>

		</view>

		<!-- 专题精选 -->
		<view class="theme">
			<common-title>
				<template #name>专题精选</template>
				<template #custom>
					<navigator url="/pages/classify/classify" open-type="reLaunch" class="more">More+</navigator>
				</template>
			</common-title>

			<view class="content">
				<theme-item v-for="item in 8"></theme-item>

			</view>

		</view>



	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.homeLayout {
		.banner {
			width: 750rpx;
			padding: 30rpx 0;

			swiper {
				width: 750rpx;
				height: 340rpx;

				&-item {
					width: 100%;
					height: 100%;
					padding: 0 30rpx;

					image {
						width: 100%;
						height: 100%;
						border-radius: 10rpx;
					}
				}
			}
		}

		.notice {
			width: 690rpx;
			height: 80rpx;
			line-height: 80rpx;
			background: #f9f9f9;
			margin: 0 auto; // 水平居中
			border-radius: 80rpx;
			display: flex;

			.left {
				width: 140rpx;
				display: flex;
				justify-content: center;
				align-items: center;

				.text {
					color: #28b389;
					font-weight: 600;
					font-size: 28rpx;
				}
			}

			.center {
				//共690rpx，左140rpx，右70rpx
				// flex：1 表示占据剩余的空间 
				flex: 1;

				swiper {
					height: 100%;

					&-item {
						height: 100%;
						font-size: 30rpx;
						color: #666;
						// 文字过长自动显示三个点点点（只需加三个属性）
						overflow: hidden; //溢出隐藏
						white-space: nowrap; //文字不换行
						text-overflow: ellipsis; // 显示省略号...
					}
				}
			}

			.right {
				width: 70rpx;
				display: flex;
				justify-content: center;
				align-items: center;
			}
		}

		.select {
			padding-top: 50rpx;

			.date {
				color: #28b389;
				display: flex;
				align-items: center;

				.text {
					margin-left: 5rpx;
				}
			}

			.content {
				width: 720rpx;
				margin-left: 30rpx;
				margin-top: 30rpx;

				scroll-view {
					white-space: nowrap; //不换行，让元素一行上面（搭配 display: inline-block;）

					.box {
						width: 200rpx;
						height: 430rpx;
						display: inline-block; //将块元素改为行内块
						margin-right: 15rpx;

						image {
							width: 100%;
							height: 100%;
							border-radius: 10rpx;
						}
					}

					.box:last-child {
						// 让box盒子里面的最后一个元素margin-right为30rpx
						margin-right: 30rpx;
					}

				}
			}
		}

		.theme {
			padding-top: 50rpx;

			.more {
				font-size: 32rpx;
				color: #888;
			}

			.content {
				margin-top: 30rpx;
				padding: 0 30rpx;
				display: grid; // 网格布局
				gap: 15rpx; // 间隙15rpx
				grid-template-columns: repeat(3, 1fr); // 重复三列，平均分配
			}
		}
	}
</style>