<template>
	<view class="classlist">
		<view class="content">
			<navigator url="/pages/preview/preview" class="item" v-for="item in classList" :key="item._id">
				<image :src="item.smallPicurl" mode="aspectFill"></image>
			</navigator>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from "vue";
	import {
		onLoad
	} from '@dcloudio/uni-app'

	import {
		apiGetClassList
	} from "@/api/api.js"
	//分类列表数据
	const classList = ref([]);

	//获取分类列表网络数据
	const getClassList = async () => {
		let res = await apiGetClassList(queryParams);
		classList.value = res.data;
	}
	let queryParams = {}
	onLoad((e) => {
		let {
			id = null, name = null
		} = e;
		if (id) queryParams.classid = id;
		//修改导航标题
		uni.setNavigationBarTitle({
			title: name
		})
		//执行获取分类列表方法
		getClassList();
	})
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