import {request} from "@/utils/request.js"

export function apiGetBanner(){
	return request({
		url:"/homeBanner"		
	})	
}

export function apiGetDayRandom(){
	return request({url:"/randomWall"})
}

export function apiGetNotice(data={}){
	return request({
		url:"/wallNewsList",
		data
	})
}

export function apiGetClassify(data={}){
	return request({
		url:"/classify",
		data
	})
}
