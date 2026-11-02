// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	// TODO: reemplazar por el dominio real cuando esté publicado
	site: 'https://fixtris.com',
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
});
