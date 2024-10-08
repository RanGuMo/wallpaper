# uniapp-咸虾米壁纸（微信小程序 + H5）
## 1.创建项目
![](README_files/1.png)
### 1.引入静态资源
> 新建common 目录，把静态资源放在common 下（只有导入才会打包），因为放static下的所有资源默认都会打包进去（不管你引没有引入）

uniapp参考说明：

https://uniapp.dcloud.net.cn/tutorial/project.html#static

### 2.static目录

- 为什么需要static这样的目录？

uni-app编译器根据pages.json扫描需要编译的页面，并根据页面引入的js、css合并打包文件。
对于本地的图片、字体、视频、文件等资源，如果可以直接识别，那么也会把这些资源文件打包进去，但如果这些资源以变量的方式引用， 比如：`<image :src="url"></image>`，甚至可能有更复杂的函数计算，此时编译器无法分析。

那么有了static目录，编译器就会把这个目录整体复制到最终编译包内。这样只要运行时确实能获取到这个图片，就可以显示。

当然这也带来一个注意事项，如果static里有一些没有使用的废文件，也会被打包到编译包里，造成体积变大。

另外注意，static目录支持特殊的平台子目录，比如web、app、mp-weixin等，这些目录存放专有平台的文件，这些平台的文件在打包其他平台时不会被包含。详见[条件编译](https://uniapp.dcloud.net.cn/tutorial/platform.html#static-目录的条件编译)

非 `static` 目录下的文件（vue组件、js、css 等）只有被引用时，才会被打包编译。

`css`、`less/scss` 等资源不要放在 `static` 目录下，建议这些公用的资源放在自建的 `common` 目录下。

- static目录和App原生资源目录有关系吗？

uni-app支持App原生资源目录nativeResources，下面有assets、res等目录，[详见](https://uniapp.dcloud.net.cn/tutorial/app-nativeresource-android.html#nativeresources)。但和static目录没有关系。

static目录下的文件，在app第一次启动时，解压到了app的外部存储目录（external-path）。（uni-app x 从3.99+不再解压）

所以注意控制static目录的大小，太大的static目录和太多文件，会造成App安装后第一次启动变慢。

### 3.在App.vue 引入公共样式
```vue
<style lang="scss">
	/*每个页面公共css */
	@import "common/style/common-style.scss"
</style>
```


## 2.index 页面(轮播图)

### 2.1.banner海报swiper轮播器

```vue
<template>
	<view class="homeLayout">
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
	}
</style>
```

![](README_files/1.jpg)


### 2.2.使用swiper的纵向轮播做公告区域
```vue
<!-- 公告（垂直的轮播） -->
<template>
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
</template>

<style lang="scss" scoped>
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
</style>
```
![](README_files/2.jpg)

### 2.3.每日推荐滑动scroll-view布局
```vue
<template>
<!-- 展示区域 -->
<view class="select">
	<common-title></common-title>
	<!-- scroll-x 可在x轴滑动   -->
	<view class="content">
		<scroll-view scroll-x>
			<view class="box" v-for="item in 8">
				<image src="../../common/images/preview_small.webp" mode="aspectFill"></image>
			</view>
		</scroll-view>
	</view>
</view>
</template>

<style lang="scss" scoped>
.select {
	padding-top: 50rpx;

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

</style>
```
![](README_files/3.jpg)
![](README_files/3.gif)

### 2.4.组件具名插槽定义公共标题模块
> uniapp中 只要遵循 components/组件名/组件名.vue 在其他页面无需导入，可以直接使用
组件路径： `components/common-title/common-title.vue`
```vue
<template>
	<view class="common-title">
		<view class="name">
			<slot name="name"></slot>
		</view>
		<view class="custom">
			<slot name="custom"></slot>
		</view>
	</view>
</template>

<script setup>

</script>

<style lang="scss" scoped>
	.common-title {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 30rpx;

		.name {
			font-size: 40rpx
		}
	}
</style>
```
使用`common-title`组件
```vue
<template>

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

	</view>

</view>
</template>

<style lang="scss" scoped>
.select {
	.date {
		color: #28b389;
		display: flex;
		align-items: center;

		.text {
			margin-left: 5rpx;
		}
	}
}

.theme {
	padding-top: 50rpx;

	.more {
		font-size: 32rpx;
		color: #888;
	}
}
</style>

```
![](README_files/4.jpg)

### 2.5.细节拉满 磨砂背景定位布局做专题组件
```vue
<template>
<!-- 专题精选 -->
<view class="theme">

	<view class="content">
		<theme-item v-for="item in 8"></theme-item>
	</view>
</view>
</template>

<style lang="scss" scoped>
.theme {
	
	.content {
		margin-top: 30rpx;
		padding: 0 30rpx;
		display: grid; // 网格布局
		gap: 15rpx; // 间隙15rpx
		grid-template-columns: repeat(3, 1fr); // 重复三列，平均分配
	}
}
</style>
```

组件路径： `components/theme-item/theme-item.vue`

```vue
<template>
	<view class="themeItem">
		<navigator url="" class="box">
			<image class="pic" src="../../common/images/classify1.jpg" mode="aspectFill"></image>
			<view class="mask">明星美女</view>
			<view class="tab">3天前更新</view>
		</navigator>
	</view>
</template>

<script setup>

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
	}
</style>
```
![](README_files/5.jpg)

### 2.6.同一组件Props传递不同属性值展示不同效果
`pages/index/index.vue`
```vue
<view class="content">
	<theme-item v-for="item in 8"></theme-item>
	<theme-item :isMore="true"></theme-item>
</view>
```

`components/theme-item/theme-item.vue`
```vue
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
```
![](README_files/6.jpg)

### 2.7.个人中心页面布局
```vue
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
        <view class="row" v-for="itme in 3">
          <view class="left">
            <uni-icons type="download-filled" size="20" color="#28b389"></uni-icons>
            <view class="text">我的下载</view>
          </view>
          <view class="right">
            <view class="text">66</view>
            <uni-icons type="right" size="15" color="#aaa"></uni-icons>
          </view>
        </view>

      </view>
    </view>
    <view class="section">
      <view class="list">
        <view class="row" v-for="itme in 2">
          <view class="left">
            <uni-icons type="download-filled" size="20" color="#28b389"></uni-icons>
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
          &:last-child {
            border-bottom: 0;
          }
          .left{
            display: flex;
            align-items: center;
            .text{
              padding-left: 20rpx;
              color: #666;
            }
          }
          .right{
            display: flex;
            align-items: center;
            .text{
              font-size: 28rpx;
              color: #aaa;
            }
          }
        }
      }
    }
  }
</style>
```
![](README_files/7.jpg)


## 3.preview 页面
### 3.1. 遮罩层状态转换及日期格式化
![](README_files/8.jpg)

### 3.2.uni-popup弹窗层制作弹出信息内容效果
![](README_files/9.jpg)

### 3.3.评分弹出框uni-rate组件的属性方法
![](README_files/10.jpg)

### 3.4.自定义头部导航栏布局
![](README_files/11.jpg)

### 3.5.获取系统信息getSystemInfo 状态栏高度 和 胶囊按钮高度（***）
```js
let SYSTEM_INFO = uni.getSystemInfoSync();
console.log(SYSTEM_INFO,SYSTEM_INFO.statusBarHeight);
```
![](README_files/12.jpg)

给状态栏的样式加上动态计算的状态栏高度

![](README_files/13.jpg)



接下来就该 考虑怎么让（标题和搜索框 ）和 胶囊按钮的高度 保持一致了

![](README_files/14.jpg)

胶囊高度怎么获取呢？ 

`uni.getMenuButtonBoundingClientRect()` 即可获取

```js
let {top,height,bottom} = uni.getMenuButtonBoundingClientRect();
console.log(uni.getMenuButtonBoundingClientRect());
```
![](README_files/15.jpg)

![](README_files/16.jpg)

计算方式如下：
```js
 let titleBarHeight = ref(height + (top-statusBarHeight.value)*2);
```
![](README_files/17.jpg)
![](README_files/18.jpg)
![](README_files/19.jpg)

### 3.6.抽离公共方法用条件编译以及对抖音小程序适配
```js
const SYSTEM_INFO = uni.getSystemInfoSync();

// 获取状态栏的高度
export const getStatusBarHeight = () => SYSTEM_INFO.statusBarHeight || 15;

// 获取标题栏的高度，保证和胶囊按钮在同一水平线上
export const getTitleBarHeight = () => {
	if (uni.getMenuButtonBoundingClientRect) {
		let {
			top,
			height
		} = uni.getMenuButtonBoundingClientRect();
		return height + (top - getStatusBarHeight()) * 2
	} else {
		return 40;
	}
}

// 状态栏高度 + 标题栏高度
export const getNavBarHeight = () => getStatusBarHeight() + getTitleBarHeight();

// 抖音小程序左边图标的距离
export const getLeftIconLeft = () => {
	// #ifdef MP-TOUTIAO
	let {
		leftIcon: {
			left,
			width
		}
	} = tt.getCustomButtonBoundingClientRect();
	return left + parseInt(width);
	// #endif

	// #ifndef MP-TOUTIAO
	return 0
	// #endif	
}
```

`custom-nav-bar.vue`
```vue
<template>
	<view class="layout">
		<view class="navbar">
			<view class="statusBar" :style="{height:getStatusBarHeight()+'px'}"></view>
			<view class="titleBar" :style="{height:getTitleBarHeight()+'px',marginLeft:getLeftIconLeft()+'px'}">
				<view class="title">标题</view>
				<navigator url="/pages/search/search" class="search">
					<uni-icons class="icon" type="search" color="#888" size="18"></uni-icons>
					<text class="text">搜索</text>
				</navigator>
			</view>
		</view>
		<view class="fill" :style="{height:getNavBarHeight()+'px'}">
		</view>
	</view>
</template>
<script setup>
	import {
		ref
	} from 'vue';
	import {
		getStatusBarHeight,
		getTitleBarHeight,
		getNavBarHeight,
		getLeftIconLeft
	} from "@/utils/system.js"
</script>

<style lang="scss" scoped>
	.layout {
		.navbar {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			z-index: 10;
			background:
				linear-gradient(to bottom, transparent, #fff 400rpx),
				linear-gradient(to right, #beecd8 20%, #F4E2D8);

			.statusBar {}

			.titleBar {
				display: flex;
				align-items: center;
				padding: 0 30rpx;
				// border: 1px solid red;

				.title {
					font-size: 22px;
					font-weight: 700;
					color: $text-font-color-1;
				}

				.search {
					width: 220rpx;
					height: 50rpx;
					border-radius: 60rpx;
					background: rgba(255, 255, 255, 0.4);
					border: 1px solid #fff;
					margin-left: 30rpx;
					color: #999;
					font-size: 28rpx;
					display: flex;
					align-items: center;

					.icon {
						margin-left: 5rpx;
					}

					.text {
						padding-left: 10rpx;
					}
				}
			}
		}

		.fill {}
	}
</style>
```

## 图片下载
### 3.7.savelmageToPhotosAlbum保存壁纸到相册
### 3.8.openSetting调用客户端授权信息以及各种异常处理
### 3.9.try{}catch处理同步请求下载记录异常处理


### 3.10.onShareAppMessage分享好友和onShareTimeline分享到朋友圈


### 3.11.处理popup底部弹窗空缺安全区域以及其他页面优化

![](README_files/20.jpg)

`safe-area`设为`false`，并且手动添加 `<view class="safe-area-inset-bottom"></view>`

```vue
<!-- safe-area 是否适配底部安全区 -->
<uni-popup ref="infoPopup" type="bottom" :safe-area="false">
	<view class="infoPopup">
		<view class="popHeader">
			<view></view>
			<view class="title">壁纸信息</view>
			<view class="close" @click="clickInfoClose">
				<uni-icons type="closeempty" size="18" color="#999"></uni-icons>
			</view>
		</view>
		<scroll-view scroll-y>
			<view class="content">
				<view class="row">
					<view class="label">壁纸ID：</view>
					<text selectable user-select class="value class">{{currentInfo._id}}</text>
				</view>
				<!-- <view class="row">
					<view class="label">分类：</view>
					<text selectable user-select class="value class">明星美女</text>
				</view> -->
				<view class="row">
					<view class="label">发布者：</view>
					<text selectable user-select class="value">{{currentInfo.nickname}}</text>
				</view>
				<view class="row">
					<view class="label">评分：</view>

					<view class="value roteBox">
						<uni-rate readonly touchable :value="currentInfo.score" size="16" />
						<text class="score">{{currentInfo.score}}分</text>
					</view>
				</view>

				<view class="row">
					<view class="label">摘要：</view>
					<text selectable user-select class="value">{{currentInfo.description}}</text>
				</view>
				<view class="row">
					<view class="label">标签：</view>
					<view class="value tabs">
						<view class="tab" v-for="tab in currentInfo.tabs">
							{{tab}}
						</view>
					</view>
				</view>

				<view class="copyright">
					声明：本图片来用户投稿，非商业使用，用于免费学习交流，如侵犯了您的权益，您可以拷贝壁纸ID举报至平台，邮箱513894357@qq.com，管理将删除侵权壁纸，维护您的权益。

				</view>

				<view class="safe-area-inset-bottom"></view>
			</view>
		</scroll-view>
	</view>
</uni-popup>


// 安全区域的高度
.safe-area-inset-bottom{
	height: env(safe-area-inset-bottom);
}

```

![](README_files/21.jpg)
