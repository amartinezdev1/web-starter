<script setup lang="ts">
const items = [
	'https://picsum.photos/468/468?random=1',
	'https://picsum.photos/468/468?random=2',
	'https://picsum.photos/468/468?random=3',
	'https://picsum.photos/468/468?random=4',
	'https://picsum.photos/468/468?random=5',
	'https://picsum.photos/468/468?random=6',
];
</script>

<template>
	<div>
		<UPageHero
			class="min-h-screen flex items-center p-0 lg:p-1"
		>
			<template #headline>
				<UBadge
					color="neutral"
					variant="outline"
					size="md"
					class="bg-black border border-white ring-0 rounded-lg"
				>
					New release
				</UBadge>
			</template>
			<template #title>
				<h1 class="font-[Manrope] text-5xl sm:text-7xl text-pretty tracking-tight font-semibold text-highlighted">
					Your Creative <br> Agentic Partner
				</h1>
			</template>
			<template #description>
				<p class="text-base md:text-xl font-medium leading-relaxed text-white">
					100x your marketing with an AI creative team. The world's first <br> AI designer, marketer, and ad creator in one.
				</p>
			</template>
			<template #footer>
				<div class="flex items-center justify-center gap-3 mb-16">
					<UButton
						size="xl"
						color="neutral"
						class="h-12 px-4 text-base md:text-lg rounded-md"
					>
						Join waitlist
					</UButton>
					<UButton
						size="xl"
						icon="i-lucide-square-play"
						class="h-12 px-5 bg-black dark:hover:bg-accented/20 text-white text-base md:text-lg rounded-md"
					>
						Watch demo
					</UButton>
				</div>
				<div
					style="perspective: 1200px;"
				>
					<img
						alt="Hero"
						width="1320"
						height="720"
						src="../assets/mock-dark.avif"
					>
				</div>
			</template>
		</UPageHero>
		<UPageHero
			:ui="{ container: 'py-18 sm:py-30 md:py-24 lg:py-24' }"
		>
			<template #headline>
				<div class="flex flex-col gap-6 items-center text-center max-w-[560px] mx-auto">
					<h3 class="font-medium text-base md:text-2xl text-white">
						Examples
					</h3>
					<h2 class="font-heading font-semibold text-5xl md:text-6xl tracking-tighter leading-[1.05em] text-white">
						What can we create together?
					</h2>
				</div>
			</template>
			<template #body>
				<div class="">
					<UCarousel
						v-slot="{ item }"
						:items="items"
						:ui="{ item: 'basis-1/4' }"
					>
						<img
							:src="item"
							width="840"
							height="1120"
							class="rounded-lg"
						>
					</UCarousel>
				</div>
			</template>
		</UPageHero>
	</div>
</template>
