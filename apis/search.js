import service from "../utils/request";
export const getclanbyplace=(data)=>{
	return service({
		method:'GET',
		url:'/clan-tree/name-place',
		data
	})
}