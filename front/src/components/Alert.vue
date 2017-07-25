<template>
	<div class="alert">
		<p>{{ alert.message }} <small>{{ closingIn }}</small></p>
	</div>
</template>

<script>
	export default {
		name: 'alert',
		props: ['alert'],
		data() {
			return {
				closingIn: null,
				piece: null
			}
		},
		created() {
			this.closingIn = this.alert.duration
			this.piece = this.alert.duration

			let closeThis = () => {
				clearInterval(closingIn)
				this.$store.dispatch('closeAlert', this.alert.id)
			}

			let closingIn = setInterval(() => {
				if (this.closingIn > 0) {
					this.piece = (this.closingIn / this.alert.duration) * 100
					this.closingIn--
				} else {
					closeThis()
					clearInterval(closingIn)
				}
			}, 1)
		}
	}
</script>
