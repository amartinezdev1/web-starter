<template>
	<UHeader>
		<template #left>
			<NuxtLink>
				<AppLogo class="w-auto h-6 shrink-0" />
			</NuxtLink>
			<TemplateMenu />
		</template>

		<UNavigationMenu
			:items="items"
			variant="link"
		/>

		<template #right>
			<UColorModeButton />
			<UButton
				icon="i-lucide-log-in"
				color="neutral"
				variant="ghost"
				class="lg:hidden"
			/>
			<UButton
				class="font-bold rounded-full"
				color="neutral"
			>
				Book an appointment
			</UButton>
		</template>

		<template #body>
			<UNavigationMenu
				:items="items"
				orientation="vertical"
				class="-mx-2.5"
			/>
			<UButton
				label="Sign in"
				color="neutral"
				variant="subtle"
				block
				class="mb-3"
			/>
			<UButton
				label="Sign up"
				color="neutral"
				block
			/>
		</template>
	</UHeader>
</template>

<script setup lang="ts">
const route = useRoute();

const items = computed(() => [
	{
		label: 'Home',
		to: '/',
		active: route.path.startsWith('/docs'),
	},
	{
		label: 'About',
		to: '/',
		active: route.path.startsWith('/pricing'),
	},
	{
		label: 'Pages',
		to: '/',
		active: route.path.startsWith('/blog'),
	},
	{
		label: 'Pricing',
		to: '/',
		active: route.path.startsWith('/changelog'),
	},
	{
		label: 'Cart',
		to: '/',
		active: route.path.startsWith('/changelog'),
	},
]);
</script>
