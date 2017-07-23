// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VeeValidate, { Validator } from 'vee-validate'
import router from './router'
import store from './store'
import VueHead from 'vue-head'
import { siteName, titleSeparator } from '@configs'
// import axios from 'axios'

import AxiosPlugin from '@helpers/axios.js'

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

Vue.use(VeeValidate)

Vue.use(VueHead, {
	separator: ' | ',
	complement: 'Solid.io'
})

Vue.use(AxiosPlugin)

Vue.config.productionTip = false

router.afterEach((to) => {
	document.title = to.meta.title + titleSeparator + siteName
})

/* eslint-disable no-new */
new Vue({
	el: '#app',
	router,
	store,
	template: '<App/>',
	components: { App }
})

