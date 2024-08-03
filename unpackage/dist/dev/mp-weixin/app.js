"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const store_index = require("./store/index.js");
const store_modules_userInf = require("./store/modules/userInf.js");
const uni_modules_uviewPlus_index = require("./uni_modules/uview-plus/index.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/index/search.js";
  "./pages/information/information.js";
  "./pages/clan/clan.js";
  "./pages/category/category.js";
  "./pages/mine/mine.js";
  "./pages/mine/personalHomepage.js";
  "./pages/mine/editInfo.js";
}
const _sfc_main = {
  onLaunch() {
    console.log(store_modules_userInf.useUserStore());
    const useUser = store_modules_userInf.useUserStore();
    console.log("页面挂载完成");
    useUser.wxUserLogin();
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "O:/AworkTable/XQWZ_2/zyl_2/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.use(store_index.pinia);
  app.use(uni_modules_uviewPlus_index.uviewPlus);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
