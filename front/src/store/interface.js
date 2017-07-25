// import Vue from 'vue'

import pages from '@configs/pages'
import Alert from '@instances/alert.js'

const state = {
	rightBar: {
		visible: false
	},
	alerts: [],
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
	},
	ADD_ALERT(state, payload) {
		let newAlert = new Alert(payload)
		newAlert['id'] = state.alerts.length
		state.alerts.push(newAlert)
	},
	CLOSE_ALERT(state, id) {
		state.alerts.find(x => x.id === id).active = false
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
	},
	addAlert({commit}, payload) {
		commit('ADD_ALERT', payload)
	},
	closeAlert({commit}, id) {
		commit('CLOSE_ALERT', id)
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
	},
	getAlerts(state) {
		return state.alerts
	}
}

export default {
	state, mutations, actions, getters
}
