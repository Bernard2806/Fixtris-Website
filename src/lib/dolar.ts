// Cotización del dólar bolsa (MEP) para pasar a pesos los precios guardados en USD.
// Se consulta al compilar el sitio; el workflow de publicación recompila todos los días.
import { cotizacionDeRespaldo } from '../data/site';

const API = 'https://monedapi.ar/api/v2/usd/bolsa';

export interface Cotizacion {
	venta: number;
	fecha: Date;
}

let cache: Promise<Cotizacion> | undefined;

async function consultar(): Promise<Cotizacion> {
	try {
		const respuesta = await fetch(API, { signal: AbortSignal.timeout(8000) });
		if (!respuesta.ok) throw new Error(`HTTP ${respuesta.status}`);
		const datos = await respuesta.json();
		const venta = Number(datos.sell);
		if (!Number.isFinite(venta) || venta <= 0) throw new Error('cotización inválida');
		return { venta, fecha: new Date(datos.updatedAt) };
	} catch (error) {
		// Si la API no responde, el sitio se publica igual con la última cotización conocida
		console.warn(`[dolar] No se pudo consultar ${API} (${error}). Uso la cotización de respaldo.`);
		return { venta: cotizacionDeRespaldo.venta, fecha: new Date(cotizacionDeRespaldo.fecha) };
	}
}

/** Cotización del dólar MEP. Se consulta una sola vez por compilación. */
export function obtenerCotizacion(): Promise<Cotizacion> {
	cache ??= consultar();
	return cache;
}

/** Pasa un precio en USD a pesos, redondeado a los mil. */
export function aPesos(usd: number, cotizacion: Cotizacion): number {
	return Math.round((usd * cotizacion.venta) / 1000) * 1000;
}

const formatoPesos = new Intl.NumberFormat('es-AR', {
	style: 'currency',
	currency: 'ARS',
	maximumFractionDigits: 0,
});

export function formatearPesos(pesos: number): string {
	return formatoPesos.format(pesos);
}
