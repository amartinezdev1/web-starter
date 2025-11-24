<script setup lang="ts">
import MediaCard from '../ui/MediaCard.vue';

const features = [
	{
		title: 'Animation',
		description: 'Easily add dynamic animation to any content to boost engagement, just by asking. Import from Figma too.',
		media: 'https://picsum.photos/840/1120?random=9',
	},
	{
		title: 'Ad',
		description: 'Create stunning static ads that match your company’s branding. Mix and match variants to bring your products to life.',
		media: 'https://picsum.photos/840/1120?random=10',
	},
	{
		title: 'Video',
		description: 'Kyoso mixes video models to create stunning, on-brand content, from product showcases to cinematic visuals, effortlessly.',
		media: 'https://picsum.photos/840/1120?random=11',
	},
	{
		title: 'Lookbook',
		description: 'Bring your products and ideas to life with curated, fashion-inspired visuals. Perfect for e-commerce, production, or design with impact.',
		media: 'https://picsum.photos/840/1120?random=12',
	},
	{
		title: 'Packshot',
		description: 'A setup for the product images in the neutral or studio context. For ecommerce, production, or design processes.',
		media: 'https://picsum.photos/840/1120?random=13',
	},
	{
		title: 'Aspirational',
		description: 'A creative direction that elevates the product with emotion and storytelling. For campaigns, brand positioning, or editorial work.',
		media: 'https://picsum.photos/840/1120?random=14',
	},
];
</script>

<template>
	<div class="grid md:grid-cols-2 gap-x-6 gap-y-10 md:gap-y-20 w-full">
		<div
			v-for="(feature, index) in features"
			:key="index"
			class="flex flex-col gap-6"
		>
			<MediaCard :card="feature" />
		</div>
	</div>
</template>
