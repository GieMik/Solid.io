<template>
	<div id="app">
		<div class="body-wrapper">
			<div class="left-bar">
				<div class="flex-inner vertical">
					<logo></logo>
					<left-menu></left-menu>
					<site-info></site-info>
				</div>
			</div>
			<div class="top-bar">
				<div class="flex-inner horizontal">
					<top-header></top-header>
				</div>
			</div>
			<div v-if="interface.rightBar.visible" class="right-bar">
				<div class="flex-inner">
					<right-menu></right-menu>
				</div>
			</div>
			<div :class="{ 'open': interface.rightBar.visible }" class="account-toggle">
				<div @click="openRightBar" class="flex-inner flex-center">
					<account-toggle ></account-toggle>
				</div>
			</div>
			<div class="content">
				<transition name="fade" mode="out-in">
					<router-view></router-view>
				</transition>
			</div>
			<div class="footer">
				<div class="flex-inner flex-end">
					<footer-info></footer-info>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'

	import Logo from '@components/Logo'
	import LeftMenu from '@components/LeftMenu'
	import RightMenu from '@components/RightMenu'
	import SiteInfo from '@components/SiteInfo'
	import TopHeader from '@components/TopHeader'
	import FooterInfo from '@components/FooterInfo'
	import AccountToggle from '@components/AccountToggle'

	export default {
		data() {
			return {
//				logo: Logo,
			}
		},
		components: {
			Logo,
			LeftMenu,
			RightMenu,
			SiteInfo,
			TopHeader,
			FooterInfo,
			AccountToggle
		},
		computed: {
			...mapState({
				interface: state => state.interfaceStore
			})
		},
		methods: {
			openRightBar() {
				this.$store.dispatch('setRightBarVisible', true)
			}
		}
	}
</script>

<style lang="scss" src="@styles/style.scss"></style>
