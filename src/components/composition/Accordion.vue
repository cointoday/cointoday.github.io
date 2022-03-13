<script setup>
import Title from '@/components/core/Title.vue';
import Text from '@/components/core/Text.vue';
</script>

<script>
export default {
	components: { Title, Text }
}
</script>

<template>
	<div class="accordion" id="accordionAbout">
		<div class="accordion-item">
			<div type="h2" class="accordion-header">
				<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#whatis">
					<Text>What is Cointoday?</Text>
				</button>
			</div>
			<div id="whatis" class="accordion-collapse collapse" data-bs-parent="#accordionAbout">
				<div class="accordion-body">
					<Text>Cointoday is a software to convert amount between currencies in a simple way.</Text>
				</div>
			</div>
		</div>
		<div class="accordion-item">
			<div type="h2" class="accordion-header">
				<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#howdoesitwork">
					<Text>How does Cointoday work?</Text>
				</button>
			</div>
			<div id="howdoesitwork" class="accordion-collapse collapse" data-bs-parent="#accordionAbout">
				<div class="accordion-body">
					<Text>Cointoday works with a conversion API called "CoinConvert", you can find more about that in <a href="https://coinconvert.net/" target="_blank">https://coinconvert.net</a><br> We have no connection with CoinConvert.</Text>
				</div>
			</div>
		</div>
		<div class="accordion-item">
			<div type="h2" class="accordion-header">
				<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#doihavetopay">
					<Text>Do I have to pay to use Cointoday?</Text>
				</button>
			</div>
			<div id="doihavetopay" class="accordion-collapse collapse" data-bs-parent="#accordionAbout">
				<div class="accordion-body">
					<Text>No. You dont need to pay to use Cointoday, we are hosted using Github Pages and we are fully open source. You can contribute to the project in the Github if you want.</Text>
				</div>
			</div>
		</div>
		<div class="accordion-item">
			<div type="h2" class="accordion-header">
				<button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#howtocontribute">
					<Text>How do I contribute to Cointoday?</Text>
				</button>
			</div>
			<div id="howtocontribute" class="accordion-collapse collapse" data-bs-parent="#accordionAbout">
				<div class="accordion-body">
					<Text>You can contribute to the project using the repository on github: <a href="https://github.com/cointoday/cointoday.github.io/" target="_blank">https://github.com/cointoday/cointoday.github.io</a></Text>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@import "@/assets/css/tokens.scss";

.accordion-item {
	background-color: $containerBackgroundColor;
	border: solid 2px $textColor !important;
	border-bottom: none !important;
}

.accordion-item:last-child {
	border-bottom: solid 2px $textColor !important;
}

.accordion-button {
	background-color: $containerBackgroundColor;
	padding: 25px !important;
	box-shadow: none;
}

.accordion-button:not(.collapsed) {
  box-shadow: inset 0 -1px 0 $textColor;
}

p {
    margin-bottom: 0px !important;
}

a {
	word-break: break-all;
}
</style>