<script setup lang="ts">
const props = defineProps<{
	heroTitle: {
		headline: string;
		title: string;
		description: string;
	};
	main: boolean;
}>();
</script>

<template>
	<div class="max-w-xl mx-auto flex flex-col items-center gap-6">
		<p
			v-show="props.heroTitle.headline.length>0"
			class="font-medium text-base md:text-2xl"
		>
			{{ props.heroTitle.headline }}
		</p>
		<h2 :class="['font-[Manrope] text-center font-heading font-semibold text-5xl tracking-tighter leading-[1.05em]', props.main ? 'md:text-7xl' : 'md:text-6xl']">
			{{ props.heroTitle.title }}
		</h2>
		<p
			v-show="props.heroTitle.description.length>0"
			class="text-base text-center md:text-xl font-medium leading-relaxed"
		>
			{{ props.heroTitle.description }}
		</p>
	</div>
</template>
