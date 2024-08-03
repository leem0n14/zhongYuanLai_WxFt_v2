<template>
	<view class="container">
		<view class="conTop">
			<view class="conBgimg">
				<!-- <image src="https://yuan-lai-7.oss-cn-shenzhen.aliyuncs.com/dir/20240717101324.png" mode="aspectFill"></image> -->
				<image :src="userAccountInf.avatar" mode="aspectFill"></image>
				<!-- 用户头像 -->
			</view>
			<view class="bthTurnback" :style="bthTurnbackStyle" @click="backTurn()">
				<uni-icons type="left" size="30" color="black"></uni-icons>
			</view>
			<view class="conAccountInf">
				<view class="conMainInf">
					<view class="UserAtatar">
						<!-- <image src="https://yuan-lai-7.oss-cn-shenzhen.aliyuncs.com/dir/20240717101324.png" mode="aspectFill"></image> -->
						<image :src="userAccountInf.avatar" mode="aspectFill"></image>
					</view>
					<view class="userName">{{userAccountInf.nickName}}</view>
				</view>
				<view class="editProfile" @click="editInfoGet()">
					<button>编辑资料</button>
				</view>
				<view class="conUserTag">
					<view class="accountFans">
						粉丝:<span style="margin-left: 20rpx;">{{userAccountInf.fans}}</span>
					</view>
					<view class="accountFollows">
						关注:<span  style="margin-left: 20rpx;">{{userAccountInf.follows}}</span>
					</view>
				</view>
				<view class="signature" style="display: flex; align-items: center" >
					{{userAccountInf.signature}}
					<view class="edit" @click="editInfoGet()">
						<uni-icons type="compose" size="25" color="white"></uni-icons>
						
					</view>
				</view>
				
			</view>
		</view>
		<view class="conBottom">
			<view class="nav">
				<u-tabs :list='swiperTabList' :activeStyle="{
								color: '#343434',
								fontWeight: '550',
								transform: 'scale(1.3)',
								transition:'all 0.3s'
							}" :inactiveStyle="{
								           color: '#939393',
								           fontWeight: '500',
										   transition:'all 0.3s'
								        }" lineWidth="25" lineHeight="5" lineColor="#ca7b1d" itemStyle="padding-left: 23rpx; padding-right: 23rpx; height: 80rpx; width:50%"
				@change="choose"
				></u-tabs>
			</view>
				<view class="vedio"  v-if="currentComponent==='视频'">
				<view class="vedioItem" v-for="(item,index) in 9" @click="vedioTurn()">
					<image src="../../static/uni.png" mode="aspectFill"></image>
					<view class="vedioLike">
						<uni-icons type="heart" size="20" color="white"></uni-icons>
						<view class="likeNum">
							1423
						</view>
					</view>
				</view>
				</view>
				<view class="eBook" v-if="currentComponent==='阅读'">
					<view class="bookItem" v-for="(item,index) in 8">
						<view class="bookCover">
							<image src="/static/demo_img/mine/2.png" mode="aspectFill"></image>
						</view>
						<view class="bookName">
							梅州地方志
						</view>
						<view class="readingProgress" >
							已读<span style="margin-left: 10rpx;">46%</span>
						</view>
					</view>
				</view>
		</view>
	</view>
</template>
<script setup>
import { ref,reactive } from 'vue';
import { useUserStore } from '../../store';
 const userAccountInf=useUserStore().accountInf
	//-------------------------------返回按钮位置/功能-------------------------------
	  const menuButtonInfo = uni.getMenuButtonBoundingClientRect()//获取胶囊按钮位置
	   const bthTurnbackStyle=ref('')
	   bthTurnbackStyle.value='top:'+menuButtonInfo.top+'px'
	   const backTurn=()=>{
		   uni.navigateBack({
			   delta:1,
			   animationType: 'pop-in',
			   animationDuration: 200,
		   })
	   }
	   //----------------------------------tab-------------------------------------------
	   const swiperTabList = reactive([{
	   	name: '视频'
	   }, {
	   	name: '阅读'
	   }]);
	   
	   const currentComponent = ref('视频')
	   const choose = (e)=>{
		   console.log(e)
		   currentComponent.value = e.name
	   }
	   //------------------------------跳转-----------------------------------------------
	   const editInfoGet=()=>{
		   console.log(11)
		   uni.navigateTo({
			   url:'/pages/mine/editInfo',
			   animationType:'pop-in',
			   animationDuration:200,
		   })
	   }
	   //---------视频详情-------------------------
	   const vedioTurn=()=>{
		   console.log('123')
	   }
</script>

<style scoped lang="scss">
	.container{
			.conTop{
				height: 520rpx;
				width: 100vw;
				position: relative;
				.conBgimg{
					height: 130%;
					width: 100vw;
					position: absolute;
					filter: blur(10px);
					z-index: -20;
					image{
						height: 100%;
						width: 100%;
					}
					&:before{
						content: ' ';
						width: 100%;
						height: 100%;
						position: absolute;
						display: block;
						background: linear-gradient(180deg, transparent 0%, rgb(51, 51, 51,0.8) 100%);
						z-index: -15;
						
					}
				}
				.bthTurnback{
					position: absolute;
					left: 10rpx;
				}
				.conAccountInf{
					height: 355rpx;
					width: 720rpx;
					position: absolute;
					bottom: 0;
					left: 30rpx;
					display: flex;
					flex-direction: column;
					justify-content: space-between;
					color: #fff;
					.conMainInf{
						height: 155rpx;
						width: 100%;
						display: flex;
						.UserAtatar{
							height: 155rpx;
							width: 155rpx;
							border-radius: 50%;
							overflow: hidden;
							image{
								height: 100%;
								width: 100%;
							}
						}
						.userName{
							height: 90%;
							width: 300rpx;
							padding: 20rpx;
							font-size: 40rpx;
							font-weight: 550;
							white-space: nowrap;
							overflow: hidden;
							text-overflow: ellipsis;
						}
						
					}
					.editProfile{
						width: 200rpx;
						height: 20rpx;
						button{
							background-color:rgba(220,38,38,0);
							border: 2rpx solid white;
							border-radius: 50rpx;
							color: #fff;
							font-size: 25rpx;
							left: 480rpx;
							bottom: 20rpx;
						}
					}
					.conUserTag{
						height: 170rpx;
						width: 100%;
						display: flex;
						.accountFans,
						.accountFollows{
							width:170rpx;
							height: 100rpx;
							font-size: 33rpx;
							line-height: 170rpx;
						}
					}
					.edit{
						margin: 0 0 15rpx 10rpx;
						width: 30rpx;
						height: 30rpx;
					}
				}
			}.conBottom{
				width: 100%;
				height: 100%;
				background-color: #fff;
				border-radius: 40rpx;
				.nav{
					margin-top: 20rpx;
					width: 100%;
					height: 80rpx;
					
				}.vedio{
					width:100%;
					display: grid;
					grid-template-columns: repeat(3,1fr);
					grid-gap: 2rpx;
					.vedioItem{
						position: relative;
						height: 350rpx;
						overflow: hidden;
						&:before{
							content: '';
							position: absolute;
							display: block;
							height: 100%;
							width: 100%;
							background:linear-gradient(180deg, transparent 0%, rgb(51, 51, 51,0.4) 100%);
						}
						image{
							width: 100%;
							height: 100%;
						}.vedioLike{
							position: absolute;
							bottom: 15rpx;
							left: 20rpx;
							display: flex;
							color: #fff;
							align-content: center;
							.likeNum{
								margin-left: 10rpx;
							}
						}
					}
				}.eBook{
					margin: 0 ;
					width: 80%;
					margin: 0 auto;
					display: grid;
					grid-gap: 40rpx;
					grid-template-columns: repeat(2,1fr);
					.bookItem{
						height: 450rpx;
						.bookCover{
							width: 100%;
							height: 370rpx;
							image{
								width: 100%;
								height: 100%;
							}
						}.bookName{
							margin: 10rpx 0;
						}
						.readingProgress{
								color: gray;
								font-size: 25rpx;
							}
					}
				}
			}
			
		}
</style>