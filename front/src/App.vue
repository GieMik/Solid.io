<template>
	<div id="app">
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
					<top-header></top-header>
					<account-toggle @click.native="openRightBar" ></account-toggle>
				</div>
			</div>
			<div class="profile-menu">
				<transition name="fade">
					<solid-menu v-if="interface.rightBar.visible" :menuName="'profile'"></solid-menu>
				</transition>
			</div>
			<!--<div v-if="interface.rightBar.visible" class="right-bar">-->
				<!--<div class="flex-inner">-->

				<!--</div>-->
			<!--</div>-->
			<!--<div :class="{ 'open': interface.rightBar.visible }" class="account-toggle">-->
				<!--<div @click="openRightBar" class="flex-inner flex-center">-->

				<!--</div>-->
			<!--</div>-->
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
		<!--<div class="body-fixed">-->
			<!--<modal @click.native="close" v-if="modal"></modal>-->
		<!--</div>-->
	</div>
</template>

<script>
	import { mapState } from 'vuex'

	import Logo from '@components/Logo'
	import SiteInfo from '@components/SiteInfo'
	import TopHeader from '@components/TopHeader'
	import FooterInfo from '@components/FooterInfo'
	import AccountToggle from '@components/AccountToggle'
	import SolidMenu from '@components/Menu'
	import Modal from '@components/Modal'

	export default {
		data() {
			return {
//				logo: Logo,
				modal: true
			}
		},
		components: {
			Logo,
			SolidMenu,
			SiteInfo,
			TopHeader,
			FooterInfo,
			AccountToggle,
			Modal
		},
		computed: {
			...mapState({
				interface: state => state.interfaceStore
			})
		},
		methods: {
			openRightBar() {
				this.$store.dispatch('setRightBarVisible', true)
			},
			close() {
				this.modal = false
			}
		}
	}
</script>

<style lang="scss" src="@styles/style.scss"></style>
