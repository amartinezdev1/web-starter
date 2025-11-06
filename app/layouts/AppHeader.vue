<template>
	<UHeader title="Nuxt UI">
		<UNavigationMenu :items="items" />

		<template #right>
			<UColorModeButton />

			<UTooltip
				text="Open on GitHub"
				:kbds="['meta', 'G']"
			>
				<UButton
					color="neutral"
					variant="ghost"
					to="https://github.com/nuxt/ui"
					target="_blank"
					icon="i-simple-icons-github"
					aria-label="GitHub"
				/>
			</UTooltip>
		</template>

		<template #body>
			<UNavigationMenu
				:items="items"
				orientation="vertical"
				class="-mx-2.5"
			/>
		</template>
	</UHeader>
</template>

<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const route = useRoute();

const items = computed<NavigationMenuItem[]>(() => [
	{
		label: 'Docs',
		to: '/',
		icon: 'i-lucide-book-open',
		active: route.path.startsWith('/'),
	},
	{
		label: 'Components',
		to: '/',
		icon: 'i-lucide-box',
		active: route.path.startsWith('/'),
	},
	{
		label: 'Figma',
		icon: 'i-simple-icons-figma',
		to: 'https://go.nuxt.com/figma-ui',
		target: '_blank',
	},
	{
		label: 'Releases',
		icon: 'i-lucide-rocket',
		to: 'https://github.com/nuxt/ui/releases',
		target: '_blank',
	},
]);
</script>
