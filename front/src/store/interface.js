// import Vue from 'vue'

import pages from '@configs/pages'

const state = {
	rightBar: {
		visible: false
	},
	myInput: 'Aha',
	modal: {
		open: false,
		loginModal: {
			open: false
		}
	}
}

const mutations = {
	SET_RIGHT_BAR_VISIBLE(state) {
		state.rightBar.visible = !state.rightBar.visible
	},
	SET_MODAL_OPEN(state, payload) {
		state.modal.open = true
		state.modal[payload].open = true
	},
	SET_MODAL_CLOSE(state, payload) {
		state.modal.open = false
		state.modal[payload].open = false
	}
}

const actions = {
	setRightBarVisible: ({commit}, payload) => {
		commit('SET_RIGHT_BAR_VISIBLE', payload)
	},
	setModalOpen: ({commit}, payload) => {
		commit('SET_MODAL_OPEN', payload)
	},
	setModalClose: ({commit}, payload) => {
		commit('SET_MODAL_CLOSE', payload)
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
	getModalState: (state) => {
		return state.modal
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
