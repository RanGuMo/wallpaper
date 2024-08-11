"use strict";
const common_vendor = require("../../common/vendor.js");
const api_api = require("../../api/api.js");
if (!Array) {
  const _easycom_uni_search_bar2 = common_vendor.resolveComponent("uni-search-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uv_empty2 = common_vendor.resolveComponent("uv-empty");
  const _easycom_uni_load_more2 = common_vendor.resolveComponent("uni-load-more");
  (_easycom_uni_search_bar2 + _easycom_uni_icons2 + _easycom_uv_empty2 + _easycom_uni_load_more2)();
}
const _easycom_uni_search_bar = () => "../../uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uv_empty = () => "../../uni_modules/uv-empty/components/uv-empty/uv-empty.js";
const _easycom_uni_load_more = () => "../../uni_modules/uni-load-more/components/uni-load-more/uni-load-more.js";
if (!Math) {
  (_easycom_uni_search_bar + _easycom_uni_icons + _easycom_uv_empty + _easycom_uni_load_more)();
}
const _sfc_main = {
  __name: "search",
  setup(__props) {
    const queryParams = common_vendor.ref({
      pageNum: 1,
      pageSize: 12,
      keyword: ""
    });
    const historySearch = common_vendor.ref(common_vendor.index.getStorageSync("historySearch") || []);
    const recommendList = common_vendor.ref(["美女", "帅哥", "宠物", "卡通"]);
    const noData = common_vendor.ref(false);
    const noSearch = common_vendor.ref(false);
    const classList = common_vendor.ref([]);
    const onSearch = () => {
      common_vendor.index.showLoading();
      historySearch.value = [.../* @__PURE__ */ new Set([queryParams.value.keyword, ...historySearch.value])].slice(0, 10);
      common_vendor.index.setStorageSync("historySearch", historySearch.value);
      initParams(queryParams.value.keyword);
      searchData();
      console.log(queryParams.value.keyword);
    };
    const onClear = () => {
      initParams();
    };
    const clickTab = (value) => {
      initParams(value);
      onSearch();
    };
    const removeHistory = () => {
      common_vendor.index.showModal({
        title: "是否清空历史搜索？",
        success: (res) => {
          if (res.confirm) {
            common_vendor.index.removeStorageSync("historySearch");
            historySearch.value = [];
          }
        }
      });
    };
    const searchData = async () => {
      try {
        let res = await api_api.apiSearchData(queryParams.value);
        classList.value = [...classList.value, ...res.data];
        common_vendor.index.setStorageSync("storageClassList", classList.value);
        if (queryParams.value.pageSize > res.data.length)
          noData.value = true;
        if (res.data.length == 0 && classList.value.length == 0)
          noSearch.value = true;
        console.log(res);
      } finally {
        common_vendor.index.hideLoading();
      }
    };
    const initParams = (value = "") => {
      classList.value = [];
      noData.value = false;
      noSearch.value = false;
      queryParams.value = {
        pageNum: 1,
        pageSize: 12,
        keyword: value || ""
      };
    };
    common_vendor.onReachBottom(() => {
      if (noData.value)
        return;
      queryParams.value.pageNum++;
      searchData();
    });
    common_vendor.onUnload(() => {
      common_vendor.index.removeStorageSync("storageClassList", classList.value);
    });
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(onSearch),
        b: common_vendor.o(onClear),
        c: common_vendor.o(onClear),
        d: common_vendor.o(($event) => queryParams.value.keyword = $event),
        e: common_vendor.p({
          focus: true,
          placeholder: "搜索",
          modelValue: queryParams.value.keyword
        }),
        f: !classList.value.length || noSearch.value
      }, !classList.value.length || noSearch.value ? common_vendor.e({
        g: historySearch.value.length
      }, historySearch.value.length ? {
        h: common_vendor.p({
          type: "trash",
          size: "25"
        }),
        i: common_vendor.o(removeHistory),
        j: common_vendor.f(historySearch.value, (tab, k0, i0) => {
          return {
            a: common_vendor.t(tab),
            b: tab,
            c: common_vendor.o(($event) => clickTab(tab), tab)
          };
        })
      } : {}, {
        k: common_vendor.f(recommendList.value, (tab, k0, i0) => {
          return {
            a: common_vendor.t(tab),
            b: tab,
            c: common_vendor.o(($event) => clickTab(tab), tab)
          };
        })
      }) : {}, {
        l: noSearch.value
      }, noSearch.value ? {
        m: common_vendor.p({
          mode: "search",
          icon: "http://cdn.uviewui.com/uview/empty/search.png"
        })
      } : common_vendor.e({
        n: common_vendor.f(classList.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: `/pages/preview/preview?id=${item._id}`,
            c: item._id
          };
        }),
        o: noData.value || classList.value.length
      }, noData.value || classList.value.length ? {
        p: common_vendor.p({
          status: noData.value ? "noMore" : "loading"
        })
      } : {}));
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-c10c040c"], ["__file", "C:/Users/86182/Documents/HBuilderProjects/wallpaper/pages/search/search.vue"]]);
wx.createPage(MiniProgramPage);
