<script setup lang="ts">
import type { ButtonProps } from '@nuxt/ui';

const links = ref<ButtonProps[]>([
	{
		label: 'Get started',
		to: '/docs/getting-started',
		color: 'neutral',
		class: 'font-bold rounded-full',
	},
	{
		label: 'Learn more',
		to: '/docs/getting-started/theme/design-system',
		color: 'neutral', // "neutral" is a valid ButtonProps color value
		variant: 'link',
		trailingIcon: 'i-lucide-arrow-right',
	},
]);
</script>

<template>
	<UPageHero
		title="Ultimate Vue UI library"
		description="A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications."
		headline="New release"
		orientation="horizontal"
		:links="links"
	>
		<img
			src="https://ui.nuxt.com/_ipx/_/blocks/image4.png"
			alt="App screenshot"
			class="rounded-lg shadow-2xl ring ring-default"
		>
	</UPageHero>
</template>
