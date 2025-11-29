export const useContentSection = (id: string) => {
	const { data: content } = useAsyncData('content', () => queryCollection('content').first());
	return computed(() => content.value?.sections.find(section => section.id === id));
};
