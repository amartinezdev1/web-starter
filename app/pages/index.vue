<script setup lang="ts">
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
			:links="landing?.hero?.links as any"
			orientation="vertical"
		>
			<img
				:src="landing?.hero?.image"
				alt="Hero main image for the landing page"
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
				class="w-full"
			/>
		</UPageSection>
	</div>
</template>
