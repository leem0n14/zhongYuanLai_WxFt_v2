<template>
		<web-view :src="webViewSrc"></web-view>
</template>

<script setup>
	import {
		onMounted,
		ref,
	} from 'vue';
	import { useUserStore } from '../../store';
	const useUser=useUserStore()
	//---------------------------
	const webViewSrc = ref('')
	//--------------------------
	onMounted(() => {
		setTimeout(()=>{
			webViewSrc.value=
			// "http://localhost:5173/#/pages/eBook_part/bookLibrary/bookLibrary?UserAccessToken="+useUser.token
			"https://www.zhongyuanlai.cn/#/pages/eBook_part/bookLibrary/bookLibrary?UserAccessToken="+useUser.token
			console.log(webViewSrc.value,999)
		},10)
		}
		)
</script>

<style lang="scss" scoped>

</style>







		