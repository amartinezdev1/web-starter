<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const modules = [EffectCoverflow, Pagination, Navigation];
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

const props = defineProps<{
	class?: string;
}>();

const section = useContentSection('servicios');
const cards = section.value?.items;
</script>

<template>
	<ClientOnly>
		<swiper
			:slides-per-view="4"
			:centered-slides="true"
			:space-between="30"
			:grab-cursor="true"
			:modules="modules"
			:breakpoints="breakpoints"
			:slide-to-clicked-slide="true"
			:class="props.class"
			:navigation="true"
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
	</ClientOnly>
</template>
