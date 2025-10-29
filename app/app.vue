<template>
	<div>
		<NuxtLayout>
			<NuxtPage />
		</NuxtLayout>
	</div>
</template>

<script setup lang="ts">
const appConfig = useAppConfig()
</script>

<style lang="scss" scoped>
@use '@/assets/css/main.css';
</style>