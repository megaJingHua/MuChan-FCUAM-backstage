import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// 定義一個新的 Vue Store
const store = new Vuex.Store({
	state: {
		login: false,
	},
	mutations: {
		// 將state設定為參數
		Login(state) {
			// state的isLoading true/false 互轉
			state.login = true
		},

		SignOut(state) {
			// state的isLoading true/false 互轉
			state.login = false
		}
	}

})
export default store;