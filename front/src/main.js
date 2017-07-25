// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VeeValidate, { Validator } from 'vee-validate'
import router from './router'
import store from './store'
import VueHead from 'vue-head'
import { siteName, titleSeparator } from '@configs'
import { mixin } from '@helpers/mixins'
// import AxiosPlugin from '@helpers/axios.js'
import VueAxios from 'vue-axios'
import Axios from 'axios'
import { baseUrl } from '@configs/rest'

const dictionary = {
	en: {
		attributes: {
			name: '"Name"',
			surname: '"Surname"',
			repeatPassword: '"Repeat Password"',
			email: '"Email"',
			password: '"Password"'
		}
	}
}

Validator.updateDictionary(dictionary)

Vue.config.productionTip = false

router.afterEach((to) => {
	document.title = to.meta.title + titleSeparator + siteName
})

Axios.defaults.baseURL = baseUrl

Vue.use(VeeValidate)
Vue.use(VueAxios, Axios)
Vue.mixin(mixin)
Vue.use(VueHead, {
	separator: ' | ',
	complement: 'Solid.io'
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})

