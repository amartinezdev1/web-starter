<template>
	<div>
		<h1>{{ props.error?.statusCode }}</h1>
		<NuxtLink to="/">Go back home</NuxtLink>
	</div>
</template>

<script setup lang="ts">
import type { NuxtError } from 'nuxt/app';

const props = defineProps<{
	error: NuxtError,
}>();
</script>
