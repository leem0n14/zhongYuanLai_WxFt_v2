import service from '@/utils/request.js'
export const getPhoneNum = (code) => {
	return service({
		method: 'POST',
		url: '/wechat/phone',
		data: code
	});
};

export const userAccountInfUpdate=(data)=>{
	return service({
		method:'PUT',
		url:'/user',
		data
	})
}
export const WxLogin=(code)=>{
	return service({
		method: 'POST',
		url: `/wechat/login`,
		data: code
	});
}

export const AvatarUpload=(data)=>{
	return service({
		method: 'POST',
		url: `/oss/upload`,
		data
	})
}

