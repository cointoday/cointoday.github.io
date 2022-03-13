<script setup>
import Title from "@/components/core/Title.vue";
import Accordion from "@/components/composition/Accordion.vue";
</script>

<script>
export default {
	components: { Title, Accordion }
}
</script>

<template>
	<div class="col d-flex justify-content-center flex-column align-items-center">
		<Title type="h1">About</Title>
		<div>
			<Accordion />
		</div>
	</div>
</template>

<style scoped>
.accordion {
	width: 800px;
}

@media (max-width: 991px) {
	.accordion {
		width: 80vw;
	}
}
</style>