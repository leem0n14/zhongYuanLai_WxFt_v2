"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../store/index.js");
const store_modules_userInf = require("../../store/modules/userInf.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_u_tabs2 = common_vendor.resolveComponent("u-tabs");
  (_easycom_uni_icons2 + _easycom_u_tabs2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_u_tabs = () => "../../uni_modules/uview-plus/components/u-tabs/u-tabs.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_u_tabs)();
}
const _sfc_main = {
  __name: "personalHomepage",
  setup(__props) {
    const userAccountInf = store_modules_userInf.useUserStore().accountInf;
    const menuButtonInfo = common_vendor.index.getMenuButtonBoundingClientRect();
    const bthTurnbackStyle = common_vendor.ref("");
    bthTurnbackStyle.value = "top:" + menuButtonInfo.top + "px";
    const backTurn = () => {
      common_vendor.index.navigateBack({
        delta: 1,
        animationType: "pop-in",
        animationDuration: 200
      });
    };
    const swiperTabList = common_vendor.reactive([{
      name: "视频"
    }, {
      name: "阅读"
    }]);
    const currentComponent = common_vendor.ref("视频");
    const choose = (e) => {
      console.log(e);
      currentComponent.value = e.name;
    };
    const editInfoGet = () => {
      console.log(11);
      common_vendor.index.navigateTo({
        url: "/pages/mine/editInfo",
        animationType: "pop-in",
        animationDuration: 200
      });
    };
    const vedioTurn = () => {
      console.log("123");
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(userAccountInf).avatar,
        b: common_vendor.p({
          type: "left",
          size: "30",
          color: "black"
        }),
        c: common_vendor.s(bthTurnbackStyle.value),
        d: common_vendor.o(($event) => backTurn()),
        e: common_vendor.unref(userAccountInf).avatar,
        f: common_vendor.t(common_vendor.unref(userAccountInf).nickName),
        g: common_vendor.o(($event) => editInfoGet()),
        h: common_vendor.t(common_vendor.unref(userAccountInf).fans),
        i: common_vendor.t(common_vendor.unref(userAccountInf).follows),
        j: common_vendor.t(common_vendor.unref(userAccountInf).signature),
        k: common_vendor.p({
          type: "compose",
          size: "25",
          color: "white"
        }),
        l: common_vendor.o(($event) => editInfoGet()),
        m: common_vendor.o(choose),
        n: common_vendor.p({
          list: swiperTabList,
          activeStyle: {
            color: "#343434",
            fontWeight: "550",
            transform: "scale(1.3)",
            transition: "all 0.3s"
          },
          inactiveStyle: {
            color: "#939393",
            fontWeight: "500",
            transition: "all 0.3s"
          },
          lineWidth: "25",
          lineHeight: "5",
          lineColor: "#ca7b1d",
          itemStyle: "padding-left: 23rpx; padding-right: 23rpx; height: 80rpx; width:50%"
        }),
        o: currentComponent.value === "视频"
      }, currentComponent.value === "视频" ? {
        p: common_vendor.f(9, (item, index, i0) => {
          return {
            a: "5de5bced-3-" + i0
          };
        }),
        q: common_vendor.p({
          type: "heart",
          size: "20",
          color: "white"
        }),
        r: common_vendor.o(($event) => vedioTurn())
      } : {}, {
        s: currentComponent.value === "阅读"
      }, currentComponent.value === "阅读" ? {
        t: common_vendor.f(8, (item, index, i0) => {
          return {};
        })
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5de5bced"], ["__file", "O:/AworkTable/XQWZ_2/zyl_2/pages/mine/personalHomepage.vue"]]);
wx.createPage(MiniProgramPage);
