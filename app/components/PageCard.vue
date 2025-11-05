<template>
	<UPageCard
		v-for="(item, index) in props.features"
		:key="index"
		spotlight
		variant="outline"
	>
		<template #header>
			<div class="flex justify-between items-center">
				<p class="text-base text-pretty font-semibold text-highlighted">
					{{ item.title }}
				</p>
				<UIcon
					:name="item.icon"
					size="24px"
				/>
			</div>
		</template>
		<template #body>
			<p class="text-[15px] text-pretty">
				{{ item.description }}
			</p>
		</template>
		<template #footer>
			<div
				class="flex items-center justify-between"
			>
				<UIcon
					:name="item.icon"
					size="32px"
				/>
				<UButton
					class="font-bold rounded-full"
					color="neutral"
					variant="outline"
					:to="item.to"
				>
					$49 USD / Visit
				</UButton>
			</div>
		</template>
	</UPageCard>
</template>

<script setup lang="ts">
const props = defineProps<{
	features: Array<{
		title: string;
		description: string;
		icon: string;
		to: string;
	}>;
}>();
</script>

<style scoped>
</style>
