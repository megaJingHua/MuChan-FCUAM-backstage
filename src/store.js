import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios'
axios.defaults.baseURL = 'https://api.mega1109.com';
Vue.use(Vuex);

// 定義一個新的 Vue Store
const store = new Vuex.Store({
	state: {
		login: false,
	},
	mutations: {
		// 將state設定為參數
		Login(state, data) {
			axios.post('/auth/login', data).then((res) => {
				localStorage.token = res.data.access_token
				state.login = true
			})
		},

		SignOut(state) {
			localStorage.token = ''
			state.login = false
		},
	}

})
export default store;