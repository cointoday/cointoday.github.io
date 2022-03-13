<script>
export default {
	props: {
		list: {
			require: false
		},
		name: {
			require: false
		},
		title: {
			required: false
		},
		id: {
			required: false
		},
		type: {
			default: "text"
		},
		value: {
			required: false
		},
		placeholder: {
			required: false
		}
	}
}
</script>

<template>
	<input class="form-control" :list="list" :type="type" :name="name" :id="id" :title="title" :value="value" :placeholder="placeholder">
</template>

<style lang="scss" scoped>
@import '@/assets/css/tokens.scss';

input {
	width: 100% !important;
	background-color: $containerBackgroundColor !important;
	border: solid 2px $textColor !important;
	padding: 15px !important;
	color: $textColor !important;
	outline: 0 !important;
	line-height: 25px !important;
	text-align: center !important;
}

input::placeholder {
	color: $textColorPlaceholder !important;
}
</style>