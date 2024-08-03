"use strict";
const common_vendor = require("../../common/vendor.js");
const apis_user = require("../../apis/user.js");
const useUserStore = common_vendor.defineStore("userInf", () => {
  const token = common_vendor.ref("");
  const refreshToken = common_vendor.ref("");
  const accountInf = common_vendor.ref({
    follows: 0,
    fans: 0,
    treeIdChange: false,
    signature: "留下您的个性签名吧！"
  });
  const accountInfSet = ({ avatar, nickname, address, gender, treeId, account, id }) => {
    accountInf.value.avatar = avatar;
    accountInf.value.nickName = nickname;
    accountInf.value.address = address;
    accountInf.value.gender = gender;
    accountInf.value.treeId = treeId;
    accountInf.value.account = account;
    accountInf.value.id = id;
  };
  const wxUserLogin = () => {
    common_vendor.wx$1.login({
      success: (res) => {
        console.log(res);
        if (res.errMsg === "login:ok") {
          console.log(res.code);
          const data = {
            code: res.code
          };
          apis_user.WxLogin(data).then((res2) => {
            console.log(res2);
            token.value = res2.data.accessToken;
            console.log(token.value);
            refreshToken.value = res2.data.refreshToken;
            accountInfSet(res2.data);
            console.log(accountInf.value);
          });
        }
      },
      fail(err) {
        console.log(err);
      }
    });
  };
  return {
    token,
    refreshToken,
    wxUserLogin,
    accountInf,
    accountInfSet
  };
}, {
  // 重要：模块必须开启持久化，才会持久化！！！
  // 注意：默认持久化，只在H5端有效，因为默认使用的是localStorage，小程序端不能使用这个API，所以需要重写存取方法，转调给UniApp的持久化方法
  // persist: true,
  persist: {
    // 默认值，就是使用localStorage
    // storage: localStorage
    // 重写存取方法，转调给UniApp
    storage: {
      getItem(key) {
        return common_vendor.index.getStorageSync(key);
      },
      setItem(key, val) {
        common_vendor.index.setStorageSync(key, val);
      }
    }
  }
});
exports.useUserStore = useUserStore;
