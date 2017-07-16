<template>
	<div class="right-menu-wrapper">
		<p class="p-info sans-serif">You are not logged in, please login</p>
		<ul class="menu">
			<router-link class="m-item" tag="li" :to="{ name: 'login' }">
				<a>Login</a>
			</router-link>
			<router-link class="m-item" tag="li" :to="{ name: 'register' }">
				<a>Register</a>
			</router-link>
		</ul>
	</div>
</template>
