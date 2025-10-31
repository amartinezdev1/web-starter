<template>
	<div>
		<AppHeader />
		<UMain>
			<slot />
		</UMain>
	</div>
</template>

<script setup lang="ts">
import AppHeader from './AppHeader.vue';
</script>
