// import Vue from 'vue'

import pages from '@configs/pages'

const state = {
	rightBar: {
		visible: false
	},
	myInput: 'Aha'
}

const mutations = {
	SET_RIGHT_BAR_VISIBLE(state, payload) {
		state.rightBar.visible = !state.rightBar.visible
	}
}

const actions = {
	setRightBarVisible: ({commit}, payload) => {
		commit('SET_RIGHT_BAR_VISIBLE', payload)
	}
	// getUserList: ({commit}) => {
	// 	return Vue.http.get(userListUrl, {headers: getHeader()})
	// 		.then(response => {
	// 			Vue.$logger('info', 'userListUrl response', response)
	// 			if (response.status === 200) {
	// 				commit('SET_USER_LIST', response.body.data)
	// 				return response.body.data
	// 			}
	// 		})
	// }
}

const getters = {
	getRightBarVisible: (state) => {
		return state.rightBar.visible
	},
	getSpecificMenu: (state, getters) => (menuLocation) => {
		let menu = []
		pages.map(x => {
			if (x.meta) {
				if (x.meta.location === menuLocation) menu.push(x)
			} else if (x.children) {
				x.children.map(c => {
					if (c.meta.location === menuLocation) menu.push(c)
				})
			}
		})
		return menu
	}
}

export default {
	state, mutations, actions, getters
}
