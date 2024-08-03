"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_search = require("../../apis/search.js");
const apis_clan = require("../../apis/clan.js");
require("../../store/index.js");
const store_modules_userInf = require("../../store/modules/userInf.js");
if (!Array) {
  const _easycom_z_paging2 = common_vendor.resolveComponent("z-paging");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_z_paging2 + _easycom_uni_popup2)();
}
const _easycom_z_paging = () => "../../uni_modules/z-paging/components/z-paging/z-paging.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_z_paging + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "search",
  setup(__props) {
    const useUser = store_modules_userInf.useUserStore();
    const popContant = common_vendor.ref({
      name: "",
      place: "",
      id: 0
    });
    const popup = common_vendor.ref(null);
    const showPup = (item) => {
      popContant.value = item;
      console.log(popContant.value);
      popup.value.open();
    };
    const cancelPop = () => {
      popup.value.close();
    };
    const formInput = common_vendor.ref({
      areaValue: "",
      clanValue: ""
    });
    const searchClanFamily = () => {
      dataList.value = [];
      isShow.value = true;
      paging.value.reload();
      console.log(isShow.value);
    };
    const clanTurn = (id) => {
      console.log(id, useUser.accountInf.account);
      apis_clan.bindFamily({
        account: useUser.accountInf.account,
        treeId: id
      }).then((res) => {
        console.log(res.msg);
        if (res.msg === "ok") {
          useUser.accountInf.treeId = id;
          useUser.accountInf.treeIdChange = true;
          popup.value.close();
          setTimeout(() => {
            common_vendor.index.switchTab({
              url: "../clan/clan"
            });
          }, 500);
          common_vendor.index.showToast({
            icon: "none",
            duration: 1e3,
            title: "绑定成功"
          });
        }
      });
    };
    const virtualList = common_vendor.ref([]);
    const dataList = common_vendor.ref([]);
    const isShow = common_vendor.ref(false);
    const paging = common_vendor.ref(null);
    const virtualListChange = (vList) => {
      virtualList.value = vList;
    };
    const queryList = (pageNo, pageSize) => {
      console.log(pageNo, pageSize);
      if (isShow.value === true) {
        apis_search.getclanbyplace({
          "page": pageNo,
          "size": pageSize,
          "name": formInput.value.clanValue,
          "place": formInput.value.areaValue
        }).then((res) => {
          if (res.data) {
            paging.value.complete(res.data.list);
          }
        }).catch(() => {
          paging.value.complete("没有更多了");
        });
      }
    };
    const scale = common_vendor.ref("");
    const scrollTop = common_vendor.ref(0);
    const scroll = (event) => {
      console.log("执行了页面滚动", event.detail);
      scrollTop.value = event.detail.scrollTop;
      if (scroll.value.backToTop) {
        scroll.value.backToTop.isScroll();
      }
    };
    const inputStyle = common_vendor.computed(() => {
      return {
        width: scrollTop.value > 100 ? "400rpx" : "660rpx",
        height: scrollTop.value > 100 ? "50rpx" : "70rpx",
        margin: scrollTop.value > 100 ? "0 auto 15rpx auto" : "25rpx auto",
        border: "3rpx solid black",
        padding: "0 10rpx",
        transition: "all .3s",
        "font-size": scrollTop.value > 100 ? "25rpx" : "30rpx"
      };
    });
    const buttonStyle = common_vendor.computed(() => {
      return {
        width: scrollTop.value > 100 ? "0rpx" : "550rpx",
        height: scrollTop.value > 100 ? "0rpx" : "80rpx",
        "line-height": scrollTop.value > 100 ? "55rpx" : "80rpx",
        margin: "0 auto 20rpx auto",
        transition: "all .3s"
      };
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(scroll),
        b: common_vendor.s(inputStyle.value),
        c: formInput.value.areaValue,
        d: common_vendor.o(($event) => formInput.value.areaValue = $event.detail.value),
        e: common_vendor.o(scroll),
        f: common_vendor.s(inputStyle.value),
        g: formInput.value.clanValue,
        h: common_vendor.o(($event) => formInput.value.clanValue = $event.detail.value),
        i: common_vendor.o(($event) => searchClanFamily()),
        j: common_vendor.s(buttonStyle.value),
        k: common_vendor.s(scale.value),
        l: common_vendor.f(virtualList.value, (item, index, i0) => {
          return {
            a: item.url,
            b: common_vendor.t(item.name),
            c: common_vendor.t(item.place),
            d: common_vendor.t(item.describe),
            e: `zp-id-${item.zp_index}`,
            f: item.zp_index,
            g: common_vendor.o(($event) => showPup(item), item.zp_index)
          };
        }),
        m: common_vendor.sr(paging, "5aac7367-0", {
          "k": "paging"
        }),
        n: common_vendor.o(scroll),
        o: common_vendor.o(queryList),
        p: common_vendor.o(virtualListChange),
        q: common_vendor.p({
          ["use-virtual-list"]: true,
          ["force-close-inner-list"]: true,
          ["auto-show-back-to-top"]: true
        }),
        r: common_vendor.t(popContant.value.name),
        s: common_vendor.t(popContant.value.place),
        t: common_vendor.o(($event) => cancelPop()),
        v: common_vendor.o(($event) => clanTurn(popContant.value.id)),
        w: common_vendor.sr(popup, "5aac7367-1", {
          "k": "popup"
        }),
        x: common_vendor.p({
          type: "center",
          ["border-radius"]: "10px 10px 0 0"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-5aac7367"], ["__file", "O:/AworkTable/XQWZ_2/zyl_2/pages/index/search.vue"]]);
wx.createPage(MiniProgramPage);
