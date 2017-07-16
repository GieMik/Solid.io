<template>
	<div class="left-menu-wrapper">
		<ul class="menu">
			<router-link class="m-item" tag="li" :to="{ name: 'home' }">
				<a>Home</a>
			</router-link>
			<router-link class="m-item" tag="li" :to="{ name: 'users-list' }">
				<a>Users</a>
			</router-link>
		</ul>
	</div>
</template>
