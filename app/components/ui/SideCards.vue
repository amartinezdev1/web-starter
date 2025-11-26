<script setup lang="ts">
const cards = [
	{
		title: 'Before',
		description: 'Juggling platforms, scattered content, and messy workflows. Too many tools, too little time.',
		media: '/before-dark.avif',
	},
	{
		title: 'After',
		description: 'All your workflows, united in one hub—seamless, simple, and fully compatible with your favorite models and tools, including Figma.',
		media: '/after-dark.avif',
	},
];

const props = defineProps<{
	class?: string;
}>();
</script>

<template>
	<div
		class="flex gap-6 w-full flex-col lg:flex-row"
		:class="props.class"
	>
		<div
			v-for="(card, index) in cards"
			:key="index"
			class="bg-(--ui-card-bg) rounded-4xl flex-1 flex flex-col py-10 md:py-16"
		>
			<div class="flex flex-col gap-2 px-10 md:px-16">
				<h3 class="font-medium text-lg md:text-2xl tracking-tight">
					{{ card.title }}
				</h3>
				<p class="text-base md:text-xl font-medium  leading-relaxed text-muted-foreground">
					{{ card.description }}
				</p>
			</div>
			<div class="aspect-square flex items-center justify-center px-6 md:px-4 md:scale-90">
				<img
					alt="Centralized workflow diagram with six creative steps arranged around a hub: Create brief, Generate image, Edit image, Generate video, Animate, and Upscale."
					loading="lazy"
					width="1040"
					height="1040"
					decoding="async"
					data-nimg="1"
					class="dark:block hidden"
					:src="card.media"
					style="color: transparent;"
				>
			</div>
		</div>
	</div>
</template>
