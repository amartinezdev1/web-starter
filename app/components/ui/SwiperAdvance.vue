<template>
	<swiper
		:slides-per-view="4"
		:centered-slides="true"
		:space-between="30"
		:grab-cursor="true"
		:modules="modules"
		:breakpoints="breakpoints"
		class="mySwiper"
	>
		<swiper-slide
			v-for="card in cards"
			:key="card.id"
		>
			<ServicesCards :card="card" />
		</swiper-slide>
	</swiper>
</template>

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
		id: 1,
		title: 'Animation',
		description: 'Easily add dynamic animation to any content to boost engagement, just by asking. Import from Figma too.',
		media: 'https://picsum.photos/840/1120?random=1',
	},
	{
		id: 2,
		title: 'Ad',
		description: 'Create stunning static ads that match your company’s branding. Mix and match variants to bring your products to life.',
		media: 'https://picsum.photos/840/1120?random=2',
	},
	{
		id: 3,
		title: 'Video',
		description: 'Kyoso mixes video models to create stunning, on-brand content, from product showcases to cinematic visuals, effortlessly.',
		media: 'https://picsum.photos/840/1120?random=3',
	},
	{
		id: 4,
		title: 'Lookbook',
		description: 'Bring your products and ideas to life with curated, fashion-inspired visuals. Perfect for e-commerce, production, or design with impact.',
		media: 'https://picsum.photos/840/1120?random=4',
	},
	{
		id: 5,
		title: 'Packshot',
		description: 'A setup for the product images in the neutral or studio context. For ecommerce, production, or design processes.',
		media: 'https://picsum.photos/840/1120?random=5',
	},
	{
		id: 6,
		title: 'Aspirational',
		description: 'A creative direction that elevates the product with emotion and storytelling. For campaigns, brand positioning, or editorial work.',
		media: 'https://picsum.photos/840/1120?random=6',
	},
	{
		id: 7,
		title: 'Lifestyle',
		description: 'A natural setting that shows products in real-life use. For ecommerce, marketing, or customer inspiration.',
		media: 'https://picsum.photos/840/1120?random=7',
	},
	{
		id: 8,
		title: 'UGC',
		description: 'A user-generated perspective with authentic, everyday aesthetics. For social proof, community building, or organic marketing.',
		media: 'https://picsum.photos/840/1120?random=8',
	},
];
</script>

<style>
#app {
  height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
}

body {
  background: #000;
  color: #fff;
  margin: 0;
  padding: 0;
}

.swiper {
  width: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.swiper-slide {
  background-position: center;
  background-size: cover;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>
