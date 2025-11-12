<template>
	<!-- <ClientOnly>
		<swiper
			id="app"
			:effect="'coverflow'"
			:grab-cursor="true"
			:centered-slides="true"
			:slides-per-view="'auto'"
			:coverflow-effect="{
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: true,
			}"
			:pagination="true"
			:modules="modules"
			class="mySwiper"
		>
			<swiper-slide>
				<img
					src="https://swiperjs.com/demos/images/nature-1.jpg"
				>
			</swiper-slide><swiper-slide>
				<img
					src="https://swiperjs.com/demos/images/nature-2.jpg"
				>
			</swiper-slide><swiper-slide>
				<img
					src="https://swiperjs.com/demos/images/nature-3.jpg"
				>
			</swiper-slide><swiper-slide>
				<img
					src="https://swiperjs.com/demos/images/nature-4.jpg"
				>
			</swiper-slide><swiper-slide>
				<img
					src="https://swiperjs.com/demos/images/nature-5.jpg"
				>
			</swiper-slide><swiper-slide>
				<img
					src="https://swiperjs.com/demos/images/nature-6.jpg"
				>
			</swiper-slide><swiper-slide>
				<img
					src="https://swiperjs.com/demos/images/nature-7.jpg"
				>
			</swiper-slide><swiper-slide>
				<img
					src="https://swiperjs.com/demos/images/nature-8.jpg"
				>
			</swiper-slide><swiper-slide>
				<img src="https://swiperjs.com/demos/images/nature-9.jpg">
			</swiper-slide>
		</swiper>
	</ClientOnly> -->
	<ClientOnly>
		<swiper
			:slides-per-view="4"
			:centered-slides="true"
			:space-between="30"
			:grab-cursor="true"
			:modules="modules"
			class="mySwiper"
		>
			<swiper-slide>
				<img
					src="https://swiperjs.com/demos/images/nature-1.jpg"
				>
			</swiper-slide><swiper-slide>
				<img
					src="https://swiperjs.com/demos/images/nature-2.jpg"
				>
			</swiper-slide><swiper-slide>
				<img
					src="https://swiperjs.com/demos/images/nature-3.jpg"
				>
			</swiper-slide><swiper-slide>
				<img
					src="https://swiperjs.com/demos/images/nature-4.jpg"
				>
			</swiper-slide><swiper-slide>
				<img
					src="https://swiperjs.com/demos/images/nature-5.jpg"
				>
			</swiper-slide><swiper-slide>
				<img
					src="https://swiperjs.com/demos/images/nature-6.jpg"
				>
			</swiper-slide><swiper-slide>
				<img
					src="https://swiperjs.com/demos/images/nature-7.jpg"
				>
			</swiper-slide><swiper-slide>
				<img
					src="https://swiperjs.com/demos/images/nature-8.jpg"
				>
			</swiper-slide><swiper-slide>
				<img src="https://swiperjs.com/demos/images/nature-9.jpg">
			</swiper-slide>
		</swiper>
	</ClientOnly>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default {
	components: {
		Swiper,
		SwiperSlide,
	},
	setup() {
		return {
			modules: [EffectCoverflow, Pagination],
		};
	},
};
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
  font-family:
    Helvetica Neue,
    Helvetica,
    Arial,
    sans-serif;
  font-size: 14px;
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
  width: 300px;
  height: 300px;
}

.swiper-slide img {
  display: block;
  width: 100%;
}
</style>
