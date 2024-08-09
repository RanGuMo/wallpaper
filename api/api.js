import {
	request
} from "@/utils/request.js"

export function apiGetBanner() {
	return request({
		url: "/homeBanner"
	})
}

export function apiGetDayRandom() {
	return request({
		url: "/randomWall"
	})
}

export function apiGetNotice(data = {}) {
	return request({
		url: "/wallNewsList",
		data
	})
}

export function apiGetClassify(data = {}) {
	return request({
		url: "/classify",
		data
	})
}

export function apiGetClassList(data = {}) {
	return request({
		url: "/wallList",
		data
	})
}

// 评分接口
export function apiGetSetupScore(data = {}) {
	return request({
		url: "/setupScore",
		data
	})
}

// 下载接口，这个接口的作用是，5秒钟内只能下载一张图片
export function apiWriteDownload(data = {}) {
	return request({
		url: "/downloadWall",
		data
	})
}

// 查看单张壁纸详情
export function apiDetailWall(data = {}) {
	return request({
		url: "/detailWall",
		data
	})
}