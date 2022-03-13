<script>
export default {
	props: {
		id: {
			required: false
		}
	}
}
</script>

<template>
	<datalist :id="id">
		<slot></slot>
	</datalist>
</template>