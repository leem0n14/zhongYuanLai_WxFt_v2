<script>
	import {
		useUserStore,
	} from '@/store'

	export default {
		onLaunch() {
			console.log(useUserStore())
			const useUser = useUserStore();
			console.log('页面挂载完成');
			useUser.wxUserLogin();
		}
	}
</script>

<style lang="scss">
	/*每个页面公共css */
	@import '@/uni_modules/uni-scss/index.scss';
	/* #ifndef APP-NVUE */
	@import '@/static/customicons.css';

	// 设置整个项目的背景色
	page {
		background-color: #f5f5f5;
	}

	/* #endif */
	.example-info {
		font-size: 14px;
		color: #333;
		padding: 10px;
	}
</style>