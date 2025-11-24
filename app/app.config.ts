export default defineAppConfig({
	title: 'Web Starter',
	theme: {
		dark: true,
	},
	ui: {
		pageHero: {
			slots: {
				headline: 'w-fit px-2 py-1 mx-auto text-sm font-medium border border-white rounded-lg',
				title: 'max-w-xl mx-auto text-4xl lg:text-7xl font-medium text-pretty tracking-tight',
				description: 'max-w-lg mx-auto text-white text-base text-center md:text-xl font-medium leading-relaxed',
			},
		},
		pageSection: {
			slots: {
				headline: 'w-fit px-2 py-1 mx-auto text-sm font-medium border border-white rounded-lg',
				title: 'max-w-xl mx-auto text-4xl lg:text-6xl font-medium text-pretty tracking-tight',
				description: 'max-w-lg mx-auto text-white text-base text-center md:text-xl font-medium leading-relaxed',
			},
		},
	},
});
