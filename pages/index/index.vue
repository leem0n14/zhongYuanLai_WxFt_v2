<template>
	<view class="container">
		<view class="conSearch">
			<view class="searchInput" @click="searchGet">
				<uni-icons type="search" size="25" color="#939393"></uni-icons>
				<span style="margin-left: 10rpx;">查找/绑定家族</span>
			</view>
		</view>
		<view class="conNav">
			<u-tabs :list='list' :activeStyle="{
				color: '#343434',
				fontWeight: '550',
				transform: 'scale(1.1)',
				transition:'all 0.1s'
			}" :inactiveStyle="{
				           color: '#939393',
				           fontWeight: '500',
						   transition:'all 0.1s'
				        }" lineWidth="20" lineHeight="5" lineColor="#ca7b1d"
				itemStyle="padding-left: 13rpx; padding-right: 13rpx; height: 80rpx;" :is-scroll="false"
				@change="componentChange"></u-tabs>
		</view>

		<!-- <component :is="currentComponent"></component> -->
		
		<indexRecommend v-if="currentComponent==='indexRecommend'"></indexRecommend>
		<indexHeritage v-if="currentComponent==='indexHeritage'"></indexHeritage>
		<indexRhyme v-if="currentComponent==='indexRhyme'"></indexRhyme>
		<indexFolksong v-if="currentComponent==='indexFolksong'"></indexFolksong>
		<indexFolkways v-if="currentComponent==='indexFolkways'"></indexFolkways>
		<indexReading v-if="currentComponent==='indexReading'"></indexReading>
		<indexStory v-if="currentComponent==='indexStory'"></indexStory>
	</view>
</template>

<script setup>
	import {
		ref
	} from 'vue';
	import indexRecommend from './indexComponents/indexRecommend.vue'
	import indexHeritage from './indexComponents/indexHeritage.vue'
	import indexRhyme from './indexComponents/indexRhyme.vue'
	import indexFolksong from './indexComponents/indexFolksong.vue'
	import indexFolkways from './indexComponents/indexFolkways.vue'
	import indexReading from './indexComponents/indexReading.vue'
	import indexStory from './indexComponents/indexStory.vue'
	//-------------search-----------------------------------------
	const searchGet = () => {
		uni.navigateTo({
			url: '/pages/index/search',
			animationType: 'pop-in',
			animationDuration: 200,
		})
	}
	//----------nav-----------------------------------------------
	const list = ref([{
		name: '推荐',
		Component: 'indexRecommend',
	}, {
		name: '非遗',
		Component: 'indexHeritage'
	}, {
		name: '童谣',
		Component: 'indexRhyme'
	}, {
		name: '山歌',
		Component: 'indexFolksong'
	}, {
		name: '民俗',
		Component: 'indexFolkways'
	}, {
		name: '儿童阅读',
		Component: 'indexReading'
	}, {
		name: '故事',
		Component: 'indexStory'
	}])
	const currentComponent = ref('indexRecommend')
	const componentChange = (item) => {
		console.log(item)
		currentComponent.value = item.Component
	}
</script>
<style>
	page {
		background-color: #fff;
	}
</style>
<style scoped lang="scss">
	.container {
		.conSearch {
			height: 85rpx;
			width: 95%;
			margin: 0 auto;

			.searchInput {
				height: 65rpx;
				width: 95%;
				margin: 0 auto;
				margin-top: 10rpx;
				border-radius: 30rpx;
				background-color: #f6f6f6;
				padding-left: 20rpx;
				color: #939393;
				font-size: 25rpx;
				display: flex;
				align-items: center;
			}
		}

		.conNav {
			width: 100%;
			height: 95rpx;
			padding-top: 10rpx;
		}
	}
</style>