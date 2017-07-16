<template>
	<div id="app">
		<logo></logo>
		<router-view></router-view>
	</div>
</template>

<script>
	import Logo from '@components/Logo'

	export default {
		data() {
			return {
				logo: Logo
			}
		},
		components: {
			Logo
		}
	}
</script>

<style lang="scss" src="@styles/style.scss"></style>
