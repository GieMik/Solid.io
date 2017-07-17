<template>
	<div class="login-page-wrapper">
		<div class="login-form form-md form-wrapper">
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
						type="text"
						placeholder="Email">
					<span
						v-show="errors.has('email')"
						class="help is-danger">{{ errors.first('email') }}</span>
				</div>
				<div class="f-field">
					<label class="label" for="password">Password</label>
					<input
						v-validate="'required|password'"
						:class="{'input': true, 'is-danger': errors.has('password') }"
						name="password"
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
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				email: '',
				password: ''
			}
		}
	}
</script>
