<script setup lang="ts">
import type { Ref } from 'vue';
import type { Swiper as SwiperClass } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/vue';
import { ref, watch, nextTick, computed } from 'vue';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const modules = [EffectCoverflow, Pagination];

const breakpoints = {
	375: {
		slidesPerView: 1,
		spaceBetween: 10,
	},
	768: {
		slidesPerView: 1,
		spaceBetween: 20,
	},
	1024: {
		slidesPerView: 1.2,
		spaceBetween: 30,
	},
	1280: {
		slidesPerView: 1.2,
		spaceBetween: 30,
	},
};

const slides = [
	{
		media: 'https://videos.pexels.com/video-files/5473806/5473806-uhd_2732_1440_25fps.mp4',
	},
	{
		media: 'https://videos.pexels.com/video-files/33237483/14161812_2560_1440_25fps.mp4',
	},
	{
		media: 'https://videos.pexels.com/video-files/7947406/7947406-hd_1920_1080_30fps.mp4',
	},
];

const props = defineProps<{
	activeSlide: string | number;
}>();

const activeIndex = computed<number>(() => {
	const v = props.activeSlide;
	const n = typeof v === 'number' ? v : Number(v);
	return Number.isFinite(n) ? (n as number) : 0;
});

const swiperRef: Ref<SwiperClass | null> = ref(null);

const onSwiper = (swiper: SwiperClass) => {
	swiperRef.value = swiper;
	nextTick(() => {
		swiperRef.value?.slideTo(activeIndex.value);
	});
};

watch(
	activeIndex,
	(newIndex) => {
		if (!swiperRef.value) return;
		nextTick(() => {
			swiperRef.value!.slideTo(newIndex);
		});
	},
);
</script>

<template>
	<swiper
		:slides-per-view="1.2"
		:centered-slides="true"
		:space-between="30"
		:grab-cursor="true"
		:modules="modules"
		:breakpoints="breakpoints"
		:slide-to-clicked-slide="true"
		@swiper="onSwiper"
	>
		<swiper-slide
			v-for="(slide, index) in slides"
			:key="index"
		>
			<video
				autoplay
				muted
				playsinline
				preload="auto"
				loop
				:src="slide.media"
				class="w-full h-full object-cover aspect-video rounded-lg md:rounded-4xl cursor-pointer transition-transform duration-200 ease-out hover:scale-[1.01] relative"
			/>
		</swiper-slide>
	</swiper>
</template>

<style scoped lang="scss">
#app {
  height: 100%;
}

html, body {
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
  width: 95%;
}

.swiper-slide {
  background-size: cover;
}
</style>
