import service from '@/utils/request.js'
export const bindFamily=(data)=>{
	return service({
		url: "/wechat/blind",
		method: "PUT",
		data: data
	});
}
export const getClanMsg=(id)=> {
		return service({
			url: "/clan-tree/" + id,
			method: "GET",
		});
	}