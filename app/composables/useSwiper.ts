import { ref, nextTick, watch, type Ref } from 'vue';
import type { Swiper as SwiperClass } from 'swiper';

export function useSwiper(activeSlide: Ref<number | string>) {
	const swiperRef: Ref<SwiperClass | null> = ref(null);

	const onSwiper = (swiper: SwiperClass) => {
		swiperRef.value = swiper;

		nextTick(() => {
			const index = Number(activeSlide.value) || 0;
			swiper.slideTo(index);
		});
	};

	watch(activeSlide, (value) => {
		if (!swiperRef.value) return;

		nextTick(() => {
			const index = Number(value) || 0;
			swiperRef.value!.slideTo(index);
		});
	});

	return { onSwiper };
}
