<script setup>
import IconsFa from '@/components/core/IconsFa.vue';
import Title from '@/components/core/Title.vue';
import Text from '@/components/core/Text.vue';
</script>

<script>
export default {
	props: {
		showGui: {
			type: Boolean,
			default: true
		}
	},
	created() {
		this.verifyThemeFromCache();
	},
	methods: {
		setTheme(themeName) {
			localStorage.setItem('data-theme', themeName);
			document.documentElement.setAttribute('data-theme', themeName);
		},
		toggleTheme() {
			if (localStorage.getItem('data-theme') == 'dark') this.setTheme('light'); else this.setTheme('dark');
		},
		verifyThemeFromCache() {
			if (localStorage.getItem('data-theme') == 'dark') this.setTheme('dark'); else this.setTheme('light');
		}
	},
	components: { IconsFa, Title, Text }
}
</script>

<template>
	<div v-if="showGui == true" class="text-center">
		<Title type="h3">Theme</Title>
		<div>
			<IconsFa class="icon" title="Toggle theme between dark and white" @click="toggleTheme()" icon="fa-moon-o" />
			<Text @click="toggleTheme()" style="cursor: pointer">Change theme</Text>
		</div>
	</div>
</template>

<style scoped>
.icon {
	margin-right: 5px
}
</style>