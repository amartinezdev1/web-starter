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
				src="../assets/mock-dark.avif"
				alt="App screenshot"
				class="rounded-lg shadow-2xl ring ring-default"
			>
		</UPageHero>
		<div class="w-full">
			<LazyTitleSection
				:hero-title="exampleSection"
				:main="false"
			/>
			<LazySwiperAdvance hydrate-on-visible />
		</div>
		<LazyTabsItems hydrate-on-visible />
	</div>
</template>
