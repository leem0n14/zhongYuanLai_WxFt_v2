"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../store/index.js");
const store_modules_userInf = require("../../store/modules/userInf.js");
const _sfc_main = {
  __name: "clan",
  setup(__props) {
    const useUser = store_modules_userInf.useUserStore();
    const webViewSrc = common_vendor.ref("");
    webViewSrc.value = "https://www.zhongyuanlai.cn/#/pages/clanTree_part/clanLibrary/clanLibrary?clanId=" + useUser.accountInf.treeId + "&UserAccessToken=" + useUser.token;
    common_vendor.onShow(
      () => {
        console.log(useUser.accountInf.treeIdChange);
        if (useUser.accountInf.treeIdChange === true) {
          webViewSrc.value = "";
          setTimeout(() => {
            webViewSrc.value = // "http://localhost:5173/#/pages/clanTree_part/clanLibrary/clanLibrary?clanId="+useUser.accountInf.treeId+"&UserAccessToken="+useUser.token
            "https://www.zhongyuanlai.cn/#/pages/clanTree_part/clanLibrary/clanLibrary?clanId=" + useUser.accountInf.treeId + "&UserAccessToken=" + useUser.token;
            console.log(webViewSrc.value, 999);
          }, 100);
          useUser.accountInf.treeIdChange = false;
        }
      }
    );
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: webViewSrc.value
      }, webViewSrc.value ? {
        b: webViewSrc.value
      } : {});
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "O:/AworkTable/XQWZ_2/zyl_2/pages/clan/clan.vue"]]);
wx.createPage(MiniProgramPage);
