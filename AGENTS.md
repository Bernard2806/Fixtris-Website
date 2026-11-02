## Reglas del proyecto

Estas reglas son obligatorias para cualquier agente que trabaje en este repositorio.

### Gestor de paquetes: siempre pnpm

- Usar **siempre `pnpm`**. **Nunca `npm`** (ni `npx`, ni `yarn`).
- Instalar dependencias: `pnpm add <paquete>` / `pnpm add -D <paquete>`.
- Ejecutar binarios: `pnpm astro ...` o `pnpm exec ...` (en lugar de `npx`).
- No crear ni commitear `package-lock.json` ni `yarn.lock`: el único lockfile es `pnpm-lock.yaml`.

### Commits: Conventional Commits en español

- Formato: `tipo(ámbito): descripción` siguiendo [Conventional Commits](https://www.conventionalcommits.org/es/v1.0.0/).
- Tipos: `feat`, `fix`, `docs`, `style`, `refactor`, `perf`, `test`, `build`, `ci`, `chore`, `revert`.
- La descripción y el cuerpo van **en español**, en minúscula, en modo imperativo y sin punto final. Ejemplo: `feat(contacto): agregar botón flotante de WhatsApp`.
- Dividir el trabajo en **varios commits por unidad lógica** (un componente, una funcionalidad), no un commit gigante, en un orden en el que cada commit compile (`pnpm build`).

### Íconos

- Solo íconos de librerías: Heroicons (MIT) para la interfaz y Simple Icons (CC0) para logos de terceros, siempre a través de `src/components/Icono.astro` y con el mismo tamaño (`--tam-icono`).
- No dibujar íconos SVG a mano. Lo único dibujado a mano son los logos de la marca Fixtris.

### Diseño

- El sitio se consulta sobre todo desde el celular: diseñar mobile first y verificar en 360–412 px antes de dar algo por terminado.
- Respetar el manual de marca (`/home/bernardo/Desarrollo/Logo-Fixtris/`): paleta azul `#0aa3d3` y ámbar solo para acciones, Quicksand en títulos.
- Los textos y datos del negocio se editan en `src/data/site.ts`.

## Development

When starting the dev server, use background mode:

```
pnpm astro dev --background
```

Manage the background server with `pnpm astro dev stop`, `pnpm astro dev status`, and `pnpm astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
