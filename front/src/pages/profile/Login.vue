<template>
	<div class="login-page-wrapper">
		<div class="login-form form-md form-wrapper">
			<form @submit.prevent="validateForm">
				<div class="form-header">
					<h2 class="form-title">Please login..</h2>
				</div>
				<div class="form-body">
					<div class="f-field">
						<label class="label" for="email">Email</label>
						<input
							v-validate="'required|email'"
							:class="{'input': true, 'is-danger': errors.has('email') }"
							name="email"
							v-model="email"
							type="text"
							placeholder="Email">
						<span
							v-show="errors.has('email')"
							class="help is-danger">{{ errors.first('email') }}</span>
					</div>
					<div class="f-field">
						<label class="label" for="password">Password</label>
						<input
							v-validate="'required'"
							:class="{'input': true, 'is-danger': errors.has('password') }"
							name="password"
							v-model="password"
							type="password"
							placeholder="Password">
						<span
							v-show="errors.has('password')"
							class="help is-danger">{{ errors.first('password') }}</span>
					</div>
				</div>
				<div class="form-footer">
					<button class="btn">Login</button>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
	import { postSignIn } from '@configs/rest'

	export default {
		data() {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			validateForm() {
				this.$validator.validateAll().then(result => {
					if (result) {
						let login = {
							email: this.email,
							password: this.password
						}

						this.axios.post(postSignIn, login)
							.then(response => {
								console.log(response)
							})
					}
				})
			}
		}
	}
</script>
