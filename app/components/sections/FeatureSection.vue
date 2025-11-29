<script setup lang="ts">
const props = defineProps<{
	class?: string;
}>();

const section = useContentSection('soluciones');
const features = section.value?.items;
</script>

<template>
	<ClientOnly>
		<div
			class="grid md:grid-cols-2 gap-x-6 gap-y-10 md:gap-y-20"
			:class="props.class"
		>
			<div
				v-for="(feature, index) in features"
				:key="index"
				class="flex flex-col gap-6"
			>
				<LazyMediaCard
					:card="feature"
					hydrate-on-visible
				/>
			</div>
		</div>
	</ClientOnly>
</template>
