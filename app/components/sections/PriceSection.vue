<script setup lang="ts">
const props = defineProps<{
	class?: string;
}>();
</script>

<template>
	<ClientOnly>
		<div
			class="grid xl:grid-cols-2 gap-4 w-full"
			:class="props.class"
		>
			<div class="bg-[#171717] p-8 md:p-14 rounded-4xl flex flex-col gap-10 items-start">
				<UBadge
					size="lg"
					label="Plan Starter"
					class="bg-emerald-600 text-white"
				/>
				<div class="flex flex-col gap-3">
					<h3 class="text-2xl font-medium tracking-tight">
						Posicionamiento y Conversión Rápida
					</h3>
					<p class="text-base font-medium leading-relaxed">
						Convierte tu web en un sitio profesional, veloz y preparado para captar clientes desde el primer día. Este plan te da presencia, autoridad y estructura para crecer sin depender de anuncios constantes.
					</p>
				</div>
				<UButton
					color="neutral"
					variant="outline"
					class="bg-white/10 hover:bg-white/15 hover:text-white active:text-black font-medium text-md h-12 px-4 cursor-pointer rounded-md transition-all duration-200 ring-0"
				>
					Iniciar mi posicionamiento
				</UButton>
			</div>
			<div class="border border-zinc-800 p-8 md:p-14 rounded-4xl flex flex-col gap-10 items-start">
				<UBadge
					size="lg"
					color="neutral"
					variant="outline"
					class="bg-black ring-0 border border-white"
				>
					Plan Growth
				</UBadge>
				<div class="flex flex-col gap-3">
					<h3 class="text-2xl font-medium tracking-tight">
						E-commerce y Eficiencia Operacional
					</h3>
					<p class="text-base font-medium leading-relaxed">
						Pensado para empresas que ya venden o están listas para escalar. Convierte tu web en una máquina de ingresos y optimiza tu operación interna para liberar tiempo, reducir errores y aumentar rentabilidad.
					</p>
				</div>
				<UButton
					class="text-md font-medium h-12 px-4 cursor-pointer rounded-md"
				>
					Escalar mi negocio
				</UButton>
			</div>
			<div class="border border-zinc-800 relative xl:col-span-2 p-10 md:p-16 rounded-4xl flex flex-col gap-10 items-start">
				<UBadge
					size="lg"
					label="Plan Enterprise"
					class="bg-indigo-600 text-white"
				/>
				<div class="flex flex-col gap-3 lg:max-w-sm xl:max-w-xl">
					<h3 class="text-2xl font-medium tracking-tight">
						Innovación y Soluciones a Medida
					</h3>
					<p class="text-base font-medium leading-relaxed">
						El plan para empresas que necesitan tecnología a la medida: sistemas complejos, IA aplicada, desarrollo propietario y escalabilidad real. Innova, optimiza y domina.
					</p>
				</div>
				<UButton
					color="neutral"
					variant="outline"
					size="md"
					class="bg-white/10 hover:bg-white/15 hover:text-white active:text-black font-medium text-md h-12 px-4 cursor-pointer rounded-md transition-all duration-200 ring-0"
				>
					Crear mi solución a medida
				</UButton>
				<div class="absolute right-4 top-4 bottom-4 left-[calc(50%+16px)] rounded-2xl overflow-clip hidden lg:flex">
					<img
						loading="lazy"
						width="632"
						height="348"
						decoding="async"
						class="w-full h-full object-cover"
						src="/education-research.avif"
						style="color: transparent;"
						alt="Plan Enterprise Multiplatform"
					>
				</div>
			</div>
		</div>
	</ClientOnly>
</template>
