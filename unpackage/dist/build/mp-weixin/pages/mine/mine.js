"use strict";const e=require("../../common/vendor.js"),t=require("../../common/assets.js");require("../../store/index.js");const o=require("../../apis/clan.js"),n=require("../../store/modules/userInf.js");if(!Array){(e.resolveComponent("uni-icons")+e.resolveComponent("uni-popup"))()}Math||((()=>"../../uni_modules/uni-icons/components/uni-icons/uni-icons.js")+(()=>"../../uni_modules/uni-popup/components/uni-popup/uni-popup.js"))();const s={__name:"mine",setup(s){const i=n.useUserStore().accountInf,a=e.ref(null),l=()=>{a.value.open()},r=e.ref("");e.onShow((()=>{0!==i.treeId&&o.getClanMsg(i.treeId).then((e=>{console.log(e),r.value=e.data}))}));const u=[{text:"作品",style:"videocam"},{text:"点赞",style:"hand-up"},{text:"收藏",style:"star"}],p=[{text:"存储",style:"download-filled"},{text:"会员中心",style:"vip-filled"},{text:"订阅中心",style:"notification-filled"},{text:"设置",style:"settings-filled"},{text:"客服",style:"headphones"},{text:"帮助反馈",style:"help-filled"}],c=()=>{e.index.navigateTo({url:"/pages/index/search",animationType:"pop-in",animationDuration:200})};return(n,s)=>e.e({a:e.t(e.unref(i).nickName),b:e.t(e.unref(i).id),c:e.t(e.unref(i).fans),d:e.t(e.unref(i).follows),e:e.o((t=>(console.log(11),void e.index.navigateTo({url:"/pages/mine/personalHomepage",animationType:"pop-in",animationDuration:200})))),f:e.f(u,((t,o,n)=>({a:"22354c69-0-"+n,b:e.p({type:t.style,size:"50",color:"#FFD447"}),c:e.t(t.text)}))),g:""!==r.value},""!==r.value?{h:r.value.url,i:e.t(r.value.name),j:e.t(r.value.describe),k:e.p({type:"right",size:"15",color:"gray"}),l:e.o(l)}:{m:e.p({type:"right",size:"15",color:"gray"}),n:e.o(c)},{o:e.p({type:"gift-filled",size:"60",color:"#FF4F4F"}),p:t._imports_0,q:e.f(p,((t,o,n)=>({a:"22354c69-4-"+n,b:e.p({type:t.style,size:"40"}),c:e.t(t.text)}))),r:e.t(r.value.name),s:e.t(r.value.describe),t:e.o((e=>{a.value.close()})),v:e.o((t=>{o.bindFamily({account:i.account,treeId:0}).then((t=>{"ok"===t.msg&&(i.treeId=0,e.index.showToast({icon:"none",duration:1e3,title:"解除绑定成功"}),a.value.close(),i.treeIdChange=!0,r.value="")}))})),w:e.sr(a,"22354c69-5",{k:"popup"}),x:e.p({type:"center","border-radius":"10px 10px 0 0"})})}},i=e._export_sfc(s,[["__scopeId","data-v-22354c69"]]);wx.createPage(i);
