<template>
	<div id="app">
		<icons></icons>
		<div class="body-wrapper">
			<div class="left-bar">
				<div class="flex-inner vertical">
					<solid-menu :menuName="'main'"></solid-menu>
					<solid-menu :menuName="'test'"></solid-menu>
					<site-info></site-info>
				</div>
			</div>
			<div class="top-bar">
				<div class="grid-inner">
					<logo></logo>
					<account-toggle @click.native="openRightBar" ></account-toggle>
				</div>
			</div>
			<div class="content">
				<top-header></top-header>
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
		<div class="body-fixed">
			<login-modal v-if="modal.loginModal.open"></login-modal>
		</div>
	</div>
</template>

<script>
	import { mapState, mapGetters } from 'vuex'

	import Logo from '@components/Logo'
	import SiteInfo from '@components/SiteInfo'
	import TopHeader from '@components/TopHeader'
	import FooterInfo from '@components/FooterInfo'
	import AccountToggle from '@components/AccountToggle'
	import SolidMenu from '@components/Menu'
	import LoginModal from '@components/LoginModal'
	import Icons from '@components/Icons'
//	import LogoSvg from '@svgs/Solid.svg'

	export default {
		data() {
			return {
			}
		},
		components: {
			Logo,
			SolidMenu,
			SiteInfo,
			TopHeader,
			FooterInfo,
			AccountToggle,
			LoginModal,
			Icons
		},
		computed: {
			...mapGetters({
				modal: 'getModalState'
			}),
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
