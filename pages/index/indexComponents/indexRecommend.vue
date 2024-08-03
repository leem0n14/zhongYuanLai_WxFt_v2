<template>
	<view class="container">
		<view class="conSwiper">
			<swiper indicator-dots="true" indicator-color="#c6c6c6" indicator-active-color="#333333" autoplay="true"
				interval="3000" circular="true" style="width:100%; height: 100%;">
				<swiper-item v-for="item in 3">
					<image
						src="http://files.zhongyuanlai.cn/dir/20240721123357113bcd76282-dfec-4eca-87d9-d1dc02c5dce2.png"
						mode="aspectFill"></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="conTitle" @click="a()">分类</view>
		<view class="conScroll">
			<scroll-view scroll-x="true" show-scrollbar="false">
				<view class="scrollItem" v-for="item in scrollImagePath">
					<image mode="aspectFill" :src=item></image>
				</view>
			</scroll-view>
		</view>
		<view class="conBottom">
			<view class="bottomItem" v-for="item in bottomImagePath">
				<image :src=item mode="aspectFill"></image>
			</view>
		</view>
	</view>
</template>

<script setup>
	// import {signUpWx } from '../../../apis/user';
	const scrollImagePath = [
		'http://files.zhongyuanlai.cn/dir/20240721123316976ce2f7d76-d2da-44bf-b577-4689347d045e.png',
		'http://files.zhongyuanlai.cn/dir/202407211233264016364e7be-c4cb-4501-86fa-82636545a644.png',
		// 'http://files.zhongyuanlai.cn/dir/202407211233421565a808a1e-776a-4aad-9420-3b380acf50de.png',
		// 'http://files.zhongyuanlai.cn/dir/20240721123316976ce2f7d76-d2da-44bf-b577-4689347d045e.png',
		// 'http://files.zhongyuanlai.cn/dir/202407211233264016364e7be-c4cb-4501-86fa-82636545a644.png',
		// 'http://files.zhongyuanlai.cn/dir/202407211233421565a808a1e-776a-4aad-9420-3b380acf50de.png',
		'http://static.zhongyuanlai.cn/dir/20240801012701939206840a0-a00a-4557-8a6b-a6dd6c164768.jpg',
		"http://static.zhongyuanlai.cn/dir/20240801012616797e7e4635c-88cb-414f-8f7d-4bcaca018572.jpg"
	]
	const bottomImagePath = [
		'http://files.zhongyuanlai.cn/dir/20240721123120605f69a30dd-b8c8-4a94-8e97-cc78dfac3326.png',
		'http://files.zhongyuanlai.cn/dir/202407211232248896efc0c09-9ef5-439d-84f1-944a84457cf8.png',
		'http://static.zhongyuanlai.cn/dir/20240801013114429baec2af3-fb16-4e19-8837-999265788a56.png',
		'http://files.zhongyuanlai.cn/dir/20240721123238178ea6cc83e-5b0f-495b-b903-08c9d74f571a.png',
		'http://files.zhongyuanlai.cn/dir/202407211232488498cd678c4-5d5a-4eda-a056-09354ef2c8a4.png',
		'http://files.zhongyuanlai.cn/dir/20240721123300022274dac4c-8bfe-42e3-b896-18b4e39a2a14.png',
	]
	const a=()=>{
		uni.chooseMedia({
			count:1,
			success(res){
				console.log(res)
			}
		})
	}
</script>

<style scoped lang="scss">
	.container {
		.conSwiper {
			width: 100%;
			height: 325rpx;
			overflow: hidden;

			swiper-item {
				width: 100%;
				width: 100%;

				image {
					height: 100%;
					width: 100%;
				}
			}

		}

		.conTitle {
			height: 100rpx;
			font-size: 35rpx;
			line-height: 100rpx;
			margin-left: 40rpx;
			position: relative;

			&:before {
				content: '';
				position: absolute;
				height: 50rpx;
				width: 12rpx;
				top: 27rpx;
				left: -20rpx;
				border-radius: 12rpx;
				background-color: #ffb54c;
			}
		}

		.conScroll {
			height: 265rpx;
			width: 100%;

			scroll-view {
				white-space: nowrap;
			}

			.scrollItem {
				display: inline-block;
				height: 265rpx;
				width: 200rpx;
				margin: 0 13rpx;
				border-radius: 20rpx;
				overflow: hidden;

				image {
					width: 200rpx;
					height: 100%;
				}
			}
		}

		.conBottom {
			width: 100%;
			height: 480rpx;
			padding-top: 50rpx;
			
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			
			.bottomItem {
				height: 140rpx;
				border-radius: 20rpx;
				overflow: hidden;
				margin: 10rpx;
			}

			image {
				height: 100%;
				width: 100%;
			}
		}
	}
</style>