<template>
	<view class="classLayout pageBg">
		<view class="classify">
			<theme-item v-for="item in 15"></theme-item>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";
</script>

<style lang="scss" scoped>
	.classLayout {
		.classify {
			padding: 30rpx;
			display: grid;
			grid-template-columns: repeat(3, 1fr);
			gap: 15rpx;
		}
	}
</style>