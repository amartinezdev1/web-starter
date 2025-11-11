<script setup lang="ts">
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
					class="bg-black border border-white rounded-lg"
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
	</div>
</template>
