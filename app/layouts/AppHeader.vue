<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
	{
		label: 'Docs',
		to: '/',
		active: route.path.startsWith('/'),
	},
	{
		label: 'Components',
		to: '/',
		active: route.path.startsWith('/'),
	},
	{
		label: 'Figma',
		to: 'https://go.nuxt.com/figma-ui',
		target: '_blank',
		class: 'text-white',
	},
	{
		label: 'Releases',
		to: 'https://github.com/nuxt/ui/releases',
		target: '_blank',
		class: 'text-white',
	},
]);
</script>

<template>
	<UHeader
		title="Nuxt UI"
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
