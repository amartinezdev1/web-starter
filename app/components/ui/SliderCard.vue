<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const modules = [EffectCoverflow, Pagination];
const breakpoints = {
	375: {
		slidesPerView: 1,
		spaceBetween: 10,
	},
	768: {
		slidesPerView: 2,
		spaceBetween: 10,
	},
	1024: {
		slidesPerView: 3,
		spaceBetween: 20,
	},
	1280: {
		slidesPerView: 4,
		spaceBetween: 30,
	},
};

const cards = [
	{
		title: 'Animation',
		description: 'Easily add dynamic animation to any content to boost engagement, just by asking. Import from Figma too.',
		media: 'https://picsum.photos/840/1120?random=1',
	},
	{
		title: 'Ad',
		description: 'Create stunning static ads that match your company’s branding. Mix and match variants to bring your products to life.',
		media: 'https://picsum.photos/840/1120?random=2',
	},
	{
		title: 'Video',
		description: 'Kyoso mixes video models to create stunning, on-brand content, from product showcases to cinematic visuals, effortlessly.',
		media: 'https://picsum.photos/840/1120?random=3',
	},
	{
		title: 'Lookbook',
		description: 'Bring your products and ideas to life with curated, fashion-inspired visuals. Perfect for e-commerce, production, or design with impact.',
		media: 'https://picsum.photos/840/1120?random=4',
	},
	{
		title: 'Packshot',
		description: 'A setup for the product images in the neutral or studio context. For ecommerce, production, or design processes.',
		media: 'https://picsum.photos/840/1120?random=5',
	},
	{
		title: 'Aspirational',
		description: 'A creative direction that elevates the product with emotion and storytelling. For campaigns, brand positioning, or editorial work.',
		media: 'https://picsum.photos/840/1120?random=6',
	},
	{
		title: 'Lifestyle',
		description: 'A natural setting that shows products in real-life use. For ecommerce, marketing, or customer inspiration.',
		media: 'https://picsum.photos/840/1120?random=7',
	},
	{
		title: 'UGC',
		description: 'A user-generated perspective with authentic, everyday aesthetics. For social proof, community building, or organic marketing.',
		media: 'https://picsum.photos/840/1120?random=8',
	},
];

const props = defineProps<{
	class?: string;
}>();
</script>

<template>
	<swiper
		:slides-per-view="4"
		:centered-slides="true"
		:space-between="30"
		:grab-cursor="true"
		:modules="modules"
		:breakpoints="breakpoints"
		:slide-to-clicked-slide="true"
		:class="props.class"
	>
		<swiper-slide
			v-for="(card, index) in cards"
			:key="index"
		>
			<LazyMediaCard
				:card="card"
				hydrate-on-visible
			/>
		</swiper-slide>
	</swiper>
</template>
