<script setup lang="ts">
const links = ref([
	{
		label: 'Join waitlist',
		to: '/',
		color: 'neutral' as const,
		variant: 'solid' as const,
		class: 'font-medium text-base md:text-lg h-12 px-4 cursor-pointer rounded-md',
	},
	{
		label: 'Watch demo',
		to: '/',
		icon: 'lucide:circle-play',
		variant: 'ghost' as const,
		class: 'bg-black hover:bg-accented/20 text-white text-base md:text-md font-medium h-12 px-4 cursor-pointer rounded-md transition-all duration-200 ring-1 ring-accented/10 bg-accented/20 text-white shadow-lg scale-105 z-10',

	},
]);

const mainSection = {
	headline: '',
	title: 'Your Creative Agentic Partner',
	description: '100x your marketing with an AI creative team. The worlds first AI designer, marketer, and ad creator in one.',
};

const exampleSection = {
	headline: 'Examples',
	title: 'What can we create together?',
	description: '',
};

const comparisonSection = {
	headline: 'Comparison',
	title: 'No more platform hopping',
	description: '100x your marketing with an AI creative team. The worlds first AI designer, marketer, and ad creator in one.',
};

const brandSection = {
	headline: 'Agentic Creativity',
	title: 'Your Creative Partner',
	description: 'Creates top-tier branded content across every format, platform, and channel without top-tier effort.',
};

const featuresSection = {
	headline: 'Features',
	title: 'Explore more',
	description: 'Discover our ever-growing collection of tools and opportunities for content creators.',
};

const pricingSection = {
	headline: 'Pricing',
	title: 'For all teams',
	description: 'Accessible for all type of the content creators and businesses.',
};

const questionsSection = {
	headline: 'FAQs',
	title: 'Frequently asked questions',
	description: 'Get your questions answered.',
};
</script>

<template>
	<div>
		<UPageHero
			orientation="vertical"
			:links="links"
		>
			<template #header>
				<UBadge
					color="neutral"
					variant="outline"
					class="mb-8 bg-black ring-0 border border-white"
				>
					New release
				</UBadge>
				<LazyTitleSection
					:hero-title="mainSection"
					:main="true"
				/>
			</template>
			<img
				src="/mock-dark.avif"
				alt="App screenshot"
				class="rounded-lg shadow-2xl ring ring-default"
			>
		</UPageHero>
		<div
			id="services"
			class="w-full"
		>
			<LazyTitleSection
				:hero-title="exampleSection"
				:main="false"
			/>
			<LazySwiperAdvance hydrate-on-visible />
		</div>
		<UPageHero>
			<template #default>
				<div class="w-full flex flex-col gap-12 md:gap-16 items-center">
					<LazyTitleSection
						:hero-title="comparisonSection"
						:main="false"
					/>
				</div>
				<LazyComparisonCards />
			</template>
		</UPageHero>
		<div
			id="about"
			class="w-full py-24 sm:py-32 lg:py-30"
		>
			<div class="flex flex-col items-center gap-6">
				<LazyTitleSection
					:hero-title="brandSection"
					:main="false"
				/>
				<LazyTabsItems hydrate-on-visible />
			</div>
		</div>
		<UPageHero id="features">
			<template #default>
				<div class="w-full flex flex-col gap-12 md:gap-16 items-center">
					<LazyTitleSection
						:hero-title="featuresSection"
						:main="false"
					/>
					<LazyFeaturesCards hydrate-on-visible />
				</div>
			</template>
		</UPageHero>
		<UPageHero>
			<template #default>
				<div class="w-full flex flex-col gap-12 md:gap-16 items-center">
					<LazyTitleSection
						:hero-title="pricingSection"
						:main="false"
					/>
					<LazyPricingCards />
				</div>
			</template>
		</UPageHero>
		<UPageHero id="faqs">
			<template #default>
				<div class="w-full flex flex-col gap-12 md:gap-16 items-center">
					<LazyTitleSection
						:hero-title="questionsSection"
						:main="false"
					/>
					<LazyFaqsAccordion class="w-full max-w-3xl px-4" />
				</div>
			</template>
		</UPageHero>
	</div>
</template>
