<template>
	<div class="login-page-wrapper">
		<div class="login-form form-lg form-wrapper">
			<div class="form-header">
				<h2 class="form-title">Please fill The Form..</h2>
			</div>
			<div class="form-body">
				<div class="f-group horizontal">
					<div class="f-field">
						<label class="label" :class="{ 'not-empty' : name.length > 0 }" for="name">Name</label>
						<input
							v-validate="'required'"
							:class="{'input': true, 'is-danger': errors.has('name') }"
							name="name"
							v-model="name"
							type="text"
							placeholder="Name">
						<span
							v-show="errors.has('name')"
							class="help is-danger">{{ errors.first('name') }}</span>
					</div>
					<div class="f-field">
						<label class="label" :class="{ 'not-empty' : surname.length > 0 }" for="surname">Surname</label>
						<input
							v-validate="'required'"
							:class="{'input': true, 'is-danger': errors.has('surname') }"
							name="surname"
							v-model="surname"
							type="text"
							placeholder="Surname">
						<span
							v-show="errors.has('surname')"
							class="help is-danger">{{ errors.first('surname') }}</span>
					</div>
				</div>
				<div class="f-field">
					<label class="label" :class="{ 'not-empty' : email.length > 0 }" for="email">Email</label>
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
				<div class="f-group horizontal">
					<div class="f-field">
						<label class="label" :class="{ 'not-empty' : password.length > 0 }" for="password">Password</label>
						<input
							v-validate="'required|password'"
							:class="{'input': true, 'is-danger': errors.has('password') }"
							name="password"
							v-model="password"
							type="password"
							placeholder="Password">
						<span
							v-show="errors.has('password')"
							class="help is-danger">{{ errors.first('password') }}</span>
					</div>
					<div class="f-field">
						<label class="label" :class="{ 'not-empty' : repeatPassword.length > 0 }" for="repeatPassword">Repeat Password</label>
						<input
							v-validate="'required|repeatPassword'"
							:class="{'input': true, 'is-danger': errors.has('repeatPassword') }"
							name="repeatPassword"
							v-model="repeatPassword"
							type="password"
							placeholder="Repeat Password">
						<span
							:class="{ 'has-errors' : errors.has('repeatPassword') }"
							class="help is-danger">{{ errors.first('repeatPassword') }}</span>
					</div>
				</div>
			</div>
			<div class="form-footer">
				<button class="btn">Register</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				name: '',
				surname: '',
				email: '',
				password: '',
				repeatPassword: ''
			}
		}
	}
</script>
