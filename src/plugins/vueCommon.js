const vueCommon = {
	_ROUTER_PUSH(url) {
		this.$router.push(url);
	},
	_EMIT_EVENT(event, arg) {
		this.$EventBus.$emit(event, agr);
	},
	_ON_EVENT(event, callback) {
		if (!(Object.keys(this.$EventBus._events).indexOf(event) > -1)) {
			this.$EventBus.$on(event, (arg) => {
				if (typeof callback === 'function') {
					callback(arg);
				}
			})
		}
	}
}

export default vueCommon;
