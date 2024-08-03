"use strict";const e=require("../utils/request.js");exports.bindFamily=t=>e.service({url:"/wechat/blind",method:"PUT",data:t}),exports.getClanMsg=t=>e.service({url:"/clan-tree/"+t,method:"GET"});
