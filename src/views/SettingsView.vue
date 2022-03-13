<script setup>
import InputForm from '@/components/core/InputForm.vue'
import SettingsTheme from '@/components/composition/settings/SettingsTheme.vue';
import SettingsCache from '@/components/composition/settings/SettingsCache.vue';
import Title from '@/components/core/Title.vue';
</script>

<script>
export default {
	components: { InputForm, SettingsTheme, SettingsCache, Title }
}
</script>

<template>
	<div class="col d-flex justify-content-center flex-column align-items-center">
		<Title type="h1">Settings</Title>
		<div>
			<SettingsTheme />
		</div>
		<div>
			<SettingsCache />
		</div>
	</div>
</template>
