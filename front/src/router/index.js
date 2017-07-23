import Vue from 'vue'
import Router from 'vue-router'
import pages from '@configs/pages'

Vue.use(Router)

export default new Router({
	routes: pages,
	linkExactActiveClass: 'active'
})
