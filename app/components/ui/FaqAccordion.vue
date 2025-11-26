<script setup lang="ts">
const items = ref([
	{
		label: 'Is Nuxt UI free to use?',
		content: 'Yes! Nuxt UI is completely free and open source under the MIT license. All 100+ components are available to everyone.',
	},
	{
		label: 'Can I use Nuxt UI with Vue without Nuxt?',
		content: 'Yes! While optimized for Nuxt, Nuxt UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/docs/getting-started/installation/vue) to get started.',
	},
	{
		label: 'Is Nuxt UI production-ready?',
		content: 'Yes! Nuxt UI is used in production by thousands of applications with extensive tests, regular updates, and active maintenance.',
	},
]);
const props = defineProps<{
	class?: string;
}>();
</script>

<template>
	<UAccordion
		:items="items"
		:ui="{ body: 'text-white/50 text-base md:text-xl font-medium leading-relaxed', label: 'text-xl md:text-2xl font-medium hover:underline', item: 'border-b border-white/20 last:border-b-0' }"
		trailing-icon="material-symbols:add"
		:class="props.class"
	/>
</template>
