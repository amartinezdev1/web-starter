<script setup lang="ts">
import { ref } from 'vue';
import type { Ref } from 'vue';

const items = ref([
	{
		label: 'Works with all channels',
	},
	{
		label: 'Multi-platform ready',
	},
	{
		label: 'Cares about quality and guidelines',
	},
]);

const buttonClass = 'bg-black hover:bg-accented/20 text-white text-base md:text-md font-medium h-12 px-4 cursor-pointer rounded-md transition-all duration-200';

const slideIndex: Ref<string | number> = ref(0);
const slideTo = (index: number) => {
	slideIndex.value = index;
};

const brandSection = {
	headline: 'Agentic Creativity',
	title: 'Your Creative Partner',
	description: 'Creates top-tier branded content across every format, platform, and channel without top-tier effort.',
};
</script>

<template>
	<div class="w-full py-24 sm:py-32 lg:py-30">
		<div class="flex flex-col items-center gap-6">
			<TitleSection
				:hero-title="brandSection"
				:main="false"
			/>
			<div class="gap-2 hidden md:flex flex-wrap justify-center">
				<UButton
					v-for="(item, index) in items"
					:key="item.label"
					:class="[
						buttonClass,
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
