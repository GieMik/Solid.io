export const mixin = {
	methods: {
		openModal(modalName) {
			this.$store.dispatch('setModalOpen', modalName)
		},
		closeModal(modalName) {
			this.$store.dispatch('setModalClose', modalName)
		}
	}
}
