<script>
export default {
	props: {
		type: {
			type: String,
			default: "h1"
		}
	}
}
</script>

<template>
<h1 v-if="type == 'h1'"><slot></slot></h1>
<h2 v-if="type == 'h2'"><slot></slot></h2>
<h3 v-if="type == 'h3'"><slot></slot></h3>
<h4 v-if="type == 'h4'"><slot></slot></h4>
<h5 v-if="type == 'h5'" title=""><slot></slot></h5>
<h6 v-if="type == 'h6'"><slot></slot></h6>
</template>

<style lang="scss" scoped>
@import "@/assets/css/tokens.scss";
h1, h2, h3, h4, h5, h6 {
	color: $textColor;
}
</style>