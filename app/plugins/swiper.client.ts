import { defineNuxtPlugin } from '#app';
import { Swiper, SwiperSlide } from 'swiper/vue';

// Este plugin se ejecuta solo en cliente por el sufijo .client.ts
// Registra componentes globalmente para poder usarlos en cualquier componente
export default defineNuxtPlugin((nuxtApp) => {
	nuxtApp.vueApp.component('Swiper', Swiper);
	nuxtApp.vueApp.component('SwiperSlide', SwiperSlide);
});
