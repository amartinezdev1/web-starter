<script setup lang="ts">
const props = defineProps({
	card: {
		type: Object as () => {
			title?: string;
			description?: string;
			media?: string;
			class?: string;
		},
		required: true,
	},
});
</script>

<template>
	<div class=" flex flex-col gap-6 px-4 md:px-0.5">
		<div class="cursor-pointer transition-transform duration-200 ease-out hover:scale-[1.01]">
			<component
				:is="props.card.media?.endsWith('.mp4') ? 'video' : 'img'"
				:src="props.card.media"
				v-bind="props.card.media?.endsWith('.mp4') ? { loop: true, playsinline: true, preload: 'none' } : {}"
				:alt="props.card.title"
				loading="lazy"
				class="bg-[#171717] size-full object-cover rounded-4xl"
			/>
		</div>
		<div class="px-2">
			<h3 class="text-white font-medium text-base md:text-xl leading-relaxed">
				{{ props.card.title }}
			</h3>
			<p class="text-white/50 font-medium text-base md:text-xl leading-relaxed">
				{{ props.card.description }}
			</p>
		</div>
	</div>
</template>
