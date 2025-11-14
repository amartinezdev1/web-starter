<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

const items = ref([
	{
		content: 'Account',
		label: 'Works with all channels',
	},
	{
		content: 'Password',
		label: 'Multi-platform ready',
	},
	{
		content: 'Password',
		label: 'Cares about quality and guidelines',
	},
]);

const slideIndex: Ref<string | number> = ref(0);
const slideTo = (index: number) => {
	slideIndex.value = index;
};
</script>

<template>
	<div class="w-full py-24 sm:py-32 lg:py-40">
		<div class="flex flex-col items-center gap-6">
			<div class="max-w-xl mx-auto flex flex-col items-center gap-6">
				<p class="font-medium text-base md:text-2xl">
					Agentic Creativity
				</p>
				<h2 class="font-[Manrope] text-center font-heading font-semibold text-5xl md:text-6xl tracking-tighter leading-[1.05em]">
					Your Creative Partner
				</h2>
				<p class="text-base text-center md:text-xl font-medium leading-relaxed">
					Creates top-tier branded content across every format, platform, and channel without top-tier effort.
				</p>
			</div>
			<div class="gap-2 hidden md:flex flex-wrap justify-center">
				<UButton
					v-for="(item, index) in items"
					:key="item.label"
					:class="[
						'bg-black hover:bg-accented/20 text-white text-base md:text-md font-medium h-12 px-4 cursor-pointer rounded-md transition-all duration-200',
						slideIndex === index ? 'ring-1 ring-accented/10 bg-accented/20 text-white shadow-lg scale-105 z-10' : '',
					]"
					variant="ghost"
					@click="slideTo(index)"
				>
					{{ item.label }}
				</UButton>
			</div>
		</div>
		<SwiperTabs :active-slide="slideIndex" />
	</div>
</template>
