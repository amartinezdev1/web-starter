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

<script setup>
const props = defineProps({
	text: {
		type: String,
		required: true,
	},
	color: {
		type: String,
		required: true,
	},
});
</script>
