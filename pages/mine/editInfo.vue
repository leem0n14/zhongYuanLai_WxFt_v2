<template>
	<view class="container">
		<view class="card">

			<image src="../../static/Mask Group.png" mode="aspectFill"></image>
			<view class="catchAvatar" @click="avatarChoose">
				<!-- <image src="../../static/catchAvatar.png" mode=""></image> -->
				<image :src="formInput.avatarTempPath" mode="aspectFill"></image>
			</view>
			<view class="bthTurnback" :style="bthTurnbackStyle" @click="backTurn()">
				<uni-icons type="left" size="30" color="black"></uni-icons>
			</view>
		</view>
		<view class="conUserInfo">
			<view class="userInfo">
				<view class="infoCategory">
					昵称
				</view>
				<input type="text" placeholder="请输入昵称" v-model="formInput.nickName">
			</view>
			<view class="userInfo">
				<view class="infoCategory">
					个性签名
				</view>
				<input type="text" v-model="formInput.signature">
			</view>
		</view>
		<view class="submit">
			<button @click="formInputSubmit()">保存</button>
		</view>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import {
		useUserStore
	} from '../../store';
	import {
		userAccountInfUpdate,
		AvatarUpload
	} from '../../apis/user';
	import form from '../../uni_modules/uview-plus/libs/config/props/form';
	const userAccountInf = ref({})
	userAccountInf.value = useUserStore().accountInf
	const menuButtonInfo = uni.getMenuButtonBoundingClientRect() //获取胶囊按钮位置
	const bthTurnbackStyle = ref('')
	bthTurnbackStyle.value = 'top:' + menuButtonInfo.top + 'px'
	const backTurn = () => {
		uni.navigateBack({
			delta: 1,
			animationType: 'pop-in',
			animationDuration: 200,
		})
	}
	// --------------------------表单信息收集、提交--------------------------------------------------
	const formInput = ref({
		nickName: '',
		signature: '',
		avatarTempPath: ''
	})
	formInput.value.nickName = userAccountInf.value.nickName
	formInput.value.signature = userAccountInf.value.signature
	formInput.value.avatarTempPath = userAccountInf.value.avatar
	const formInputSubmit = () => {
		console.log(formInput.value)
		if (formInput.value.nickName === userAccountInf.value.nickName && formInput.value.signature === userAccountInf
			.value.signature && formInput.value.avatarTempPath === userAccountInf.value.avatar) {
			uni.showToast({
				icon: 'none',
				duration: 2000,
				title: '您未修改任何信息'
			});
			return
		}
		if (!formInput.value.nickName) {
			// 如果昵称为空，则提示用户
			uni.showToast({
				title: '昵称不能为空',
				icon: 'none'
			});
			return;
		}
		const nickNameRegex = /^[\u4e00-\u9fa5a-zA-Z]+$/;
		if (!nickNameRegex.test(formInput.value.nickName)) {
			uni.showToast({
				title: '昵称必须为中文、英文',
				icon: 'none'
			});
			return;
		}
		userAccountInfUpdate({
			id: userAccountInf.value.id,
			avatar: formInput.value.avatarTempPath,
			nickName: formInput.value.nickName
		}).then(res => {
			console.log(res)
			if (res.msg === 'ok') {
				userAccountInf.value.avatar = formInput.value.avatarTempPath
				userAccountInf.value.nickName = formInput.value.nickName
				userAccountInf.value.signature = formInput.value.signature
				uni.showToast({
					icon: 'none',
					duration: 2000,
					title: '修改成功'
				});
			}
		})
	}
	//----------------
	const avatarChoose = () => {
		uni.chooseImage({
			count: 1,
			sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者
			mediaType: ['image'],
			sourceType: ['album', 'camera'],
			success: function(res) {
				console.log('临时路径', JSON.stringify(res.tempFilePaths[0]))
				// formInput.value.avatarTempPath = res.tempFilePaths[0]
				uni.saveFile({
					tempFilePath: res.tempFilePaths[0],
					success: function(res2) {
						var savedFilePath = res2;
						console.log(savedFilePath.savedFilePath);
						formInput.value.avatarTempPath = savedFilePath.savedFilePath
					},
				});
				// 	  const fs = uni.getFileSystemManager();
				// 	  fs.readFile({
				// 		  filePath:formInput.value.avatarTempPath,
				// 		  success:(res)=>{
				// 			  const blob=new Blob([res.data],{type:'image/jpeg'});
				// 			  AvatarUpload({
				// 				  file:blob,
				// 				  type:2
				// 			  }).then(res=>{
				// 				  console.log(res)
				// 			  })
				// 		  }
				// 		  })
			}
		})
	}
</script>

<style lang="scss" scoped>
	.container {
		.card {
			width: 100%;
			height: 392rpx;
			position: relative;

			image {
				width: 100%;
				height: 100%;
			}

			.bthTurnback {
				position: absolute;
			}

			.catchAvatar {
				width: 270rpx;
				height: 270rpx;
				position: absolute;
				top: 240rpx;
				left: 240rpx;
				border-radius: 50%;
				overflow: hidden;

				&:before {
					content: '更换头像';
					height: 24%;
					width: 100%;
					font-size: 30rpx;
					line-height: 50rpx;
					background: linear-gradient(180deg, rgb(204, 204, 204, 0.3) 0%, rgb(51, 51, 51, 0.8) 100%);
					text-align: center;
					position: absolute;
					bottom: 0;
					color: #fff;
				}

				iamge {
					width: 100%;
					height: 100%;

				}
			}
		}

		.conUserInfo {
			width: 630rpx;
			height: 100%;
			margin: 150rpx auto;
			font-size: 27rpx;

			.userInfo {
				margin-top: 60rpx;

				input {
					border-bottom: 2rpx solid #edaf8b;
					margin-top: 15rpx;
					padding: 10rpx;
				}
			}
		}

		.submit {
			width: 500rpx;
			height: 50rpx;
			margin: 0 auto;

			button {
				background: linear-gradient(270deg, #FF5600 0%, #FF9A7E 100%);
				color: #fff;
				border-radius: 20rpx;
			}
		}
	}
</style>