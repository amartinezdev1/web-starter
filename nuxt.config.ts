// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
	modules: ['@nuxt/ui', '@nuxt/eslint'],
	components: [
		{
			path: '~/components',
			pathPrefix: false,
		},
		{
			path: '~/layouts',
			pathPrefix: false,
		},
	],
	devtools: { enabled: false },
	css: ['@/assets/css/main.css'],
	compatibilityDate: '2025-07-15',
	vite: {
		css: {
			preprocessorOptions: {
				scss: {
					additionalData: '@use "@/assets/css/main.css" as *;',
				},
			},
		},
	},
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
			},
		},
	},
});
