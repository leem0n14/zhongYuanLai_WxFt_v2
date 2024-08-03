"use strict";
const common_vendor = require("../../../common/vendor.js");
const _sfc_main = {
  __name: "indexRecommend",
  setup(__props) {
    const scrollImagePath = [
      "http://files.zhongyuanlai.cn/dir/20240721123316976ce2f7d76-d2da-44bf-b577-4689347d045e.png",
      "http://files.zhongyuanlai.cn/dir/202407211233264016364e7be-c4cb-4501-86fa-82636545a644.png",
      // 'http://files.zhongyuanlai.cn/dir/202407211233421565a808a1e-776a-4aad-9420-3b380acf50de.png',
      // 'http://files.zhongyuanlai.cn/dir/20240721123316976ce2f7d76-d2da-44bf-b577-4689347d045e.png',
      // 'http://files.zhongyuanlai.cn/dir/202407211233264016364e7be-c4cb-4501-86fa-82636545a644.png',
      // 'http://files.zhongyuanlai.cn/dir/202407211233421565a808a1e-776a-4aad-9420-3b380acf50de.png',
      "http://static.zhongyuanlai.cn/dir/20240801012701939206840a0-a00a-4557-8a6b-a6dd6c164768.jpg",
      "http://static.zhongyuanlai.cn/dir/20240801012616797e7e4635c-88cb-414f-8f7d-4bcaca018572.jpg"
    ];
    const bottomImagePath = [
      "http://files.zhongyuanlai.cn/dir/20240721123120605f69a30dd-b8c8-4a94-8e97-cc78dfac3326.png",
      "http://files.zhongyuanlai.cn/dir/202407211232248896efc0c09-9ef5-439d-84f1-944a84457cf8.png",
      "http://static.zhongyuanlai.cn/dir/20240801013114429baec2af3-fb16-4e19-8837-999265788a56.png",
      "http://files.zhongyuanlai.cn/dir/20240721123238178ea6cc83e-5b0f-495b-b903-08c9d74f571a.png",
      "http://files.zhongyuanlai.cn/dir/202407211232488498cd678c4-5d5a-4eda-a056-09354ef2c8a4.png",
      "http://files.zhongyuanlai.cn/dir/20240721123300022274dac4c-8bfe-42e3-b896-18b4e39a2a14.png"
    ];
    const a = () => {
      common_vendor.index.chooseMedia({
        count: 1,
        success(res) {
          console.log(res);
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(3, (item, k0, i0) => {
          return {};
        }),
        b: common_vendor.o(($event) => a()),
        c: common_vendor.f(scrollImagePath, (item, k0, i0) => {
          return {
            a: item
          };
        }),
        d: common_vendor.f(bottomImagePath, (item, k0, i0) => {
          return {
            a: item
          };
        })
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-94252a69"], ["__file", "O:/AworkTable/XQWZ_2/zyl_2/pages/index/indexComponents/indexRecommend.vue"]]);
wx.createComponent(Component);
