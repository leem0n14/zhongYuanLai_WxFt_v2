"use strict";const e=require("../../common/vendor.js");require("../../store/index.js");const o=require("../../store/modules/userInf.js"),r={__name:"category",setup(r){const s=o.useUserStore(),t=e.ref("");return e.onMounted((()=>{setTimeout((()=>{t.value="https://www.zhongyuanlai.cn/#/pages/eBook_part/bookLibrary/bookLibrary?UserAccessToken="+s.token,console.log(t.value,999)}),10)})),(e,o)=>({a:t.value})}};wx.createPage(r);
