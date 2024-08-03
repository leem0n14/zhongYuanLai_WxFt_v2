<template>
	<view class="container">
		<view class="conAvatar" @click="personalHomeoageGet()">
			<view class="avatar">
				<!-- <image src="https://yuan-lai-7.oss-cn-shenzhen.aliyuncs.com/dir/20240717101324.png" mode="aspectFill">
				</image> -->
				<image :src="userAccountInf.avatar" mode="aspectFill"></image>
			</view>
			<view class="conUserInf">
				<view class="conInfo">
					<view class="userName">{{userAccountInf.nickName}}</view>
					<view class="userId">id:<text style="margin-left: 15rpx;">{{userAccountInf.id}}</text></view>
					<view class="fansConcern">
						<text class="fans">粉丝：{{userAccountInf.fans}} </text>
						<text class="concern">关注：{{userAccountInf.follows}}</text>
					</view>
				</view>

			</view>
		</view>

		<view class="advertise">
			<text class="vip">开通会员</text>
			<text class="noAdvertise">尊享免广告等特权</text>
			<button>￥1.00开通</button>
		</view>
		<view class="conVinfo">
			<view class="vinfoContainer">
				<view class="infoItem" v-for="item in vinfo">
					<uni-icons :type=item.style size="50" color="#FFD447"></uni-icons>
					<view class="text">
						{{item.text}}
					</view>
				</view>
			</view>

		</view>
		<view class="conMyClan" v-if="userClanMsg ">
			<view class="cover">
				<image :src="userClanMsg.url" mode="aspectFill"></image>
			</view>
			<view class="clanInfo">
				<view class="clanName">
					{{userClanMsg.name}}氏
				</view>
				<view class="clanMsg">
					{{userClanMsg.describe}}
				</view>
			</view>
			<view class="bthUnBind" @click="upPopShow">
				解除绑定
				<uni-icons type="right" size="15" color="gray"></uni-icons>
			</view>
		</view>
		<view class="conMyClan" v-else>
			<view class="clanInfo" style="margin-left: 30rpx;margin-right: 300rpx;">
				您暂未绑定家族
			</view>
			<view class="bthUnBind" @click="searchTurn">
				去绑定
				<uni-icons type="right" size="15" color="gray"></uni-icons>
			</view>
		</view>
		<view class="conMid">
			<view class="welfare">
				<uni-icons type="gift-filled" size="60" color="#FF4F4F"></uni-icons>
				<view class="welInfo">
					<view class="conWel">
						<view class="welfareCenter">
							福利中心
						</view>
						<view class="welIcon">
							<image src="../../static/qiandao.png" mode="aspectFill"></image>
						</view>
					</view>
					<view class="welText">
						任务签到领好礼
					</view>
				</view>


			</view>
			<view class="recommend">
				<view class="selected">
					精选好书
				</view>
				<view class="boxBook">
					<view class="cover">
						<image
							src="http://files.zhongyuanlai.cn/dir/202407211233264016364e7be-c4cb-4501-86fa-82636545a644.png"
							mode="aspectFill"></image>
					</view>
					<view class="bookInfo">
						<view class="bookName">
							【梅州红色】
						</view>
						<view class="author">
							某某
						</view>
					</view>
				</view>
			</view>
		</view>
		<view class="conBottom">
			<view class="fun" v-for="item in onFun">
				<uni-icons :type=item.style size="40"></uni-icons>
				<view class="text">
					{{item.text}}
				</view>
			</view>

		</view>
		<uni-popup ref="popup" type="center" border-radius="10px 10px 0 0">
			<view class="conPop">
				<view class="popTitle">解除绑定该族谱</view>
				<view class="popMsg">
					<view class="popFName">姓氏:<text>{{userClanMsg.name}}</text></view>
					<view class="popArea"><text>{{userClanMsg.describe}}</text></view>
				</view>
				<view class="conBth">
					<view class="cancel" @click="popCancel()">取消</view>
					<view class="confirm" @click="unBind()">确定</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	import {
		onMounted,
		ref
	} from 'vue';
	import {
		useUserStore
	} from '../../store';
	import {
		getClanMsg,
		bindFamily
	} from '../../apis/clan';
	import {
		onShow
	} from '@dcloudio/uni-app'
	const userAccountInf = useUserStore().accountInf
	//---------解绑家族----------------
	const popup = ref(null)
	const upPopShow = () => {
		popup.value.open();
	}
	const popCancel = () => {
		popup.value.close();
	}
	const unBind = () => {
		bindFamily({
			account: userAccountInf.account,
			treeId: 0
		}).then(res => {
			if (res.msg === 'ok') {
				userAccountInf.treeId = 0
				popup.value.close();
				userAccountInf.treeIdChange = true
				userClanMsg.value = ''
				uni.showToast({
					icon: 'none',
					duration: 1000,
					title: '解除绑定成功'
				});
			}
		})
	}
	//--------获取数据---------------------
	const userClanMsg = ref('')
	const userClanMsgGet = () => {
		if (userAccountInf.treeId !== 0) {
			getClanMsg(userAccountInf.treeId).then(res => {
				console.log(res)
				userClanMsg.value = res.data
				console.log(userAccountInf.avatar)
			})
		}
	}
	onShow(() => {
		userClanMsgGet()

	})
	const vinfo = [{
		text: '作品',
		style: "videocam"
	}, {
		text: '点赞',
		style: "hand-up"
	}, {
		text: '收藏',
		style: "star"
	}]
	const onFun = [{
		text: '存储',
		style: "download-filled"
	}, {
		text: '会员中心',
		style: "vip-filled"
	}, {
		text: '订阅中心',
		style: "notification-filled"
	}, {
		text: '设置',
		style: "settings-filled"
	}, {
		text: '客服',
		style: "headphones"
	}, {
		text: '帮助反馈',
		style: "help-filled"
	}]
	//-----------------------------------
	const personalHomeoageGet = () => {
		console.log(11)
		uni.navigateTo({
			url: '/pages/mine/personalHomepage',
			animationType: 'pop-in',
			animationDuration: 200,
		})
	}
	const searchTurn = () => {
		uni.navigateTo({
			url: '/pages/index/search',
			animationType: 'pop-in',
			animationDuration: 200,
		})
	}
</script>
<style>
	page {
		background-color: #f6f6f6;
	}
</style>
<style lang="scss" scoped>
	.container {
		background-size: 100%;
		padding-bottom: 30rpx;

		.conAvatar {
			height: 250rpx;
			margin-left: 5vw;
			width: 90vw;
			display: flex;
			justify-content: center;
			align-items: center;
			gap: 40rpx;
			background-color: white;

			.avatar {
				width: 150rpx;
				height: 150rpx;
				border-radius: 150rpx;
				overflow: hidden;
				border: 2rpx solid black;
				position: relative;

				image {
					width: 100%;
					height: 100%;
				}

				&:before {
					content: '个人主页';
					height: 24%;
					width: 100%;
					font-size: 24rpx;
					line-height: 30rpx;
					background: linear-gradient(180deg, rgb(204, 204, 204, 0.3) 0%, rgb(51, 51, 51, 0.8) 100%);
					text-align: center;
					position: absolute;
					bottom: 0;
					color: #fff;
				}
			}

			.conUserInf {
				width: 50%;
				// padding-left: 50rpx;

				.conInfo {
					// width: 20%;
					height: 130rpx;
					font-size: 23rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-around;

					.userName {
						font-size: 35rpx;
						font-weight: bold;
						color: black;
						white-space: nowrap;
						overflow: hidden;
						text-overflow: ellipsis;
					}
				}

				.fansConcern {
					font-size: 25rpx;
					color: black;

					.fans {
						margin-right: 50rpx;
					}
				}
			}
		}

		.advertise {
			margin-top: 10rpx;
			height: 100rpx;
			width: 700rpx;
			margin: 0 auto 20rpx auto;
			border-radius: 20rpx;
			background-color: #FFEBCC;
			line-height: 100rpx;
			display: flex;
			align-items: center;
			color: #8F6400;

			.vip {
				font-weight: 600;
				width: 150rpx;
				margin: 0 0 0 40rpx;
			}

			.noAdvertise {
				width: 300rpx;
			}

			button {
				width: 27%;
				height: 60%;
				font-size: 25rpx;
				margin-left: 10rpx;
				border-radius: 30rpx;
				background-color: white;
				color: #8F6400;
			}
		}

		.vinfoContainer {
			height: 150rpx;
			width: 700rpx;
			margin: 10rpx auto;
			background-color: white;
			box-shadow: 0 0 5rpx #e0e0e0;
			border-radius: 20rpx;
			font-weight: 550;
			display: flex;
			justify-content: center;

			.infoItem {
				height: 100%;
				width: 33.3%;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: center;

				.text {
					height: 30%;
					width: 100%;
					text-align: center;
					font-size: 25rpx;
					color: gray;
				}
			}
		}

		.conMyClan {
			width: 700rpx;
			height: 130rpx;
			background-color: #fff;
			margin: 20rpx auto 20rpx auto;
			display: flex;
			align-items: center;
			justify-content: space-around;
			font-size: 25rpx;
			font-weight: 600;
			border-radius: 20rpx;

			.cover {
				width: 65rpx;
				height: 70%;
				overflow: hidden;
				margin: 0 25rpx;

				image {
					height: 100%;
					width: 100%;
				}
			}

			.clanInfo {

				.clanName {}

				.clanMsg {
					font-weight: 400;
					color: gray;
					font-size: 26rpx;
					width: 350rpx;
				}
			}

			.bthUnBind {
				height: 100rpx;
				line-height: 100rpx;
			}
		}

		.conMid {
			height: 270rpx;
			width: 700rpx;
			margin: 0 auto;
			display: flex;

			.welfare {
				width: 47.5%;
				height: 100%;
				background: linear-gradient(149deg, #d2ceff 0%, #F4FBFF 100%);
				border-radius: 15rpx;
				display: flex;
				// flex-direction: row;
				align-items: center;
				font-size: 25rpx;

				.welInfo {
					display: flex;
					flex-direction: column;

					image {
						width: 100%;
						height: 100%;
					}

					.conWel {
						display: flex;
						flex-direction: row;

						.welfareCenter {
							font-weight: 600;
						}

						.welIcon {
							overflow: hidden;
							width: 90rpx;
							height: 40rpx;
						}
					}

					.welText {
						color: gray;
					}
				}
			}
		}

		.recommend {
			border-radius: 10rpx;
			margin-left: 30rpx;
			font-weight: 600;
			background: linear-gradient(120deg, #FFDDE3 0%, #FEEFEF 100%);
			width: 47.5%;
			color: #5C0000;

			.selected {
				margin: 20rpx;
			}

			.boxBook {
				display: flex;
				align-items: center;
				margin-left: 20rpx;
				height: 150rpx;

				.cover {
					width: 110rpx;
					height: 100%;
					margin-right: 20rpx;
					overflow: hidden;

					image {
						width: 100%;
						height: 100%;
					}
				}

				.bookInfo {
					.bookName {
						width: 200rpx;
						font-size: 27rpx;
					}

					.author {
						font-weight: 400;
						font-size: 25rpx;
						color: gray;
						margin-left: 13rpx;
						color: #752929;
						margin-top: 5rpx;
					}
				}
			}
		}

		.conBottom {
			width: 700rpx;
			background-color: #fff;
			border-radius: 20rpx;
			margin: 20rpx auto;
			display: grid;
			grid-template-columns: repeat(3, 1fr);

			.fun {
				height: 200rpx;
				display: flex;
				flex-direction: column;
				align-items: center;
				justify-content: center;
			}
		}

		.conPop {
			width: 550rpx;
			height: 240rpx;
			border-radius: 20rpx;
			display: flex;
			background-color: #fff;
			padding: 20rpx;
			flex-direction: column;
			justify-content: space-around;

			.popTitle {
				font-size: 35rpx;
				font-weight: 550;
				height: 60rpx;
				text-align: center;
			}

			.popMsg {
				display: flex;
				width: 98%;
				color: #9a9a9a;
				height: 60rpx;
				font-size: 22rpx;
				margin: 0 auto;
				justify-content: space-around;

				text {
					margin-left: 20rpx;
				}
			}

			.conBth {
				display: flex;
				justify-content: space-around;
				width: 85%;
				margin: 0 auto;

				view {
					width: 40%;
					height: 60rpx;
					border-radius: 20rpx;
					font-size: 28rpx;
					background-color: #fff;
					text-align: center;
					line-height: 60rpx;
				}

				.cancel {
					border: 2rpx solid #858585;
				}

				.confirm {
					background: linear-gradient(90deg, #FF8989 0%, #993333 100%);
					color: #fff;
				}
			}
		}
	}
</style>