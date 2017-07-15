<template>
	<div id="app">
		<img :src="logo" alt="Solid">
		<router-view></router-view>
	</div>
</template>

<script>
	import Logo from '@svgs/Solid.svg'

	export default {
		data() {
			return {
				logo: Logo
			}
		},
		created() {
			console.log(Logo)
		}
	}
</script>

<style lang="scss" src="@styles/style.scss"></style>
