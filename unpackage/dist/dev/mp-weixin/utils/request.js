"use strict";
const common_vendor = require("../common/vendor.js");
const config_config = require("../config/config.js");
require("../store/index.js");
const store_modules_userInf = require("../store/modules/userInf.js");
function service(options = {}) {
  const useUser = store_modules_userInf.useUserStore();
  options.method = options.method;
  options.url = config_config.baseUrl + options.url;
  options.header = {
    "content-type": "application/x-www-form-urlencoded",
    Authorization: useUser.token
  };
  options.data = options.data;
  return new Promise((resolve, reject) => {
    common_vendor.index.showLoading({
      title: "加载中"
    });
    options.success = (res) => {
      common_vendor.index.hideLoading();
      if (res.data.code == 200) {
        resolve(res.data);
      } else if (res.data.code == 500) {
        common_vendor.index.showToast({
          icon: "none",
          duration: 2e3,
          title: "数据请求失败"
        });
      } else if (res.data.code == 403) {
        common_vendor.index.showToast({
          icon: "eye-slash",
          duration: 2e3,
          title: "权限不足"
        });
      } else if (res.data.code == 401) {
        common_vendor.index.showToast({
          icon: "eye-slash",
          duration: 2e3,
          title: "登录过期"
        });
      } else {
        resolve(res.data);
      }
    };
    options.fail = (err) => {
      common_vendor.index.hideLoading();
      common_vendor.index.showToast({
        icon: "none",
        duration: 2e3,
        title: "网络请求失败"
      });
      reject(err);
    };
    common_vendor.index.request(options);
  });
}
exports.service = service;
