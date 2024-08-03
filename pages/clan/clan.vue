<<template>
	<view v-if="webViewSrc">
		<web-view :src="webViewSrc"></web-view>
	</view>
</template>

<script setup>
	import {
		ref,
	} from 'vue';
	import {
		onHide,
		onShow,
	} from '@dcloudio/uni-app'
	import { useUserStore } from '../../store';
	const useUser=useUserStore()
	//---------------------------
	const webViewSrc = ref('')
	// webViewSrc.value="http://localhost:5173/#/pages/clanTree_part/clanLibrary/clanLibrary?clanId="+useUser.accountInf.treeId+"&UserAccessToken="+useUser.token
	webViewSrc.value="https://www.zhongyuanlai.cn/#/pages/clanTree_part/clanLibrary/clanLibrary?clanId="+useUser.accountInf.treeId+"&UserAccessToken="+useUser.token
	//--------------------------
	onShow(() => {
		console.log(useUser.accountInf.treeIdChange)
		if(useUser.accountInf.treeIdChange===true){
				webViewSrc.value = ''
			setTimeout(()=>{
				webViewSrc.value=
				// "http://localhost:5173/#/pages/clanTree_part/clanLibrary/clanLibrary?clanId="+useUser.accountInf.treeId+"&UserAccessToken="+useUser.token
				"https://www.zhongyuanlai.cn/#/pages/clanTree_part/clanLibrary/clanLibrary?clanId="+useUser.accountInf.treeId+"&UserAccessToken="+useUser.token
				console.log(webViewSrc.value,999)
			},100)
			useUser.accountInf.treeIdChange=false
			}
		}
		)
</script>

<style lang="scss" scoped>

</style>