<template>
	<div class="account-toggle-wrapper">
		<div class="account-toggle">
			<svg class="account-toggle-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 253.21 190.05">
				<title>Account Toggle</title>
				<path class="user" d="M182.07,109.9a33.66,33.66,0,0,0,9.66-23.75c0-18.26-14.2-33.07-31.71-33.07s-31.71,14.81-31.71,33.07A33.66,33.66,0,0,0,138,109.9c-13.61,10.3-22.79,35-22.79,57.35,0,3.32.21,10.94,0.59,14.94h88.51c0.39-4,.59-11.64.59-15C204.86,144.87,195.68,120.2,182.07,109.9Z" transform="translate(-15.15 -16.2)"/>
				<rect class="bar" width="189" height="18"/>
				<path class="bar" d="M116.93,65.2H15.15v18h97.26A44.6,44.6,0,0,1,116.93,65.2Z" transform="translate(-15.15 -16.2)"/>
				<path class="bar" d="M106.57,128.31a79.4,79.4,0,0,1,7-14.11H15.15v18h90A19.22,19.22,0,0,1,106.57,128.31Z" transform="translate(-15.15 -16.2)"/>
				<path class="bar" d="M99.17,167.36c0-1.38,0-3.16.1-4.16H15.15v18H99.62C99.31,176.2,99.17,170.14,99.17,167.36Z" transform="translate(-15.15 -16.2)"/>
			</svg>
		</div>
		<div class="account-menu">
			<solid-menu v-if="interface.rightBar.visible" :menuName="'profile'"></solid-menu>
		</div>
	</div>
</template>

<script>
	import { mapState } from 'vuex'
	import SolidMenu from '@components/Menu'

	export default {
		components: {
			SolidMenu
		},
		computed: {
			...mapState({
				interface: state => state.interfaceStore
			})
		}
	}
</script>
