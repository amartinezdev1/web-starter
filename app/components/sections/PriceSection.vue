<script setup lang="ts">
const props = defineProps<{
	class?: string;
}>();
</script>

<template>
	<div
		class="grid xl:grid-cols-2 gap-6 w-full"
		:class="props.class"
	>
		<div class="bg-[#171717] p-8 md:p-14 rounded-4xl flex flex-col gap-10 items-start">
			<UBadge
				size="lg"
				label="Accepting requests"
				class="bg-emerald-600 text-white"
			/>
			<div class="flex flex-col">
				<h3 class="font-medium text-xl md:text-2xl tracking-tight">
					Custom pricing for the creative teams
				</h3>
				<p class="text-base md:text-xl font-medium  leading-relaxed text-muted-foreground">
					For brand teams making premium and ambitious content for global audiences.
				</p>
			</div>
			<UButton
				color="neutral"
				variant="outline"
				size="xl"
				class="bg-white/10 hover:bg-white/15 text-white/90 font-medium text-base md:text-lg h-12 px-4 cursor-pointer rounded-md transition-all duration-200 ring-0"
			>
				Book an intro
			</UButton>
		</div>
		<div class="border border-zinc-800 p-8 md:p-14 rounded-4xl flex flex-col gap-10 items-start">
			<UBadge
				size="lg"
				color="neutral"
				variant="outline"
				class="bg-black ring-0 border border-white"
			>
				Soon
			</UBadge>
			<div class="flex flex-col gap-2">
				<h3 class="font-medium text-xl md:text-2xl tracking-tight">
					Free & Starter
				</h3>
				<p class="text-base md:text-xl font-medium  leading-relaxed text-muted-foreground">
					For small teams, creators, and influencers working on the recurring projects.
				</p>
			</div>
			<UButton
				color="neutral"
				variant="solid"
				size="xl"
				class="font-medium text-base md:text-lg h-12 px-4 cursor-pointer rounded-md"
			>
				Join waitlist
			</UButton>
		</div>
		<div class="border border-zinc-800 relative xl:col-span-2 p-10 md:p-16 rounded-4xl flex flex-col gap-12 items-start">
			<UBadge
				size="lg"
				label="Accepting requests"
				class="bg-indigo-600 text-white"
			/>
			<div class="flex flex-col gap-2 -mt-4 md:-mt-2 lg:max-w-[400px] xl:max-w-[480px]">
				<h3 class="font-medium text-xl md:text-2xl tracking-tight">
					Kyoso for Education & Research
				</h3>
				<p class="text-base md:text-xl font-medium  leading-relaxed text-muted-foreground">
					For universities, think-tanks, and local education initiatives.
				</p>
			</div>
			<UButton
				color="neutral"
				variant="outline"
				size="xl"
				class="bg-white/10 hover:bg-white/15 text-white/90 font-medium text-base md:text-lg h-12 px-4 cursor-pointer rounded-md transition-all duration-200 ring-0"
			>
				Book an intro
			</UButton>
			<div class="absolute right-4 top-4 bottom-4 left-[calc(50%+16px)] rounded-2xl overflow-clip hidden lg:flex  ">
				<img
					loading="lazy"
					width="632"
					height="348"
					decoding="async"
					class="w-full h-full object-cover"
					src="/education-research.avif"
					style="color: transparent;"
				>
			</div>
		</div>
	</div>
</template>
