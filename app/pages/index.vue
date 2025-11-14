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
		class: 'bg-black hover:bg-accented/20 text-white text-base md:text-lg font-medium h-12 px-4 cursor-pointer rounded-md',

	},
]);
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
				<div class="flex flex-col gap-8 max-w-xl mx-auto">
					<h1 class="font-[Manrope] text-center font-heading font-semibold text-5xl md:text-7xl tracking-tighter leading-[1.05em]">
						Your Creative Agentic Partner
					</h1>
					<p class="text-base md:text-xl font-medium  leading-relaxed">
						100x your marketing with an AI creative team. The world's first AI designer, marketer, and ad creator in one.
					</p>
				</div>
			</template>
			<img
				src="../assets/mock-dark.avif"
				alt="App screenshot"
				class="rounded-lg shadow-2xl ring ring-default"
			>
		</UPageHero>
		<div class="w-full">
			<div class="flex flex-col gap-6 items-center text-center max-w-sm md:max-w-xl mx-auto">
				<h5 class="text-center font-medium text-base md:text-2xl ">
					Examples
				</h5>
				<h2 class="text-center font-[Manrope] font-heading font-semibold text-5xl md:text-6xl tracking-tighter leading-[1.05em]">
					What can we create together?
				</h2>
			</div>
			<LazySwiperAdvance hydrate-on-visible />
		</div>
		<LazyTabsItems hydrate-on-visible />
	</div>
</template>
