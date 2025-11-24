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
	<div class="w-full">
		<UPageHero
			headline="New release"
			title="Your Creative Agentic Partner"
			description="100x your marketing with an AI creative team. The worlds first AI designer, marketer, and ad creator in one."
			orientation="vertical"
			:links="links"
		>
			<img
				src="/mock-dark.avif"
				alt="App screenshot"
				class="rounded-lg shadow-2xl ring ring-default"
				loading="lazy"
			>
		</UPageHero>
		<UPageSection
			id="services"
			title="What can we create together?"
			headline="Examples"
			:ui="{ root: 'relative', container: 'max-w-(100vw)' }"
		>
			<LazySliderCard
				class="w-full"
				hydrate-on-visible
			/>
		</UPageSection>
		<UPageSection
			title="No more platform hopping"
			description="100x your marketing with an AI creative team. The worlds first AI designer, marketer, and ad creator in one."
			headline="Comparison"
			orientation="vertical"
		>
			<LazySideCards hydrate-on-visible />
		</UPageSection>
		<UPageSection
			id="about"
			title="Your Creative Partner"
			description="100x your marketing with an AI creative team. The worlds first AI designer, marketer, and ad creator in one."
			headline="Agentic Creativity"
			orientation="vertical"
			:ui="{ root: 'relative', container: 'max-w-(100vw)' }"
		>
			<LazySliderControls hydrate-on-visible />
		</UPageSection>
		<UPageSection
			id="features"
			title="Explore more"
			description="Discover our ever-growing collection of tools and opportunities for content creators."
			headline="Features"
			orientation="vertical"
		>
			<LazyFeatureSection hydrate-on-visible />
		</UPageSection>
		<UPageSection
			title="For all teams"
			description="Accessible for all type of the content creators and businesses."
			headline="Pricing"
			orientation="vertical"
		>
			<LazyPriceSection hydrate-on-visible />
		</UPageSection>
		<UPageSection
			id="faqs"
			title="Frequently asked questions"
			description="Get your questions answered."
			headline="FAQs"
			orientation="vertical"
		>
			<LazyFaqAccordion
				class="max-w-3xl mx-auto px-4"
				hydrate-on-visible
			/>
		</UPageSection>
	</div>
</template>
