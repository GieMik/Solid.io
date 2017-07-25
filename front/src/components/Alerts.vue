<template>
	<div class="alerts-wrapper">
		<transition-group name="fade" mode="out-in">
			<gm-alert
				:key="index"
				v-show="alert.active"
				:alert="alert"
				v-for="(alert, index) in alerts">{{ alert }}</gm-alert>
		</transition-group>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex'
	import GmAlert from '@components/Alert'

	export default {
		components: {
			GmAlert
		},
		computed: {
			...mapGetters({
				alerts: 'getAlerts'
			})
		}
	}
</script>
