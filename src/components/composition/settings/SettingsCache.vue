<script setup>
import Title from '@/components/core/Title.vue';
import IconsFa from '@/components/core/IconsFa.vue';
import Text from '@/components/core/Text.vue';
</script>

<script>
export default {
	methods: {
		clearCache() {
			localStorage.removeItem("data-theme");
			localStorage.removeItem("amount1");
			localStorage.removeItem("amount2");
			localStorage.removeItem("coin1");
			localStorage.removeItem("coin2");
			alert("Cache was cleared!");
		}
	},
	components: { Title, IconsFa, Text }
}
</script>

<template>
	<div class="text-center">
		<Title type="h3">Cache</Title>
		<div>
			<IconsFa class="icon" title="Clear cache" @click="clearCache()" icon="fa-trash" />
			<Text @click="clearCache()" style="cursor: pointer">Clear cache</Text>
		</div>
	</div>
</template>