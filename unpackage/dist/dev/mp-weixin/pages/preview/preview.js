"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
if (!Array) {
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  (_easycom_uni_dateformat2 + _easycom_uni_icons2)();
}
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  (_easycom_uni_dateformat + _easycom_uni_icons)();
}
const _sfc_main = {
  __name: "preview",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(5, (item, index, i0) => {
          return {
            a: index
          };
        }),
        b: common_assets._imports_0$2,
        c: common_vendor.p({
          date: /* @__PURE__ */ new Date(),
          format: "MM月dd日"
        }),
        d: common_vendor.p({
          type: "info",
          size: "28"
        }),
        e: common_vendor.p({
          type: "star",
          size: "28"
        }),
        f: common_vendor.p({
          type: "download",
          size: "23"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-2dad6c07"], ["__file", "C:/Users/86182/Documents/HBuilderProjects/wallpaper/pages/preview/preview.vue"]]);
wx.createPage(MiniProgramPage);
