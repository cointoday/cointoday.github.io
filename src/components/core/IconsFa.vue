<script>
export default {
	props: {
		icon: {
			required: true
		},
		title: {
			required: false
		},
		size: {
			default: "24px"
		}
	}
}
</script>

<template>
	<i :class="'icons fa ' + icon" :title="title" :style="'font-size: ' + size + ';'"></i>
</template>

<style lang="scss" scoped>
@import '@/assets/css/tokens.scss';
.icons {
	cursor: pointer;
	color: $textColor;
}
</style>