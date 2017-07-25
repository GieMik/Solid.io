export const mixin = {
	methods: {
		openModal(modalName) {
			this.$store.dispatch('setModalOpen', modalName)
		},
		closeModal(modalName) {
			this.$store.dispatch('setModalClose', modalName)
		},
		callAlert(alert) {
			this.$store.dispatch('addAlert', alert)
		},
		closeAlert(alert) {
			this.$store.dispatch('closeAlert', alert)
		}
	}
}
