import {
	createPinia
} from 'pinia'

// pinia持久化插件
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

// 创建pinia实例
const pinia = createPinia()
// 使用持久化插件
pinia.use(piniaPluginPersistedstate)

// export * from，将所有按需导出的默认，再次全部按需导出
// 用户信息
export * from "./modules/userInf"
export default pinia