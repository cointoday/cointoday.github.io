<script setup>
import LogoImg from "@/components/core/LogoImg.vue";
import CoinConvert from "@/components/composition/CoinConvert.vue";
import Text from "@/components/core/Text.vue";
</script>

<script>
export default {
	components: { LogoImg, CoinConvert, Text }
}
</script>

<template>
	<div class="col d-flex justify-content-center flex-column align-items-center">
		<LogoImg size="30" unit="%" />
		<Text>Convert your coins</Text>
		<div class="col-sm">
			<CoinConvert />
		</div>
	</div>
</template>

<style lang="scss" scoped>
.col {
	height: calc(100vh - 150px);
}
</style>