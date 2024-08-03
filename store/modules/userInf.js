// 用户信息仓库
import {
	defineStore
} from 'pinia'
import {
	computed,
	ref
} from 'vue'
import {
	WxLogin
} from '@/apis/user.js'
export const useUserStore = defineStore('userInf', () => {
	const token = ref('');
	const refreshToken = ref('');
    const accountInf=ref({
			follows:0,
			fans:0,
			treeIdChange:false,
			signature:'留下您的个性签名吧！',
		});
		const accountInfSet=({avatar,nickname,address,gender,treeId,account,id})=>{
			accountInf.value.avatar=avatar
			accountInf.value.nickName=nickname
			accountInf.value.address=address
			accountInf.value.gender=gender
			accountInf.value.treeId=treeId
			accountInf.value.account=account
			accountInf.value.id=id
		}
		//----------------------------------------------------
	const wxUserLogin = () => {
		wx.login({
			success: (res) => {
				console.log(res)
				if (res.errMsg === "login:ok") {
					console.log(res.code)
					const data = {
						code: res.code
					}
					WxLogin(data).then(res=>{
						 console.log(res)
						token.value=res.data.accessToken
						console.log(token.value)
						refreshToken.value=res.data.refreshToken
						accountInfSet(res.data)
						console.log(accountInf.value)
					})
				 }
			},
			fail(err) {
				console.log(err)
			}
		});
	}


	return {
		token,
		refreshToken,
		wxUserLogin,
		accountInf,
		accountInfSet
	}
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
				return uni.getStorageSync(key)
			},
			setItem(key, val) {
				uni.setStorageSync(key, val)
			}
		}
	}
})