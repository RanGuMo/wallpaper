<template>
	<view class="classlist">
		<view class="content">
			<navigator url="/pages/preview/preview" class="item" v-for="item in 10">
				<image src="../../common/images/preview2.jpg" mode="aspectFill"></image>
			</navigator>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";
</script>

<style lang="scss" scoped>
	.classlist {
		.content {
			display: grid;
			gap: 5rpx;
			grid-template-columns: repeat(3, 1fr);
			padding: 5rpx;

			.item {
				height: 440rpx;

				image {
					width: 100%;
					height: 100%;
					display: block; //必须加这个，否则有些图片的底部空隙和其他不一样
				}
			}
		}
	}
</style>