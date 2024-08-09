// 传入时间戳，与当前时间做比较，
// 1分钟内显示1分钟，
// 1小时内显示多少分钟，
// 1天内显示多少小时，
// 1月内显示多少天，
// 3月内显示多少月，
// 超过3个月返回null
export function compareTimestamp(timestamp) {
	const currentTime = new Date().getTime();
	const timeDiff = currentTime - timestamp;

	if (timeDiff < 60000) {
		return '1分钟内';
	} else if (timeDiff < 3600000) {
		return Math.floor(timeDiff / 60000) + '分钟';
	} else if (timeDiff < 86400000) {
		return Math.floor(timeDiff / 3600000) + '小时';
	} else if (timeDiff < 2592000000) {
		return Math.floor(timeDiff / 86400000) + '天';
	} else if (timeDiff < 7776000000) {
		return Math.floor(timeDiff / 2592000000) + '月';
	} else {
		return null;
	}
}

export function getTimeDiffDescription(timestamp) {
	const now = Date.now();
	const diff = now - timestamp;

	// 转换为秒
	const diffSeconds = Math.floor(diff / 1000);

	if (diffSeconds < 60) {
		return '1分钟内';
	} else if (diffSeconds < 3600) {
		const diffMinutes = Math.floor(diffSeconds / 60);
		return `${diffMinutes}分钟前`;
	} else if (diffSeconds < 86400) {
		const diffHours = Math.floor(diffSeconds / 3600);
		return `${diffHours}小时前`;
	} else if (diffSeconds < 2592000) {
		const diffDays = Math.floor(diffSeconds / 86400);
		return `${diffDays}天前`;
	} else if (diffSeconds < 7776000) {
		const diffMonths = Math.floor(diffSeconds / 2592000);
		return `${diffMonths}个月前`;
	} else {
		return null;
	}
}


export function gotoHome() {
	uni.showModal({
		title: "提示",
		content: "页面有误将返回首页",
		showCancel: false,
		success: (res) => {
			if (res.confirm) {
				uni.reLaunch({
					url: "/pages/index/index"
				})
			}
		}
	})
}