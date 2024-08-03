<template>
	<view class="container">
		<swiper class="swiper" :vertical='true' @change="changeVideo">
			<swiper-item v-for="(item,index) in videoList">
				<view class="swiper-item">
					<video auto-pause-if-navigate="true" controls="false" :src="item.videoUrl"></video>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script setup>
	import {
		reactive
	} from 'vue';
	const changeVideo = (e) => {
		console.log(e.detail)
	}
	const videoList = reactive([{
		videoUrl: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4',
		title: 'uniapp介绍'
	}, {
		videoUrl: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4',
		title: 'uniapp介绍'
	}, {
		videoUrl: 'https://qiniu-web-assets.dcloud.net.cn/unidoc/zh/2minute-demo.mp4',
		title: 'uniapp介绍'
	}])
</script>

<style lang="scss">
	.container {
		background-color: black;

		.swiper {
			width: 100vw;
			height: 100vh;

			.swiper-item {
				background-color: black;
				height: 100vh;
				width: 100vw;
				display: flex;
				align-items: center;
				justify-content: center;

				video {
					height: 100vh;
					width: 100vw;
				}
			}
		}
	}
</style>