<template>
	<div :class="menuName+'-menu-wrapper'">
		<ul class="menu">
			<router-link
				v-for="item in mainMenu"
				class="m-item"
				:key="item"
				tag="li"
				:to="{ name: item.name}">
				<a>{{ item.meta.title }}</a>
			</router-link>
		</ul>
	</div>
</template>

<script>
	export default {
		props: [
			'menuName'
		],
		computed: {
			mainMenu() {
				return this.$store.getters.getSpecificMenu(this.menuName)
			}
		}
	}
</script>
