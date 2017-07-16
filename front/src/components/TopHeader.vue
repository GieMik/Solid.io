<template>
	<div class="top-header-wrapper flex-center">
		<h1 class="page-title">{{ pageTitle }}</h1>
	</div>
</template>

<script>
	export default {
		computed: {
			pageTitle() {
				return this.$route.meta.title
			}
		}
	}
</script>
