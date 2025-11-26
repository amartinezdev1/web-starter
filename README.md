# Web Starter — Nuxt Minimal Starter

[![Status](https://img.shields.io/badge/status-active-brightgreen.svg)]()
[![Nuxt](https://img.shields.io/badge/nuxt-4-blue)]()
[![Vue](https://img.shields.io/badge/vue-3.4-brightgreen)]()
[![TypeScript](https://img.shields.io/badge/typescript-4.9-blue)]()
[![License](https://img.shields.io/badge/license-MIT-lightgrey)]()

Un starter moderno para landing y demos construido con Nuxt 4, Tailwind CSS y TypeScript.  
Diseñado para ser ligero, escalable y fácil de modificar: componentes reutilizables, carga diferida de secciones y contenido gestionado con `@nuxt/content`.

---

## 📌 En este README

- Qué es este proyecto
- Tecnologías principales
- Cómo empezar (desarrollo y producción)
- Estructura del repositorio
- Cómo añadir o editar contenido (nuxt/content)
- Estilo y componentes
- Calidad, tests y CI
- Contribución y contacto

---

## ✨ Resumen

Web Starter es una base para construir landing pages, demos o microsites, con foco en:
- Componentes separados por responsabilidad (ui, sections, common)
- Contenido centralizado (`/content`) para textos y secciones
- Performance: hydration-on-visible, lazy loading de componentes pesados
- Buenas prácticas: TypeScript, ESLint, PNPM

---

## 🚀 Tecnologías

- Nuxt 4
- Vue 3 (Script Setup + Composition API)
- TypeScript
- Tailwind CSS
- @nuxt/content (gestión de contenido)
- PNPM (gestor de paquetes)
- Swiper (carrusel)
- Husky / lint-staged (opcional para pre-commit)
- Vitest / Playwright (recomendado para tests)

---

## 🛠️ Comenzar (local)

Requisitos:
- Node 18+ (o la versión LTS que prefieras)
- PNPM instalado globalmente

Clonar y ejecutar:

```bash
git clone https://github.com/amartinezdev1/web-starter.git
cd web-starter
pnpm install
pnpm dev
```

Scripts útiles (package.json):

- `pnpm dev` — servidor de desarrollo
- `pnpm build` — construir para producción
- `pnpm preview` — previsualizar build local
- `pnpm lint` — ejecutar ESLint
- `pnpm type-check` — chequeo de tipos
- `pnpm test` — ejecutar tests (si se configuran)

---

## 📁 Estructura recomendada (resumen)

- /app
  - /components
    - /ui — componentes atómicos (buttons, badges, hero)
    - /sections — agrupaciones de UI para secciones del landing
    - /common — logos, headers, footers
  - /pages — páginas (index.vue → consume content/)
- /content — archivos `.md`, `.yml`, `.json` con el contenido editable
- /public — assets públicos (imágenes, favicons)
- /assets — CSS global, fuentes, variables
- nuxt.config.ts — configuración Nuxt y módulos
- tailwind.config.ts — tokens y personalización de utilidades
- app/config — (opcional) styles.config.ts y tokens TS

---

## 🧭 Contenido con @nuxt/content

Recomendación práctica para tu repo:
- Usa `.md` para páginas ricas (artículos, secciones con mucho texto)
- Usa `.yml` para listas/colecciones (features, faqs, cards)
- Mantén `content/index.md` (frontmatter con `hero` y `sections`) como punto de entrada, y separa por archivos cuando crezcan las secciones.

Ejemplo: `content/index.md` tiene frontmatter con `hero` y `sections`. En `app/pages/index.vue` usa:

```ts
import { queryContent } from '#imports';

const { data: home } = await useAsyncData('landing-home', () =>
  queryContent('/').findOne()
);
```

Luego mapea `section.component` a tus componentes reales y renderiza dinámicamente.

---

## 🎨 Estilos y diseño

Recomendado:
- Centralizar tokens en `app/assets/css/main.css` (CSS variables) y mapear a Tailwind con `tailwind.config.ts`:
  - Variables: `--ui-card-bg`, `--ui-text`, `--ui-radius-4xl`, etc.
  - Extender Tailwind colors con `var(--...)` para eliminar warnings.
- Crear clases reutilizables en `@layer components`, por ejemplo:
  - `.ui-text-body`, `.ui-heading-md`, `.card-base`, `.btn-ghost`
- Opcional: `app/config/styles.config.ts` + `useStyles()` composable para autocompletado en TS.

---

## ✅ Calidad: tests, lint y CI

Prioridad alta:
- Añadir workflow de GitHub Actions para:
  - pnpm install
  - pnpm lint
  - pnpm type-check
  - pnpm build
- Añadir Husky + lint-staged para bloquear commits con errores:
  - `pnpm add -D husky lint-staged`
  - Configura pre-commit para correr eslint y formateo.
- Tests:
  - Vitest + @vue/test-utils para unit tests.
  - Playwright o Cypress para 1 E2E (verificar render del hero y secciones principales).

---

## 🔁 PRs, convenciones y branching

Sugerencia simple:
- Rama principal: `main`
- Desarrollo: usar `dev` o feature branches `feature/<nombre>`
- Commits: usar Conventional Commits (`feat:`, `fix:`, `refactor:`)
- PR template: título + descripción + checklist (lint, tests, captura)

---

## 🧩 Cómo añadir una nueva sección (rápido)

1. Añadir la data en `content/`:
   - `content/landing/my-section.yml` o añadir entrada en `content/index.md`
2. Crear un componente en `app/components/sections/MySection.vue`
3. Registrar o mapear el nombre en `index.vue` para render dinámico:
   - `componentsMap['MySection'] = MySection`
4. Deploy: prueba localmente y abre PR.

---
- Añadir plantillas: `.github/workflows/ci.yml` y `CONTRIBUTING.md`.
- Implementar una propuesta de `styles.config.ts` + `useStyles()` y refactor de 1 componente como ejemplo.
- Migrar `content/index.md` a un set de archivos (hero + sections) y actualizar `app/pages/index.vue`.

Dime cuál de estas acciones quieres que realice y lo creo como PR en tu repo.
