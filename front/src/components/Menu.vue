<template>
	<div :class="menuName+'-menu-wrapper'">
		<ul class="menu">
			<router-link
				v-for="(item, index) in mainMenu"
				class="m-item"
				:key="index"
				tag="li"
				:to="{ name: item.name}">
				<a>{{ item.meta.title }}</a>
			</router-link>
			<li class="m-item" @click="openModal('loginModal')" v-if="this.menuName === 'profile'"><a>Open Modal</a></li>
			<li class="m-item" @click="callAlert({type: 'success', title: 'This Alerts Title', message: 'This is Alerts Message', duration: 1000})" v-if="this.menuName === 'profile'"><a>Call Alert</a></li>
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
