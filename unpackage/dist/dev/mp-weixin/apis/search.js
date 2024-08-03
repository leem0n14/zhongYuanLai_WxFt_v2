"use strict";
const utils_request = require("../utils/request.js");
const getclanbyplace = (data) => {
  return utils_request.service({
    method: "GET",
    url: "/clan-tree/name-place",
    data
  });
};
exports.getclanbyplace = getclanbyplace;
