// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
	modules: ['@nuxt/content', '@nuxt/ui', '@nuxt/eslint'],
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
	devtools: { enabled: true },
	css: ['@/assets/css/main.css'],
	ui: {
		colorMode: false,
	},
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
