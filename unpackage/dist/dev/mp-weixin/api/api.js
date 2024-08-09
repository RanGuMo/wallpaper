"use strict";
const utils_request = require("../utils/request.js");
function apiGetBanner() {
  return utils_request.request({
    url: "/homeBanner"
  });
}
function apiGetDayRandom() {
  return utils_request.request({
    url: "/randomWall"
  });
}
function apiGetNotice(data = {}) {
  return utils_request.request({
    url: "/wallNewsList",
    data
  });
}
function apiGetClassify(data = {}) {
  return utils_request.request({
    url: "/classify",
    data
  });
}
function apiGetClassList(data = {}) {
  return utils_request.request({
    url: "/wallList",
    data
  });
}
function apiGetSetupScore(data = {}) {
  return utils_request.request({
    url: "/setupScore",
    data
  });
}
function apiWriteDownload(data = {}) {
  return utils_request.request({
    url: "/downloadWall",
    data
  });
}
function apiDetailWall(data = {}) {
  return utils_request.request({
    url: "/detailWall",
    data
  });
}
exports.apiDetailWall = apiDetailWall;
exports.apiGetBanner = apiGetBanner;
exports.apiGetClassList = apiGetClassList;
exports.apiGetClassify = apiGetClassify;
exports.apiGetDayRandom = apiGetDayRandom;
exports.apiGetNotice = apiGetNotice;
exports.apiGetSetupScore = apiGetSetupScore;
exports.apiWriteDownload = apiWriteDownload;
