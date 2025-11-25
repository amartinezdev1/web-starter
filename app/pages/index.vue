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

const { data: landing } = await useAsyncData('index', () => queryCollection('landing').first());
const sections = landing.value?.sections.map(section => ({
	...section,
	component: loaderComponent(section.component),
}));
</script>

<template>
	<div class="w-full">
		<UPageHero
			:id="landing?.hero?.id"
			:headline="landing?.hero?.headline"
			:title="landing?.hero?.title"
			:description="landing?.hero?.description"
			orientation="vertical"
			:links="links"
		>
			<img
				:src="landing?.hero?.image"
				alt="App screenshot"
				loading="lazy"
				class="rounded-lg shadow-2xl ring ring-default"
			>
		</UPageHero>
		<UPageSection
			v-for="(section, index) in sections"
			:id="section.id"
			:key="index"
			:title="section.title"
			:description="section.description"
			:headline="section.headline"
			orientation="vertical"
			:ui="section.ui"
		>
			<component
				:is="section.component"
				hydrate-on-visible
			/>
		</UPageSection>
	</div>
</template>
