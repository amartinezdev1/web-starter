export default defineAppConfig({
	title: 'Web Starter',
	theme: {
		dark: true,
		color: {
			primary: '#1976D2',
		},
	},
	ui: {
		container: {
			base: 'w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8',
		},
		header: {
			slots: {
				root: 'bg-default/75 backdrop-blur border-0 h-(--ui-header-height) sticky top-0 z-50',
			},
		},
	},
});
