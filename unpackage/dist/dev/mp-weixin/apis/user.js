"use strict";
const utils_request = require("../utils/request.js");
const userAccountInfUpdate = (data) => {
  return utils_request.service({
    method: "PUT",
    url: "/user",
    data
  });
};
const WxLogin = (code) => {
  return utils_request.service({
    method: "POST",
    url: `/wechat/login`,
    data: code
  });
};
exports.WxLogin = WxLogin;
exports.userAccountInfUpdate = userAccountInfUpdate;
