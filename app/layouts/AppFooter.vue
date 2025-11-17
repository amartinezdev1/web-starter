<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui';

const items: NavigationMenuItem[] = [
	{
		label: 'Figma Kit',
		to: 'https://go.nuxt.com/figma-ui',
		class: 'text-white',
	},
	{
		label: 'Playground',
		to: 'https://stackblitz.com/edit/nuxt-ui',
		class: 'text-white',
	},
	{
		label: 'Releases',
		to: 'https://github.com/nuxt/ui/releases',
		class: 'text-white',
	},
];
</script>

<template>
	<UFooter class="bg-[#171717]">
		<template #left>
			<p class="text-white text-sm">
				Copyright © {{ new Date().getFullYear() }}
			</p>
		</template>

		<UNavigationMenu
			:items="items"
			variant="link"
		/>

		<template #right>
			<UButton
				icon="i-simple-icons-discord"
				color="neutral"
				variant="ghost"
				to="https://go.nuxt.com/discord"
				target="_blank"
				aria-label="Discord"
			/>
			<UButton
				icon="i-simple-icons-x"
				color="neutral"
				variant="ghost"
				to="https://go.nuxt.com/x"
				target="_blank"
				aria-label="X"
			/>
			<UButton
				icon="i-simple-icons-github"
				color="neutral"
				variant="ghost"
				to="https://github.com/nuxt/nuxt"
				target="_blank"
				aria-label="GitHub"
			/>
		</template>
	</UFooter>
</template>
