<script setup lang="ts">
import { Navigation, Pagination, Autoplay } from 'swiper/modules';

const slides = [
	{ id: 1, title: 'Slide 1', color: '#ffdede' },
	{ id: 2, title: 'Slide 2', color: '#defff0' },
	{ id: 3, title: 'Slide 3', color: '#e8f0ff' },
	{ id: 4, title: 'Slide 1', color: '#ffdede' },
	{ id: 5, title: 'Slide 2', color: '#defff0' },
	{ id: 6, title: 'Slide 3', color: '#e8f0ff' },
	{ id: 7, title: 'Slide 1', color: '#ffdede' },
	{ id: 8, title: 'Slide 2', color: '#defff0' },
	{ id: 9, title: 'Slide 3', color: '#e8f0ff' },
];
</script>

<template>
	<ClientOnly>
		<!-- Usamos los componentes registrados globalmente en plugins/swiper.client.ts -->
		<Swiper
			:modules="[Navigation, Pagination, Autoplay]"
			:space-between="20"
			:slides-per-view="3"
			navigation
			:pagination="{ clickable: true }"
			:autoplay="{ delay: 3000, pauseOnMouseEnter: true }"
			class="my-swiper"
		>
			<SwiperSlide
				v-for="s in slides"
				:key="s.id"
			>
				<div
					class="slide"
					:style="{ background: s.color }"
				>
					<h3>{{ s.title }}</h3>
				</div>
			</SwiperSlide>
		</Swiper>
	</ClientOnly>
</template>

<style scoped>
.my-swiper {
  width: 100%;
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem 0;
}
.slide {
  height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8px;
}
</style>
