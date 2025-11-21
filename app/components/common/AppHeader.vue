<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
	{
		label: 'Services',
		to: '/#services',
		active: route.path.startsWith('/'),
	},
	{
		label: 'About',
		to: '/#about',
		active: route.path.startsWith('/'),
	},
	{
		label: 'Features',
		to: '/#features',
		class: 'text-white',
	},
	{
		label: 'FAQs',
		to: '/#faqs',
		class: 'text-white',
	},
]);
</script>

<template>
	<UHeader
		title="Bit Flow"
		class="min-w-screen fixed border-0 bg-default/0"
	>
		<UNavigationMenu
			:items="items"
			variant="link"
			color="neutral"
		/>

		<template #right>
			<UButton
				color="neutral"
				variant="ghost"
				to="https://github.com/nuxt/ui"
				target="_blank"
				icon="i-simple-icons-github"
				aria-label="GitHub"
			/>
		</template>
	</UHeader>
</template>
