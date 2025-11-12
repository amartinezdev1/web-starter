<script setup lang="ts">
const links = ref([
	{
		label: 'Get started',
		to: '/',
		icon: 'i-lucide-square-play',
	},
	{
		label: 'Learn more',
		to: '/',
		color: 'neutral' as const,
		variant: 'subtle' as const,
		trailingIcon: 'i-lucide-arrow-right',
	},
]);
</script>

<template>
	<div>
		<UPageHero
			title="Ultimate Vue UI library"
			description="A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications."
			orientation="vertical"
			:links="links"
		>
			<img
				src="../assets/mock-dark.avif"
				alt="App screenshot"
				class="rounded-lg shadow-2xl ring ring-default"
			>
		</UPageHero>
		<SwiperAdvance />
	</div>
</template>
