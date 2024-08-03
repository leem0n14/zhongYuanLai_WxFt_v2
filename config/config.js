let Url = ''
if (process.env.NODE_ENV === 'development') {
	console.log('开发环境');
	// Url = 'http://172.21.160.221:8081/api'//lj
	// Url = 'http://172.21.160.216:8085/api'//dat
	Url = 'https://www.zhongyuanlai.cn/api'
	// Url = 'http://47.106.185.77:8081/api'
} else {
	console.log('生产环境');
	Url = 'https://www.zhongyuanlai.cn/api'
}

const baseUrl = Url;
export default baseUrl;