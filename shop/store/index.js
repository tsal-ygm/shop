import Vue from 'vue';
import Vuex from "vuex"

Vue.use(Vuex)
const store = new Vuex.Store({
	state:{
		userdata:{},
		collectShop:[],
		haslogin: false  //是否登录
	},
	mutations:{
		login(state,usersifo){
			state.userdata.token = usersifo.token;
			state.userdata.username = usersifo.username;
			state.haslogin = true
			uni.setStorage({
				key:'usersifo',
				data:usersifo
			})
			
		},
		logout(state){
			state.haslogin = false;
			state.userdata = {};
			uni.removeStorage({
				key:'usersifo',
				success: (res) => {
					console.log('删除成功')
				}
			})
		}
	}
})

export default store;