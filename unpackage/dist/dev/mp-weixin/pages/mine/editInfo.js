"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../store/index.js");
const apis_user = require("../../apis/user.js");
const store_modules_userInf = require("../../store/modules/userInf.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "editInfo",
  setup(__props) {
    const userAccountInf = common_vendor.ref({});
    userAccountInf.value = store_modules_userInf.useUserStore().accountInf;
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
    const formInput = common_vendor.ref({
      nickName: "",
      signature: "",
      avatarTempPath: ""
    });
    formInput.value.nickName = userAccountInf.value.nickName;
    formInput.value.signature = userAccountInf.value.signature;
    formInput.value.avatarTempPath = userAccountInf.value.avatar;
    const formInputSubmit = () => {
      console.log(formInput.value);
      if (formInput.value.nickName === userAccountInf.value.nickName && formInput.value.signature === userAccountInf.value.signature && formInput.value.avatarTempPath === userAccountInf.value.avatar) {
        common_vendor.index.showToast({
          icon: "none",
          duration: 2e3,
          title: "您未修改任何信息"
        });
        return;
      }
      if (!formInput.value.nickName) {
        common_vendor.index.showToast({
          title: "昵称不能为空",
          icon: "none"
        });
        return;
      }
      const nickNameRegex = /^[\u4e00-\u9fa5a-zA-Z]+$/;
      if (!nickNameRegex.test(formInput.value.nickName)) {
        common_vendor.index.showToast({
          title: "昵称必须为中文、英文",
          icon: "none"
        });
        return;
      }
      apis_user.userAccountInfUpdate({
        id: userAccountInf.value.id,
        avatar: formInput.value.avatarTempPath,
        nickName: formInput.value.nickName
      }).then((res) => {
        console.log(res);
        if (res.msg === "ok") {
          userAccountInf.value.avatar = formInput.value.avatarTempPath;
          userAccountInf.value.nickName = formInput.value.nickName;
          userAccountInf.value.signature = formInput.value.signature;
          common_vendor.index.showToast({
            icon: "none",
            duration: 2e3,
            title: "修改成功"
          });
        }
      });
    };
    const avatarChoose = () => {
      common_vendor.index.chooseImage({
        count: 1,
        sizeType: ["original", "compressed"],
        // 可以指定是原图还是压缩图，默认二者
        mediaType: ["image"],
        sourceType: ["album", "camera"],
        success: function(res) {
          console.log("临时路径", JSON.stringify(res.tempFilePaths[0]));
          common_vendor.index.saveFile({
            tempFilePath: res.tempFilePaths[0],
            success: function(res2) {
              var savedFilePath = res2;
              console.log(savedFilePath.savedFilePath);
              formInput.value.avatarTempPath = savedFilePath.savedFilePath;
            }
          });
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: formInput.value.avatarTempPath,
        b: common_vendor.o(avatarChoose),
        c: common_vendor.p({
          type: "left",
          size: "30",
          color: "black"
        }),
        d: common_vendor.s(bthTurnbackStyle.value),
        e: common_vendor.o(($event) => backTurn()),
        f: formInput.value.nickName,
        g: common_vendor.o(($event) => formInput.value.nickName = $event.detail.value),
        h: formInput.value.signature,
        i: common_vendor.o(($event) => formInput.value.signature = $event.detail.value),
        j: common_vendor.o(($event) => formInputSubmit())
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-4d35b0ba"], ["__file", "O:/AworkTable/XQWZ_2/zyl_2/pages/mine/editInfo.vue"]]);
wx.createPage(MiniProgramPage);
