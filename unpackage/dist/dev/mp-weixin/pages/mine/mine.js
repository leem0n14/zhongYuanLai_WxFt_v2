"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../store/index.js");
const apis_clan = require("../../apis/clan.js");
const store_modules_userInf = require("../../store/modules/userInf.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  (_easycom_uni_icons2 + _easycom_uni_popup2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_popup)();
}
const _sfc_main = {
  __name: "mine",
  setup(__props) {
    const userAccountInf = store_modules_userInf.useUserStore().accountInf;
    const popup = common_vendor.ref(null);
    const upPopShow = () => {
      popup.value.open();
    };
    const popCancel = () => {
      popup.value.close();
    };
    const unBind = () => {
      apis_clan.bindFamily({
        account: userAccountInf.account,
        treeId: 0
      }).then((res) => {
        if (res.msg === "ok") {
          userAccountInf.treeId = 0;
          popup.value.close();
          userAccountInf.treeIdChange = true;
          userClanMsg.value = "";
          common_vendor.index.showToast({
            icon: "none",
            duration: 1e3,
            title: "解除绑定成功"
          });
        }
      });
    };
    const userClanMsg = common_vendor.ref("");
    const userClanMsgGet = () => {
      if (userAccountInf.treeId !== 0) {
        apis_clan.getClanMsg(userAccountInf.treeId).then((res) => {
          console.log(res);
          userClanMsg.value = res.data;
          console.log(userAccountInf.avatar);
        });
      }
    };
    common_vendor.onShow(() => {
      userClanMsgGet();
    });
    const vinfo = [{
      text: "作品",
      style: "videocam"
    }, {
      text: "点赞",
      style: "hand-up"
    }, {
      text: "收藏",
      style: "star"
    }];
    const onFun = [{
      text: "存储",
      style: "download-filled"
    }, {
      text: "会员中心",
      style: "vip-filled"
    }, {
      text: "订阅中心",
      style: "notification-filled"
    }, {
      text: "设置",
      style: "settings-filled"
    }, {
      text: "客服",
      style: "headphones"
    }, {
      text: "帮助反馈",
      style: "help-filled"
    }];
    const personalHomeoageGet = () => {
      console.log(11);
      common_vendor.index.navigateTo({
        url: "/pages/mine/personalHomepage",
        animationType: "pop-in",
        animationDuration: 200
      });
    };
    const searchTurn = () => {
      common_vendor.index.navigateTo({
        url: "/pages/index/search",
        animationType: "pop-in",
        animationDuration: 200
      });
    };
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.unref(userAccountInf).avatar,
        b: common_vendor.t(common_vendor.unref(userAccountInf).nickName),
        c: common_vendor.t(common_vendor.unref(userAccountInf).id),
        d: common_vendor.t(common_vendor.unref(userAccountInf).fans),
        e: common_vendor.t(common_vendor.unref(userAccountInf).follows),
        f: common_vendor.o(($event) => personalHomeoageGet()),
        g: common_vendor.f(vinfo, (item, k0, i0) => {
          return {
            a: "7c2ebfa5-0-" + i0,
            b: common_vendor.p({
              type: item.style,
              size: "50",
              color: "#FFD447"
            }),
            c: common_vendor.t(item.text)
          };
        }),
        h: userClanMsg.value
      }, userClanMsg.value ? {
        i: userClanMsg.value.url,
        j: common_vendor.t(userClanMsg.value.name),
        k: common_vendor.t(userClanMsg.value.describe),
        l: common_vendor.p({
          type: "right",
          size: "15",
          color: "gray"
        }),
        m: common_vendor.o(upPopShow)
      } : {
        n: common_vendor.p({
          type: "right",
          size: "15",
          color: "gray"
        }),
        o: common_vendor.o(searchTurn)
      }, {
        p: common_vendor.p({
          type: "gift-filled",
          size: "60",
          color: "#FF4F4F"
        }),
        q: common_vendor.f(onFun, (item, k0, i0) => {
          return {
            a: "7c2ebfa5-4-" + i0,
            b: common_vendor.p({
              type: item.style,
              size: "40"
            }),
            c: common_vendor.t(item.text)
          };
        }),
        r: common_vendor.t(userClanMsg.value.name),
        s: common_vendor.t(userClanMsg.value.describe),
        t: common_vendor.o(($event) => popCancel()),
        v: common_vendor.o(($event) => unBind()),
        w: common_vendor.sr(popup, "7c2ebfa5-5", {
          "k": "popup"
        }),
        x: common_vendor.p({
          type: "center",
          ["border-radius"]: "10px 10px 0 0"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-7c2ebfa5"], ["__file", "O:/AworkTable/XQWZ_2/zyl_2/pages/mine/mine.vue"]]);
wx.createPage(MiniProgramPage);
