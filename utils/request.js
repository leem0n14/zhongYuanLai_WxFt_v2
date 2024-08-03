// const baseUrl = 'https://www.zhongyuanlai.cn/api'
import baseUrl from '@/config/config.js'
import { useUserStore } from '../store';

function service(options = {}) {
	 const useUser=useUserStore()
	//请求方式
	options.method = options.method;
	//请求地址
	options.url = baseUrl + options.url;
	// 请求头
	options.header = {
		'content-type': 'application/x-www-form-urlencoded',
		 Authorization: useUser.token
	}
	options.data = options.data;
	return new Promise((resolve, reject) => {
		uni.showLoading({
			title: '加载中'
		});
		options.success = (res) => {
			uni.hideLoading();
			if (res.data.code == 200) {
				resolve(res.data);
			} else if (res.data.code == 500) {
				uni.showToast({
					icon: 'none',
					duration: 2000,
					title: '数据请求失败'
				});
			} else if (res.data.code == 403) {
				uni.showToast({
					icon: 'eye-slash',
					duration: 2000,
					title: '权限不足'
				});
			} else if (res.data.code == 401) {
				uni.showToast({
					icon: 'eye-slash',
					duration: 2000,
					title: '登录过期'
				});
				// 做无感刷新
				// setTimeout(function() {
				// 	uni.switchTab({
				// 		url: '../index/index'
				// 	})
				// }, 1000);

			} else {
				resolve(res.data);
			}
		};

		options.fail = (err) => {
			uni.hideLoading();
			uni.showToast({
				icon: 'none',
				duration: 2000,
				title: '网络请求失败'
			});
			reject(err);
		};
		uni.request(options);
	});
}

export default service;