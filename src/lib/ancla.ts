// Ancla de cada categoría de la lista de precios, para enlazarla desde otras secciones.
// "Notebooks y netbooks" → "precios-notebooks-y-netbooks"
export function anclaPrecios(categoria: string) {
	const slug = categoria
		.normalize('NFD')
		.replace(/[̀-ͯ]/g, '')
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, '-')
		.replace(/^-|-$/g, '');
	return `precios-${slug}`;
}
