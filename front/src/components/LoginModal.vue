<template>
	<modal :size="'medium'" :name="'loginModal'">
		<div class="m-header">
			<h1 class="m-title">Please login..</h1>
		</div>
		<div class="m-body">
			<form @submit.prevent="validateForm">
				<div class="form-body">
					<div class="f-field">
						<label class="label" for="email">Email</label>
						<input
							v-validate="'required|email'"
							:class="{'input': true, 'is-danger': errors.has('email') }"
							name="email"
							v-model="email"
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
				<div class="form-footer flex-center">
					<button class="btn">Login</button>
				</div>
			</form>
		</div>
		<div class="m-footer flex-center">
			<i>Press "Esc" to close modal</i>
		</div>
	</modal>
</template>

<script>
	import Modal from '@components/Modal'
	import { postSignIn } from '@configs/rest'

	export default {
		components: {
			Modal
		},
		data() {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			validateForm() {
				console.log('validating')
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
