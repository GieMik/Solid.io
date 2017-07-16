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
			<div class="right-bar">
				<div class="flex-inner">

				</div>
			</div>
			<div class="content">
				<!--<div class="flex-inner">-->
					<transition name="fade" mode="out-in">
						<router-view></router-view>
					</transition>
				<!--</div>-->
			</div>
			<div class="footer">
				<div class="flex-inner flex-end">
					<footer-info></footer-info>
				</div>
			</div>

			<!--<div class="left"></div>-->
			<!--<div class="top"></div>-->
			<!--<div class="right"></div>-->
			<!--<div class="bottom"></div>-->
			<!--<div class="center"></div>-->
		</div>
	</div>
</template>

<script>
	import Logo from '@components/Logo'
	import LeftMenu from '@components/LeftMenu'
	import SiteInfo from '@components/SiteInfo'
	import TopHeader from '@components/TopHeader'
	import FooterInfo from '@components/FooterInfo'

	export default {
		data() {
			return {
//				logo: Logo,
			}
		},
		components: {
			Logo,
			LeftMenu,
			SiteInfo,
			TopHeader,
			FooterInfo
		}
	}
</script>

<style lang="scss" src="@styles/style.scss"></style>
