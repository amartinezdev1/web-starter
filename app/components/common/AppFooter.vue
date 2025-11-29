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
	<UFooter
		id="footer"
		class="bg-[#171717]"
	>
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
				icon="i-simple-icons-instagram"
				color="neutral"
				variant="ghost"
				to="https://www.instagram.com/bitflow.pa/"
				target="_blank"
				aria-label="Instagram"
			/>
			<UButton
				icon="i-simple-icons-whatsapp"
				color="neutral"
				variant="ghost"
				to="https://wa.me/50764099706"
				target="_blank"
				aria-label="WhatsApp"
			/>
			<UButton
				icon="i-simple-icons-linkedin"
				color="neutral"
				variant="ghost"
				to="https://www.linkedin.com/in/bitflowpa/"
				target="_blank"
				aria-label="LinkedIn"
			/>
		</template>
	</UFooter>
</template>
