"use strict";
const utils_request = require("../utils/request.js");
const bindFamily = (data) => {
  return utils_request.service({
    url: "/wechat/blind",
    method: "PUT",
    data
  });
};
const getClanMsg = (id) => {
  return utils_request.service({
    url: "/clan-tree/" + id,
    method: "GET"
  });
};
exports.bindFamily = bindFamily;
exports.getClanMsg = getClanMsg;
