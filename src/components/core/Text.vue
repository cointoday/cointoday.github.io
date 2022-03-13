<script>
export default {
	props: {
	}
}
</script>

<template>
<p><slot></slot></p>
</template>

<style lang="scss" scoped>
@import "@/assets/css/tokens.scss";
p {
	color: $textColor
}
</style>