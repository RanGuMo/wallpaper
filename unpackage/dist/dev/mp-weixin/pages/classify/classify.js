"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  _easycom_theme_item2();
}
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  _easycom_theme_item();
}
const _sfc_main = {
  __name: "classify",
  setup(__props) {
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(15, (item, k0, i0) => {
          return {
            a: "6bcfa975-0-" + i0
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-6bcfa975"], ["__file", "C:/Users/86182/Documents/HBuilderProjects/wallpaper/pages/classify/classify.vue"]]);
wx.createPage(MiniProgramPage);
