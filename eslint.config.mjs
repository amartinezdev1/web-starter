// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
	rules: {
		indent: ['error', 'tab', { SwitchCase: 1, ignoredNodes: ['TemplateLiteral'] }],
	},
});
