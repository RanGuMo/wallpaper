<template>
  <view class="classlist">

    <view class="loadingLayout" v-if="!classList.length && !noData">
      <uni-load-more status="loading"></uni-load-more>
    </view>

    <view class="content">
      <navigator :url="`/pages/preview/preview?id=${item._id}`" class="item" v-for="item in classList" :key="item._id">
        <image :src="item.smallPicurl" mode="aspectFill"></image>
      </navigator>
    </view>


    <view class="loadingLayout" v-if="classList.length || noData">
      <uni-load-more :status="noData?'noMore':'loading'"></uni-load-more>
    </view>

    <view class="safe-area-inset-bottom"></view>
  </view>
</template>

<script setup>
  import {
    ref
  } from "vue";
  import {
    onLoad,
    onUnload,
    onReachBottom,
    onShareAppMessage,
    onShareTimeline
  } from '@dcloudio/uni-app'

  import {
    apiGetClassList,
    apiGetHistoryList
  } from "@/api/api.js"

  import {
    gotoHome
  } from "@/utils/common.js"

  //分类列表数据
  const classList = ref([]);
  // 2.触底加载更多 的时候是否继续发送请求
  const noData = ref(false);

  //定义data参数
  const queryParams = {
    pageNum: 1,
    pageSize: 12
  }
  let pageName;
  //1.获取分类列表网络数据
  const getClassList = async () => {
    // let res = await apiGetClassList(queryParams);
    let res;
    if (queryParams.classid) res = await apiGetClassList(queryParams);
    if (queryParams.type) res = await apiGetHistoryList(queryParams);
    //2.2.拼接触底加载的数据
    classList.value = [...classList.value, ...res.data];
    //2.3. 如果获取到的数据小于pageSize，说明已经是最后一页了
    if (queryParams.pageSize > res.data.length) noData.value = true;
    uni.setStorageSync("storageClassList", classList.value);
  }

  onLoad((e) => {
    let {
      id = null, name = null, type = null
    } = e;
    if (type) queryParams.type = type;
    if (id) queryParams.classid = id;
    // if (!id) gotoHome(); //没有id直接回到首页
    pageName = name;
    //1.1.修改导航标题
    uni.setNavigationBarTitle({
      title: name
    })
    //1.2.执行获取分类列表方法
    getClassList();
  })
  // 2.1.触底加载更多
  onReachBottom(() => {
    if (noData.value) return; //如果没有数据就不发请求获取下一页的数据了
    queryParams.pageNum++;
    getClassList();
  })


  //分享给好友
  onShareAppMessage((e) => {
    return {
      title: "咸虾米壁纸-" + pageName,
      path: "/pages/classslist/classslist?id=" + queryParams.classid + "&name=" + pageName
    }
  })


  //分享朋友圈
  onShareTimeline(() => {
    return {
      title: "咸虾米壁纸-" + pageName,
      query: "id=" + queryParams.classid + "&name=" + pageName
    }
  })
  // 离开之后清空storageClassList缓存，防止串台
  onUnload(() => {
    uni.removeStorageSync("storageClassList")
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