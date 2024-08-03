"use strict";
const common_vendor = require("../../common/vendor.js");
require("../../store/index.js");
const store_modules_userInf = require("../../store/modules/userInf.js");
const _sfc_main = {
  __name: "category",
  setup(__props) {
    const useUser = store_modules_userInf.useUserStore();
    const webViewSrc = common_vendor.ref("");
    common_vendor.onMounted(
      () => {
        setTimeout(() => {
          webViewSrc.value = // "http://localhost:5173/#/pages/eBook_part/bookLibrary/bookLibrary?UserAccessToken="+useUser.token
          "https://www.zhongyuanlai.cn/#/pages/eBook_part/bookLibrary/bookLibrary?UserAccessToken=" + useUser.token;
          console.log(webViewSrc.value, 999);
        }, 10);
      }
    );
    return (_ctx, _cache) => {
      return {
        a: webViewSrc.value
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "O:/AworkTable/XQWZ_2/zyl_2/pages/category/category.vue"]]);
wx.createPage(MiniProgramPage);
