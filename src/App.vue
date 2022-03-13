<script setup>
import '@/assets/css/app.scss'

import Navbar from '@/components/composition/Navbar.vue'
import SettingsTheme from '@/components/composition/settings/SettingsTheme.vue';
</script>

<script>
export default {
	components: { Navbar, SettingsTheme }
}
</script>

<template>
	<SettingsTheme :showGui="false" />
	<Navbar />

	<div class="container" style="margin-top: 20px;">
		<RouterView />
	</div>
</template>