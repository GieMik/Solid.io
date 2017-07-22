<template>
	<div class="top-header-wrapper flex-start">
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
