<script setup lang="ts">
import { computed } from 'vue';
import type { NavigationMenuItem } from '@nuxt/ui';

const route = useRoute();
const items = computed<NavigationMenuItem[]>(() => [
	{
		label: 'Servicios',
		to: '/#services',
		active: route.path.startsWith('/'),
	},
	{
		label: 'Nosotros',
		to: '/#about',
		active: route.path.startsWith('/'),
	},
	{
		label: 'Soluciones',
		to: '/#solutions',
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
		id="header"
		title="EveryBytes"
		class="min-w-screen fixed border-0 bg-default/0"
		to="/"
	>
		<UNavigationMenu
			:items="items"
			variant="link"
			color="neutral"
		/>

		<template #right>
			<UButton
				icon="i-simple-icons-instagram"
				color="neutral"
				variant="ghost"
				to="https://www.instagram.com/every.bytes/"
				target="_blank"
				aria-label="Instagram"
			/>
		</template>

		<template #body>
			<UNavigationMenu
				:items="items"
				variant="link"
				color="neutral"
				orientation="vertical"
				class="-mx-2.5"
			/>
		</template>
	</UHeader>
</template>
