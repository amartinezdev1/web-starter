<script setup lang="ts">
import { computed, toRef } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { useSwiper } from '~/composables/useSwiper';
import { EffectCoverflow, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const props = defineProps<{
	class?: string;
	activeSlide: number | string;
}>();

const section = useContentSection('enfoque');
const slides = computed(() => section.value?.items ?? []);
const { onSwiper } = useSwiper(toRef(props, 'activeSlide'));

const modules = [EffectCoverflow, Pagination, Navigation];
const breakpoints = {
	375: { slidesPerView: 1, spaceBetween: 10 },
	768: { slidesPerView: 1, spaceBetween: 20 },
	1024: { slidesPerView: 1.2, spaceBetween: 30 },
	1280: { slidesPerView: 1.2, spaceBetween: 30 },
};
</script>

<template>
	<swiper
		:modules="modules"
		:breakpoints="breakpoints"
		:slides-per-view="1.2"
		:centered-slides="true"
		:space-between="30"
		:grab-cursor="true"
		:slide-to-clicked-slide="true"
		:navigation="true"
		:class="props.class"
		@swiper="onSwiper"
	>
		<swiper-slide
			v-for="(slide, index) in slides"
			:key="index"
		>
			<video
				:src="slide.media"
				playsinline
				autoplay
				muted
				loop
				preload="metadata"
				class="w-full h-full object-cover aspect-video rounded-lg md:rounded-4xl transition-transform duration-200 hover:scale-[1.01]"
				:alt="slide.title"
			/>
		</swiper-slide>
	</swiper>
</template>

<style scoped>
.swiper {
  width: 95%;
}
</style>
