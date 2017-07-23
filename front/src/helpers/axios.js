import axios from 'axios'
import { baseUrl } from '@configs/rest.js'

axios.defaults.baseURL = baseUrl

export default {
	install: function(Vue, name = '$http') {
		Object.defineProperty(Vue.prototype, name, { value: axios })
	}
}
