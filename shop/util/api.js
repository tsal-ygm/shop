const BASE_URL = 'http://192.168.1.103:3000';
function getHeader(token){
	console.log(token)
	return {
		"Token": token,
		 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
	}
}
export const myRequest =(options)=>{
	return new Promise((resolve,reject)=>{
		uni.request({
			url:BASE_URL+options.url,
			method:options.method || 'GET',
			data:options.data || {},
			header:options.data.token? getHeader(options.data.token): "",
			success:(res)=>{
				resolve(res);
			},
			fail(err){
				uni.showToast({
					title:"请求失败"
				})
				reject(err)
			}
		})
	})
}