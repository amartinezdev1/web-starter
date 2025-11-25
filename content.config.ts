import { defineContentConfig, defineCollection, z } from '@nuxt/content';

export default defineContentConfig({
	collections: {
		landing: defineCollection({
			type: 'data',
			source: '**/index.md',
			schema: z.object({
				hero: z.object({
					id: z.string(),
					headline: z.string(),
					title: z.string(),
					description: z.string(),
					image: z.string().optional(),
				}),
				sections: z.array(
					z.object({
						id: z.string(),
						title: z.string(),
						headline: z.string(),
						description: z.string(),
						orientation: z.string(),
						component: z.string(),
						ui: z.object({
							root: z.string().optional(),
							container: z.string().optional(),
						}).optional(),
					}),
				),
			}),
		}),
	},
});
