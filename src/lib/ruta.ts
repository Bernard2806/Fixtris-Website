// El sitio vive bajo un subdirectorio en GitHub Pages (`base` en astro.config.mjs).
// Toda ruta interna (archivos de /public, enlaces entre páginas) tiene que pasar por acá.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');

export function ruta(camino = '/') {
	return `${base}/${camino.replace(/^\//, '')}`;
}
