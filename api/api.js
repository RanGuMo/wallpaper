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