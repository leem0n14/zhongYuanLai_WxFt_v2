"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "information",
  setup(__props) {
    const changeVideo = (e) => {
      console.log(e.detail);
    };
    const videoList = common_vendor.reactive([{
      videoUrl: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4",
      title: "uniapp介绍"
    }, {
      videoUrl: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4",
      title: "uniapp介绍"
    }, {
      videoUrl: "https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4",
      title: "uniapp介绍"
    }]);
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(videoList, (item, index, i0) => {
          return {
            a: item.videoUrl
          };
        }),
        b: common_vendor.o(changeVideo)
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "O:/AworkTable/XQWZ_2/zyl_2/pages/information/information.vue"]]);
wx.createPage(MiniProgramPage);
