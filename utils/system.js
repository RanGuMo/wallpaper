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