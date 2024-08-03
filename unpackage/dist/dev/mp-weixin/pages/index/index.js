"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_u_tabs2 = common_vendor.resolveComponent("u-tabs");
  (_easycom_uni_icons2 + _easycom_u_tabs2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_u_tabs = () => "../../uni_modules/uview-plus/components/u-tabs/u-tabs.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_u_tabs + indexRecommend + indexHeritage + indexRhyme + indexFolksong + indexFolkways + indexReading + indexStory)();
}
const indexRecommend = () => "./indexComponents/indexRecommend.js";
const indexHeritage = () => "./indexComponents/indexHeritage.js";
const indexRhyme = () => "./indexComponents/indexRhyme.js";
const indexFolksong = () => "./indexComponents/indexFolksong.js";
const indexFolkways = () => "./indexComponents/indexFolkways.js";
const indexReading = () => "./indexComponents/indexReading.js";
const indexStory = () => "./indexComponents/indexStory.js";
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const searchGet = () => {
      common_vendor.index.navigateTo({
        url: "/pages/index/search",
        animationType: "pop-in",
        animationDuration: 200
      });
    };
    const list = common_vendor.ref([{
      name: "推荐",
      Component: "indexRecommend"
    }, {
      name: "非遗",
      Component: "indexHeritage"
    }, {
      name: "童谣",
      Component: "indexRhyme"
    }, {
      name: "山歌",
      Component: "indexFolksong"
    }, {
      name: "民俗",
      Component: "indexFolkways"
    }, {
      name: "儿童阅读",
      Component: "indexReading"
    }, {
      name: "故事",
      Component: "indexStory"
    }]);
    const currentComponent = common_vendor.ref("indexRecommend");
    const componentChange = (item) => {
      console.log(item);
      currentComponent.value = item.Component;
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.p({
          type: "search",
          size: "25",
          color: "#939393"
        }),
        b: common_vendor.o(searchGet),
        c: common_vendor.o(componentChange),
        d: common_vendor.p({
          list: list.value,
          activeStyle: {
            color: "#343434",
            fontWeight: "550",
            transform: "scale(1.1)",
            transition: "all 0.1s"
          },
          inactiveStyle: {
            color: "#939393",
            fontWeight: "500",
            transition: "all 0.1s"
          },
          lineWidth: "20",
          lineHeight: "5",
          lineColor: "#ca7b1d",
          itemStyle: "padding-left: 13rpx; padding-right: 13rpx; height: 80rpx;",
          ["is-scroll"]: false
        }),
        e: currentComponent.value === "indexRecommend"
      }, currentComponent.value === "indexRecommend" ? {} : {}, {
        f: currentComponent.value === "indexHeritage"
      }, currentComponent.value === "indexHeritage" ? {} : {}, {
        g: currentComponent.value === "indexRhyme"
      }, currentComponent.value === "indexRhyme" ? {} : {}, {
        h: currentComponent.value === "indexFolksong"
      }, currentComponent.value === "indexFolksong" ? {} : {}, {
        i: currentComponent.value === "indexFolkways"
      }, currentComponent.value === "indexFolkways" ? {} : {}, {
        j: currentComponent.value === "indexReading"
      }, currentComponent.value === "indexReading" ? {} : {}, {
        k: currentComponent.value === "indexStory"
      }, currentComponent.value === "indexStory" ? {} : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "O:/AworkTable/XQWZ_2/zyl_2/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
