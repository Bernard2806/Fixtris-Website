// Datos del negocio. Todo el texto editable del sitio vive acá.

export const sitio = {
	nombre: 'Fixtris Computer',
	descripcion:
		'Reparación de computadoras, notebooks, consolas y hardware. Desbloqueo de netbooks del gobierno. Te decimos qué falla y cuánto sale antes de arreglar.',
	whatsapp: '5492346409771', // solo números, con código de país
	whatsappVisible: '+54 9 2346 40-9771',
	email: 'bgonzalezerramuspe2006@hotmail.com',
	horario: 'Lunes a viernes de 9 a 18 h, sábados de 9 a 13 h',
	zona: 'Chivilcoy, Buenos Aires',
};

// Otro emprendimiento: sección "MateLogic", por si alguien busca software a medida.
export const otroEmprendimiento = {
	nombre: 'MateLogic',
	url: 'https://mate-logic.tech/',
	titulo: '¿Necesitás software a medida?',
	texto:
		'También hacemos software. En MateLogic desarrollamos páginas web, apps para Android e iOS y programas de escritorio, para negocios de Chivilcoy y de cualquier lado.',
};

export function enlaceWhatsapp(texto = 'Hola Fixtris, quiero consultar por una reparación.') {
	return `https://wa.me/${sitio.whatsapp}?text=${encodeURIComponent(texto)}`;
}

// Cada fila del grid suma 6 columnas: cada fila es una línea completa.
// Si agregás o sacás un servicio, revisá que los anchos de cada fila sigan sumando 6.
// `precios` es la categoría de la lista de precios a la que lleva "Ver precios" (tiene que existir).
// Sin `precios`, el enlace lleva al comienzo de la sección de precios.
export const servicios = [
	// fila 1
	{
		titulo: 'Diagnóstico',
		texto: 'Encontramos qué falla y te pasamos el presupuesto antes de tocar nada.',
		ancho: 2,
		precios: 'Todos los equipos',
	},
	{
		titulo: 'Notebooks',
		texto: 'Pantallas, teclados, bisagras y baterías. Equipos que no encienden o se apagan solos.',
		ancho: 4,
		precios: 'Notebooks y netbooks',
	},
	// fila 2
	{
		titulo: 'Consolas',
		texto: 'PlayStation, Xbox y Nintendo: joysticks con drift, lectoras, fuentes y consolas que se recalientan.',
		ancho: 4,
		precios: 'Consolas',
	},
	{
		titulo: 'PC de escritorio',
		texto: 'Fuentes, placas de video, memorias y discos. Pantallazos azules y reinicios.',
		ancho: 2,
		precios: 'PC de escritorio',
	},
	// fila 3
	{
		titulo: 'Netbooks del gobierno',
		texto: 'Desbloqueamos netbooks de Conectar Igualdad y Juana Manso que quedaron trabadas, y las dejamos listas para usar.',
		ancho: 3,
		precios: 'Notebooks y netbooks',
	},
	{
		titulo: 'Limpieza y temperatura',
		texto: 'Limpieza interna, pasta térmica y ventiladores para el equipo que se calienta o hace ruido.',
		ancho: 3,
	},
	// fila 4
	{
		titulo: 'Mejoras',
		texto: 'Discos SSD, más memoria RAM y placas nuevas para que tu equipo rinda más sin cambiarlo entero.',
		ancho: 3,
		precios: 'Mejoras',
	},
	{
		titulo: 'Sistema y programas',
		texto: 'Windows o Linux, drivers, virus y programas que no andan.',
		ancho: 3,
		precios: 'Sistema y programas',
	},
	// fila 5
	{
		titulo: 'Recuperación de datos',
		texto: 'Intentamos rescatar fotos y archivos de discos dañados o borrados por error. Si no se recuperan, no se cobra.',
		ancho: 3,
		precios: 'Recuperación de datos',
	},
	{
		titulo: 'Armado a medida',
		texto: 'Te ayudamos a elegir las piezas y armamos la PC para lo que la vas a usar.',
		ancho: 3,
		precios: 'PC de escritorio',
	},
];

export const pasos = [
	{
		titulo: 'Nos contás qué pasa',
		texto: 'Por WhatsApp o en el taller. Con eso ya te decimos si conviene revisarla.',
	},
	{
		titulo: 'Diagnóstico y presupuesto',
		texto: 'Revisamos el equipo y te pasamos precio, plazo y forma de pago. No avanzamos sin tu OK.',
	},
	{
		titulo: 'Reparación',
		texto: 'Arreglamos o cambiamos lo que falla y probamos el equipo a fondo.',
	},
	{
		titulo: 'Retirás tu compu',
		texto: 'Con el detalle de lo que hicimos y la garantía por escrito.',
	},
];

// Precios guardados en dólares para no tener que actualizarlos con la inflación.
// En la página se muestran en pesos al dólar bolsa (MEP) del día, redondeados a los mil.
// Para cargar uno nuevo: precio en pesos ÷ dólar MEP de hoy (https://monedapi.ar/api/v2/usd/bolsa).
interface Precio {
	servicio: string;
	detalle?: string;
	usd: number;
}

// Agrupados por tipo de trabajo, sin repetir precios.
// El comentario de cada uno es lo que se cobra en pesos y el dólar MEP del día en que se cargó.
export const precios: { categoria: string; aclaracion?: string; items: Precio[] }[] = [
	{
		categoria: 'Todos los equipos',
		items: [
			{ servicio: 'Diagnóstico', usd: 6.37 }, // $10.000 al MEP de $1.570,87 (02/11/2026)
		],
	},
	{
		categoria: 'Notebooks y netbooks',
		aclaracion: 'En las reparaciones el precio es de mano de obra: el repuesto va aparte.',
		items: [
			{
				servicio: 'Desbloqueo de netbook del gobierno',
				detalle: 'Por BIOS. Conectar Igualdad y Juana Manso.',
				usd: 25.46, // $40.000 al MEP de $1.570,87 (02/11/2026)
			},
			{
				servicio: 'Mantenimiento de netbook del gobierno',
				detalle: 'Limpieza interna y pasta térmica.',
				usd: 19.1, // $30.000 al MEP de $1.570,87 (02/11/2026)
			},
			{
				servicio: 'Mantenimiento básico de notebook',
				detalle: 'Limpieza interna con pasta térmica estándar.',
				usd: 25.46, // $40.000 al MEP de $1.570,87 (02/11/2026)
			},
			{
				servicio: 'Mantenimiento pro de notebook',
				detalle: 'Limpieza interna con pasta térmica de alta calidad.',
				usd: 35.01, // $55.000 al MEP de $1.570,87 (02/11/2026)
			},
			{ servicio: 'Cambio de pantalla', usd: 15.91 }, // $25.000 al MEP de $1.570,87 (02/11/2026)
			{ servicio: 'Cambio de teclado', usd: 12.73 }, // $20.000 al MEP de $1.570,87 (02/11/2026)
			{ servicio: 'Cambio de batería', usd: 6.37 }, // $10.000 al MEP de $1.570,87 (02/11/2026)
			{ servicio: 'Reparación de bisagras o carcasa', usd: 19.1 }, // $30.000 al MEP de $1.570,87 (02/11/2026)
		],
	},
	{
		categoria: 'Consolas',
		aclaracion: 'En las reparaciones el precio es de mano de obra: el repuesto va aparte.',
		items: [
			{ servicio: 'Desatá tu PS3 (liberación)', usd: 25.46 }, // $40.000 al MEP de $1.570,87 (02/11/2026)
			{
				servicio: 'Mantenimiento PS3, PS4 o Xbox One',
				detalle: 'Limpieza interna y pasta térmica.',
				usd: 25.46, // $40.000 al MEP de $1.570,87 (02/11/2026)
			},
			{
				servicio: 'Mantenimiento PS5 o Xbox Series',
				detalle: 'Limpieza interna y renovación del compuesto térmico.',
				usd: 31.83, // $50.000 al MEP de $1.570,87 (02/11/2026)
			},
			{ servicio: 'Arreglo de drift de joystick', detalle: 'Por cada stick.', usd: 9.55 }, // $15.000 al MEP de $1.570,87 (02/11/2026)
			{ servicio: 'Reparación o cambio de lectora', usd: 15.91 }, // $25.000 al MEP de $1.570,87 (02/11/2026)
		],
	},
	{
		categoria: 'PC de escritorio',
		items: [
			{
				servicio: 'Mantenimiento básico',
				detalle: 'Limpieza interna con pasta térmica estándar.',
				usd: 19.1, // $30.000 al MEP de $1.570,87 (02/11/2026)
			},
			{
				servicio: 'Mantenimiento pro',
				detalle: 'Limpieza interna con pasta térmica de alta calidad, de marca reconocida y no genérica.',
				usd: 28.65, // $45.000 al MEP de $1.570,87 (02/11/2026)
			},
			{ servicio: 'Armado de PC completo', detalle: 'Con las piezas que ponés vos.', usd: 25.46 }, // $40.000 al MEP de $1.570,87 (02/11/2026)
			{
				servicio: 'Instalación de un componente',
				detalle: 'Placa de video, fuente, memoria o disco.',
				usd: 6.37, // $10.000 al MEP de $1.570,87 (02/11/2026)
			},
		],
	},
	{
		categoria: 'Sistema y programas',
		aclaracion: 'PC, notebooks y netbooks.',
		items: [
			{
				servicio: 'Formateo e instalación de Windows',
				detalle: 'Incluye un respaldo de tus archivos. Los programas no se respaldan: se vuelven a instalar.',
				usd: 12.73, // $20.000 al MEP de $1.570,87 (02/11/2026)
			},
			{ servicio: 'Instalación de Linux', usd: 12.73 }, // $20.000 al MEP de $1.570,87 (02/11/2026)
			{ servicio: 'Instalación de Office', usd: 6.37 }, // $10.000 al MEP de $1.570,87 (02/11/2026)
			{
				servicio: 'Optimización de Windows',
				detalle: 'Por software: programas que sobran, virus y arranque lento. No incluye limpieza interna.',
				usd: 6.37, // $10.000 al MEP de $1.570,87 (02/11/2026)
			},
		],
	},
	{
		categoria: 'Mejoras',
		aclaracion: 'PC, notebooks y netbooks. Las piezas las ponés vos.',
		items: [
			{
				servicio: 'Pasar el sistema a un SSD nuevo',
				detalle: 'Clonamos tu disco al SSD: queda todo como estaba, pero más rápido.',
				usd: 15.91, // $25.000 al MEP de $1.570,87 (02/11/2026)
			},
			{ servicio: 'Ampliación de memoria RAM', usd: 6.37 }, // $10.000 al MEP de $1.570,87 (02/11/2026)
		],
	},
	{
		categoria: 'Recuperación de datos',
		aclaracion: 'Si no se recuperan los datos, no se cobra.',
		items: [
			{
				servicio: 'Clonado de disco',
				detalle: 'Copia completa a un disco que ponés vos.',
				usd: 31.83, // $50.000 al MEP de $1.570,87 (02/11/2026)
			},
			{
				servicio: 'Respaldo de archivos',
				detalle: 'A un disco o pendrive que ponés vos, o en nuestra nube durante 7 días.',
				usd: 22.28, // $35.000 al MEP de $1.570,87 (02/11/2026)
			},
		],
	},
];

// Se usa solo si la API del dólar no responde al compilar el sitio.
export const cotizacionDeRespaldo = {
	venta: 1570.87,
	fecha: '2026-11-02T11:51:16-03:00',
};

// Sección "Precios y formas de pago". Según el trabajo se usa una de estas formas.
export const formasDePago = [
	{
		icono: 'banknotes',
		titulo: 'Seña del 50 %',
		texto: 'Pagás la mitad para que tomemos el trabajo y el resto cuando está terminado.',
	},
	{
		icono: 'check-circle',
		titulo: 'Todo al terminar',
		texto: 'Pagás el 100 % cuando te entregamos el equipo funcionando.',
	},
	{
		icono: 'shopping-cart',
		titulo: 'Repuestos por tu cuenta',
		texto: 'Te pasamos la lista de piezas: nos transferís el dinero o las comprás vos. El arreglo lo pagás al terminar.',
	},
] as const;

// Días desde que avisamos que el equipo está listo hasta considerarlo abandonado.
export const diasParaRetirar = 90;

export const compromiso = {
	titulo: 'Necesitamos compromiso de tu parte',
	texto: `No guardamos equipos a la espera. Si el trabajo lleva repuestos o tiempo, cobramos una parte antes de arrancar, y sin un acuerdo de pago no empezamos. Los equipos que no se retiran dentro de los ${diasParaRetirar} días del aviso se consideran abandonados.`,
};

// TODO: confirmar plazos y políticas antes de publicar.
export const preguntas = [
	{
		pregunta: '¿Cuánto sale revisar mi compu?',
		respuesta:
			'El diagnóstico tiene un costo fijo que se descuenta si hacés la reparación con nosotros. Lo encontrás en la sección de precios.',
	},
	{
		pregunta: '¿Cuánto tarda una reparación?',
		respuesta:
			'La mayoría están listas en 2 a 4 días hábiles. Si hay que pedir un repuesto, te avisamos el plazo antes de empezar.',
	},
	{
		pregunta: '¿Voy a perder mis archivos?',
		respuesta:
			'En una reparación normal, no: tus archivos quedan donde están. Si hay que formatear, el precio incluye un respaldo de tus archivos (no de los programas). Si el disco está dañado, te avisamos antes y vemos si conviene una recuperación de datos.',
	},
	{
		pregunta: '¿Desbloquean netbooks del gobierno?',
		respuesta:
			'Sí, es uno de los trabajos que más nos piden. Si tu netbook de Conectar Igualdad o Juana Manso quedó bloqueada, traela con su cargador y la dejamos funcionando.',
	},
	{
		pregunta: '¿Las reparaciones tienen garantía?',
		respuesta:
			'Sí. Cada trabajo sale con garantía por escrito sobre la mano de obra y los repuestos que colocamos.',
	},
	{
		pregunta: '¿Trabajan con todas las marcas?',
		respuesta:
			'Sí: notebooks, PC y consolas de cualquier marca, y también equipos armados. Si no podemos arreglarlo, te lo decimos en el diagnóstico.',
	},
	{
		pregunta: '¿Qué pasa si no retiro mi equipo?',
		respuesta: `Cuando el equipo está listo te avisamos. Si pasan ${diasParaRetirar} días desde ese aviso y no lo retirás ni nos escribís, lo consideramos abandonado y podemos disponer de él libremente. Antes borramos el disco por software, así tus archivos no quedan en ningún lado.`,
	},
];
