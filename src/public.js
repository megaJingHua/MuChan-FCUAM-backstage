
import axios from 'axios'
export default {
	install(Vue) {
		Vue.prototype.$axios = function (method, path, params) {
			return axios({
				method: method,
				url: path,
				data: params,
				headers: {
					'Authorization': `Bearer ${localStorage.token}` || ''
				}
			});
		};
	}
}