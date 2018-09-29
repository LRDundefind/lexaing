import Vue from "vue"
import Vuex from "vuex"
Vue.use(Vuex)

const store = new Vuex.Store({
	//定义状态
	state: {
	    isLogin: false
	},
	mutations: {
	    isLogin (state ,is) {
	     	state.isLogin = is;
	     	localStorage.setItem("isLogin",is)
	    }
	}
})

export default store