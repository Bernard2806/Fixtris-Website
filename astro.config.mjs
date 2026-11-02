// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// Publicado en GitHub Pages: https://bernard2806.github.io/Fixtris-Website/
	// Si más adelante se usa un dominio propio, cambiar `site` por ese dominio y quitar `base`.
	site: 'https://bernard2806.github.io',
	base: '/Fixtris-Website',
	// GitHub Pages sirve cada página como carpeta con barra final: evita URLs duplicadas
	trailingSlash: 'always',

	fonts: [
		{
			// Tipografía de títulos del manual de marca
			name: 'Quicksand',
			cssVariable: '--font-quicksand',
			provider: fontProviders.google(),
			weights: [500, 700],
			styles: ['normal'],
			subsets: ['latin', 'latin-ext'],
			fallbacks: ['system-ui', 'sans-serif'],
		},
	],

	integrations: [sitemap()],
});
