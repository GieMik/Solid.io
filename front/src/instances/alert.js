export default function(alert) {
	this.active = true
	this.id = alert.id || null
	this.title = alert.title || 'Default title'
	this.message = alert.message || 'Default message'
	this.duration = alert.duration || 3000
	this.type = alert.type || 'default'
}
