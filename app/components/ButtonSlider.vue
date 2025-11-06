<template>
	<UButton
		class="font-bold rounded-full"
		color="neutral"
		variant="outline"
	>
		{{ props.text }}
	</UButton>
	<UChip
		standalone
		inset
		:color="props.color"
	/>
</template>

<script setup lang="ts">
const props = defineProps({
	text: {
		type: String,
		required: true,
	},
	color: {
		type: String as () => 'neutral' | 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'error',
		required: false,
		default: 'neutral',
	},
});
</script>
