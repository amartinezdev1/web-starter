import { defineAsyncComponent, type Component } from 'vue';

const components = import.meta.glob<Component>('~/components/**/*.vue');

export function loaderComponent(name: string) {
	for (const path in components) {
		const file = path.split('/').pop()?.replace('.vue', '');

		if (file === name) {
			const loader = components[path];
			if (!loader) continue;

			return defineAsyncComponent(loader);
		}
	}

	console.warn(`⚠ Componente no encontrado: ${name}`);
	return null;
}
