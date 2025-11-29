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
					links: z.array(
						z.object({
							label: z.string(),
							to: z.string(),
							icon: z.string().optional(),
							trailingIcon: z.string().optional(),
							color: z.string().optional(),
							variant: z.string().optional(),
							size: z.string().optional(),
						}),
					),
				}),
				sections: z.array(
					z.object({
						id: z.string(),
						title: z.string(),
						headline: z.string(),
						description: z.string(),
						orientation: z.string(),
						component: z.string(),
						style: z.string().optional(),
						ui: z.object({
							root: z.string().optional(),
							container: z.string().optional(),
						}).optional(),
					}),
				),
			}),
		}),
		content: defineCollection({
			type: 'data',
			source: '**/content.yaml',
			schema: z.object({
				sections: z.array(
					z.object({
						id: z.string(),
						items: z.array(
							z.object({
								label: z.string().optional(),
								content: z.string().optional(),
								title: z.string().optional(),
								description: z.string().optional(),
								media: z.string().optional(),
							}),
						),
					}),
				),
			}),
		}),
	},
});
