<template>
	<div class="modal-wrapper" @click="closeModal(name)">
		<div @click.stop class="modal" :class="modalClass">
			<slot></slot>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'

	export default {
		props: {
			size: {
				required: false,
				type: String,
				default: 'medium'
			},
			name
		},
		created() {
			document.addEventListener('keydown', (e) => {
				if (this.modal.open && e.keyCode === 27) {
					this.closeModal(this.name)
				}
			})
		},
		computed: {
			...mapGetters({
				modal: 'getModalState'
			}),
			modalClass() {
				if (this.size === 'small') {
					return 'modal-sm'
				} else if (this.size === 'medium') {
					return 'modal-md'
				} else {
					return 'modal-lg'
				}
			}
		}
	}

</script>
