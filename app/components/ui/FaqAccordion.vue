<script setup lang="ts">
const props = defineProps<{
	class?: string;
}>();

const section = useContentSection('faqs');
const items = section.value?.items;
</script>

<template>
	<ClientOnly>
		<UAccordion
			:items="items"
			:ui="{ body: 'text-white/50 text-base md:text-xl font-medium leading-relaxed', label: 'text-xl md:text-2xl font-medium hover:underline', item: 'border-b border-white/20 last:border-b-0' }"
			trailing-icon="material-symbols:add"
			:class="props.class"
		/>
	</ClientOnly>
</template>
