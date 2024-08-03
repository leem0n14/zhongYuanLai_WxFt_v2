<template>
	<view class="container" >
		<image class="logoImg"
			src="http://files.zhongyuanlai.cn/dir/2024072001564252662380639-17c4-449f-bce0-87f3dd08d71a.jpg"
			mode="aspectFill">
		</image>
		<view class="conOutCome">
			<z-paging @scroll="scroll" ref="paging" use-virtual-list :force-close-inner-list="true"  @query="queryList" @virtualListChange="virtualListChange" class="conList" auto-show-back-to-top>
				<template #top :scrollTop  :style="scale">
					<view class="conInput">	
						<input type="text" placeholder="请输入地区" v-model="formInput.areaValue" @focus="scroll" :style="inputStyle" >
						<input type="text" placeholder="请输入姓氏" v-model="formInput.clanValue" @focus="scroll" :style="inputStyle" >
					</view>
					<button @click="searchClanFamily()" :style="buttonStyle">查找</button>
				</template>
				<view class="outcomeCard"  v-for="(item,index) in virtualList"  :id="`zp-id-${item.zp_index}`" :key="item.zp_index" @click="showPup(item)" >
						<view class="img">
							<image :src="item.url" mode="aspectFill"></image>
						</view>
						<view class="conText">
							<view class="fName">姓氏:<text>{{item.name}}</text></view>
							<view class="area">地区:<text>{{item.place}}</text></view>
							<view class="describe">简述:<text>{{item.describe}}</text></view>
						</view>
						<view class="bthBindClan">绑定族谱</view>
						
				</view>
			</z-paging>
		</view>
			
		<uni-popup ref="popup" type="center" border-radius="10px 10px 0 0">
			<view class="conPop">
				<view class="popTitle">是否绑定该族谱</view>
				<view class="popMsg">
					<view class="popFName">姓氏:<text>{{popContant.name}}</text></view>
					<view class="popArea">地区:<text>{{popContant.place}}</text></view>
				</view>
				<view class="conBth">
					<view class="cancel" @click="cancelPop()">取消</view>
					<view class="confirm"  @click="clanTurn(popContant.id)">确定</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script setup>
	import ZPMixin from '@/uni_modules/z-paging/components/z-paging/js/z-paging-mixin'
	import { ref, onMounted, watch, computed } from 'vue';
	import { getclanbyplace } from '../../apis/search';
	import { bindFamily } from '../../apis/clan';
	import { useUserStore } from '../../store';
import { array } from '../../uni_modules/uview-plus/libs/function/test';
	const useUser=useUserStore()
	//---------弹窗------------------
	const popContant=ref({
		name:'',
		place:'',
		id:0,
	})
	const popup=ref(null)
	const showPup=(item)=>{
		popContant.value=item
		console.log(popContant.value)
		popup.value.open();
	}
	const cancelPop=()=>{
		popup.value.close();
	}
	//-----获取表单信息-------------
	const formInput=ref({
		areaValue:'',
		clanValue:''
	})
	//------------搜索-------------
	const searchClanFamily=()=>{
		dataList.value=[]
		isShow.value=true
		paging.value.reload()
		console.log(isShow.value)
	}

	//---------家族绑定-------------------
	const clanTurn=(id)=>{
		console.log(id,useUser.accountInf.account)
		bindFamily({
			account: useUser.accountInf.account,
			treeId: id
		}).then(res=>{
			console.log(res.msg)
			if(res.msg==='ok'){
				useUser.accountInf.treeId=id
				useUser.accountInf.treeIdChange=true
				popup.value.close();
				setTimeout(()=>{
					uni.switchTab({
						url: '../clan/clan',
					})
				},500)
				uni.showToast({
					icon: 'none',
					duration: 1000,
					title: '绑定成功'
				});
			}
		})
	}
	
	//-----------------虚拟列表--------------
	const virtualList = ref([]);
	const dataList=ref([])
	const isShow=ref(false)
	const paging =ref(null)
	const virtualListChange = (vList) => {
	  virtualList.value = vList;
	};

	const queryList = (pageNo, pageSize) => {
  // 组件加载时会自动触发此方法，因此默认页面加载时会自动触发，无需手动调用
  // 这里的pageNo和pageSize会自动计算好，直接传给服务器即可
  // 模拟请求服务器获取分页数据，请替换成自己的网络请求
  console.log(pageNo,pageSize);

    let isDataLoaded = false; // 新增变量，用于标记是否已经加载过数据
  if(isShow.value===true){
	  getclanbyplace({
	    'page': pageNo,
	    'size': pageSize,
	    'name': formInput.value.clanValue,
	    'place': formInput.value.areaValue
	  }).then(res => {
	    if (res.data) {
	      // 如果有数据返回，添加到dataList并更新分页组件
	      paging.value.complete(res.data.list); // 更新分页组件状态
	      isDataLoaded = true; // 标记数据已加载
	    } 
	  }).catch(() => {
	    // 请求失败的处理逻辑
	    paging.value.complete('没有更多了'); // 通知分页组件没有更多数据
	  });
  }   
  }  

//-----------------------返回顶部-----------------------
const scale=ref('')
const scrollTop=ref(0)
const scroll=(event)=>{
	console.log('执行了页面滚动',event.detail)
	scrollTop.value = event.detail.scrollTop; // 更新滚动位置
	if(scroll.value.backToTop){
		scroll.value.backToTop.isScroll();
	}
}

//-------------------页面滚动搜索框缩小----------------------
//计算属性：根据滚动位置决定input的样式
const inputStyle = computed(() => {
  return { 
    width: scrollTop.value > 100 ? '400rpx' : '660rpx',
    height: scrollTop.value > 100 ? '50rpx' : '70rpx',
	margin: scrollTop.value > 100 ? '0 auto 15rpx auto' : '25rpx auto',
	  border: '3rpx solid black',
	  padding: '0 10rpx',
	  transition:'all .3s',
	  'font-size': scrollTop.value > 100 ? '25rpx' : '30rpx'
  };
});
const buttonStyle = computed(() => {
  return {
	width: scrollTop.value > 100 ? '0rpx' : '550rpx',
	height: scrollTop.value > 100 ? '0rpx' : '80rpx',
	'line-height': scrollTop.value > 100 ? '55rpx' : '80rpx',
	margin:'0 auto 20rpx auto',
	transition:'all .3s',
  };
});


</script>

<style>
	page{
		width: 100vw;
	}
</style>
<style scoped lang="scss">
	.container{
		position: relative;
	    background: linear-gradient(180deg, #FFD482 0%, #F5F5F5 40%);
		min-height: 100vh;
		width: 100vw;
		.logoImg {
			height: 500rpx;
			width: 500rpx;
			position: absolute;
			top: -90rpx;
			right: 0rpx;
			border-radius: 100%;
			opacity: 0.3;
		}
		.conInput{
			margin-bottom: 30rpx;
			&:before{
				content: '';
				display: block;
				width: 100%;
				height: 30rpx;
			}
			input{
				width: 90%;
				height: 70rpx;
				margin: 30rpx auto;
				border: 3rpx solid black;
				border-radius: 10rpx;
				padding: 0 10rpx;
			}
		}
		button{
			width: 65%;
			height: 80rpx;
			line-height: 80rpx;
			margin: 0 auto;
			background: linear-gradient(to left, #ffd586 0%,#FF9A7E 100%);
			color: #fff;
		}
		.mask{
			height: 80vh;
			width: 100vw;
		}
		.conOutCome{
			position: absolute;
		    height: 1000rpx;
			background-color: pink;
			.outcomeCard {
				height: 200rpx;
				width: 95%;
				position: relative;
				margin: 10rpx auto;
				margin-top: 30rpx;
				display: flex;
				align-items: center;
				border-image-source: url("../../static/searchdemo.png");
				border-image-slice: 0 0 fill;
				.bthBindClan{
					position: absolute;
					top: 40rpx;
					right: 60rpx;
					height: 40rpx;
					width: 130rpx;
					border-radius: 20rpx;
					font-size: 25rpx;
					text-align: center;
					line-height: 40rpx;
					border: 3rpx solid black;
				}
				.img{
					height: 80%;
					width: 120rpx;
					border-radius: 20rpx;
					overflow: hidden;
					margin-left: 40rpx;
					image{
						height: 100%;
						width: 100%;
					}
				}
				.conText{
					height: 85%;
					width: 500rpx;
					display: flex;
					margin-left: 20rpx;
					flex-direction: column;
					justify-content: space-around;
					font-size: 30rpx;
					color: #9a9a9a;
					text{
						color: black;
						margin-left: 20rpx;
						font-size: 27rpx;
					}
				}
			}
			.conPagination{
				width: 90%;
				margin: 0 auto;
				margin-top: 20rpx;
			}
		}
		.conPop{
			  width: 550rpx;
			  height: 240rpx;
			  border-radius: 20rpx;
			  display: flex;
			  background-color: #fff;
			  padding: 20rpx;
			  flex-direction: column;
			  justify-content: space-around;
			  .popTitle{
				  font-size: 35rpx;
				  font-weight: 550;
				  height: 60rpx;
				  text-align: center;
			  }
			  .popMsg{
				  display: flex;
				  width: 80%;
				  color: #9a9a9a;
				  height: 60rpx;
				  font-size: 25rpx;
				  margin: 0 auto;
				  justify-content: space-around;
				  text{
					  margin-left: 20rpx;
				  }
			  }
			  .conBth{
				  display: flex;
				  justify-content: space-around;
				  width: 85%;
				  margin: 0 auto;
				  view{
					  width: 40%;
					  height: 60rpx;
					  border-radius: 20rpx;
					  font-size: 28rpx;
					  background-color: #fff;
					  text-align: center;
					  line-height: 60rpx;
				  }
				  .cancel{
					  border: 2rpx solid #858585;
				  }
				  .confirm{
					  background: linear-gradient(90deg, #FF8989 0%,#993333 100%);
					  color: #fff;
				  }
			  }
		}
	}
</style>