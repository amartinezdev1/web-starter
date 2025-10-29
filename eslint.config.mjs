// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs';

export default withNuxt({
	languageOptions: {
		parser: require.resolve('vue-eslint-parser'),
		parserOptions: {
			parser: require.resolve('@typescript-eslint/parser'),
			extraFileExtensions: ['.vue'],
			ecmaVersion: 'latest',
			sourceType: 'module',
		},
	},
	rules: {
		indent: ['error', 'tab', { SwitchCase: 1, ignoredNodes: ['TemplateLiteral'] }],
	},
});
