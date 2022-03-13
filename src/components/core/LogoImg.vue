<script>
export default {
	props: {
		size: {
			default: 64
		},
		unit: {
			default: "px"
		}
	}
}
</script>

<template>
	<img class="logo" :style="'height: ' + size + unit + ';'" src="@/assets/cointoday.png">
</template>

<style lang="scss" scoped>

</style>