<template>
	<div class="site-info-wrapper flex-center">
		<p class="info-p">v. {{ siteVersion }}</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				siteVersion: '0.1.1'
			}
		}
	}
</script>

