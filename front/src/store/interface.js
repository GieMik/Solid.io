// import Vue from 'vue'

// import {
// 	getHeader,
// 	userListUrl
// } from './../../config'

const state = {
	// leftBar: {
	//
	// },
	// topBar: {
	//
	// },
	rightBar: {
		visible: false
	}
}

const mutations = {
	SET_RIGHT_BAR_VISIBLE(state, payload) {
		state.rightBar.visible = !state.rightBar.visible
	}
	// CLEAR_AUTH_USER (state) {
	// 	state.authUser = null
	// },
	// SET_USER_LIST (state, users) {
	// 	state.users = users
	// }
}

const actions = {
	setRightBarVisible: ({commit}, payload) => {
		commit('SET_RIGHT_BAR_VISIBLE', payload)
	}
	// clearAuthUser: ({commit}) => {
	// 	commit('CLEAR_AUTH_USER')
	// },
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
	}
}

export default {
	state, mutations, actions, getters
}
